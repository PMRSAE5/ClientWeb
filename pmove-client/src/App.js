import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Menu/Home";
import Itinerary from "./components/Menu/Itinerary";
import Login from "./components/Menu/Login";
import Signup from "./components/Menu/Signup";
import Reservation from "./components/Menu/Reservation";
import Footer from "./components/Menu/Footer";
import Navbar from "./components/Menu/Navbars";
<<<<<<< HEAD
import ReservationTrajet from "./components/Menu/ReservationTrajet";
=======
<<<<<<< HEAD
import MobileNavbars from "./components/MobileMenu/NavbarMobile";
=======
import Accompagnateur from "./components/Menu/Accompagnateur";
>>>>>>> 11b08b8a9bf38343b35339388e74b8ff502d5ae3
>>>>>>> 2d177eb60f21f1ae2fa215d16f5a398a18cbe43d

const App = () => {
  return (
    <div>
      <Router>
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="block lg:hidden">
          <MobileNavbars />
        </div>

        <Routes>
<<<<<<< HEAD
          <Route path="/reservation2" element={<ReservationTrajet />} />
=======
          <Route path="/acc" element={<Accompagnateur />} />
>>>>>>> 2d177eb60f21f1ae2fa215d16f5a398a18cbe43d
          <Route path="/" element={<Home />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
 