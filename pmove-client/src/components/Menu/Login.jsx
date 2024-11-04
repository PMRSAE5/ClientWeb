import React from "react";
import Logo from "../../images/logo/PMoveLogoAvecStyle.png";
import BackLogin from "../../images/BackLogin.png";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex items-center justify-center ">
      <img
        src={Logo}
        alt="Logo"
        className="absolute mr-100 3xl:-top-40 xl:top-24 w-3/12 mt-2 hidden lg:block"
      />

      <div className="flex items-center justify-center min-h-screen mt-28">
        <div className="relative flex flex-col xl:items-start items-center p-20 mt-48">
          <h1 className="-mt-40 -ml-30 font-raleway font-bold text-[60px] items-start text-2xl font-bold z-10 ">
            Login
          </h1>

          <div className="flex flex-col xl:items-start items-center -ml-30 mt-12 bg-white">
            <form action="" className="flex flex-col">
              <label className="font-raleway text-xl block font-raleway text-left font-bold mb-1 z-10">
                Adresse mail
              </label>
              <input
                type="email"
                className="w-[375px] px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black z-10 border border-black"
              />

              <label className="block font-raleway text-xl text-left font-bold mb-1 z-10">
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
                  className="font-raleway text-md text-black font-bold hover:underline "
                >
                  Mot de passe oublié ?
                </a>

                <div className="relative opacity-50 opacity-100">
                  <div className="absolute ">
                    <img
                      src={BackLogin}
                      alt="fond"
                      className="xl:max-w-[650px] xl:ml-64 -ml-16 xl:-mt-[440px] -mt-[460px] max-w-[500px] z-0 "
                    />
                  </div>
                </div>
              </div>

              <button className="w-[375px] color-blues-3 text-white py-2 text-lg rounded-lg font-bold font-raleway transition z-10">
                Se connecter
              </button>
            </form>

            <div className="flex items-center mt-12 lg:mt-24 mb-8">
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
                  Vous avez besoin d'un compte ?
                  <a href="/signup" className="text-blue hover:underline">
                    S'inscrire
                  </a>
                </p>
              </div>
            </div>

            {/* Sign-up Link */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
