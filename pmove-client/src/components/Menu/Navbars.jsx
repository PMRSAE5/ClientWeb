import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images/logo/PMoveLogoSANSTITRE.png";
import Intersect from "../../images/Intersect.svg";

const Navbars = () => {
  return (
    <div className="relative">
      <div className="flex ">
        <div className="text-sm font-bold color-blues-2 ml-[76%] mt-2">
          <Link to="/login" className="hover:underline mr-2">
            Login
          </Link>
          <span className="right-0">|</span>
          <Link to="/signup" className="right-0 hover:underline ml-2">
            Sign up
          </Link>
        </div>
      </div>

      <div className="mt-2 font-raleway color-blues h-24 xl:w-[78%] p-2 relative flex items-center justify-center ">
        <div className="absolute -right-12">
          <img src={Intersect} alt="Intersect" className="mt-22 h-24" />
        </div>

        <Navbar
          expand="lg"
          className="text-white w-11/12 flex items-center justify-between"
        >
          <Container fluid className="flex items-center justify-between">
            <Navbar.Brand href="/#">
              <img src={Logo} alt="Logo" className="ml-16 w-1/2 mt-2" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse
              id="navbarScroll"
              className="flex items-center justify-between w-full"
            >
              <Nav className="flex items-center xl:space-x-20">
                <Link
                  to=""
                  className="!font-bold text-white !text-xl hover:text-gray-400 nav-link"
                >
                  Home
                </Link>
                <Link
                  to="/itinerary"
                  className="!font-bold text-white !text-xl hover:text-gray-400 nav-link"
                >
                  Itinerary
                </Link>
                <Link
                  to="/reservation"
                  className="!font-bold text-white !text-xl hover:text-gray-400 nav-link"
                >
                  Reservation
                </Link>
                <Link
                  to="/contact"
                  className="!font-bold text-white !text-xl hover:text-gray-400 nav-link"
                >
                  Contact
                </Link>
                <Link
                  to="/help"
                  className="!font-bold text-white !text-xl hover:text-gray-400 nav-link"
                >
                  Help
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Navbars;
