import React, {useState} from "react";
import { Link } from "react-router-dom";
import QuestionIcon from "../../images/question.png";
import AppelIcon from "../../images/appel.png";
import PMRIllustration from "../../images/pmr-illustration-help.jpg";
import IconMenuDeroulantHelp from "../../images/fleche-faq-help.png";

const Help = () => {
  // États pour gérer les menus déroulants
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };
  
  return (
    <div className="bg-white-100 min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-10">
        <section className="bg-white p-6 rounded-lg shadow-md border border-black">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Reçois de l'aide pour tes réservations
            </h1>
            <Link to="/login">
            <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600">
              Se connecter
            </button>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-8">
        <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-bold text-gray-800">F.A.Q</h2>
            <img
              src={QuestionIcon}
              alt="Question Icon"
              className="h-6 w-6 hover:scale-110 transition-transform"
            />
            <img
              src={AppelIcon}
              alt="Appel Icon"
              className="h-6 w-6 hover:scale-110 transition-transform"
            />
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md mt-3">
            <p className="text-gray-700 mb-3">Questions du moment :</p>
            <ul className="space-y-1 text-gray-600">
              <li>• Comment déclarer la perte d'un billet avec mon compte ?</li>
              <li>• Comment faire si je voyage accompagné d'un proche ?</li>
            </ul>
          </div>
        </section>

        {/* Dropdowns */}
        <section className="mt-8 grid grid-cols-2 gap-4">
          {/* Réservations */}
          <div className="bg-white p-4 rounded shadow-md border border-black">
            <div
              onClick={() => handleDropdown("reservations")}
              className="flex justify-between items-center cursor-pointer"
            >
              <span className="text-gray-700 font-medium">Réservations</span>
              <img
                src={IconMenuDeroulantHelp}
                alt="Dropdown Icon"
                className={`h-6 w-6 transform transition-transform ${
                  openDropdown === "reservations" ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {openDropdown === "reservations" && (
              <div className="mt-2 p-2.5 border-t border-gray-300">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Modifier une réservation existante</li>
                  <li>• Annuler une réservation</li>
                  <li>• Vérifier l'état d'une réservation</li>
                </ul>
              </div>
            )}
          </div>

          {/* Accompagnateur */}
          <div className="bg-white p-4 rounded shadow-md border border-black">
            <div
              onClick={() => handleDropdown("accompagnateur")}
              className="flex justify-between items-center cursor-pointer"
            >
              <span className="text-gray-700 font-medium">Accompagnateur</span>
              <img
                src={IconMenuDeroulantHelp}
                alt="Dropdown Icon"
                className={`h-6 w-6 transform transition-transform ${
                  openDropdown === "accompagnateur" ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {openDropdown === "accompagnateur" && (
              <div className="mt-2 p-2.5 border-t border-gray-300">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Ajouter un accompagnateur à votre réservation</li>
                  <li>• Modifier les informations de l'accompagnateur</li>
                  <li>• Supprimer un accompagnateur</li>
                </ul>
              </div>
            )}
          </div>

          {/* Remboursement */}
          <div className="bg-white p-4 rounded shadow-md border border-black">
            <div
              onClick={() => handleDropdown("remboursement")}
              className="flex justify-between items-center cursor-pointer"
            >
              <span className="text-gray-700 font-medium">Remboursement</span>
              <img
                src={IconMenuDeroulantHelp}
                alt="Dropdown Icon"
                className={`h-6 w-6 transform transition-transform ${
                  openDropdown === "remboursement" ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {openDropdown === "remboursement" && (
              <div className="mt-2 p-2.5 border-t border-gray-300">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Demander un remboursement</li>
                  <li>• Vérifier le statut d'un remboursement</li>
                  <li>• Conditions de remboursement</li>
                </ul>
              </div>
            )}
          </div>

          {/* Données personnelles */}
          <div className="bg-white p-4 rounded shadow-md border border-black">
            <div
              onClick={() => handleDropdown("donnees-personnelles")}
              className="flex justify-between items-center cursor-pointer"
            >
              <span className="text-gray-700 font-medium">
                Données personnelles
              </span>
              <img
                src={IconMenuDeroulantHelp}
                alt="Dropdown Icon"
                className={`h-6 w-6 transform transition-transform ${
                  openDropdown === "donnees-personnelles" ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {openDropdown === "donnees-personnelles" && (
              <div className="mt-2 p-2.5 border-t border-gray-300">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Modifier vos données personnelles</li>
                  <li>• Supprimer votre compte</li>
                  <li>• Consulter les politiques de confidentialité</li>
                </ul>
              </div>
            )}
          </div>
        </section>

        {/*  PMR Illustration */}
        <section className="mt-10 text-center">
          <img
            src={PMRIllustration}
            alt=" PMR Illustration"
            className="mx-auto w-full max-w-3xl transform hover:scale-105 hover:rotate-1 hover:shadow-2xl transition-all duration-500 ease-in-out"
            />
        </section>
      </main>
    </div>
  );
};
export default Help;