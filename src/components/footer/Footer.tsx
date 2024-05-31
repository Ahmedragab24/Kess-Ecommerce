import "./footer.css";
import { RiFacebookCircleFill } from "@remixicon/react";
import { RiWhatsappFill } from "@remixicon/react";
import { RiInstagramFill } from "@remixicon/react";
import { RiTwitterFill } from "@remixicon/react";
import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";
import axios from "axios";
import LinkCate from "./LinkCate";
import { Link, ScrollRestoration } from "react-router-dom";

interface Category {
  id: string;
  category_name: string;
  category_name_ar: string;
  photo: string;
  description: string;
}

function Footer() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [, setLanguage] = useState<string | null>("en");
  const getLang = localStorage.getItem("lang");

  // Get Global Categories
  useEffect(() => {
    try {
      axios
        .get(
          "https://endlestone.com/kees/APIs/categories/getCategories.php?globalID=0&is_freelance=-1"
        )
        .then((res) => setCategories(res.data.msg));
      setLanguage(getLang);
    } catch (error) {
      console.log("Failed to fetch data:" + error);
    }
  }, [getLang]);

  // ScrollReveal
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
      // reset: true,
    });

    sr.reveal(`.footer-description-conter`);
    sr.reveal(`.footer-title`, { delay: 500 });
    sr.reveal(`.row, .list-unstyled, .Copyright`, { delay: 700 });
  }, []);

  // Sort by Category
  const CategoriesLink = (id: string) => {
    if (id === "1") {
      return <LinkCate categoryID="1" />;
    }
    if (id === "3") {
      return <LinkCate categoryID="3" />;
    }
    if (id === "5") {
      return <LinkCate categoryID="5" />;
    }
  };

  // Render Global Categories
  const renderCategories = () => {
    return categories.map((category) => {
      return (
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0" key={category.id}>
          <h5 className="footer-title text-uppercase">
            {getLang === "ar"
              ? category.category_name_ar
              : category.category_name}
          </h5>
          {CategoriesLink(category.id)}
        </div>
      );
    });
  };

  return (
    <footer className="footer text-center">
      {/* <!-- Grid container --> */}
      <div className="container p-4">
        {/* <!-- Section: Social media --> */}
        <section className="social-container mb-4">
          {/* <!-- Facebook --> */}
          <a className="social m-2" href="#">
            <RiFacebookCircleFill />
          </a>

          {/* <!-- Whatsapp --> */}
          <a className="social m-2" href="#">
            <RiWhatsappFill />
          </a>

          {/* <!-- Instagram --> */}
          <a className="social m-2" href="#">
            <RiInstagramFill />
          </a>

          {/* <!-- twitter --> */}
          <a className="social m-2" href="#">
            <RiTwitterFill />
          </a>
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Text --> */}
        <section className="mb-4">
          <div className="footer-description-conter">
            <p className="footer-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </div>
        </section>
        {/* <!-- Section: Text --> */}

        {/* <!-- Section: Links --> */}
        <section className="">
          {/* <!--Grid row--> */}
          <div className="row">
            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="footer-title text-uppercase">
                {getLang === "en" ? "Kees" : "كيس"}
              </h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link className="footer-link" to={"/about"}>
                    {getLang === "ar" ? "معلومات عنا" : "About Us"}
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to={"/privacyPolicy"}>
                    <ScrollRestoration />
                    {getLang === "ar" ? "سياسة الخصوصية" : "Privacy policy"}
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to={"/termsOfService"}>
                    {getLang === "ar" ? "شروط الخدمة" : "Terms of Service"}
                  </Link>
                </li>
              </ul>
            </div>

            {renderCategories()}
          </div>
          {/* <!--Grid row--> */}
        </section>
        {/* <!-- Section: Links --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div
        className="Copyright text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <Link to={"/"} className="namecompany ms-1">
          Kees
        </Link>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
}

export default Footer;
