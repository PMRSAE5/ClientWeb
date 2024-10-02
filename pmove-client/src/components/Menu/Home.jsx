import React from "react";
import Background from "../../images/backgroundhome.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative">
      <img
        src={Background}
        alt="Background"
        className="mt-8 w-full object-cover h-[600px]"
      />
      <div className="absolute top-1/3 right-12 text-white text-left flex flex-col items-start">
        <h1 className="text-[100px] font-bold mb-4 ">
          Besoin de
          <br />
          nous ?
        </h1>
        <Link
          to="/reservation"
          className="color-blues-3  text-white py-2 px-4 rounded font-bold"
        >
          Réserver
        </Link>
      </div>
    </div>

    
  );
};

export default Home;
