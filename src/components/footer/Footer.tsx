import "./footer.css";
import { RiFacebookCircleFill } from "@remixicon/react";
import { RiWhatsappFill } from "@remixicon/react";
import { RiInstagramFill } from "@remixicon/react";
import { RiTwitterFill } from "@remixicon/react";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function Footer() {
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
    sr.reveal(`.social , .list-unstyled`, { delay: 700 });
    sr.reveal(`.Copyright`, { delay: 800 });
    sr.reveal(`.social`, { interval: 500 });
  }, []);

  return (
    <footer className="footer text-center">
      {/* <!-- Grid container --> */}
      <div className="container p-4">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
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
              <h5 className="footer-title text-uppercase">Kees</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a className="footer-link" href="#!">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#!">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#!">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="footer-title text-uppercase">Sections</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a className="footer-link" href="#!">
                    Home
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#!">
                    Women
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#!">
                    Men
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#!">
                    Online Stores
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="footer-title text-uppercase">Women</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a className="footer-link" href="#">
                    Gulf Abayas
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Dresses
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    sport clothes
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    shoes
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="footer-title text-uppercase">Men</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a className="footer-link" href="#">
                    clothes
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    sport clothes
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    shoes
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    accessories
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
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
        <a className="namecompany ms-1" href="./index.html">
          Kees
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
}

export default Footer;
