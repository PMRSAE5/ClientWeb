import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Menu/Home";
import Itinerary from "./components/Menu/Itinerary";
import Login from "./components/Menu/Login";
import Signup from "./components/Menu/Signup";
import Reservation from "./components/Menu/Reservation";
import Footer from "./components/Menu/Footer";
import Navbar from "./components/Menu/Navbars";
import Accompagnateur from "./components/Menu/Accompagnateur";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/acc" element={<Accompagnateur />} />
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
