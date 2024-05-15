import Circle from "../../components/UI/circle/Circle";
import "./home.css";
import Image from "../../components/UI/Image";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import starsTop from "/src/assets/imgs/stars-top.png";
import starsBottom from "/src/assets/imgs/stars-bottom.png";
import imgHomeLeft from "/src/assets/imgs/men/men.jpg";
import imgHomeRight from "/src/assets/imgs/women/women.jpg";
import imgHomeFreelancer from "/src/assets/imgs/Freelancer/Freelancer.jpg";
import baner from "/src/assets/imgs/baner.png";

function Home() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2000,
      delay: 300,
    });

    sr.reveal(`.Logo-1`);
    sr.reveal(`.hero-title`, { delay: 400 });
    sr.reveal(`.hero-description`, { delay: 500 });
    sr.reveal(`.right-circle, .about .right`, {
      origin: "left",
    });
    sr.reveal(`.left-circle, .baner`, { origin: "right" });
    sr.reveal(`.center-circle`, { origin: "bottom" });
  }, []);

  return (
    <>
      <section className="hero">
        <Image imageURL={starsTop} alt="stars" className="stars stars-top" />
        <Image
          imageURL={starsBottom}
          alt="stars"
          className="stars stars-bottom"
        />

        <h1 className="hero-title">Kees</h1>
        <p className="hero-description">
          We are a leading company in the Middle East, especially Saudi Arabia,
          in providing you with the best stores in terms of quality and price
        </p>
        <div className="hero-container container">
          <div className="row">
            <div className="right-circle">
              <Circle
                title="Men"
                type="CartBig"
                imgUrl={imgHomeLeft}
                alt="men"
                classNameImg="card-img"
                animationTitle="card-title-left"
                lightSpeed="animate__lightSpeedInLeft"
                linkPath={"/men"}
              />
            </div>
            <div className="center-circle ">
              <Circle
                title="Women"
                type="CartBig"
                imgUrl={imgHomeRight}
                alt="women"
                classNameImg="card-img"
                animationTitle="card-title-right"
                lightSpeed="animate__lightSpeed"
                linkPath={"/women"}
              />
            </div>
            <div className="left-circle">
              <Circle
                title="Freelancer"
                type="CartBig"
                imgUrl={imgHomeFreelancer}
                alt="freelancer"
                classNameImg="card-img"
                animationTitle="card-title-right"
                lightSpeed="animate__lightSpeedInRight"
                linkPath={"/freelancer"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="parent row gy-3  gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="right col-12 col-lg-6 col-xl-7">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
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
    </>
  );
}

export default Home;
