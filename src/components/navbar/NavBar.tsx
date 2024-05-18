import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import img from "/src/assets/imgs/Logo (NO TEXT).png";
import ButtonRegister from "../UI/button/ButtonRegister";
import ArIcon from "../../assets/imgs/Ar.png";
import EnIcon from "../../assets/imgs/En.png";
import { Link, NavLink } from "react-router-dom";
import Image from "../UI/Image";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import UserProfile from "../auth/userProfile/UserProfile";

const storageKey = "User";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;

const NavBar = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2000,
      delay: 300,
    });

    sr.reveal(`.Logo-2`);
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar bg-body-tertiary fs-5 position-sticky"
      sticky="top"
    >
      <Container className="container">
        <Navbar.Brand className="brand-1 me-auto" href="#home">
          <div className="brand">
            <Image imageURL={img} alt="logo" className="Logo-1" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="right-menu menu me-auto gap-3">
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/"
                eventKey="/"
                title="Home"
                className="text-color nav-link"
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <NavDropdown
              className="Dropdown-style"
              title="Men"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item
                href="#action/3.1"
                as={NavLink}
                to="/men-clothes"
                className="dropdown-item text-color"
              >
                Clothes
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                as={NavLink}
                to="/men-sport"
                className="dropdown-item text-color"
              >
                Sport Clothes
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                as={NavLink}
                to="/men-shoes"
                className="dropdown-item text-color"
              >
                Shoes
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.4"
                as={NavLink}
                to="/men-accessories"
                className="dropdown-item text-color"
              >
                Accessories
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.5"
                as={NavLink}
                to="/men-perfumes"
                className="dropdown-item text-color"
              >
                Perfumes
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="Dropdown-style"
              title="Women"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item
                href="#action/3.1"
                as={NavLink}
                to="/women-gulfAbayas"
                className="dropdown-item text-color"
              >
                Gulf Abayas
              </NavDropdown.Item>

              <NavDropdown.Item
                href="#action/3.2"
                as={NavLink}
                to="/women-dresses"
                className="dropdown-item text-color"
              >
                Dresses
              </NavDropdown.Item>

              <NavDropdown.Item
                href="#action/3.3"
                as={NavLink}
                to="/women-variousClothes"
                className="dropdown-item text-color"
              >
                Various Clothes
              </NavDropdown.Item>

              <NavDropdown.Item
                href="#action/3.4"
                as={NavLink}
                to="/women-sportClothes"
                className="dropdown-item text-color"
              >
                Sport Clothes
              </NavDropdown.Item>

              <NavDropdown.Item
                href="#action/3.5"
                as={NavLink}
                to="/women-shoes"
                className="dropdown-item text-color"
              >
                Shoes
              </NavDropdown.Item>

              <NavDropdown.Item
                href="#action/3.6"
                as={NavLink}
                to="/women-Accessories"
                className="dropdown-item text-color"
              >
                Accessories
              </NavDropdown.Item>

              <NavDropdown.Item
                href="#action/3.7"
                as={NavLink}
                to="/women-makeup"
                className="dropdown-item text-color"
              >
                MakeUp
              </NavDropdown.Item>

              <NavDropdown.Item
                href="#action/3.8"
                as={NavLink}
                to="/women-perfumes"
                className="dropdown-item text-color"
              >
                Perfumes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Navbar.Brand className="brand-2 me-auto">
            <Image imageURL={img} alt="logo" className="Logo-2" />
          </Navbar.Brand>

          <Nav className="left-menu menu menu-end me-end d-flex gap-4">
            {!userData ? (
              <div className="buttons d-flex gap-2">
                <Nav.Link
                  as={Link}
                  eventKey="/login"
                  to="/login"
                  className="btn btn-link Login "
                >
                  Login
                </Nav.Link>
                <Nav.Link as={Link} eventKey="/register" to={"/register"}>
                  <ButtonRegister title="Register" />
                </Nav.Link>
              </div>
            ) : (
              <UserProfile userData={userData} />
            )}

            <NavDropdown
              className="Dropdown-style d-flex align-items-center"
              title="Language"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1" className="text-color item">
                <img className="flag text-color" src={ArIcon} alt="" />
                Arabic
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="text-color item">
                <img className="flag text-color" src={EnIcon} alt="" />
                English
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
