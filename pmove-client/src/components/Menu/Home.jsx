import React, { useState, useEffect } from "react";
import Background from "../../images/backgroundhome.jpg";
import Background2 from "../../images/Backgroundhome2.jpg";
import Background3 from "../../images/Backroundhome3.jpg";
import { Link } from "react-router-dom";
import Bus from "../../images/Bus.svg";
import Avion from "../../images/Avion.svg";
import Taxi from "../../images/Taxi.svg";
import Image from "../../images/remplacement.jpg";
import BackHome2 from "../../images/BackHome2.png";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const images = [Background, Background2, Background3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence custom={direction} initial={false}>
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          custom={direction}
          variants={transitionImage}
          initial="enter"
          animate="center"
          exit="exit"
          alt="Background"
          className="absolute mt-8 w-full object-cover object-[center_70%] h-[600px]"
        />
      </AnimatePresence>
      <div className="absolute top-60 lg:top-56 3xl:top-44 lg:right-8 right-10 3xl:right-28 text-white text-left flex flex-col lg:items-start items-center">
        <h1 className="font-raleway lg:text-[100px] text-[70px] font-bold mb-4 ">
          Need us ?
        </h1>
        <motion.div
          whileHover={{ scale: 1.1 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        >
          <Link
            to="/reservation"
            className="font-raleway color-blues-3 text-white py-2 px-4 rounded font-bold"
          >
            Reservation
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="mt-160 " // Position initiale de votre section
        whileInView={{
          x: window.innerWidth >= 1024 ? 100 : 5, // Déplace l'élément de 100 pixels vers la droite lorsqu'il entre dans la vue
          y: 0, // Pas de déplacement vertical
          scale: 1, // Taille normale de l'élément
          rotate: 0, // Pas de rotation
        }}
        initial={{ opacity: 0 }} // Démarre l'animation avec une opacité de 0 (invisible)
        animate={{ opacity: 1 }} // Devient visible lorsque l'animation démarre
        transition={{ duration: 1.5 }} // Durée de l'animation (1.5 secondes)
        viewport={{ once: true, amount: 0.5 }} // Active l'animation lorsque 50% de l'élément est visible
      >
        <h1 className="font-raleway ml-2 text-blue lg:text-[75px] text-[43px] ">
          Welcome Back!
        </h1>
        <p className="font-raleway font-semibold lg:text-lg text-md ml-2">
          PMove supports you in all your travels across France and beyond!
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row lg:justify-around mt-20"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Taxi */}
        <motion.div className="text-center" variants={item}>
          <motion.img
            src={Taxi}
            alt="Taxi Icon"
            className="w-32 h-32 mx-auto"
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 1 },
            }}
            whileTap={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 3 },
            }}
          />
          <h3 className="font-raleway font-extrabold text-blue text-xl font-bold mt-4">
            Taxi
          </h3>
          <p className="mx-auto font-raleway font-bold text-gray-600 mt-8 w-64">
            Our taxi service is available 24/7 to meet all your transportation
            needs, whether for a short ride or a long journey. Our professional
            drivers ensure a comfortable and safe trip.
          </p>
        </motion.div>

        {/* Section Public Transport */}
        <motion.div className="text-center mt-12 lg:mt-1" variants={item}>
          <motion.img
            src={Bus}
            alt="Bus Icon"
            className="w-32 h-32 mx-auto"
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 1 },
            }}
            whileTap={{
              scale: 0.8,
              rotate: 360,
              transition: { duration: 3 },
            }}
          />
          <h3 className="font-raleway font-extrabold text-blue text-xl font-bold mt-4">
            Public Transport
          </h3>
          <p className="mx-auto font-raleway font-bold text-gray-600 mt-8 w-64">
            With our public transport service, you can travel all around the
            city effortlessly. Our buses and trains are modern, comfortable, and
            punctual, ensuring you reach your destination on time.
          </p>
        </motion.div>

        {/* Section Airplane */}
        <motion.div className="text-center mt-12 lg:mt-1" variants={item}>
          <motion.img
            src={Avion}
            alt="Avion Icon"
            className="w-32 h-32 mx-auto"
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 1 },
            }}
            whileTap={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 3 },
            }}
          />
          <h3 className="font-raleway font-extrabold text-blue text-xl font-bold mt-4">
            Airplane
          </h3>
          <p className="mx-auto font-raleway font-bold text-gray-600 mt-8 w-64">
            Our airplane travel services offer hassle-free journeys with regular
            flights and competitive rates. Enjoy a pleasant flying experience
            with spacious seating and quality services.
          </p>
        </motion.div>
      </motion.div>

      <div>
        <h1 className="font-raleway text-blue lg:text-[45px] text-[25px] mt-32 lg:ml-12 ml-4 ">
          You had no idea which path to take?
        </h1>
        <img
          src={Image}
          alt="Description de l'image"
          className="ml-4 lg:ml-12 mt-6 lg:mt-12 w-11/12"
        />
      </div>

      <motion.div
        className="flex items-center justify-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }} // Active l'animation lors du scroll
      >
        <motion.img
          src={BackHome2}
          alt="Brainstorming_image"
          className="absolute opacity-75 mt-72 w-full lg:opacity-100 lg:relative lg:mt-24 lg:-ml-20 lg:w-1/2 lg:h-auto"
          variants={item}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 1 }}
          whileTap={{
            scale: 0.9,
            rotate: -10,
            borderRadius: "20%",
          }}
        />

        <motion.div
          className="flex flex-col items-center"
          variants={item}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-center text-[75px] mt-24 font-raleway font-semibold text-blue">
            Our solution
          </h2>

          <div className="flex justify-center items-center">
            <p className="mt-8 text-[23px] max-w-[450px] leading-relaxed font-raleway text-gray-600 text-center">
              Our solution is designed to make your travels simpler and your
              journeys more enjoyable. Whether you are traveling for work or
              leisure, we offer a range of services tailored to your needs. With
              our intuitive platform, you can easily plan, book, and track your
              trips, whether it's by taxi, public transport, or airplane.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const transitionImage = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    y: 0,
    top: "0%",
  }),
  center: {
    x: 0,
    y: 0,
    top: "0%",

    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%", // L'image sort vers la gauche ou la droite
    top: "0%",
    transition: { duration: 0.5, ease: "easeInOut" },
  }),
};

export default Home;
