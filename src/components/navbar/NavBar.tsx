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
import { useEffect, useState } from "react";
import UserProfile from "../auth/userProfile/UserProfile";
import axios from "axios";
import LinkNav1 from "./LinkNav1";
// import { diractionLang } from "../utils/function";
import LinkNav2 from "./LinkNav2";
import LinkNav3 from "./LinkNav3";

const storageKey = "User";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;

interface Category {
    id: string;
    category_name: string;
    category_name_ar: string;
    photo: string;
    description: string;
    eventKey: string;
}

interface language {
    code: string;
    name: string;
    Arname: string;
    imgUrl: string;
}

const Languages: language[] = [
    { code: "en", name: "English", Arname: "الأنجليزية", imgUrl: EnIcon },
    { code: "ar", name: "Arabic", Arname: "العربية", imgUrl: ArIcon },
];
const NavBar = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    // const [language, setLanguage] = useState<string | null>(getLang);

    // Handler Languages
    const handerLang = (lang: string) => {
        localStorage.setItem("lang", lang);
        window.location.reload();
        // setLanguage(lang);
    };

    const getLang = localStorage.getItem("lang");

    useEffect(() => {
        const body: HTMLElement | null = document.body;
        const navRight: HTMLElement | null =
            document.querySelector(".right-menu");
        const navLeft: HTMLElement | null =
            document.querySelector(".left-menu");
        const loginPage: HTMLElement | null = document.querySelector(
            ".section-form-login"
        );

        if (getLang === "en") {
            if (body) body.style.direction = "ltr";
        } else if (getLang === "ar") {
            body.classList.add("AR");
            if (body) body.style.direction = "rtl";
            if (navRight) navRight.style.flex = "inherit";
            if (navLeft) navLeft.style.flex = "none";
            if (loginPage) loginPage.style.direction = "ltr";
        }
    }, [getLang]);

    // Get Global Categories
    useEffect(() => {
        try {
            axios
                .get(
                    "https://kees90.com/kees/APIs/categories/getCategories.php?globalID=0&is_freelance=-1"
                )
                .then((res) => setCategories(res.data.msg));
        } catch (error) {
            console.log("Failed to fetch data:" + error);
        }
    }, []);

    // ScrollReveal
    useEffect(() => {
        const sr = ScrollReveal({
            origin: "top",
            distance: "60px",
            duration: 2000,
            delay: 300,
        });

        sr.reveal(`.Logo-2`);
    }, []);

    // Render Global Categories
    const renderCategories = () => {
        return categories.map((category) => {
            return (
                <NavDropdown
                    key={category.id}
                    className="Dropdown-style"
                    title={
                        getLang === "ar"
                            ? category.category_name_ar
                            : category.category_name
                    }
                    id="collapsible-nav-dropdown"
                    // as={NavLink}
                    // to={`/stores/${category.id}`}
                >
                    {category.id === "1" && <LinkNav1 />}
                    {category.id === "3" && <LinkNav2 />}
                    {category.id === "5" && <LinkNav3 />}
                </NavDropdown>
            );
        });
    };

    // };

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            className="navbar  fs-5 position-sticky"
            sticky="top"
        >
            <Container className="container">
                <Link to="/">
                    <Navbar.Brand className="brand-1">
                        <div className="brand">
                            <Image
                                imageURL={img}
                                alt="logo"
                                className="Logo-1"
                            />
                        </div>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="right-menu menu me-auto gap-1">
                        <Nav.Item>
                            <Nav.Link
                                as={NavLink}
                                to="/"
                                eventKey="/"
                                title="Home"
                                className="text-color nav-link"
                            >
                                {getLang === "ar" ? "الرئيسية" : "Home"}
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={NavLink}
                                to="/about"
                                eventKey="/about"
                                title="About Us"
                                className="text-color nav-link"
                            >
                                {getLang === "ar" ? "من نحن" : "About Us"}
                            </Nav.Link>
                        </Nav.Item>

                        {renderCategories()}
                    </Nav>

                    <NavLink to={"/"}>
                        <Navbar.Brand className="brand-2 me-auto">
                            <Image
                                imageURL={img}
                                alt="logo"
                                className="Logo-2"
                            />
                        </Navbar.Brand>
                    </NavLink>

                    <Nav className="left-menu menu menu-end me-end d-flex gap-4">
                        {!userData ? (
                            <div className="buttons d-flex gap-2">
                                <Nav.Link
                                    as={Link}
                                    eventKey="/login"
                                    to="/login"
                                    className="btn btn-link Login "
                                >
                                    {getLang === "ar"
                                        ? "تسجيل الدخول"
                                        : "Login"}
                                </Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    eventKey="/register"
                                    to={"/register"}
                                >
                                    <ButtonRegister
                                        title={
                                            getLang === "ar"
                                                ? "تسجيل"
                                                : "Register"
                                        }
                                    />
                                </Nav.Link>
                            </div>
                        ) : (
                            <UserProfile userData={userData} />
                        )}

                        <NavDropdown
                            className="Dropdown-style d-flex align-items-center"
                            title={getLang === "ar" ? "اللغة" : "language"}
                            id="collapsible-nav-dropdown"
                        >
                            {Languages.map((language) => {
                                // const getLang = localStorage.getItem("lang");
                                return (
                                    <NavDropdown.Item
                                        key={language.code}
                                        className="lang text-color item"
                                        onClick={() =>
                                            handerLang(language.code)
                                        }
                                    >
                                        <img
                                            className="flag text-color"
                                            src={language.imgUrl}
                                            alt={language.name}
                                        />
                                        {getLang === "ar"
                                            ? language.Arname
                                            : language.name}
                                    </NavDropdown.Item>
                                );
                            })}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
