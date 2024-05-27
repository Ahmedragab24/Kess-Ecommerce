import Circle from "../../components/UI/circle/Circle";
import "./home.css";
import Image from "../../components/UI/Image";
import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";
import starsTop from "/src/assets/imgs/stars-top.png";
import starsBottom from "/src/assets/imgs/stars-bottom.png";
import baner from "/src/assets/imgs/baner.png";
import axios from "axios";
import featuresIcon1 from "/src/assets/imgs/features-icon-1.png";
import featuresIcon2 from "/src/assets/imgs/features-icon-2.png";
import featuresIcon3 from "/src/assets/imgs/features-icon-3.png";
import featuresIcon4 from "/src/assets/imgs/features-icon-4.png";

interface Category {
  category_name: string;
  category_name_ar: string;
  photo: string;
  description: string;
}

function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const getLang = localStorage.getItem("lang");
  const [language, setLanguage] = useState<string | null>(getLang);

  // Fetch Category
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
      duration: 2000,
      delay: 300,
    });

    sr.reveal(`.Logo-1`);
    sr.reveal(`.hero-title, .section-title`, { delay: 400 });
    sr.reveal(`.hero-description`, { delay: 500 });
    sr.reveal(`.hero-container, .about-container , .grid-list`, { delay: 600 });
  }, []);

  // Render
  const renderCategories = () => {
    return categories.map((category) => {
      return (
        <Circle
          key={category.category_name}
          title={
            language === "ar"
              ? category.category_name_ar
              : category.category_name
          }
          type="CartBig"
          imgUrl={category.photo}
          alt={category.description}
          classNameImg="card-img"
          animationTitle="card-title-left"
          lightSpeed="animate__lightSpeedInLeft"
          linkPath={`/${category.category_name}`}
        />
      );
    });
  };

  return (
    <>
      <section className="hero">
        <Image imageURL={starsTop} alt="stars" className="stars stars-top" />
        <Image
          imageURL={starsBottom}
          alt="stars"
          className="stars stars-bottom"
        />

        <h1 className="hero-title">{language === "ar" ? "كيس" : "kees"}</h1>
        <p className="hero-description">
          {language === "ar"
            ? "نحن شركة رائدة في الشرق الأوسط وخاصة المملكة العربية السعودية في تقديم أفضل المتاجر من حيث الجودة والسعر"
            : "We are a leading company in the Middle East, especially Saudi Arabia, in providing you with the best stores in terms of quality and price"}
        </p>
        <div className="hero-container container">
          <div className="row">{renderCategories()}</div>
        </div>
      </section>

      <section className="about" id="About Us">
        <div className="container about-container">
          <div className="parent row gy-3  gy-md-4 gy-lg-0 align-items-lg-center">
            <div className=" col-12 col-lg-6 ">
              <div className=" row justify-content-xl-center">
                <div className=" col-12 col-xl-11">
                  <h2 className="title mb-3">Who Are We?</h2>
                  <p className="lead fs-4  mb-3">
                    We help people to build incredible brands and superior
                    products. Our perspective is to furnish outstanding
                    captivating services.
                  </p>
                  <p className="description mb-5">
                    We are a fast-growing company, but we have never lost sight
                    of our core values. We believe in collaboration, innovation,
                    and customer satisfaction. We are always looking for new
                    ways to improve our products and services.
                  </p>
                  <div className="row gy-4 gy-md-0 gx-xxl-5X">
                    <div className="col-12 col-md-6">
                      <div className="feature d-flex">
                        <div className="me-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            className="bi bi-gear-fill "
                            viewBox="0 0 16 16"
                          >
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                          </svg>
                        </div>
                        <div>
                          <h2 className="titleIcon h4 mb-3">Versatile Brand</h2>
                          <p className="description mb-0">
                            We are crafting a digital method that subsists life
                            across all mediums.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="feature d-flex">
                        <div className="me-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            className="bi bi-fire"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                          </svg>
                        </div>
                        <div>
                          <h2 className="titleIcon h4 mb-3">Digital Agency</h2>
                          <p className="description mb-0">
                            We believe in innovation by merging primary with
                            elaborate ideas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dev-baner col-12 col-lg-6 col-xl-5">
              <Image imageURL={baner} alt="baner" className="baner" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-features features text-center"
        aria-label="features"
      >
        <div className="container">
          <h2 className="headline-1 section-title">We help you with</h2>

          <ul className="container grid-list">
            <li className="feature-item">
              <div className="feature-card">
                <div className="card-icon">
                  <img src={featuresIcon1} width="100" height="80" alt="icon" />
                </div>

                <h3 className="title-2 card-title">Professionalism</h3>

                <p className="label-1 card-text">
                  We have a team of professionals with diverse experience in
                  various aspects of the real estate industry. They have
                  in-depth knowledge of market trends, regulations, financing
                  options and legal considerations. Their professionalism and
                  experience can guide you through the complex real estate
                  landscape and help you make informed decisions.
                </p>
              </div>
            </li>

            <li className="feature-item">
              <div className="feature-card">
                <div className="card-icon">
                  <img src={featuresIcon2} width="100" height="80" alt="icon" />
                </div>

                <h3 className="title-2 card-title">Extensive Resources</h3>

                <p className="label-1 card-text">
                  The company has access to extensive resources, including
                  financial capital, advanced technology, industry networks, and
                  established relationships with key stakeholders. These
                  resources can be leveraged to your advantage, facilitating
                  smoother transactions, faster project execution, and access to
                  a wider range of opportunities.
                </p>
              </div>
            </li>

            <li className="feature-item">
              <div className="feature-card">
                <div className="card-icon">
                  <img src={featuresIcon3} width="100" height="80" alt="icon" />
                </div>

                <h3 className="title-2 card-title">Diverse Portfolio</h3>

                <p className="label-1 card-text">
                  The company owns a diversified portfolio of real estate and
                  projects. Whether you are looking for residential, commercial,
                  commercial or industrial properties, a great real estate
                  company can offer a wide range of options to suit your
                  specific needs and preferences.
                </p>
              </div>
            </li>

            <li className="feature-item">
              <div className="feature-card">
                <div className="card-icon">
                  <img src={featuresIcon4} width="100" height="80" alt="icon" />
                </div>

                <h3 className="title-2 card-title">Market Knowledge</h3>

                <p className="label-1 card-text">
                  With access to comprehensive market research and analysis, we
                  can provide valuable insights into market trends, investment
                  opportunities and potential risks. They can help you identify
                  emerging markets, forecast property values, and make strategic
                  investment decisions.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;
