import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Intersect from "../../images/Intersect.svg";

const Navbars = () => {
  return (
    <div>
      <div className="absolute top-0 right-0">
        <div className="flex items-center gap-2 text-black text-sm ml-32 3xl:ml-40 mt-2"></div>
        <img
          src={Intersect}
          alt="Intersect"
          className="mt-22 mr-52 h-24 w-auto lg:ml-80 xl:ml-72 2xl:ml-64 3xl:ml-72"
        />
      </div>
      <div className="mt-2 font-raleway color-navbar h-24 lg:w-[81%] xl:w-[83%] 2xl:w-[83%] 3xl:w-[85.1%] p-2 relative flex items-center justify-center bottom-0  z-10">
        <Navbar
          expand="lg"
          className="text-white w-11/12 flex items-center justify-between"
        >
          <Container fluid>
            <Navbar.Brand href="/#"></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 flex items-center xl:space-x-4  2xl:space-x-8 3xl:space-x-11"
                navbarScroll
              >
                <Nav.Link
                  href="/#"
                  className=" !font-semibold text-white !text-xl hover:text-gray-400"
                >
                  Accueil
                </Nav.Link>
                <Nav.Link
                  href="/#"
                  className=" !font-semibold text-white !text-xl hover:text-gray-400"
                >
                  Itinéraire
                </Nav.Link>
                <Nav.Link
                  href="/#"
                  className=" !font-semibold text-white !text-xl hover:text-gray-400"
                >
                  Réservation
                </Nav.Link>
                <Nav.Link
                  href="/#"
                  className=" !font-semibold text-white !text-xl hover:text-gray-400"
                >
                  Contact
                </Nav.Link>
                <Nav.Link
                  href="/#"
                  className=" !font-semibold text-white !text-xl hover:text-gray-400"
                >
                  Aide
                </Nav.Link>
                <Nav.Link className=" text-white "></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Navbars;
