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

const NavBar = () => {
  /*=============== REMOVE MENU MOBILE ===============*/
  const navLink = document.querySelectorAll(".text-color");

  function linkAction() {
    const navMenu = document.getElementById("basic-navbar-nav");
    // When we click on each nav__link, we remove the show-menu class
    navMenu?.classList.remove("show");
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));

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
    <Navbar expand="lg" className="navbar bg-body-tertiary fs-5">
      <Container className="container">
        <Navbar.Brand className="brand-1 me-auto" href="#home">
          <div className="brand">
            <Image imageURL={img} alt="logo" className="Logo-1" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="right-menu menu me-auto gap-3">
            <NavLink to="/" className="text-color nav-link">
              Home
            </NavLink>
            <NavDropdown title="Men" id="basic-nav-dropdown">
              <Link to="/men-clothes" className="dropdown-item text-color">
                Clothes
              </Link>
              <Link to="/men-sport" className="dropdown-item text-color">
                Sport Clothes
              </Link>
              <Link to="/men-shoes" className="dropdown-item text-color">
                Shoes
              </Link>
              <Link to="/men-accessories" className="dropdown-item text-color">
                Accessories
              </Link>
              <Link to="/men-perfumes" className="dropdown-item text-color">
                Perfumes
              </Link>
            </NavDropdown>
            <NavDropdown title="Women" id="basic-nav-dropdown">
              <Link to="/women-gulfAbayas" className="dropdown-item text-color">
                Gulf Abayas
              </Link>
              <Link to="/women-dresses" className="dropdown-item text-color">
                Dresses
              </Link>
              <Link
                to="/women-variousClothes"
                className="dropdown-item text-color"
              >
                Various Clothes
              </Link>
              <Link
                to="/women-sportClothes"
                className="dropdown-item text-color"
              >
                Sport Clothes
              </Link>
              <Link to="/women-shoes" className="dropdown-item text-color">
                Shoes
              </Link>
              <Link
                to="/women-Accessories"
                className="dropdown-item text-color"
              >
                Accessories
              </Link>
              <Link to="/women-makeup" className="dropdown-item text-color">
                MakeUp
              </Link>
              <Link to="/women-perfumes" className="dropdown-item text-color">
                Perfumes
              </Link>
            </NavDropdown>
          </Nav>
          <Navbar.Brand className="brand-2 me-auto">
            <Image imageURL={img} alt="logo" className="Logo-2" />
          </Navbar.Brand>
          <Nav className="left-menu menu menu-end me-end d-flex gap-4">
            <div className="buttons d-flex gap-2">
              <Link to="/login" className="btn btn-link Login text-color">
                Login
              </Link>
              <Link to={"/register"} className="text-color">
                <ButtonRegister title="Register" />
              </Link>
            </div>
            <NavDropdown title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item className="text-color item">
                <img className="flag text-color" src={ArIcon} alt="" />
                Arabic
              </NavDropdown.Item>
              <NavDropdown.Item className="text-color item">
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
