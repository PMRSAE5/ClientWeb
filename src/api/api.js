import axios from "axios";

// Base URL de l'API (Backend sur localhost:3001)
const API_BASE_URL = "http://localhost:3000";

// Création de l'instance axios
const api = axios.create({
  baseURL: API_BASE_URL,
});

/**
 * Fonction de login.
 *
 * @param {string} mail - L'adresse email de l'utilisateur.
 * @param {string} password - Le mot de passe de l'utilisateur.
 * @returns {Promise<Object>} La réponse de l'API.
 * @throws {Object} Une erreur si la requête échoue, contenant le message d'erreur ou une réponse de l'API.
 */
export const login = async (mail, password) => {
  try {
    console.log("Tentative de connexion à l'API avec :", { mail, password });
    
    // Envoi une requête POST pour se connecte avec le mail et le mot de passe
    const response = await api.post("/users/userLog", { mail, password });
    console.log("Réponse reçue de l'API :", response.data); // Ajoute ce log
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la requête à l'API :", error);

    if (error.response) {
      console.log(
        "Erreur réponse API :",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      // Si aucune réponse de l'API
      console.log("Erreur réseau : Aucune réponse reçue.");
    } else {
      console.log("Erreur inconnue :", error.message);
    }

    throw (
      error.response?.data || { message: "Erreur de connexion au serveur." }
    );
  }
};

/**
 * Fonction pour valider un token.
 *
 * @param {string} token - Le token à valider.
 * @returns {Promise<Object>} La réponse de l'API.
 * @throws {Object} Une erreur si la validation du token échoue.
 */
export const validateToken = async (token) => {
  try {
    // Envoie une requete post avec le token de validation
    const response = await axios.post("http://localhost:3000/users/validateToken", { token });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la validation du token :", error);
    throw error;
  }
};

/**
 * Fonction pour vérifier une réservation.
 *
 * @param {string} num_reservation - Le numéro de la réservation.
 * @param {string} base - La base liée à la réservation.
 * @returns {Promise<Object>} La réponse de l'API.
 * @throws {Object} Une erreur si la validation échoue.
 */
export const checkReservation = async (num_reservation, base) => {
  try {
    // Envoie une requete POST pour vérifier une réservation
    const response = await api.post("/traj/checkReservation", {
      num_reservation: num_reservation,
      base: base,
    });
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Erreur lors de la vérification de la réservation.",
      }
    );
  }
};

/**
 * Fonction de déconnexion.
 *
 * @returns {Promise<Object>} La réponse de l'API.
 * @throws {Object} Erreur lors de la deconnexion.
 */
export const logout = async () => {
  try {
    // Envoie une requête POST pour se déconnecter
    const response = await api.post("/users/logout");
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Erreur lors de la déconnexion." };
  }
};

/**
 * Fonction pour récupérer le profil de l'utilisateur.
 *
 * @returns {Promise<Object>} Les données du profil de l'utilisateur.
 * @throws {Object} Une erreur lors de la récupération.
 */
export const fetchUserProfile = async () => {
  try {
    // Envoie une requête GET pour récupérer le profil de l'utilisateur
    const response = await axios.get(`${API_BASE_URL}/users/profile`, {
      withCredentials: true, // Inclure les cookies pour la session
    });
    return response.data; // Retourne les données utilisateur
  } catch (error) {
    console.error("Erreur lors de la récupération du profil :", error);
    throw error;
  }
};

/**
 * Fonction pour mettre à jour le profil de l'utilisateur.
 *
 * @param {Object} updatedData - Les nouvelles données.
 * @returns {Promise<Object>} Les données mises à jour.
 * @throws {Object} Une erreur lors de la mise à jour.
 */
export const updateUserProfile = async (updatedData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/update`, updatedData, {
      withCredentials: true, // Inclut les cookies pour la session utilisateur
    });
    return response.data; // Retourne les données mises à jour
  } catch (error) {
    console.error("Erreur lors de la mise à jour du profil :", error);
    throw error;
  }
};
