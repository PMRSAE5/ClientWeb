import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Map, Marker, NavigationControl, FullscreenControl, Source, Layer } from 'react-map-gl';
import Supercluster from 'supercluster';
import Fuse from 'fuse.js';
import { lineString } from '@turf/turf';
import mapboxClient from '@mapbox/mapbox-sdk/services/directions';
import "mapbox-gl/dist/mapbox-gl.css";
import sncfData from './data/SNCF.json';
import ratpData from './data/RATP.json';


const directionsClient = mapboxClient({ 
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN || 'pk.eyJ1IjoidHJpYnVubmV4dXMiLCJhIjoiY200OG10bGk1MDFmcjJscjZwczV5MXByOSJ9.QjjFUOHEaNEUw2SfQjCGZw' 
});

// Configuration du clustering
const CLUSTER_RADIUS = 80;
const MAX_ZOOM = 18;
const INITIAL_ZOOM = 5.5;

// Configuration de la recherche floue
const fuseOptions = {
  keys: ['nom', 'stop_name'],
  threshold: 0.3,
  distance: 100
};

export default function Itinerary() {
  const [viewport, setViewport] = useState({
    latitude: 46.6031,
    longitude: 1.8883,
    zoom: INITIAL_ZOOM,
  });
  const [clusters, setClusters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedStation, setSelectedStation] = useState(null);
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [routeData, setRouteData] = useState(null);
  const [routeSteps, setRouteSteps] = useState([]);
  const [isRouting, setIsRouting] = useState(false);

  // Combinaison des données
  const combinedData = useMemo(() => {
    const sncf = sncfData.map(station => ({ ...station, type: 'SNCF' }));
    const ratp = ratpData.map(station => ({ ...station, type: 'RATP' }));
    return [...sncf, ...ratp];
  }, []);

  // Préparation des points pour Supercluster
  const points = useMemo(() => {
    return combinedData
      .filter(station => 
        (station.type === 'SNCF' && station.position_geographique) ||
        (station.type === 'RATP' && station.stop_point_geopoint)
      )
      .map(station => ({
        type: 'Feature',
        properties: {
          id: station.type === 'SNCF' ? station.codes_uic : station.stop_point_id,
          name: station.type === 'SNCF' ? station.nom : station.stop_name,
          type: station.type,
          original: station
        },
        geometry: {
          type: 'Point',
          coordinates: station.type === 'SNCF' 
            ? [station.position_geographique.lon, station.position_geographique.lat]
            : [station.stop_point_geopoint.lon, station.stop_point_geopoint.lat]
        }
      }));
  }, [combinedData]);

  // Initialisation du cluster
  const supercluster = useMemo(() => {
    const sc = new Supercluster({
      radius: CLUSTER_RADIUS,
      maxZoom: MAX_ZOOM
    });
    sc.load(points);
    return sc;
  }, [points]);

  // Mise à jour des clusters
  useEffect(() => {
    const bbox = [
      viewport.longitude - (0.5 / viewport.zoom),
      viewport.latitude - (0.2 / viewport.zoom),
      viewport.longitude + (0.5 / viewport.zoom),
      viewport.latitude + (0.2 / viewport.zoom)
    ];
    
    setClusters(supercluster.getClusters(bbox, Math.floor(viewport.zoom)));
  }, [viewport, supercluster]);

  // Recherche de stations
  const fuse = useMemo(() => new Fuse(combinedData, fuseOptions), [combinedData]);
  
  useEffect(() => {
    if (searchQuery.length > 1) {
      const results = fuse.search(searchQuery).map(r => r.item);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, fuse]);

  // Gestion du clic sur cluster
  const handleClusterClick = useCallback((cluster) => {
    const [longitude, latitude] = cluster.geometry.coordinates;
    
    setViewport({
      longitude,
      latitude,
      zoom: Math.min(viewport.zoom + 2, MAX_ZOOM),
      transitionDuration: 500
    });
  }, [viewport.zoom]);

  // Calcul de l'itinéraire
  const calculateRoute = useCallback(async () => {
    if (!startPoint || !endPoint) return;

    setIsRouting(true);
    try {
      const response = await directionsClient.getDirections({
        profile: 'driving-traffic',
        waypoints: [
          { coordinates: [startPoint.lon, startPoint.lat] },
          { coordinates: [endPoint.lon, endPoint.lat] }
        ],
        geometries: 'geojson',
        steps: true
      }).send();

      const route = response.body.routes[0];
      setRouteData(route.geometry);
      setRouteSteps(route.legs[0].steps);
    } catch (error) {
      console.error('Erreur de calcul d\'itinéraire:', error);
    }
    setIsRouting(false);
  }, [startPoint, endPoint]);

  // Rendu des marqueurs
  const renderMarkers = () => {
    return (
      <>
        {clusters.map(cluster => {
          const { geometry, properties } = cluster;
          const [longitude, latitude] = geometry.coordinates;
          const isCluster = properties.cluster;
          const isSelected = selectedStation?.codes_uic === properties.id || 
                            selectedStation?.stop_point_id === properties.id;
          const isRATP = properties.type === 'RATP';

          if (isCluster) {
            const pointCount = properties.point_count;
            const size = 30 + Math.log(pointCount) * 5;

            return (
              <Marker
                key={`cluster-${cluster.id}`}
                longitude={longitude}
                latitude={latitude}
              >
                <div
                  style={{
                    width: size,
                    height: size,
                    background: 'rgba(0, 150, 0, 0.6)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    border: '2px solid #fff',
                    fontSize: Math.min(14, size/3),
                    fontWeight: 'bold',
                    color: 'white'
                  }}
                  onClick={() => handleClusterClick(cluster)}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }

          return (
            <Marker
              key={properties.id}
              longitude={longitude}
              latitude={latitude}
            >
              <div
                style={{
                  width: isSelected ? 18 : 12,
                  height: isSelected ? 18 : 12,
                  background: isRATP 
                    ? (isSelected ? '#0000ff' : '#0000aa') 
                    : (isSelected ? '#ff0000' : '#00ff00'),
                  borderRadius: '50%',
                  cursor: 'pointer',
                  boxShadow: '0 0 5px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s'
                }}
                title={properties.name}
                onClick={() => setSelectedStation(properties.original)}
              />
            </Marker>
          );
        })}

        {/* Marqueurs de départ/arrivée */}
        {startPoint && (
          <Marker longitude={startPoint.lon} latitude={startPoint.lat}>
            <div style={{
              width: 20,
              height: 20,
              background: '#4CAF50',
              borderRadius: '50%',
              border: '2px solid white'
            }} />
          </Marker>
        )}

        {endPoint && (
          <Marker longitude={endPoint.lon} latitude={endPoint.lat}>
            <div style={{
              width: 20,
              height: 20,
              background: '#F44336',
              borderRadius: '50%',
              border: '2px solid white'
            }} />
          </Marker>
        )}
      </>
    );
  };

  // Rendu de l'itinéraire
  const renderRoute = () => {
    if (!routeData) return null;

    return (
      <Source id="route" type="geojson" data={lineString(routeData.coordinates)}>
        <Layer
          id="route"
          type="line"
          paint={{
            'line-color': '#3b9cff',
            'line-width': 4,
            'line-opacity': 0.75
          }}
        />
      </Source>
    );
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Panneau latéral */}
      <div style={{
        width: '350px',
        padding: '20px',
        backgroundColor: 'white',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <h2>Planificateur Multimodal</h2>

        {/* Sélection des points de départ/arrivée */}
        <div>
          <div style={{ marginBottom: '15px' }}>
            <h4>Départ</h4>
            <input
              type="text"
              placeholder="Choisir le départ..."
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
              onFocus={() => setSearchQuery('')}
              value={startPoint ? (startPoint.name || startPoint.nom || startPoint.stop_name) : ''}
              readOnly
            />
          </div>

          <div>
            <h4>Arrivée</h4>
            <input
              type="text"
              placeholder="Choisir la destination..."
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }}
              onFocus={() => setSearchQuery('')}
              value={endPoint ? (endPoint.name || endPoint.nom || endPoint.stop_name) : ''}
              readOnly
            />
          </div>

          <button 
            onClick={calculateRoute}
            disabled={!startPoint || !endPoint || isRouting}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            {isRouting ? 'Calcul en cours...' : 'Calculer l\'itinéraire'}
          </button>
        </div>

        {/* Affichage des étapes */}
        {routeSteps.length > 0 && (
          <div>
            <h3>Instructions :</h3>
            <div style={{ marginTop: '10px' }}>
              {routeSteps.map((step, index) => (
                <div key={index} style={{
                  padding: '10px',
                  margin: '5px 0',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '4px'
                }}>
                  {step.maneuver.instruction}
                  <div style={{ color: '#666', fontSize: '0.9em' }}>
                    Distance: {(step.distance / 1000).toFixed(1)} km
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recherche de stations */}
        <div>
          <h4>Rechercher une station</h4>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher une station..."
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />

          {searchResults.slice(0, 5).map(station => (
            <div
              key={station.type === 'SNCF' ? station.codes_uic : station.stop_point_id}
              style={{
                padding: '8px',
                margin: '4px 0',
                backgroundColor: selectedStation?.codes_uic === station.codes_uic || 
                               selectedStation?.stop_point_id === station.stop_point_id
                               ? '#f0f0f0' : 'white',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onClick={() => {
                setSelectedStation(station);
                const coords = station.type === 'SNCF' 
                  ? station.position_geographique 
                  : station.stop_point_geopoint;
                setViewport({
                  longitude: coords.lon,
                  latitude: coords.lat,
                  zoom: 14,
                  transitionDuration: 1000
                });
              }}
            >
              <div>{station.type === 'SNCF' ? station.nom : station.stop_name}</div>
              <small style={{ color: '#666' }}>
                {station.type === 'SNCF' ? 'Gare SNCF' : 'Station RATP'}
              </small>
            </div>
          ))}
        </div>
      </div>

      {/* Carte */}
      <div style={{ flexGrow: 1, position: 'relative' }}>
        <Map
          {...viewport}
          onMove={(evt) => setViewport(evt.viewState)}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
          <NavigationControl position="top-left" />
          <FullscreenControl position="top-left" />
          {renderMarkers()}
          {renderRoute()}
        </Map>
      </div>
    </div>
  );
}