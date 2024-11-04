import React, { useState } from "react";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    num: "",
    mail: "",
    handicap: "",
    civilite: "",
    birth: "",
    password: "",
    contact_mail: "",
    contact_num: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/users/userAdd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Client ajouté avec succès");
      } else {
        alert(`Erreur: ${result.error}`);
      }
    } catch (error) {
      alert("Erreur lors de l'envoi des données");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <form onSubmit={handleSubmit} className="bg-white p-8  max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">S'inscrire</h2>

        {/* Civilité */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Civilité</h4>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="civilite"
                value="1"
                onChange={handleChange}
              />
              <span className="ml-2">Mr</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="civilite"
                value="2"
                onChange={handleChange}
              />
              <span className="ml-2">Mme</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="civilite"
                value="3"
                onChange={handleChange}
              />
              <span className="ml-2">Autre</span>
            </label>
          </div>
        </div>

        {/* Nom et Prénom */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="font-semibold">Nom</h4>
            <input
              type="text"
              name="name"
              placeholder="Nom"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <h4 className="font-semibold">Prénom</h4>
            <input
              type="text"
              name="surname"
              placeholder="Prénom"
              value={formData.surname}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Email et Téléphone */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="font-semibold">Adresse e-mail</h4>
            <input
              type="email"
              name="mail"
              placeholder="Email"
              value={formData.mail}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <h4 className="font-semibold">Téléphone</h4>
            <input
              type="number"
              name="num"
              placeholder="Téléphone"
              value={formData.num}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Handicap et Date de naissance */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="font-semibold">Handicap</h4>
            <select
              name="handicap"
              value={formData.handicap}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Sélectionner un handicap</option>
              <option value="1">Fauteuil</option>
              <option value="2">Aveugle</option>
              <option value="3">Âgé</option>
            </select>
          </div>
          <div>
            <h4 className="font-semibold">Date anniversaire</h4>
            <input
              type="date"
              name="birth"
              value={formData.birth}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Contact Mail et Contact Num */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="font-semibold">Contact Mail</h4>
            <input
              type="email"
              name="contact_mail"
              placeholder="Contact Email"
              value={formData.contact_mail}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <h4 className="font-semibold">Contact Num</h4>
            <input
              type="number"
              name="contact_num"
              placeholder="Contact Num"
              value={formData.contact_num}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Mot de passe et Note */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="font-semibold">Mot de passe</h4>
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <h4 className="font-semibold">Note</h4>
            <textarea
              name="note"
              placeholder="Note"
              value={formData.note}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
        </div>

        {/* Conditions générales */}
        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" required />
          <span>
            J'ai lu et j'accepte les{" "}
            <a href="/#" className="text-blue-500 hover:underline">
              Conditions générales
            </a>{" "}
            et la{" "}
            <a href="/#" className="text-blue-500 hover:underline">
              Politique de confidentialité
            </a>
            .
          </span>
        </div>

        {/* Bouton d'inscription */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          S'inscrire
        </button>
      </form>

      <div className="flex items-center mt-4 lg:mt-24 mb-8">
        <div className="border-t border-gray-300 w-[155px] lg:w-[380px]"></div>
        <span className="px-4 text-gray-500">ou</span>
        <div className="border-t border-gray-300 w-[155px] lg:w-[380px]"></div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-lg font-raleway mb-6">Connectez-vous avec</h2>
        <button className="flex font-raleway font-bold items-center justify-center w-[375px] lg:w-[830px] border border-black rounded-lg py-2 mb-4 hover:bg-gray-100 ">
          <FaGoogle className="mr-2 text-xl text-red-600" />
          Continuer avec Google
        </button>

        <button className="flex font-raleway font-bold items-center justify-center  w-[375px] lg:w-[830px] border border-black rounded-lg py-2 mb-4 hover:bg-gray-100">
          <FaFacebook className="mr-2 text-xl text-blue-600" />
          Continuer avec Facebook
        </button>

        <button className="flex font-raleway font-bold items-center justify-center  w-[375px] lg:w-[830px] border border-black rounded-lg py-2 hover:bg-gray-100">
          <FaTwitter className="mr-2 text-xl text-blue-600" />
          Continuer avec Twitter
        </button>
        <div className="flex justify-center items-center">
          <p className="text-center font-raleway text-md mt-4">
            Vous avez déjà un compte ?
            <a href="/signup" className="text-blue hover:underline">
              Se connecter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
