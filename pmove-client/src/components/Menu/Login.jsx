import React from "react";
import Logo from "../../images/logo/PMoveLogoAvecStyle.png";
import BackLogin from "../../images/BackLogin.png";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img
        src={Logo}
        alt="Logo"
        className="absolute mr-96 -top-20 w-5/12 mt-2"
      />

      <div className="flex items-center justify-center min-h-screen mt-32">
        <div className="relative flex flex-col items-start p-20 mt-48">
          <h1 className="-mt-40 -ml-30 font-raleway font-bold text-[60px] items-start text-2xl font-bold ">
            Login
          </h1>

          <div className="flex flex-col -ml-30 mt-12 bg-white">
            <form action="" className="flex flex-col">
              <label className="font-raleway text-xl block font-raleway text-left font-bold mb-1">
                Adresse mail
              </label>
              <input
                type="email"
                className="w-[375px] px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black z-10 border border-black"
              />

              <label className="block font-raleway text-xl text-left font-bold mb-1">
                Mot de passe
              </label>
              <input
                type="password"
                className="w-[375px] px-4 py-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-black z-10 border border-black"
              />

              {/* Forgot Password */}
              <div className="text-left mt-2 mb-4">
                <a
                  href="/forgot-password"
                  className="font-raleway text-md text-black  hover:underline"
                >
                  Mot de passe oublié ?
                </a>

                <div className="absolute">
                  <img
                    src={BackLogin}
                    alt="fond"
                    className="max-w-[650px] -mt-[440px] ml-64 "
                  />
                </div>
              </div>

              <button className="w-[375px] color-blues-3 text-white py-2 text-lg rounded-lg font-bold font-raleway transition z-10">
                Se connecter
              </button>
            </form>

            <div className="flex items-center mt-24 mb-8">
              <div className="border-t border-gray-300 w-[380px]"></div>
              <span className="px-4 text-gray-500">ou</span>
              <div className="border-t border-gray-300 w-[380px]"></div>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-lg font-raleway font-semibold mb-6">
                Connectez-vous avec
              </h2>
              <button className="flex font-raleway font-bold items-center justify-center w-[830px] border border-black rounded-lg py-2 mb-4 hover:bg-gray-100 ">
                <FaGoogle className="mr-2 text-xl text-red-600" />
                Continuer avec Google
              </button>

              <button className="flex font-raleway font-bold items-center justify-center w-[830px] border border-black rounded-lg py-2 mb-4 hover:bg-gray-100">
                <FaFacebook className="mr-2 text-xl text-blue-600" />
                Continuer avec Facebook
              </button>

              <button className="flex font-raleway font-bold items-center justify-center w-[830px] border border-black rounded-lg py-2 hover:bg-gray-100">
                <FaTwitter className="mr-2 text-xl text-blue-600" />
                Continuer avec Twitter
              </button>
            </div>

            {/* Sign-up Link */}
            <p className="text-center font-raleway text-md mt-4">
              Vous avez besoin d'un compte ?{" "}
              <a href="/signup" className="text-blue hover:underline">
                S'inscrire
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
