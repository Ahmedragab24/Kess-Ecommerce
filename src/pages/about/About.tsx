import "./about.css";
import { SetStateAction, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImg1 from "../../assets/imgs//about/Orange Baner.jpg";
import CarouselImg2 from "../../assets/imgs/about/baner2.jpg";
import CarouselImg3 from "../../assets/imgs/about/baner3.jpg";
import video from "../../assets/video/video.mp4";
import badge from "../../assets/imgs/about/badge.png";
import starsTop from "/src/assets/imgs/stars-top.png";
import starsBottom from "/src/assets/imgs/stars-bottom.png";
import Image from "../../components/UI/Image";
import Line from "../../assets/imgs/line.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

// import manger1 from "../../assets/imgs/about/service-1.jpg";
// import manger2 from "../../assets/imgs/about/service-2.jpg";
// import manger3 from "../../assets/imgs/about/service-3.jpg";

function About() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <main className="AboutUs">
      <section className="section-carousel" id="AboutUs">
        <Carousel
          className="Carousel"
          activeIndex={index}
          onSelect={handleSelect}
          pause={false}
        >
          <Carousel.Item className="">
            <Image
              className="carouselImg"
              imageURL={CarouselImg1}
              alt="baner"
              // text="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="">
            <Image
              className="carouselImg"
              imageURL={CarouselImg2}
              alt="baner"
              // text="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="">
            <Image
              className="carouselImg"
              imageURL={CarouselImg3}
              alt="baner"
              // text="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </section>

      <section
        className="section-features aboutFeatures"
        aria-label="menu-label"
        id="features"
      >
        <div className="container">
          <p className="section-subtitle text-center label-2">Our Features</p>

          <div className="title-container">
            <h2 className="headline-1 section-title text-center">
              Why choose us?
            </h2>
            <img className="line" src={Line} alt="Line" loading="lazy" />
          </div>

          <ul className="features-grid-list">
            <li>
              <div className="menu-card hover:card">
                <figure
                  className="card-banner img-holder"
                  //   style="--width: 100; --height: 100"
                >
                  <img
                    src={CarouselImg1}
                    width="100"
                    height="100"
                    alt="Greek Salad"
                    className="img-cover"
                  />
                </figure>

                <div>
                  <div className="title-wrapper">
                    <h3 className="title-3">
                      <a href="#" className="card-title">
                        Expertise & Experience
                      </a>
                    </h3>

                    <span className="span title-2">
                      <i className="bx bx-line-chart"></i>
                    </span>
                  </div>

                  <p className="card-text label-1">
                    A reputable real estate construction company brings
                    extensive expertise and experience to the table. With a
                    solid track record and professional background, they are
                    capable of executing diverse and high-quality real estate
                    projects.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="menu-card hover:card">
                <figure
                  className="card-banner img-holder"
                  //   style="--width: 100; --height: 100"
                >
                  <img
                    src={CarouselImg2}
                    width="100"
                    height="100"
                    alt="Lasagne"
                    className="img-cover"
                  />
                </figure>

                <div>
                  <div className="title-wrapper">
                    <h3 className="title-3">
                      <a href="#" className="card-title">
                        Comprehensive Planning
                      </a>
                    </h3>

                    <span className="span title-2">
                      <i className="bx bx-spreadsheet"></i>
                    </span>
                  </div>

                  <p className="card-text label-1">
                    The company emphasizes meticulous and comprehensive planning
                    for its real estate projects. This involves market analysis,
                    understanding trends, and potential customer requirements.
                    It also includes identifying ideal project locations and
                    designing innovative residential and commercial unit
                    layouts.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="menu-card hover:card">
                <figure
                  className="card-banner img-holder"
                  //   style="--width: 100; --height: 100"
                >
                  <img
                    src={CarouselImg3}
                    width="100"
                    height="100"
                    alt="Butternut Pumpkin"
                    className="img-cover"
                  />
                </figure>

                <div>
                  <div className="title-wrapper">
                    <h3 className="title-3">
                      <a href="#" className="card-title">
                        Quality Construction
                      </a>
                    </h3>

                    <span className="span title-2">
                      <i className="bx bx-bar-chart-alt-2"></i>
                    </span>
                  </div>

                  <p className="card-text label-1">
                    A reliable real estate construction company focuses on
                    maintaining high standards of construction and finishes.
                    They prioritize using top-quality building materials and
                    work with experienced contractors and technicians to ensure
                    projects are built to the highest standards.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="menu-card hover:card">
                <figure
                  className="card-banner img-holder"
                  //   style="--width: 100; --height: 100"
                >
                  <img
                    src={CarouselImg1}
                    width="100"
                    height="100"
                    alt="Tokusen Wagyu"
                    className="img-cover"
                  />
                </figure>

                <div>
                  <div className="title-wrapper">
                    <h3 className="title-3">
                      <a href="#" className="card-title">
                        Innovative Design
                      </a>
                    </h3>

                    <span className="span title-2">
                      <i className="bx bx-analyse"></i>
                    </span>
                  </div>

                  <p className="card-text label-1">
                    The company values innovative and architecturally appealing
                    designs that align with market demands and customer
                    expectations. They strive to deliver unique and distinctive
                    projects that stand out in terms of design and architectural
                    engineering.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="menu-card hover:card">
                <figure
                  className="card-banner img-holder"
                  //   style="--width: 100; --height: 100"
                >
                  <img
                    src={CarouselImg2}
                    width="100"
                    height="100"
                    alt="Olivas Rellenas"
                    className="img-cover"
                  />
                </figure>

                <div>
                  <div className="title-wrapper">
                    <h3 className="title-3">
                      <a href="#" className="card-title">
                        Attention to Detail
                      </a>
                    </h3>

                    <span className="span title-2">
                      <i className="bx bx-notepad"></i>
                    </span>
                  </div>

                  <p className="card-text label-1">
                    Attention to detail is paramount in all projects undertaken
                    by the company. They place great importance on executing
                    precise finishes and equipping projects with all necessary
                    facilities and services to ensure customer comfort and
                    satisfaction.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="menu-card hover:card">
                <figure
                  className="card-banner img-holder"
                  //   style={{--width: "100"; --height: '100'}}
                >
                  <img
                    src={CarouselImg3}
                    width="100"
                    height="100"
                    alt="Opu Fish"
                    className="img-cover"
                  />
                </figure>

                <div>
                  <div className="title-wrapper">
                    <h3 className="title-3">
                      <a href="#" className="card-title">
                        Commitment to Timelines
                      </a>
                    </h3>

                    <span className="span title-2">
                      <i className="bx bx-building-house"></i>
                    </span>
                  </div>

                  <p className="card-text label-1">
                    A reliable real estate construction company is committed to
                    meeting project timelines. They prioritize delivering
                    projects on schedule according to the agreed-upon
                    commitments with customers.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="WhoWeAre">
        <div className="special-dish  " aria-labelledby="dish-label">
          <div className="special-dish-banner ">
            <img
              src={CarouselImg1}
              width="560"
              height="570"
              alt="special dish"
              className="img"
            />
          </div>

          <div className="special-dish-content">
            <div className="container">
              <img
                src={badge}
                width="28"
                height="41"
                alt="badge"
                className="abs-img"
              />
              <p className="section-subtitle label-2">Our Mission</p>

              <h2 className="headline-1 section-title">who we are</h2>

              <p className="section-text">
                we are curious creatives inspired by human nature and behaviour
                to create and evolve connections between brands and people.
                <br />
                <br />
                unpopular opinions are simply defined as ideas that go against
                or completely contradict the conventional status quo.
                “unpopular” is a relative term, because one's opinion may only
                be that way because of where they are located in the world.
                <br />
                <br />
                across local and regional markets, the “popular” way of dealing
                with projects is focusing on financial gain rather than quality
                and creativity. our values and the love we have for what we do,
                make us prioritize quality and creativity over everything else,
                which makes our way the “unpopular” way.
              </p>
              <a href="#contact">
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "var(--three-color)",
                    color: "var(--three-color)",
                    "&:hover": {
                      backgroundColor: "var(--three-color)",
                      color: "var(--second-color)",
                    },
                  }}
                >
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-video">
        <Image imageURL={starsTop} alt="stars" className="stars stars-top" />
        <Image
          imageURL={starsBottom}
          alt="stars"
          className="stars stars-bottom"
        />
        <video className="video" autoPlay loop muted>
          <source src={video} type="video/mp4" width={100} />
        </video>
      </section>

      <section className="responsive-container-block ourTeam-container">
        <h2 className="section-title">Our Team</h2>

        <div className="responsive-container-block">
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
            <div className="ourTeam-card">
              <div className="team-image-wrapper">
                <Image
                  className="team-member-image"
                  imageURL="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"
                  alt="Our Team"
                />
              </div>
              <p className="text-blk name">Davis George</p>
              <p className="text-blk position">CEO</p>
              <p className="text-blk feature-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="social-icons">
                <Link to="https://www.twitter.com" target="_blank">
                  <Image
                    className="icon"
                    imageURL="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg"
                    alt="social"
                  />
                </Link>
                <Link to="https://www.facebook.com" target="_blank">
                  <Image
                    className="icon"
                    imageURL="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg"
                    alt="social"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
            <div className="ourTeam-card">
              <div className="team-image-wrapper">
                <Image
                  className="team-member-image"
                  imageURL="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"
                  alt="Our Team"
                />
              </div>
              <p className="text-blk name">Davis George</p>
              <p className="text-blk position">CEO</p>
              <p className="text-blk feature-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="social-icons">
                <Link to="https://www.twitter.com" target="_blank">
                  <Image
                    className="icon"
                    imageURL="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg"
                    alt="social"
                  />
                </Link>
                <Link to="https://www.facebook.com" target="_blank">
                  <Image
                    className="icon"
                    imageURL="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg"
                    alt="social"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
            <div className="ourTeam-card">
              <div className="team-image-wrapper">
                <Image
                  className="team-member-image"
                  imageURL="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.14.png"
                  alt="Our Team"
                />
              </div>
              <p className="text-blk name">Davis George</p>
              <p className="text-blk position">CEO</p>
              <p className="text-blk feature-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="social-icons">
                <Link to="https://www.twitter.com" target="_blank">
                  <Image
                    className="icon"
                    imageURL="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg"
                    alt="social"
                  />
                </Link>
                <Link to="https://www.facebook.com" target="_blank">
                  <Image
                    className="icon"
                    imageURL="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon-1.svg"
                    alt="social"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="headline-1 section-title text-center mb-3">
                Our Clients
              </h2>

              <p className="section-subtitle mb-5 text-center">
                Our clients are our top priority, and we are committed to
                providing them with the highest level of service.
              </p>
            </div>
          </div>
        </div>

        <div className="container overflow-hidden">
          <div className="row gy-4">
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className="ourClient-card text-secondary px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50%"
                  height="65"
                  fill="currentColor"
                  viewBox="0 0 284 65"
                >
                  <path d="m141.51,52.13c.49-1.29.74-3.39.74-6.31v-12.29c0-2.83-.25-4.9-.74-6.21-.49-1.31-1.36-1.96-2.61-1.96s-2.05.65-2.54,1.96c-.49,1.31-.74,3.38-.74,6.21v12.29c0,2.92.24,5.02.71,6.31.47,1.29,1.33,1.93,2.57,1.93s2.11-.64,2.61-1.93h0Zm-9.98,6.18c-1.78-1.2-3.05-3.07-3.8-5.6-.75-2.53-1.13-5.9-1.13-10.1v-5.73c0-4.25.43-7.66,1.29-10.23.86-2.57,2.2-4.45,4.02-5.63,1.82-1.18,4.22-1.77,7.18-1.77s5.26.6,7.02,1.8c1.76,1.2,3.05,3.08,3.86,5.63.81,2.55,1.22,5.95,1.22,10.2v5.73c0,4.2-.4,7.58-1.19,10.14-.79,2.55-2.08,4.42-3.86,5.6-1.78,1.18-4.19,1.77-7.24,1.77s-5.59-.6-7.37-1.8m137.82-32.22c-.45.56-.75,1.47-.9,2.74-.15,1.27-.22,3.19-.22,5.76v2.83h6.5v-2.83c0-2.53-.09-4.45-.26-5.76-.17-1.31-.48-2.23-.93-2.77-.45-.54-1.15-.81-2.09-.81s-1.64.28-2.09.84h0Zm-1.13,16.61v2c0,2.53.07,4.43.22,5.7.15,1.27.46,2.19.93,2.77.47.58,1.2.87,2.19.87,1.33,0,2.24-.52,2.74-1.55.49-1.03.76-2.75.8-5.15l7.66.45c.04.34.06.82.06,1.42,0,3.65-1,6.37-2.99,8.17-1.99,1.8-4.82,2.7-8.46,2.7-4.38,0-7.44-1.37-9.2-4.12-1.76-2.74-2.64-6.99-2.64-12.74v-6.89c0-5.92.91-10.24,2.74-12.97,1.82-2.72,4.95-4.09,9.36-4.09,3.05,0,5.38.56,7.02,1.67,1.63,1.12,2.78,2.85,3.44,5.21.67,2.36,1,5.62,1,9.78v6.76h-14.87m-158.33-.74l-10.11-36.49h8.82l3.54,16.54c.9,4.08,1.57,7.55,2,10.43h.26c.3-2.06.97-5.51,2-10.36l3.67-16.61h8.82l-10.23,36.49v17.51h-8.75v-17.51m69.97-21.95v39.45h-6.95l-.77-4.83h-.19c-1.89,3.65-4.72,5.47-8.5,5.47-2.62,0-4.55-.86-5.79-2.57-1.24-1.72-1.87-4.4-1.87-8.05v-29.48h8.88v28.96c0,1.76.19,3.01.58,3.76.39.75,1.03,1.13,1.93,1.13.77,0,1.51-.24,2.22-.71.71-.47,1.23-1.07,1.58-1.8v-31.34h8.88m45.56,0v39.45h-6.95l-.77-4.83h-.19c-1.89,3.65-4.72,5.47-8.5,5.47-2.62,0-4.55-.86-5.79-2.57-1.24-1.72-1.87-4.4-1.87-8.05v-29.48h8.88v28.96c0,1.76.19,3.01.58,3.76.39.75,1.03,1.13,1.93,1.13.77,0,1.51-.24,2.22-.71.71-.47,1.23-1.07,1.58-1.8v-31.34h8.88m-21.42-7.4h-8.82v46.86h-8.69V12.62h-8.82v-7.14h26.32v7.14m42.68,29.8c0,2.87-.12,5.13-.36,6.76-.24,1.63-.63,2.79-1.19,3.48-.56.69-1.31,1.03-2.25,1.03-.71,0-1.41-.17-2.03-.52-.62-.34-1.13-.86-1.51-1.54v-22.4c.3-1.07.82-1.95,1.54-2.64.73-.69,1.52-1.03,2.38-1.03.9,0,1.6.35,2.09,1.06.49.71.84,1.9,1.03,3.57.19,1.67.29,4.05.29,7.14v5.09Zm8.14-16.09c-.54-2.49-1.41-4.29-2.61-5.41-1.2-1.12-2.85-1.67-4.96-1.67-1.63,0-3.15.46-4.57,1.38-1.4.9-2.53,2.16-3.28,3.64h-.07V3.48s-8.56,0-8.56,0v55.99h7.34l.9-3.73h.19c.69,1.33,1.72,2.38,3.09,3.15,1.37.77,2.9,1.16,4.57,1.16,3,0,5.21-1.38,6.63-4.15,1.42-2.77,2.12-7.09,2.12-12.97v-6.24c0-4.42-.27-7.87-.8-10.36M89.02,10.84c-1.04-3.88-4.08-6.91-7.96-7.96-7.02-1.88-35.16-1.88-35.16-1.88,0,0-28.14,0-35.16,1.88-3.88,1.04-6.91,4.08-7.96,7.96-1.88,7.02-1.88,21.66-1.88,21.66,0,0,0,14.64,1.88,21.66,1.04,3.88,4.08,6.91,7.96,7.96,7.02,1.88,35.16,1.88,35.16,1.88,0,0,28.14,0,35.16-1.88,3.88-1.04,6.91-4.08,7.96-7.96,1.88-7.02,1.88-21.66,1.88-21.66,0,0,0-14.64-1.88-21.66m-52.12,35.16v-27l23.38,13.5-23.38,13.5Z" />
                </svg>
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className=" ourClient-card text-secondary  px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50%"
                  height="65"
                  fill="currentColor"
                  viewBox="0 0 193 65"
                >
                  <path d="m82.71,34.15c0,9.06-7.09,15.74-15.79,15.74s-15.79-6.68-15.79-15.74,7.09-15.74,15.79-15.74,15.79,6.62,15.79,15.74Zm-6.91,0c0-5.66-4.11-9.54-8.88-9.54s-8.88,3.88-8.88,9.54,4.11,9.54,8.88,9.54,8.88-3.94,8.88-9.54Zm40.98,0c0,9.06-7.09,15.74-15.79,15.74s-15.79-6.68-15.79-15.74,7.09-15.74,15.79-15.74,15.79,6.62,15.79,15.74Zm-6.91,0c0-5.66-4.11-9.54-8.88-9.54s-8.88,3.88-8.88,9.54,4.11,9.54,8.88,9.54,8.88-3.94,8.88-9.54Zm39.56-14.79v28.26c0,11.63-6.86,16.37-14.96,16.37-7.63,0-12.22-5.1-13.95-9.28l6.02-2.51c1.07,2.56,3.7,5.59,7.93,5.59,5.19,0,8.4-3.2,8.4-9.23v-2.26h-.24c-1.55,1.91-4.53,3.58-8.29,3.58-7.87,0-15.08-6.86-15.08-15.68s7.21-15.8,15.08-15.8c3.75,0,6.74,1.67,8.29,3.52h.24v-2.56h6.57Zm-6.08,14.85c0-5.54-3.7-9.6-8.4-9.6s-8.77,4.05-8.77,9.6,4,9.48,8.77,9.48,8.4-4,8.4-9.48Zm16.9-31.41v46.14h-6.74V2.8h6.74Zm26.28,36.54l5.37,3.58c-1.73,2.56-5.91,6.98-13.12,6.98-8.94,0-15.62-6.91-15.62-15.74,0-9.36,6.74-15.74,14.85-15.74s12.17,6.5,13.47,10.01l.72,1.79-21.04,8.72c1.61,3.16,4.12,4.77,7.63,4.77s5.96-1.73,7.75-4.36h0Zm-16.52-5.66l14.07-5.84c-.77-1.97-3.1-3.34-5.84-3.34-3.51,0-8.4,3.1-8.23,9.18Zm-144.41-3.61v-6.68h22.51c.22,1.16.33,2.54.33,4.03,0,5.01-1.37,11.21-5.78,15.62-4.29,4.47-9.78,6.86-17.05,6.86-13.47,0-24.8-10.97-24.8-24.44S12.14,1,25.61,1c7.45,0,12.76,2.92,16.75,6.74l-4.71,4.71c-2.86-2.68-6.74-4.77-12.04-4.77-9.84,0-17.53,7.93-17.53,17.77s7.69,17.77,17.53,17.77c6.38,0,10.01-2.56,12.34-4.89,1.89-1.89,3.13-4.59,3.62-8.27h-15.96Z" />
                </svg>
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className="ourClient-card text-secondary  px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50%"
                  height="65"
                  fill="currentColor"
                  viewBox="0 0 327 65"
                >
                  <path d="m21.37,63.03h-12.27v-30.58H.75v-9.95h8.36v-7.08c0-8.39,3.7-14.41,15.93-14.41,2.59,0,6.65.52,6.65.52v9.24h-4.27c-4.35,0-6.04,1.32-6.04,4.98v6.76h10.15l-.9,9.95h-9.24v30.58Zm28.14-41.33c-.18,0-.36,0-.54.01-11.37,0-16.58,8.55-16.58,20.7,0,15.3,6.75,21.42,16.67,21.42,5.67,0,9.4-2.39,11.67-6.84v6.04h11.67V22.5h-11.67v6.23c-1.85-4.01-5.68-6.99-11.21-7.03Zm2.97,9.58c4.78,0,7.64,3.33,7.64,9v5.79c.01,3.82-2.36,8.29-7.64,8.29-8.13,0-7.91-8.78-7.91-11.7,0-9.83,4.33-11.38,7.91-11.38h0Zm24.62,11.49c0-4.93-.24-21.04,20.76-21.04,8.43,0,11.95,2.68,11.95,2.68l-2.83,8.77s-3.51-1.94-8.09-1.94c-5.87,0-9.61,3.4-9.61,9.38v4.29c0,5.75,3.62,9.59,9.62,9.59,4.17,0,8.02-1.95,8.02-1.95l2.82,8.59s-3.22,2.7-11.82,2.7c-19.99,0-20.82-14.46-20.82-21.07h0Zm101.11-21.06c11.37,0,16.66,8.55,16.66,20.7,0,15.3-6.75,21.42-16.67,21.42-5.67,0-9.87-2.39-12.13-6.84v6.04h-11.52V2.23l12.23-1.07v27.02c1.77-4.73,7.57-6.47,11.43-6.47h0Zm-3.43,9.57c-4.78,0-8,3.33-8,9v5.79c-.02,3.82,2.22,8.29,8,8.29,8.13,0,7.91-8.78,7.91-11.7,0-9.83-4.33-11.38-7.91-11.38Zm-43.75-9.53c-12.9,0-19.71,7.03-19.71,19.53v2.32c0,16.22,9.56,20.4,20.97,20.4s16.1-3.1,16.1-3.1l-2.29-8.25s-5.9,2.51-12.34,2.51-9.55-1.7-10.29-8.12h25.9v-6.62c0-13.56-7.64-18.67-18.33-18.67h0Zm.31,8.27c4.47,0,7.36,2.74,7.2,9.09h-15.05c.26-6.68,3.38-9.09,7.85-9.09h0Zm87.92-8.32c-13.25,0-20.22,7.47-20.22,20.84,0,18.36,12.02,21.31,20.24,21.31,12.04,0,20.04-6.48,20.04-21.14s-9-21.01-20.07-21.01Zm-.17,9.62c5.82,0,8.13,4.36,8.13,9.32v4.27c0,6.01-3.23,9.49-8.16,9.49-4.61,0-7.84-3.25-7.84-9.49v-4.27c0-6.65,3.85-9.32,7.87-9.32Zm44.6-9.62c-13.25,0-20.22,7.47-20.22,20.84,0,18.36,12.02,21.31,20.24,21.31,12.04,0,20.04-6.48,20.04-21.14s-9-21.01-20.07-21.01Zm-.17,9.62c5.82,0,8.13,4.36,8.13,9.32v4.27c0,6.01-3.23,9.49-8.15,9.49-4.61,0-7.84-3.25-7.84-9.49v-4.27c0-6.65,3.85-9.32,7.87-9.32Zm24.85,31.72V2.23l12.27-1.07v40.75l12.17-19.42h12.95l-12.69,20.11,13.18,20.42h-12.99l-12.62-19.83v19.83h-12.27Z" />
                </svg>
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className=" ourClient-card text-secondary  px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50%"
                  height="65"
                  fill="currentColor"
                  viewBox="0 0 266 65"
                >
                  <path d="m104.88,23.57h8.37v26.3h-8.37v-26.3Zm10.13,0h8.06v3.6h.16c1.94-2.82,4.46-4.35,8.11-4.35,5.75,0,9.15,4.12,9.15,9.98v17.1h-8.37v-15.42c0-2.77-1.4-4.66-4.12-4.66s-4.61,2.31-4.61,5.55v14.54h-8.37v-26.33Zm-5.93-12.05c2.78,0,5.03,2.25,5.03,5.03s-2.25,5.03-5.03,5.03-5.03-2.25-5.03-5.03,2.25-5.03,5.03-5.03Zm90.29,11.66c-.23-.03-.52-.03-.83-.03-3.19,0-5.34,1.4-7.2,4.51h-.16v-4.09h-8.01v26.3h8.37v-11.82c0-5.47,3.03-8.01,7.83-7.57v-7.31Zm41.1,10.11c-3.34-.62-6.32-.88-6.32-2.72,0-1.63,1.58-2.41,3.65-2.41,2.31,0,3.91.73,4.22,3.08h7.7c-.41-5.18-4.41-8.42-11.87-8.42-6.22,0-11.35,2.88-11.35,8.42,0,6.17,4.87,7.39,9.46,8.16,3.5.62,6.69.88,6.69,3.24,0,1.68-1.58,2.62-4.12,2.62s-4.2-1.06-4.72-3.24h-7.98c.6,5.42,5.34,8.68,12.75,8.68,6.89,0,11.97-2.98,11.97-8.73-.03-6.74-5.47-7.9-10.08-8.68h0Zm-27.65,11.35c-3.45,0-5.39-2.2-5.91-5.75h18.89c.05-5.34-1.48-9.93-4.61-12.8-2.25-2.05-5.23-3.29-8.99-3.29-8.01,0-13.5,6.01-13.5,13.86s5.34,13.97,14.02,13.97c3.34,0,6.01-.88,8.22-2.41,2.31-1.58,3.86-3.86,4.41-6.22h-8.16c-.7,1.66-2.13,2.64-4.35,2.64h0Zm-.47-15.89c2.72,0,4.66,2,4.98,5.13h-10.37c.57-3.11,2.23-5.13,5.39-5.13Zm52.92,14.93c-.39.03-.91.03-1.4.03-1.79,0-2.93-.52-2.93-2.57v-12.34h4.33v-5.23h-4.33v-8.32h-8.16v8.32h-2.57v5.23h2.57v14.12c0,5.65,3.5,7.26,8.37,7.26,1.87,0,3.27-.13,4.12-.31v-6.19Zm-109.83,0c-.34,0-.73.03-1.09.03-1.79,0-2.93-.52-2.93-2.57v-12.34h4.02v-5.23h-4.02v-8.32h-8.16v8.32h-2.72v5.23h2.72v14.12c0,5.65,3.5,7.26,8.37,7.26,1.66,0,2.95-.1,3.81-.26v-6.25Zm-.41-7c0-7.85,5.49-13.86,13.5-13.86,3.76,0,6.74,1.24,8.99,3.29,3.14,2.88,4.66,7.44,4.61,12.8h-18.89c.52,3.55,2.46,5.75,5.91,5.75,2.2,0,3.65-.98,4.35-2.62h8.16c-.57,2.36-2.1,4.61-4.41,6.22-2.2,1.53-4.87,2.41-8.22,2.41-8.68-.03-14.02-6.04-14.02-13.99h0Zm18.66-2.77c-.31-3.14-2.25-5.13-4.98-5.13-3.19,0-4.82,2-5.39,5.13h10.37ZM75.44,13.15h14.54c4.46,0,7.75,1.24,10.03,3.39,2.36,2.2,3.71,5.34,3.71,9.04,0,7.05-4.87,12.02-12.44,12.02h-7.36v12.28h-8.47V13.15Zm14.9,17.26c3.29,0,5.13-1.94,5.13-4.87s-1.89-4.72-5.13-4.72h-6.43v9.61h6.43v-.03ZM32.22,1C14.8,1,.73,15.1.73,32.49c0,13.35,8.29,24.75,20.01,29.34-.29-2.49-.52-6.32.1-9.04.57-2.46,3.68-15.65,3.68-15.65,0,0-.93-1.89-.93-4.66,0-4.38,2.54-7.65,5.7-7.65,2.7,0,3.99,2.02,3.99,4.43,0,2.7-1.71,6.74-2.62,10.5-.75,3.14,1.58,5.7,4.66,5.7,5.6,0,9.9-5.91,9.9-14.41,0-7.54-5.42-12.8-13.16-12.8-8.97,0-14.23,6.71-14.23,13.66,0,2.7,1.04,5.6,2.33,7.18.26.31.29.6.21.91-.23.98-.78,3.14-.88,3.58-.13.57-.47.7-1.06.41-3.89-1.87-6.32-7.62-6.32-12.23,0-9.93,7.2-19.05,20.81-19.05,10.91,0,19.41,7.77,19.41,18.19s-6.84,19.59-16.33,19.59c-3.19,0-6.19-1.66-7.2-3.63,0,0-1.58,6.01-1.97,7.49-.7,2.75-2.62,6.17-3.91,8.27,2.95.91,6.06,1.4,9.33,1.4,17.39,0,31.49-14.1,31.49-31.49-.03-17.42-14.12-31.51-31.51-31.51Z" />
                </svg>
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className="ourClient-card text-secondary  px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50%"
                  height="65"
                  fill="currentColor"
                  viewBox="0 0 341 65"
                >
                  <path d="m29.94,1c2.89,0,5.56.22,8.01.88,2.45.44,4.46,1.35,6.25,2.45s3.11,2.67,4.02,4.68c.88,2.01,1.35,4.46,1.35,7.13,0,3.11-.66,5.78-2.23,7.79-1.35,2.01-3.55,3.8-6.25,5.12,3.8,1.1,6.69,3.11,8.45,5.78,1.76,2.67,2.89,6,2.89,9.8,0,3.11-.66,5.78-1.79,8.01-1.1,2.23-2.89,4.24-4.9,5.56-2.01,1.35-4.46,2.45-7.13,3.11-2.67.66-5.34,1.1-8.01,1.1l-29.83.06V1h29.17Zm-1.79,24.94c2.45,0,4.46-.66,6-1.79,1.54-1.13,2.23-3.11,2.23-5.56,0-1.35-.22-2.67-.66-3.55-.44-.88-1.1-1.57-2.01-2.23-.88-.44-1.79-.88-2.89-1.1s-2.23-.22-3.55-.22h-12.91v14.48s13.79-.03,13.79-.03Zm.66,26.28c1.35,0,2.67-.22,3.8-.44,1.1-.22,2.23-.66,3.11-1.35s1.57-1.35,2.23-2.45c.44-1.1.88-2.45.88-4.02,0-3.11-.88-5.34-2.67-6.91-1.79-1.35-4.24-2.01-7.13-2.01h-14.67v17.15h14.45v.03Zm42.99-.22c1.79,1.79,4.46,2.67,8.01,2.67,2.45,0,4.68-.66,6.47-1.79,1.79-1.35,2.89-2.67,3.33-4.02h10.9c-1.79,5.34-4.46,9.14-8.01,11.59-3.55,2.23-7.79,3.55-12.91,3.55-3.55,0-6.69-.66-9.58-1.79-2.89-1.1-5.12-2.67-7.13-4.9-2.01-2.01-3.55-4.46-4.46-7.35-1.1-2.89-1.57-6-1.57-9.58,0-3.33.44-6.47,1.57-9.36s2.67-5.34,4.68-7.57c2.01-2.01,4.46-3.8,7.13-4.9,2.89-1.1,5.78-1.79,9.36-1.79,3.8,0,7.13.66,10.02,2.23,2.89,1.57,5.12,3.33,6.91,6,1.79,2.45,3.11,5.34,4.02,8.45.44,3.11.66,6.25.44,9.8h-32.28c0,3.63,1.32,6.96,3.11,8.75Zm14.04-23.39c-1.57-1.57-4.02-2.45-6.91-2.45-2.01,0-3.55.44-4.9,1.1s-2.23,1.57-3.11,2.45c-.88.88-1.35,2.01-1.57,3.11s-.44,2.01-.44,2.89h20.04c-.44-3.3-1.57-5.53-3.11-7.1h0Zm-19.6-23.37h24.94v6h-24.94v-6ZM118.35,1v23.15h.22c1.57-2.67,3.55-4.46,6-5.56s4.68-1.79,7.13-1.79c3.33,0,6,.44,8.01,1.35,2.01.88,3.8,2.23,4.9,3.8s2.01,3.55,2.45,5.78c.44,2.23.66,4.68.66,7.57v27.39h-12.25v-25.16c0-3.8-.66-6.47-1.79-8.23s-3.08-2.7-5.97-2.7c-3.33,0-5.78,1.1-7.13,2.89-1.57,2.01-2.23,5.34-2.23,9.8v23.39h-12.25V1h12.25Zm38.31,23.61c1.35-2.01,2.89-3.33,4.9-4.68,2.01-1.1,4.24-2.01,6.69-2.45,2.45-.44,4.9-.66,7.35-.66,2.23,0,4.46.22,6.91.44,2.23.22,4.46.88,6.25,1.79,2.01.88,3.33,2.23,4.68,3.8,1.1,1.57,1.79,3.8,1.79,6.47v23.39c0,2.01.22,4.02.44,5.78.22,1.79.88,3.33,1.57,4.24h-12.47c-.44-.44-.66-1.35-.88-2.01-.22-.66-.22-1.57-.22-2.23-2.01,2.01-4.24,3.33-6.91,4.24-2.67.88-5.34,1.1-8.01,1.1-2.23,0-4.02-.22-6-.88-1.79-.44-3.33-1.35-4.9-2.45-1.35-1.1-2.45-2.45-3.33-4.24-.66-1.79-1.1-3.55-1.1-6s.44-4.68,1.35-6.25c.88-1.57,2.01-2.89,3.33-4.02,1.35-.88,3.11-1.79,4.9-2.23s3.55-.88,5.56-1.1c1.79-.22,3.55-.44,5.34-.66s3.33-.44,4.68-.66c1.35-.44,2.45-.88,3.33-1.57.88-.66,1.1-1.57,1.1-2.89s-.22-2.45-.66-3.11c-.44-.66-1.1-1.35-1.79-1.79-.66-.44-1.57-.66-2.45-.88-.88-.22-2.01-.22-3.11-.22-2.45,0-4.24.44-5.56,1.57-1.35,1.1-2.23,2.89-2.45,5.12h-12.25c-.08-2.75.8-5.2,1.93-6.96h0Zm24.28,17.37c-.66.22-1.57.44-2.45.66-.88.22-1.79.22-2.89.44-.88.22-2.01.22-2.89.44s-1.79.44-2.67.66c-.88.22-1.79.66-2.23,1.1-.66.44-1.1,1.1-1.57,1.79-.66.88-.66,1.79-.66,2.89s.22,2.01.66,2.67c.44.66.88,1.35,1.57,1.79.66.44,1.57.66,2.45.88s1.79.22,2.89.22c2.45,0,4.24-.44,5.56-1.1,1.35-.88,2.23-1.79,2.89-2.89s1.1-2.23,1.1-3.33c.22-1.1.22-2.01.22-2.67v-4.68c-.66.44-1.32.91-1.98,1.13Zm32.72-24.06v6.25h.22c1.57-2.67,3.55-4.46,6-5.56s5.12-1.79,7.57-1.79c3.33,0,6,.44,8.01,1.35,2.23.88,3.8,2.23,4.9,3.8,1.1,1.57,2.01,3.55,2.67,5.78.44,2.23.66,4.68.66,7.57v27.39h-12.25v-25.16c0-3.8-.66-6.47-1.79-8.23-1.1-1.79-3.11-2.89-6.25-2.89-3.33,0-5.78,1.35-7.35,3.33-1.57,2.01-2.23,5.34-2.23,9.8v23.39h-12.25V17.93h12.08Zm57.47,8.01c-2.01,0-3.55.44-4.9,1.35-1.35.88-2.45,2.01-3.33,3.55-.88,1.35-1.35,2.89-1.79,4.68s-.44,3.33-.44,5.12c0,1.57.22,3.33.44,4.9.44,1.79.88,3.11,1.79,4.46.88,1.35,1.79,2.45,3.11,3.33,1.35.88,2.89,1.35,4.9,1.35,2.89,0,5.12-.88,6.91-2.45,1.57-1.57,2.67-3.8,2.89-6.69h11.81c-.88,6-3.11,10.46-6.91,13.6-3.8,3.11-8.7,4.68-14.7,4.68-3.33,0-6.47-.66-9.14-1.79-2.89-1.1-5.12-2.67-7.13-4.68-2.01-2.01-3.55-4.46-4.68-7.13-1.1-2.89-1.57-5.78-1.57-9.14,0-3.55.44-6.69,1.57-9.58,1.1-2.89,2.45-5.56,4.46-7.79,2.01-2.23,4.46-3.8,7.13-5.12,2.89-1.1,6-1.79,9.58-1.79,2.67,0,5.12.44,7.57,1.1s4.68,1.79,6.47,3.11c2.01,1.35,3.55,3.11,4.68,5.34,1.1,2.01,1.79,4.68,2.01,7.57h-12.03c-.47-5.31-3.36-7.98-8.7-7.98h0Zm39.85,26.06c1.79,1.79,4.68,2.67,8.01,2.67,2.45,0,4.68-.66,6.47-1.79,1.79-1.35,2.89-2.67,3.33-4.02h10.68c-1.79,5.34-4.46,9.14-8.01,11.59-3.55,2.23-7.79,3.55-12.91,3.55-3.55,0-6.69-.66-9.58-1.79-2.89-1.1-5.12-2.67-7.13-4.9-2.01-2.01-3.55-4.46-4.46-7.35-1.1-2.89-1.57-6-1.57-9.58,0-3.33.44-6.47,1.57-9.36,1.1-2.89,2.67-5.34,4.68-7.57,2.01-2.01,4.46-3.8,7.13-4.9,2.89-1.1,6-1.79,9.36-1.79,3.8,0,7.13.66,9.8,2.23,2.89,1.57,5.12,3.33,6.91,6,1.79,2.45,3.11,5.34,4.02,8.45.88,3.11,1.1,6.47.88,10.02h-32.28c0,3.41,1.32,6.74,3.11,8.53h0Zm14.26-23.39c-1.57-1.57-4.02-2.45-6.91-2.45-2.01,0-3.55.44-4.9,1.1s-2.45,1.57-3.11,2.45c-.66.88-1.35,2.01-1.57,3.11-.22,1.1-.44,2.01-.44,2.89h20.04c-.66-3.3-1.79-5.53-3.11-7.1Z" />
                </svg>
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className="ourClient-card text-secondary  px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50%"
                  height="65"
                  fill="currentColor"
                  viewBox="0 0 232 65"
                >
                  <path d="m34.38,27.43c-1.81,0-3.24,1.56-3.24,3.49s1.46,3.49,3.24,3.49,3.24-1.56,3.24-3.49-1.46-3.49-3.24-3.49Zm-11.6,0c-1.81,0-3.24,1.56-3.24,3.49s1.46,3.49,3.24,3.49,3.24-1.56,3.24-3.49c.03-1.94-1.43-3.49-3.24-3.49ZM49.82,1H7.25C3.66,1,.74,3.92.74,7.51v42.57c0,3.59,2.92,6.51,6.51,6.51h36.03l-1.68-5.81,4.07,3.75,3.84,3.53,6.86,5.94V7.51c-.03-3.59-2.95-6.51-6.54-6.51Zm-12.26,41.14s-1.14-1.37-2.1-2.54c4.16-1.18,5.75-3.75,5.75-3.75-1.3.86-2.54,1.46-3.65,1.87-1.59.67-3.11,1.08-4.61,1.37-3.05.57-5.85.41-8.23-.03-1.81-.35-3.37-.83-4.67-1.37-.73-.29-1.52-.64-2.32-1.08-.1-.06-.19-.1-.29-.16-.06-.03-.1-.06-.13-.06-.57-.32-.89-.54-.89-.54,0,0,1.52,2.51,5.56,3.72-.95,1.21-2.13,2.61-2.13,2.61-7.02-.22-9.69-4.8-9.69-4.8,0-10.13,4.57-18.36,4.57-18.36,4.57-3.4,8.9-3.3,8.9-3.3l.32.38c-5.72,1.62-8.32,4.13-8.32,4.13,0,0,.7-.38,1.87-.89,3.4-1.49,6.1-1.87,7.21-2,.19-.03.35-.06.54-.06,1.94-.25,4.13-.32,6.42-.06,3.02.35,6.26,1.24,9.56,3.02,0,0-2.51-2.38-7.91-4l.44-.51s4.35-.1,8.9,3.3c0,0,4.57,8.23,4.57,18.36,0-.03-2.67,4.54-9.69,4.77Zm47.97-27.54h-10.55v11.85l7.02,6.32v-11.5h3.75c2.38,0,3.56,1.14,3.56,2.99v8.8c0,1.84-1.11,3.08-3.56,3.08h-10.8v6.7h10.55c5.66.03,10.96-2.8,10.96-9.28v-9.47c.03-6.61-5.27-9.5-10.93-9.5h0Zm55.28,18.97v-9.72c0-3.49,6.29-4.29,8.2-.79l5.81-2.35c-2.29-5.02-6.45-6.48-9.91-6.48-5.66,0-11.25,3.27-11.25,9.63v9.72c0,6.42,5.59,9.63,11.12,9.63,3.56,0,7.82-1.75,10.17-6.32l-6.23-2.86c-1.52,3.91-7.91,2.95-7.91-.44h0Zm-19.22-8.39c-2.19-.48-3.65-1.27-3.75-2.64.13-3.27,5.18-3.4,8.13-.25l4.67-3.59c-2.92-3.56-6.23-4.51-9.63-4.51-5.18,0-10.2,2.92-10.2,8.45s4.13,8.26,8.67,8.96c2.32.32,4.89,1.24,4.83,2.83-.19,3.02-6.42,2.86-9.25-.57l-4.51,4.23c2.64,3.4,6.23,5.11,9.59,5.11,5.18,0,10.93-2.99,11.15-8.45.32-6.89-4.7-8.64-9.72-9.56h0Zm-21.29,17.63h7.12V14.6h-7.12v28.21Zm120-28.21h-10.55v11.85l7.02,6.32v-11.5h3.75c2.38,0,3.56,1.14,3.56,2.99v8.8c0,1.84-1.11,3.08-3.56,3.08h-10.8v6.7h10.58c5.66.03,10.96-2.8,10.96-9.28v-9.47c0-6.61-5.31-9.5-10.96-9.5Zm-51.75-.38c-5.85,0-11.66,3.18-11.66,9.69v9.63c0,6.45,5.85,9.69,11.72,9.69s11.66-3.24,11.66-9.69v-9.63c0-6.48-5.88-9.69-11.72-9.69Zm4.57,19.32c0,2.03-2.29,3.08-4.54,3.08s-4.57-.98-4.57-3.08v-9.63c0-2.07,2.22-3.18,4.45-3.18s4.67.98,4.67,3.18v9.63Zm32.69-9.63c-.16-6.61-4.67-9.28-10.48-9.28h-11.28v28.21h7.21v-8.96h1.27l6.54,8.96h8.9l-7.69-9.69c3.4-1.08,5.53-4.03,5.53-9.25Zm-10.36,3.81h-4.19v-6.45h4.19c4.48,0,4.48,6.45,0,6.45Z" />
                </svg>
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className=" ourClient-card text-secondary  px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50%"
                  height="65"
                  fill="currentColor"
                  viewBox="0 0 517 65"
                >
                  <path d="m47.53,39.63H13.05v-8.56h44.46c-1.17-3.63-4.93-7-11.54-7H13.69c-7.39,0-11.67,2.72-11.67,8.69v6.35c0,5.19,4.41,8.17,10.89,8.17h34.87v9.07H.86c1.17,4.93,4.93,7.52,11.67,7.52h35.13c7.39,0,11.02-2.85,11.02-8.94v-6.35c0-5.57-4.28-8.56-11.15-8.94Zm70.39-15.43h-42.52v39.8h12.06v-15.3h31.37c8.69,0,13.48-2.98,13.48-9.98v-4.41c-.13-6.48-5.57-10.11-14.39-10.11Zm3.89,12.7c0,2.85-.52,4.41-5.19,4.41h-29.17l.13-10.37h28.52c5.19,0,5.83,1.56,5.83,4.28v1.69h-.13Zm50.56,11.54h-25.67l-6.35,6.74h37.07l6.35,8.81h14.26l-30.72-41.48-7.26,8.94,12.31,16.98Zm48.74-17.37h45.11c-1.17-4.67-5.7-7-12.19-7h-33.7c-5.83,0-11.41,2.33-11.41,8.69v22.3c0,6.35,5.57,8.69,11.41,8.69h34.09c7.78,0,10.5-2.2,11.8-7.52h-45.11v-25.15Zm98,13.22v-6.74h-36.43v26.44h53.8v-7.52h-41.61v-12.19h24.24Zm-35.13-20.09h54.31v7h-54.31v-7Zm87.76,0h-18.93l22.3,16.33c3.24-2.2,7-4.54,10.37-6.48l-13.74-9.85Zm27.48,20.35c-3.24,2.2-6.48,4.67-9.59,7l16.85,12.31h19.06l-26.31-19.31ZM516.14,1c-103.7,5.96-151.67,50.3-162.43,60.8l-2.2,2.07h19.19C422.55,11.89,497.08,2.69,516.14,1Z" />
                </svg>
              </div>
            </div>
            <div className="col-6 col-md-4 col-xl-3 text-center">
              <div className="ourClient-card text-secondary  px-4 py-3 px-md-6 py-md-4 px-lg-8 py-lg-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50%"
                  height="65"
                  fill="currentColor"
                  viewBox="0 0 296 65"
                >
                  <path d="m104.66,37.29l-1.76,4.98h-.15c-.29-1.12-.83-2.83-1.71-4.88l-9.43-23.69h-9.23v37.75h6.1v-23.3c0-1.47,0-3.13-.05-5.18-.05-1.03-.15-1.81-.2-2.39h.15c.29,1.47.63,2.54.88,3.22l11.33,27.54h4.3l11.23-27.79c.24-.63.49-1.9.73-2.98h.15c-.15,2.78-.24,5.27-.29,6.79v23.93h6.5V13.6h-8.89l-9.67,23.69Zm24.71-13.04h6.35v27.06h-6.35v-27.06Zm3.22-11.43c-1.07,0-1.95.39-2.69,1.07-.73.68-1.12,1.56-1.12,2.64s.39,1.9,1.12,2.59c.73.68,1.61,1.03,2.69,1.03s2-.39,2.69-1.03c.73-.68,1.12-1.56,1.12-2.59s-.39-1.9-1.12-2.64c-.63-.68-1.56-1.07-2.69-1.07m25.64,11.18c-1.17-.24-2.39-.39-3.57-.39-2.88,0-5.52.63-7.72,1.9-2.2,1.27-3.96,3.03-5.08,5.23-1.17,2.25-1.76,4.83-1.76,7.81,0,2.59.59,4.88,1.71,6.98,1.12,2.05,2.69,3.71,4.79,4.83,2,1.12,4.35,1.71,6.98,1.71,3.03,0,5.62-.63,7.67-1.81l.05-.05v-5.86l-.24.2c-.93.68-2,1.27-3.08,1.61-1.12.39-2.15.59-3.03.59-2.54,0-4.54-.73-5.96-2.34-1.47-1.56-2.2-3.71-2.2-6.4s.73-4.98,2.25-6.59c1.51-1.61,3.52-2.44,5.96-2.44,2.05,0,4.15.68,6.06,2.05l.24.2v-6.2l-.05-.05c-.83-.34-1.76-.73-3.03-.98m20.95-.2c-1.56,0-3.03.49-4.3,1.51-1.07.88-1.81,2.15-2.44,3.66h-.05v-4.74h-6.35v27.06h6.35v-13.82c0-2.34.49-4.3,1.56-5.71,1.07-1.47,2.44-2.2,4.1-2.2.59,0,1.17.15,1.9.24.68.2,1.17.39,1.51.63l.24.2v-6.35l-.15-.05c-.44-.29-1.32-.44-2.39-.44m17.29-.15c-4.44,0-8.01,1.32-10.5,3.91-2.54,2.59-3.76,6.15-3.76,10.65,0,4.2,1.27,7.62,3.71,10.11,2.44,2.44,5.76,3.71,9.91,3.71s7.81-1.32,10.3-3.96c2.54-2.64,3.76-6.15,3.76-10.5s-1.17-7.72-3.57-10.21c-2.3-2.49-5.67-3.71-9.87-3.71m5.08,20.8c-1.17,1.51-3.03,2.25-5.32,2.25s-4.15-.73-5.47-2.34c-1.32-1.51-1.95-3.71-1.95-6.5s.68-5.08,1.95-6.64c1.32-1.56,3.13-2.34,5.42-2.34s4,.73,5.27,2.25c1.27,1.51,1.95,3.71,1.95,6.59-.1,2.93-.63,5.23-1.86,6.74m22.51-8.99c-2-.83-3.27-1.47-3.86-2-.49-.49-.73-1.17-.73-2.05,0-.73.29-1.47,1.03-1.95s1.56-.73,2.78-.73c1.07,0,2.2.2,3.27.49s2.05.73,2.83,1.32l.24.2v-5.96l-.15-.05c-.73-.29-1.71-.59-2.88-.83-1.17-.2-2.25-.29-3.13-.29-3.03,0-5.52.73-7.47,2.34-1.95,1.51-2.88,3.57-2.88,5.96,0,1.27.2,2.39.63,3.32s1.07,1.81,1.95,2.54c.88.68,2.15,1.47,3.91,2.2,1.47.63,2.59,1.12,3.27,1.51.68.39,1.12.83,1.47,1.17.24.39.39.88.39,1.51,0,1.81-1.37,2.69-4.15,2.69-1.07,0-2.2-.2-3.52-.63s-2.54-1.07-3.57-1.81l-.24-.2v6.2l.15.05c.93.44,2.05.73,3.42,1.07,1.37.24,2.59.44,3.66.44,3.27,0,5.96-.73,7.86-2.34,1.95-1.56,2.98-3.57,2.98-6.15,0-1.81-.49-3.42-1.56-4.64-1.42-1.17-3.17-2.39-5.71-3.37m24.03-11.82c-4.44,0-8.01,1.32-10.5,3.91s-3.76,6.15-3.76,10.65c0,4.2,1.27,7.62,3.71,10.11,2.44,2.44,5.76,3.71,9.91,3.71s7.81-1.32,10.3-3.96c2.54-2.64,3.76-6.15,3.76-10.5s-1.17-7.72-3.57-10.21c-2.3-2.49-5.67-3.71-9.87-3.71m5.03,20.8c-1.17,1.51-3.03,2.25-5.32,2.25s-4.15-.73-5.47-2.34c-1.32-1.51-1.95-3.71-1.95-6.5s.68-5.08,1.95-6.64c1.32-1.56,3.13-2.34,5.42-2.34s4,.73,5.27,2.25c1.27,1.51,1.95,3.71,1.95,6.59s-.63,5.23-1.86,6.74m42.34-14.99v-5.23h-6.4v-8.01l-.2.05-6.06,1.81-.15.05v6.1h-9.57v-3.42c0-1.56.39-2.78,1.07-3.57.68-.78,1.71-1.17,2.98-1.17.88,0,1.81.2,2.83.63l.24.15v-5.52l-.15-.05c-.88-.29-2.05-.49-3.57-.49-1.9,0-3.57.44-5.08,1.17-1.51.83-2.64,1.95-3.47,3.47-.83,1.47-1.27,3.13-1.27,5.03v3.76h-4.44v5.18h4.44v21.88h6.4v-21.83h9.57v13.92c0,5.71,2.69,8.6,8.06,8.6.88,0,1.81-.15,2.69-.29.93-.2,1.61-.44,2-.63l.05-.05v-5.23l-.24.2c-.39.24-.73.44-1.32.59-.49.15-.93.2-1.27.2-1.27,0-2.15-.29-2.78-1.03-.59-.68-.88-1.81-.88-3.47v-12.8h6.5ZM.54,1h29.94v29.94H.54V1Zm33.06,0h29.94v29.94h-29.94V1ZM.54,34.06h29.94v29.94H.54v-29.94Zm33.06,0h29.94v29.94h-29.94v-29.94Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container-about d-flex justify-content-center align-items-center"
        id="contact"
      >
        <svg
          className="svg-about"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 790 563"
          fill="none"
        >
          <g id="Image">
            <g id="g14">
              <g id="g16">
                <g id="g22">
                  <path
                    id="path24"
                    d="M578.06 12.9772C592.384 8.33142 607.668 7.43103 622.682 8.31278C644.252 9.57946 666.668 15.0178 682.527 29.8837C692.521 39.2526 699.149 51.6277 707.182 62.7655C730.486 95.0785 766.513 118.198 782.236 154.912C795.674 186.289 790.623 225.749 767.498 250.666C744.37 275.583 703.649 282.658 675.018 264.535C647.531 247.136 635.383 212.503 610.273 191.742C592.326 176.901 569.144 170.28 549.646 157.607C529.69 144.636 513.457 124.248 509.79 100.515C506.745 80.8173 513.744 59.4156 528.903 46.4558C543.731 33.7796 559.331 19.0536 578.06 12.9772Z"
                    fill="#D0F6FF"
                  />
                </g>
                <g id="g26">
                  <path
                    id="path28"
                    d="M702.629 254.14C677.841 258.169 653.602 251.674 628.841 247.05C605.059 242.608 581.372 234.267 562.49 218.522C553.842 211.31 546.177 202.344 542.784 191.529C537.944 176.097 542.362 159.436 542.319 143.243C542.267 124.241 537.593 105.929 524.57 91.9138C516.642 83.3826 507.429 75.9038 501.21 66.026C488.249 45.4368 498.285 17.8695 518.578 6.24557C537.067 -4.34208 560.588 -0.151769 579.793 9.03335C598.996 18.2198 615.855 31.9082 635.139 40.9228C656.28 50.8045 679.407 54.6779 702.724 56.9022C720.556 58.6044 738.716 56.5333 753.266 67.1156C763.675 74.6877 771.032 86.0519 775.307 98.2911C783.396 121.448 781.768 148.673 778.037 172.583C775.54 188.601 770.517 204.461 761.348 217.755C750.094 234.074 732.89 245.819 714.058 251.504C710.234 252.66 706.426 253.523 702.629 254.14Z"
                    fill="#ADE0EC"
                  />
                </g>
                <g id="g30">
                  <path
                    id="path32"
                    d="M663.601 562.578H87.0689C43.5385 528.913 13.2922 480.886 5.1219 426.023C1.72497 403.207 3.65744 376.191 22.008 362.528C50.2285 341.516 92.5784 368.009 124.46 353.325C144.998 343.869 155.119 319.297 155.332 296.439C155.544 273.583 147.922 251.523 142.217 229.409C136.51 207.295 132.749 183.417 140.459 161.935C148.169 140.454 170.87 123.025 192.716 128.727C211.437 133.614 223.318 152.833 241.257 160.133C259.931 167.732 281.608 160.819 298.184 149.256C314.758 137.694 327.949 121.87 343.441 108.858C370.638 86.0156 406.562 72.0169 441.495 77.35C476.426 82.6831 508.747 110.108 514.202 145.471C518.662 174.4 506.652 207.826 524.152 231.129C543.883 257.401 585.152 250.025 613.676 265.983C636.899 278.972 649.286 309.077 642.052 334.934C634.666 361.336 609.565 383.494 613.653 410.622C616.583 430.071 633.6 443.505 645.587 458.982C668.627 488.727 679.049 528.158 663.601 562.578Z"
                    fill="#D0F6FF"
                  />
                </g>
                <g id="g34">
                  <path
                    id="path36"
                    d="M636.536 562.578H142.588C127.567 548.706 110.711 535.931 102.179 517.242C93.6475 498.553 93.6698 474.269 107.702 459.372C124.638 441.394 152.947 443.847 176.763 437.899C204.228 431.038 229.205 408.689 232.723 380.251C237.265 343.537 206.911 309.992 208.804 273.041C210.296 243.911 234.698 217.737 263.314 214.567C282.66 212.424 302.727 219.607 321.415 214.109C338.741 209.012 351.237 194.119 366.296 184.052C383.968 172.235 406.528 167.099 426.891 172.974C447.257 178.85 464.492 196.695 467.235 217.968C470.152 240.588 458.004 266.283 470.888 284.991C480.485 298.927 499.63 301.618 516.392 301.075C533.155 300.531 551.03 298.252 565.763 306.372C579.463 313.921 587.611 329.548 589.138 345.273C590.664 360.996 586.334 376.788 579.943 391.199C574.357 403.794 567.162 415.706 562.961 428.843C558.759 441.979 557.893 457.066 564.737 469.006C571.941 481.577 585.915 488.105 597.307 496.94C617.442 512.552 635.027 536.936 636.536 562.578Z"
                    fill="#ADE0EC"
                  />
                </g>
                <g id="g38">
                  <path
                    id="path40"
                    d="M595.195 76.2172L623.725 149.709L684.511 114.948L595.195 76.2172Z"
                    fill="#FAFAFA"
                  />
                </g>
                <g id="g42">
                  <path
                    id="path44"
                    d="M595.195 76.2172L651.26 133.962L666.528 125.232L595.195 76.2172Z"
                    fill="#DADADA"
                  />
                </g>
                <g id="g46">
                  <path
                    id="path48"
                    d="M666.528 125.231L655.896 151.885L651.262 133.962L666.528 125.231Z"
                    fill="#DADADA"
                  />
                </g>
                <g id="g50">
                  <path
                    id="path52"
                    d="M655.896 151.885L642.776 138.814L651.262 133.962L655.896 151.885Z"
                    fill="#B2B2B2"
                  />
                </g>
                <g id="g54">
                  <path
                    id="path56"
                    d="M222.015 539.778C157.683 522.604 101.579 476.087 72.2367 415.592C60.1279 390.628 52.3612 362.908 54.182 335.155C56.0014 307.4 68.2732 279.663 90.2639 263.011C112.253 246.359 144.303 242.756 167.56 257.538C190.03 271.821 200.733 299.209 220.204 317.461C243.475 339.274 280.404 345.641 308.459 330.683C336.514 315.723 352.288 279.369 342.05 248.968C332.575 220.834 305.793 203.339 282.527 185.228C259.261 167.115 236.126 141.651 239.454 112.116C242.315 86.7319 264.382 67.653 287.628 57.7513C332.132 38.7951 389.516 47.2223 419.844 85.2787C452.476 126.224 446.202 185.954 431.486 236.425C416.769 286.896 395.069 337.985 402.391 390.086C408.475 433.375 434.97 472.304 470.109 497.688C505.247 523.075 548.365 535.649 591.441 538.326C634.426 540.999 680.569 532.908 712.364 503.476C744.158 474.044 754.899 419.157 726.78 386.108C712.226 369.003 690.497 360.328 669.604 352.466C648.708 344.604 626.907 336.377 611.765 319.807C596.621 303.236 590.753 275.553 604.995 258.181C621.492 238.058 665.44 235.858 680.982 214.969C692.069 200.069 679.116 171.364 666.529 157.269"
                    stroke="#00C0E0"
                    strokeWidth="2.541"
                    strokeMiterlimit="10"
                    strokeDasharray="7.62 7.62"
                  />
                </g>
                <g id="g58">
                  <path
                    id="path60"
                    d="M186.221 462.671C158.423 444.172 133.639 421.035 113.173 394.475C104.595 383.341 96.7115 371.5 91.5083 358.398C86.3038 345.294 83.8862 330.794 86.4431 316.909C88.2757 306.953 93.6209 296.589 103.112 293.404C110.525 290.917 118.902 293.505 125.077 298.35C131.253 303.195 135.584 310.023 139.418 316.916C154.207 343.52 163.287 372.9 174.224 401.352C179.474 415.006 185.205 428.511 192.17 441.366C195.631 447.754 199.387 453.984 203.532 459.939C207.289 465.334 214.117 471.144 216.477 476.969C211.073 481.321 191.263 466.026 186.221 462.671Z"
                    fill="#009D9C"
                  />
                </g>
                <g id="g62">
                  <path
                    id="path64"
                    d="M107.952 308.508C121.544 366.877 153.477 420.713 197.968 460.267"
                    stroke="#00BBBF"
                    strokeWidth="2.02"
                    strokeMiterlimit="10"
                  />
                </g>
                <g id="g66">
                  <path
                    id="path68"
                    d="M556.282 462.962C580.155 451.221 602.114 435.493 621.004 416.609C628.922 408.693 636.362 400.145 641.81 390.319C647.257 380.493 650.64 369.27 650.028 358.018C649.587 349.946 646.41 341.19 639.223 337.682C633.608 334.942 626.717 336.117 621.339 339.307C615.961 342.497 611.841 347.447 608.109 352.504C593.705 372.014 583.539 394.316 571.997 415.691C566.459 425.947 560.553 436.037 553.736 445.484C550.349 450.177 546.746 454.716 542.861 458.995C539.341 462.875 533.349 466.761 530.891 471.124C534.727 475.129 551.952 465.092 556.282 462.962Z"
                    fill="#009D9C"
                  />
                </g>
                <g id="g70">
                  <path
                    id="path72"
                    d="M633.861 349.129C617.182 393.899 586.452 433.173 547.233 459.836"
                    stroke="#00BBBF"
                    strokeWidth="1.612"
                    strokeMiterlimit="10"
                  />
                </g>
                <g id="g74">
                  <path
                    id="path76"
                    d="M198.233 424.458C213.177 349.774 197.247 269.251 155.048 206.17"
                    stroke="#11ABBA"
                    strokeWidth="2.541"
                    strokeMiterlimit="10"
                  />
                </g>
                <g id="g78">
                  <path
                    id="path80"
                    d="M159.471 213.554C147.424 209.56 136.887 201.07 130.331 190.079C123.775 179.087 121.256 165.687 123.366 153.024C136.148 156.495 148.154 164.541 154.962 176.037C161.771 187.536 162.465 200.493 159.471 213.554Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g82">
                  <path
                    id="path84"
                    d="M172.923 237.731C170.163 228.217 170.886 217.71 174.922 208.676C178.958 199.643 186.273 192.157 195.149 187.981C198.557 197.74 198.756 208.999 194.512 218.417C190.269 227.834 182.434 233.949 172.923 237.731Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g86">
                  <path
                    id="path88"
                    d="M173.775 236.831C166.404 230.308 156.684 226.574 146.897 226.504C137.11 226.434 127.338 230.03 119.876 236.447C127.196 243.672 137.206 248.568 147.423 248.608C157.641 248.647 166.403 243.999 173.775 236.831Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g90">
                  <path
                    id="path92"
                    d="M188.104 276.094C187.024 266.239 189.542 256.02 195.07 247.837C200.597 239.655 209.088 233.576 218.546 231.029C220.225 241.241 218.483 252.363 212.686 260.887C206.887 269.41 198.122 274.049 188.104 276.094Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g94">
                  <path
                    id="path96"
                    d="M189.099 275.358C182.962 267.634 174.033 262.24 164.408 260.443C154.782 258.647 144.542 260.463 136.091 265.464C142.057 273.87 151.07 280.459 161.124 282.301C171.179 284.145 180.606 281.115 189.099 275.358Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g98">
                  <path
                    id="path100"
                    d="M198.154 314.469C197.924 304.556 201.31 294.598 207.521 286.933C213.729 279.267 222.71 273.961 232.351 272.257C233.146 282.578 230.456 293.504 223.948 301.485C217.439 309.467 208.308 313.315 198.154 314.469Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g102">
                  <path
                    id="path104"
                    d="M199.208 313.823C193.758 305.586 185.324 299.426 175.891 296.789C166.457 294.15 156.099 295.057 147.252 299.294C152.471 308.194 160.885 315.553 170.744 318.274C180.602 320.997 190.253 318.808 199.208 313.823Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g106">
                  <path
                    id="path108"
                    d="M203.971 356.696C205.264 346.866 210.136 337.563 217.445 330.968C224.754 324.372 234.439 320.543 244.225 320.378C243.428 330.699 239.095 341.071 231.443 347.929C223.789 354.789 214.179 357.154 203.971 356.696Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g110">
                  <path
                    id="path112"
                    d="M205.112 356.224C200.99 347.23 193.605 339.817 184.689 335.725C175.775 331.635 165.404 330.9 156.012 333.694C159.806 343.307 166.988 351.901 176.31 356.142C185.632 360.381 195.5 359.74 205.112 356.224Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g114">
                  <path
                    id="path116"
                    d="M546.285 450.207C530.11 375.786 544.71 295.004 585.861 231.219"
                    stroke="#11ABBA"
                    strokeWidth="2.541"
                    strokeMiterlimit="10"
                  />
                </g>
                <g id="g118">
                  <path
                    id="path120"
                    d="M581.562 238.676C593.54 234.478 603.937 225.811 610.312 214.71C616.685 203.608 618.983 190.168 616.663 177.542C603.94 181.23 592.069 189.476 585.452 201.088C578.835 212.7 578.354 225.668 581.562 238.676Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g122">
                  <path
                    id="path124"
                    d="M568.512 263.078C571.114 253.518 570.219 243.024 566.033 234.06C561.85 225.096 554.412 217.737 545.469 213.71C542.22 223.525 542.208 234.787 546.607 244.131C551.006 253.476 558.939 259.457 568.512 263.078Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g126">
                  <path
                    id="path128"
                    d="M567.646 262.192C574.907 255.545 584.566 251.647 594.349 251.411C604.134 251.175 613.963 254.605 621.528 260.895C614.331 268.242 604.403 273.308 594.187 273.52C583.972 273.732 575.135 269.234 567.646 262.192Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g130">
                  <path
                    id="path132"
                    d="M553.965 301.692C554.883 291.82 552.196 281.645 546.534 273.556C540.872 265.469 532.283 259.535 522.783 257.148C521.274 267.388 523.198 278.478 529.136 286.902C535.074 295.328 543.915 299.817 553.965 301.692Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g134">
                  <path
                    id="path136"
                    d="M552.959 300.973C558.968 293.147 567.807 287.6 577.401 285.642C586.995 283.683 597.263 285.324 605.795 290.182C599.97 298.687 591.066 305.428 581.044 307.441C571.021 309.454 561.546 306.585 552.959 300.973Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g138">
                  <path
                    id="path140"
                    d="M544.55 340.232C544.617 330.317 541.066 320.416 534.731 312.857C528.396 305.299 519.329 300.144 509.661 298.606C509.036 308.939 511.905 319.818 518.546 327.687C525.186 335.556 534.379 339.25 544.55 340.232Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g142">
                  <path
                    id="path144"
                    d="M543.486 339.603C548.799 331.276 557.13 324.975 566.519 322.176C575.908 319.378 586.279 320.109 595.196 324.198C590.124 333.185 581.833 340.685 572.021 343.571C562.207 346.46 552.522 344.437 543.486 339.603Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g146">
                  <path
                    id="path148"
                    d="M539.431 382.551C537.978 372.745 532.951 363.525 525.535 357.055C518.117 350.586 508.371 346.92 498.585 346.921C499.551 357.227 504.053 367.523 511.819 374.253C519.583 380.981 529.232 383.182 539.431 382.551Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g150">
                  <path
                    id="path152"
                    d="M538.282 382.098C542.255 373.036 549.518 365.498 558.363 361.259C567.21 357.016 577.568 356.105 587.003 358.74C583.369 368.417 576.328 377.13 567.079 381.527C557.828 385.925 547.95 385.452 538.282 382.098Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g154">
                  <path
                    id="path156"
                    d="M186.615 500.321C190.696 492.791 196.119 485.823 199.682 478.076C190.178 465.849 178.777 454.862 166.819 445.23C159.004 438.931 150.847 433.032 142.419 427.531C134.688 433.762 126.957 439.994 119.225 446.225C120.579 435.351 121.356 425.888 122.482 415.574C105.313 406.143 87.2411 398.331 68.6211 392.377C64.3289 399.386 60.6691 406.825 54.8967 412.829C54.9847 404.798 54.2249 396.412 53.1469 387.893C35.9349 383.405 18.3639 380.482 0.707452 379.308C0.649609 386.531 1.06635 393.746 1.88798 400.912C6.50223 399.507 10.074 395.563 14.9604 394.821C11.7383 402.728 8.82513 411.421 4.99044 419.449C9.19717 438.521 16.3959 456.93 26.2186 473.763C34.3468 468.915 41.9636 462.248 51.7627 458.125C50.0576 473.301 50.0274 489.179 48.7351 504.527C53.8963 510.215 59.4097 515.573 65.2741 520.527C75.5977 529.245 86.9217 536.691 98.9201 542.791C101.353 533.385 103.872 524.016 109.898 516.114C116.996 529.781 124.688 541.96 131.128 555.467C157.986 563.194 186.571 564.779 214.002 559.454C218.542 558.574 222.349 551.211 223.76 546.749C225.172 542.289 224.898 537.468 224.262 532.827C222.26 518.237 216.907 504.646 209.377 492.145C201.36 494.069 193.248 496.332 186.615 500.321Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g158">
                  <path
                    id="path160"
                    d="M194.298 545.299C131.158 507.676 73.43 460.749 23.4922 406.451"
                    stroke="#55CDE2"
                    strokeWidth="2.541"
                    strokeMiterlimit="10"
                  />
                </g>
                <g id="g162">
                  <path
                    id="path164"
                    d="M559.699 515.384C555.868 510.221 551.098 505.622 547.63 500.242C553.415 490.113 560.744 480.704 568.626 472.241C573.781 466.709 579.23 461.436 584.922 456.429C591.334 460.232 597.744 464.032 604.155 467.835C602.002 459.887 600.425 452.929 598.502 445.374C610.285 436.498 622.913 428.73 636.143 422.286C640.078 427.037 643.584 432.176 648.514 436.023C647.601 430.055 647.283 423.73 647.188 417.273C659.526 412.073 672.295 407.997 685.312 405.212C686.116 410.582 686.566 415.998 686.708 421.42C683.127 420.873 680.053 418.324 676.338 418.3C679.571 423.837 682.654 429.991 686.353 435.55C685.232 450.201 681.815 464.681 676.277 478.269C669.715 475.541 663.346 471.403 655.618 469.394C658.486 480.504 660.182 492.319 662.759 503.602C659.518 508.393 655.978 512.977 652.135 517.298C645.372 524.903 637.727 531.67 629.441 537.508C626.639 530.772 623.778 524.07 618.459 518.842C614.616 529.781 610.176 539.676 606.805 550.427C587.63 559.082 566.522 563.353 545.546 562.358C542.075 562.193 538.466 557.123 536.945 553.957C535.425 550.79 535.121 547.171 535.105 543.651C535.058 532.573 537.61 521.88 541.897 511.761C548.065 512.326 554.342 513.133 559.699 515.384Z"
                    fill="#11ABBA"
                  />
                </g>
                <g id="g166">
                  <path
                    id="path168"
                    d="M558.719 549.691C601.746 514.86 639.767 473.689 671.212 427.878"
                    stroke="#55CDE2"
                    strokeWidth="1.91"
                    strokeMiterlimit="10"
                  />
                </g>
                <g id="g170">
                  <path
                    id="path172"
                    d="M554.113 562.578H187.856C180.008 562.578 173.645 556.132 173.645 548.18V310.114C173.645 302.163 180.008 295.717 187.856 295.717H554.113C561.963 295.717 568.324 302.163 568.324 310.114V548.18C568.324 556.132 561.963 562.578 554.113 562.578Z"
                    fill="#060C37"
                  />
                </g>
                <g id="g174">
                  <path
                    id="path176"
                    d="M563.719 429.147C563.719 435.866 558.342 441.314 551.71 441.314C545.078 441.314 539.701 435.866 539.701 429.147C539.701 422.427 545.078 416.981 551.71 416.981C558.342 416.981 563.719 422.427 563.719 429.147Z"
                    fill="#111E65"
                  />
                </g>
                <g id="g178">
                  <path
                    id="path180"
                    d="M182.05 474.266C179.95 474.266 178.247 472.542 178.247 470.413V387.882C178.247 385.753 179.95 384.028 182.05 384.028C184.151 384.028 185.854 385.753 185.854 387.882V470.413C185.854 472.542 184.151 474.266 182.05 474.266Z"
                    fill="#111E65"
                  />
                </g>
                <path
                  id="path182"
                  d="M535.104 552.722H191.254V305.564H535.104V552.722Z"
                  fill="#D8E9F5"
                />
                <path
                  id="path184"
                  d="M535.1 322.18H191.256V305.568H535.1V322.18Z"
                  fill="#A4B1BA"
                />
                <path
                  id="path186"
                  d="M201.252 320.17H196.898V314.56H201.252V320.17Z"
                  fill="#FF6044"
                />
                <path
                  id="path188"
                  d="M206.906 320.17H202.552V310.653H206.906V320.17Z"
                  fill="#FF6044"
                />
                <path
                  id="path190"
                  d="M212.886 320.17H208.532V307.952H212.886V320.17Z"
                  fill="#FF6044"
                />
                <g id="g192">
                  <path
                    id="path194"
                    d="M507.781 308.957V309.767C507.781 310.411 507.264 310.933 506.629 310.933H505.346C504.711 310.933 504.196 311.455 504.196 312.099V315.647C504.196 316.293 504.711 316.814 505.346 316.814H506.629C507.264 316.814 507.781 317.336 507.781 317.979V318.792C507.781 319.435 508.296 319.957 508.931 319.957H526.844C527.479 319.957 527.995 319.435 527.995 318.792V308.957C527.995 308.313 527.479 307.791 526.844 307.791H508.931C508.296 307.791 507.781 308.313 507.781 308.957Z"
                    fill="#D8E9F5"
                  />
                </g>
                <g id="g196">
                  <path
                    id="path198"
                    d="M526.894 319.341H523.692C523.458 319.341 523.267 319.148 523.267 318.909V308.824C523.267 308.584 523.458 308.391 523.692 308.391H526.894C527.13 308.391 527.32 308.584 527.32 308.824V318.909C527.32 319.148 527.13 319.341 526.894 319.341Z"
                    fill="#92FC28"
                  />
                </g>
                <g id="g200">
                  <path
                    id="path202"
                    d="M521.94 319.341H518.739C518.505 319.341 518.313 319.148 518.313 318.909V308.824C518.313 308.584 518.505 308.391 518.739 308.391H521.94C522.175 308.391 522.366 308.584 522.366 308.824V318.909C522.366 319.148 522.175 319.341 521.94 319.341Z"
                    fill="#92FC28"
                  />
                </g>
                <g id="g204">
                  <path
                    id="path206"
                    d="M516.987 319.341H513.785C513.551 319.341 513.36 319.148 513.36 318.909V308.824C513.36 308.584 513.551 308.391 513.785 308.391H516.987C517.223 308.391 517.413 308.584 517.413 308.824V318.909C517.413 319.148 517.223 319.341 516.987 319.341Z"
                    fill="#92FC28"
                  />
                </g>
                <g id="g208">
                  <path
                    id="path210"
                    d="M498.8 313.874C498.8 316.456 496.733 318.551 494.183 318.551C491.635 318.551 489.569 316.456 489.569 313.874C489.569 311.292 491.635 309.197 494.183 309.197C496.733 309.197 498.8 311.292 498.8 313.874Z"
                    fill="#D8E9F5"
                  />
                </g>
                <path
                  id="path212"
                  d="M513.36 533.681H212.999V340.836H513.36V533.681Z"
                  fill="#C0CFDA"
                />
                <path
                  id="path214"
                  d="M513.36 357.464H212.999V340.838H513.36V357.464Z"
                  fill="#A4B3BC"
                />
                <path
                  id="path216"
                  d="M507.28 373.991H310.642V366.083H507.28V373.991Z"
                  fill="#DCEEFB"
                />
                <path
                  id="path218"
                  d="M419.169 389.046H310.642V381.138H419.169V389.046Z"
                  fill="#DCEEFB"
                />
                <path
                  id="path220"
                  d="M369.032 404.104H310.642V396.196H369.032V404.104Z"
                  fill="#DCEEFB"
                />
                <path
                  id="path222"
                  d="M507.28 430.213H310.642V422.305H507.28V430.213Z"
                  fill="#DCEEFB"
                />
                <path
                  id="path224"
                  d="M419.169 445.268H310.642V437.36H419.169V445.268Z"
                  fill="#DCEEFB"
                />
                <path
                  id="path226"
                  d="M369.032 460.325H310.642V452.418H369.032V460.325Z"
                  fill="#DCEEFB"
                />
                <path
                  id="path228"
                  d="M507.28 485.114H310.642V477.206H507.28V485.114Z"
                  fill="#DCEEFB"
                />
                <path
                  id="path230"
                  d="M419.169 500.172H310.642V492.264H419.169V500.172Z"
                  fill="#DCEEFB"
                />
                <path
                  id="path232"
                  d="M369.032 515.228H310.642V507.32H369.032V515.228Z"
                  fill="#DCEEFB"
                />
                <path
                  id="path234"
                  d="M301.035 409.578H224.781V366.082H301.035V409.578Z"
                  fill="#DCEEFB"
                />
                <g id="g236">
                  <path
                    id="path238"
                    d="M224.781 409.579L262.908 387.831L301.034 409.579H224.781Z"
                    fill="#CADBE7"
                  />
                </g>
                <g id="g240">
                  <path
                    id="path242"
                    d="M301.034 366.082L262.908 387.83L224.781 366.082H301.034Z"
                    fill="#CADBE7"
                  />
                </g>
                <path
                  id="path244"
                  d="M301.035 465.546H224.781V422.05H301.035V465.546Z"
                  fill="#DCEEFB"
                />
                <g id="g246">
                  <path
                    id="path248"
                    d="M224.781 465.546L262.908 443.798L301.034 465.546H224.781Z"
                    fill="#CADBE7"
                  />
                </g>
                <g id="g250">
                  <path
                    id="path252"
                    d="M301.034 422.05L262.908 443.798L224.781 422.05H301.034Z"
                    fill="#CADBE7"
                  />
                </g>
                <path
                  id="path254"
                  d="M301.035 521.515H224.781V478.019H301.035V521.515Z"
                  fill="#DCEEFB"
                />
                <g id="g256">
                  <path
                    id="path258"
                    d="M224.781 521.514L262.908 499.766L301.034 521.514H224.781Z"
                    fill="#CADBE7"
                  />
                </g>
                <g id="g260">
                  <path
                    id="path262"
                    d="M301.034 478.018L262.908 499.766L224.781 478.018H301.034Z"
                    fill="#CADBE7"
                  />
                </g>
                <g id="g264">
                  <g id="g282">
                    <g id="g280" opacity="0.440002">
                      <g id="g274" opacity="0.440002">
                        <path
                          id="path272"
                          opacity="0.440002"
                          d="M314.124 305.565L191.254 430.069V321.271L206.769 305.565H314.124Z"
                          fill="white"
                        />
                      </g>
                      <g id="g278" opacity="0.440002">
                        <path
                          id="path276"
                          opacity="0.440002"
                          d="M388.697 305.565L191.254 505.613V449.961L333.77 305.565H388.697Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g id="g284">
                  <g id="g302">
                    <g id="g300" opacity="0.440002">
                      <g id="g294" opacity="0.440002">
                        <path
                          id="path292"
                          opacity="0.440002"
                          d="M535.104 332.465V441.249L425.071 552.723H317.715L535.104 332.465Z"
                          fill="white"
                        />
                      </g>
                      <g id="g298" opacity="0.440002">
                        <path
                          id="path296"
                          opacity="0.440002"
                          d="M535.104 461.142V516.794L499.632 552.723H444.716L535.104 461.142Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g id="envelope">
                  <g id="g304">
                    <path
                      id="path306"
                      d="M249.266 298.798L351.208 218.764C357.652 213.705 366.657 213.705 373.102 218.764L475.045 298.798V432.924H249.266V298.798Z"
                      fill="#FF9004"
                    />
                  </g>
                  <path
                    id="path308"
                    d="M448.926 227.706H275.382V421.076H448.926V227.706Z"
                    fill="#FAFAFA"
                  />
                  <path
                    id="path310"
                    d="M438.481 239.346H285.831V245.241H438.481V239.346Z"
                    fill="#DCDCDC"
                  />
                  <path
                    id="path312"
                    d="M415.561 251.195H285.831V257.09H415.561V251.195Z"
                    fill="#DCDCDC"
                  />
                  <path
                    id="path314"
                    d="M394.51 263.044H285.831V268.939H394.51V263.044Z"
                    fill="#DCDCDC"
                  />
                  <path
                    id="path316"
                    d="M394.51 285.792H285.831V291.688H394.51V285.792Z"
                    fill="#DCDCDC"
                  />
                  <path
                    id="path318"
                    d="M366.443 297.167H285.831V303.062H366.443V297.167Z"
                    fill="#DCDCDC"
                  />
                  <path
                    id="path320"
                    d="M442.769 321H362.156V326.896H442.769V321Z"
                    fill="#DCDCDC"
                  />
                  <path
                    id="path322"
                    d="M442.768 332.609H377.201V338.504H442.768V332.609Z"
                    fill="#DCDCDC"
                  />
                  <g id="g324">
                    <path
                      id="path326"
                      d="M362.155 365.9L249.265 298.877V432.924L362.155 365.9Z"
                      fill="#FFAE35"
                    />
                  </g>
                  <g id="g328">
                    <path
                      id="path330"
                      d="M362.156 365.9L475.045 298.877V432.924L362.156 365.9Z"
                      fill="#FFAE35"
                    />
                  </g>
                  <g id="g332">
                    <path
                      id="path334"
                      d="M351.209 352.89L249.267 432.924H475.044L373.102 352.89C366.658 347.831 357.652 347.831 351.209 352.89Z"
                      fill="#FFBF69"
                    />
                  </g>
                </g>
                <g id="g348">
                  <path
                    id="path350"
                    d="M185.705 159.357C185.994 158.402 185.854 157.315 185.28 156.095C184.719 154.898 183.98 154.112 183.067 153.736C182.152 153.361 181.213 153.405 180.251 153.868C179.287 154.333 178.667 155.04 178.388 155.99C178.109 156.941 178.251 158.015 178.813 159.212C179.375 160.409 180.11 161.203 181.02 161.595C181.927 161.986 182.863 161.951 183.826 161.487C184.789 161.022 185.415 160.312 185.705 159.357ZM184.018 139.899C186.987 140.019 189.648 140.858 192.003 142.415C194.358 143.972 196.169 146.103 197.439 148.81C198.376 150.805 198.868 152.668 198.915 154.398C198.964 156.13 198.62 157.627 197.886 158.892C197.151 160.158 196.083 161.127 194.682 161.803C193.522 162.361 192.412 162.597 191.351 162.51C190.29 162.423 189.34 161.997 188.499 161.234C188.332 163.679 187.01 165.499 184.538 166.691C183.247 167.313 181.88 167.543 180.435 167.382C178.991 167.222 177.639 166.671 176.378 165.728C175.116 164.786 174.101 163.494 173.331 161.853C172.56 160.212 172.207 158.602 172.27 157.021C172.334 155.441 172.761 154.037 173.555 152.812C174.35 151.588 175.402 150.658 176.716 150.026C178.642 149.097 180.458 148.996 182.169 149.723L181.404 148.093L186.755 145.514L191.517 155.66C191.851 156.368 192.222 156.816 192.63 157C193.038 157.183 193.46 157.17 193.898 156.96C195.278 156.295 195.16 154.244 193.547 150.807C192.558 148.7 191.191 147.062 189.448 145.89C187.703 144.718 185.729 144.098 183.524 144.033C181.32 143.967 179.056 144.493 176.737 145.61C174.438 146.718 172.631 148.201 171.317 150.058C170.001 151.916 169.265 153.963 169.108 156.2C168.949 158.438 169.386 160.655 170.416 162.85C171.468 165.09 172.892 166.864 174.687 168.175C176.483 169.485 178.493 170.207 180.719 170.346C182.943 170.483 185.205 169.998 187.503 168.891C189.845 167.763 191.793 166.226 193.349 164.28L196.235 167.254C195.479 168.216 194.473 169.176 193.219 170.134C191.964 171.092 190.636 171.908 189.237 172.583C186.063 174.113 182.955 174.794 179.912 174.629C176.868 174.464 174.138 173.537 171.722 171.846C169.304 170.157 167.414 167.859 166.05 164.954C164.698 162.072 164.144 159.149 164.393 156.189C164.639 153.228 165.671 150.494 167.487 147.988C169.301 145.481 171.807 143.458 175.003 141.918C178.045 140.453 181.05 139.779 184.018 139.899Z"
                    fill="#ADE0EC"
                  />
                </g>
                <g id="g352">
                  <path
                    id="path354"
                    d="M478.281 145.979L473.499 145.088L471.809 150.637L476.591 151.528L478.281 145.979ZM483.567 146.965L481.877 152.514L486.737 153.418L485.812 158.499L480.333 157.478L478.528 163.209L473.241 162.224L475.046 156.492L470.263 155.601L468.46 161.331L463.174 160.347L464.977 154.616L460.079 153.702L461.001 148.622L466.522 149.65L468.214 144.102L463.314 143.19L464.237 138.109L469.759 139.138L471.562 133.407L476.848 134.393L475.043 140.124L479.826 141.015L481.629 135.284L486.917 136.269L485.112 142.001L490.01 142.913L489.088 147.994L483.567 146.965Z"
                    fill="#ADE0EC"
                  />
                </g>
                <g id="g356">
                  <path
                    id="path358"
                    d="M230.094 489.727H164.645C144.782 489.727 128.679 473.412 128.679 453.286C128.679 433.159 144.782 416.844 164.645 416.844H194.128C213.99 416.844 230.094 433.159 230.094 453.286V489.727Z"
                    fill="#FFBF69"
                  />
                </g>
                <g id="g360">
                  <path
                    id="path362"
                    d="M190.288 474.567C192.225 471.057 193.491 467.457 194.24 463.884C197.265 463.216 199.718 462.418 201.535 461.712C199.468 467.269 195.439 471.849 190.288 474.567ZM173.549 476.516C170.414 472.301 168.399 468.049 167.204 463.913C172.228 464.889 176.849 465.295 180.987 465.295C184.501 465.295 187.666 465.013 190.478 464.585C189.44 468.665 187.643 472.75 184.795 476.628C183.054 477.042 181.249 477.283 179.386 477.283C177.368 477.283 175.42 476.999 173.549 476.516ZM157.077 461.27C159.25 461.983 161.355 462.573 163.406 463.075C164.255 466.725 165.672 470.467 167.822 474.207C162.852 471.377 159.006 466.783 157.077 461.27ZM166.919 432.92C165.905 435.193 164.777 438.165 163.89 441.631C161.455 442.199 159.416 442.847 157.807 443.446C159.751 439.087 162.942 435.428 166.919 432.92ZM185.694 430.179C186.289 431.348 188.269 435.45 189.79 441.13C180.926 439.619 173.434 439.938 167.6 440.897C169.168 435.61 171.267 431.824 172.077 430.47C174.382 429.71 176.835 429.288 179.386 429.288C181.572 429.288 183.682 429.614 185.694 430.179ZM201.203 443.946C198.569 443.098 196.02 442.407 193.568 441.864C192.612 437.856 191.394 434.47 190.4 432.058C195.218 434.635 199.063 438.835 201.203 443.946ZM194.354 445.71C196.968 446.339 199.688 447.138 202.507 448.133C202.868 449.796 203.071 451.515 203.071 453.285C203.071 454.669 202.929 456.014 202.707 457.334C201.441 457.942 198.765 459.081 194.862 460.045C195.44 454.989 195.108 450.091 194.354 445.71ZM166.64 444.734C172.634 443.581 180.793 443.047 190.668 444.909C191.612 449.668 192.068 455.159 191.237 460.804C184.963 461.903 176.497 462.275 166.311 460.097C165.321 454.509 165.701 449.252 166.64 444.734ZM155.701 453.285C155.701 451.44 155.927 449.649 156.319 447.921C157.561 447.343 159.839 446.402 163.05 445.549C162.325 449.694 162.056 454.341 162.712 459.24C160.557 458.67 158.328 457.976 156.039 457.161C155.835 455.896 155.701 454.608 155.701 453.285ZM179.386 425.733C164.391 425.733 152.192 438.093 152.192 453.285C152.192 468.479 164.391 480.838 179.386 480.838C194.381 480.838 206.58 468.479 206.58 453.285C206.58 438.093 194.381 425.733 179.386 425.733Z"
                    fill="#FAFAFA"
                  />
                </g>
                <g id="g364">
                  <path
                    id="path366"
                    d="M487.575 534.716H553.024C572.888 534.716 588.99 518.4 588.99 498.275C588.99 478.149 572.888 461.834 553.024 461.834H523.541C503.679 461.834 487.575 478.149 487.575 498.275V534.716Z"
                    fill="#FFBF69"
                  />
                </g>
                <g id="g368">
                  <path
                    id="path370"
                    d="M565.214 487.805C565.214 477.497 549.034 468.633 538.283 477.531C527.532 468.633 511.352 477.497 511.352 487.805C511.352 487.805 507.872 508.014 538.283 522.676C568.694 508.014 565.214 487.805 565.214 487.805Z"
                    stroke="#FAFAFA"
                    strokeWidth="3.811"
                    strokeMiterlimit="10"
                    strokeLinejoin="round"
                  />
                </g>
                <g id="g372">
                  <path
                    id="path374"
                    d="M466.093 53.4869C465.677 53.3258 465.259 53.1899 464.843 53.074C464.729 52.6558 464.594 52.2389 464.437 51.8207C463.767 50.1411 462.888 48.4615 461.12 46.7819C459.352 48.4615 458.474 50.1411 457.804 51.8207C457.645 52.2415 457.51 52.6638 457.395 53.0847C456.978 53.2019 456.563 53.3391 456.147 53.4989C454.489 54.1782 452.832 55.0679 451.174 56.8594C452.832 58.6509 454.489 59.5406 456.147 60.2199C456.56 60.3797 456.973 60.5156 457.384 60.6315C457.499 61.0537 457.633 61.4759 457.792 61.8982C458.46 63.5777 459.342 65.2573 461.12 66.9369C462.899 65.2573 463.781 63.5777 464.449 61.8982C464.605 61.4799 464.741 61.0617 464.855 60.6421C465.267 60.5276 465.681 60.3917 466.093 60.2319C467.751 59.5553 469.409 58.6615 471.067 56.8594C469.409 55.0573 467.751 54.1635 466.093 53.4869Z"
                    fill="#ADE0EC"
                  />
                </g>
                <g id="star1">
                  <path
                    id="path378"
                    d="M18.666 335.315C18.2493 335.154 17.8325 335.016 17.4145 334.901C17.3001 334.484 17.166 334.067 17.0096 333.649C16.3392 331.968 15.461 330.289 13.6929 328.61C11.9247 330.289 11.0466 331.968 10.3761 333.649C10.2171 334.069 10.0816 334.492 9.96728 334.913C9.55186 335.028 9.13514 335.167 8.71972 335.327C7.06201 336.006 5.4043 336.896 3.74658 338.687C5.4043 340.479 7.06201 341.369 8.71972 342.048C9.13251 342.206 9.54398 342.342 9.95676 342.458C10.0698 342.882 10.2052 343.304 10.3643 343.725C11.0321 345.406 11.9142 347.085 13.6929 348.765C15.4715 347.085 16.3536 345.406 17.0214 343.725C17.1779 343.308 17.3133 342.89 17.4263 342.47C17.8391 342.354 18.2532 342.22 18.666 342.058C20.3237 341.383 21.9814 340.489 23.6391 338.687C21.9814 336.885 20.3237 335.991 18.666 335.315Z"
                    fill="#ADE0EC"
                  />
                </g>
                <g id="g380">
                  <path
                    id="path382"
                    d="M500.378 253.717C499.962 253.558 499.545 253.42 499.128 253.305C499.014 252.886 498.878 252.469 498.722 252.052C498.052 250.372 497.173 248.692 495.405 247.012C493.637 248.692 492.759 250.372 492.089 252.052C491.931 252.472 491.795 252.894 491.681 253.317C491.264 253.432 490.849 253.57 490.433 253.729C488.774 254.409 487.117 255.298 485.459 257.09C487.117 258.881 488.774 259.772 490.433 260.45C490.845 260.61 491.258 260.746 491.669 260.862C491.784 261.284 491.918 261.706 492.078 262.129C492.745 263.808 493.627 265.488 495.405 267.167C497.184 265.488 498.066 263.808 498.734 262.129C498.892 261.71 499.026 261.292 499.14 260.874C499.553 260.758 499.966 260.622 500.378 260.462C502.037 259.786 503.694 258.892 505.352 257.09C503.694 255.289 502.037 254.395 500.378 253.717Z"
                    fill="#ADE0EC"
                  />
                </g>
                <g id="g384">
                  <path
                    id="path386"
                    d="M673.413 79.5778C673.204 79.4978 672.995 79.4286 672.785 79.3713C672.729 79.1622 672.662 78.9517 672.583 78.7426C672.246 77.9008 671.806 77.059 670.921 76.2172C670.035 77.059 669.595 77.9008 669.258 78.7426C669.178 78.9544 669.112 79.1648 669.054 79.3766C668.844 79.4352 668.636 79.5032 668.429 79.5844C667.596 79.9241 666.766 80.3703 665.936 81.2693C666.766 82.1657 667.596 82.6119 668.429 82.9529C668.635 83.0328 668.84 83.1008 669.048 83.158C669.106 83.3698 669.173 83.5816 669.253 83.7947C669.587 84.6352 670.03 85.4769 670.921 86.3201C671.811 85.4769 672.254 84.6352 672.589 83.7947C672.668 83.5842 672.734 83.3738 672.792 83.1647C672.999 83.1061 673.206 83.0382 673.413 82.9596C674.244 82.6199 675.075 82.1711 675.906 81.2693C675.075 80.3649 674.244 79.9174 673.413 79.5778Z"
                    fill="#D0F6FF"
                  />
                </g>
                <g id="g388">
                  <path
                    id="path390"
                    d="M724.621 229.528C724.413 229.448 724.204 229.379 723.994 229.321C723.936 229.112 723.87 228.902 723.791 228.694C723.455 227.851 723.014 227.009 722.128 226.167C721.244 227.009 720.803 227.851 720.467 228.694C720.387 228.904 720.32 229.115 720.262 229.327C720.053 229.385 719.845 229.453 719.636 229.534C718.805 229.874 717.974 230.32 717.145 231.219C717.974 232.116 718.805 232.562 719.636 232.903C719.842 232.983 720.049 233.051 720.256 233.108C720.314 233.32 720.38 233.532 720.46 233.745C720.795 234.585 721.238 235.427 722.128 236.27C723.02 235.427 723.461 234.585 723.797 233.745C723.877 233.534 723.943 233.324 723.999 233.115C724.208 233.056 724.415 232.988 724.621 232.91C725.453 232.57 726.284 232.121 727.113 231.219C726.284 230.315 725.453 229.867 724.621 229.528Z"
                    fill="#D0F6FF"
                  />
                </g>
                <g id="g392">
                  <path
                    id="path394"
                    d="M722.669 226.015C722.46 225.935 722.251 225.866 722.042 225.809C721.984 225.6 721.918 225.389 721.838 225.18C721.503 224.338 721.063 223.497 720.177 222.655C719.291 223.497 718.85 224.338 718.515 225.18C718.435 225.392 718.368 225.602 718.31 225.814C718.101 225.873 717.892 225.941 717.684 226.022C716.853 226.362 716.022 226.808 715.192 227.707C716.022 228.603 716.853 229.049 717.684 229.39C717.891 229.47 718.097 229.538 718.305 229.595C718.361 229.807 718.428 230.019 718.508 230.232C718.844 231.073 719.285 231.914 720.177 232.758C721.068 231.914 721.51 231.073 721.845 230.232C721.924 230.022 721.991 229.811 722.047 229.602C722.255 229.544 722.463 229.476 722.669 229.397C723.5 229.057 724.331 228.609 725.162 227.707C724.331 226.802 723.5 226.355 722.669 226.015Z"
                    fill="#D0F6FF"
                  />
                </g>
                <g id="g396">
                  <path
                    id="path398"
                    d="M122.37 271.837C122.161 271.756 121.952 271.688 121.742 271.63C121.686 271.421 121.619 271.211 121.54 271.002C121.203 270.16 120.763 269.318 119.877 268.476C118.991 269.318 118.551 270.16 118.215 271.002C118.135 271.213 118.068 271.424 118.01 271.636C117.801 271.694 117.594 271.762 117.385 271.842C116.554 272.183 115.723 272.629 114.892 273.527C115.723 274.425 116.554 274.871 117.385 275.212C117.591 275.291 117.797 275.36 118.005 275.417C118.062 275.629 118.129 275.841 118.209 276.052C118.544 276.894 118.986 277.736 119.877 278.578C120.768 277.736 121.211 276.894 121.545 276.052C121.624 275.843 121.691 275.633 121.748 275.422C121.955 275.365 122.163 275.297 122.37 275.217C123.2 274.878 124.031 274.43 124.862 273.527C124.031 272.624 123.2 272.176 122.37 271.837Z"
                    fill="#ADE0EC"
                  />
                </g>
                <g id="g400">
                  <path
                    id="path402"
                    d="M30.9696 538.087C30.7606 538.007 30.5516 537.939 30.3426 537.881C30.2847 537.671 30.219 537.461 30.1401 537.252C29.8036 536.41 29.3632 535.568 28.4772 534.728C27.5911 535.568 27.1507 536.41 26.8155 537.252C26.7353 537.464 26.6683 537.674 26.6104 537.887C26.4014 537.945 26.1937 538.012 25.9847 538.094C25.1538 538.435 24.323 538.881 23.4922 539.779C24.323 540.675 25.1538 541.121 25.9847 541.462C26.1911 541.542 26.3975 541.611 26.6052 541.667C26.6617 541.88 26.7301 542.092 26.8089 542.303C27.1442 543.146 27.5859 543.988 28.4772 544.829C29.3685 543.988 29.8115 543.146 30.1454 542.303C30.2243 542.094 30.2913 541.884 30.3478 541.674C30.5555 541.615 30.7633 541.549 30.9696 541.468C31.8005 541.128 32.6313 540.68 33.4621 539.779C32.6313 538.876 31.8005 538.427 30.9696 538.087Z"
                    fill="#ADE0EC"
                  />
                </g>
                <g id="g404">
                  <path
                    id="path406"
                    d="M384.68 138.195C384.471 138.114 384.262 138.046 384.053 137.989C383.995 137.78 383.928 137.569 383.849 137.36C383.514 136.518 383.073 135.676 382.187 134.835C381.301 135.676 380.861 136.518 380.524 137.36C380.445 137.572 380.377 137.782 380.32 137.994C380.111 138.053 379.904 138.121 379.695 138.202C378.864 138.541 378.033 138.988 377.202 139.885C378.033 140.783 378.864 141.229 379.695 141.57C379.901 141.65 380.107 141.718 380.314 141.775C380.372 141.987 380.439 142.199 380.519 142.411C380.854 143.253 381.296 144.094 382.187 144.936C383.078 144.094 383.52 143.253 383.855 142.411C383.934 142.202 384.001 141.991 384.058 141.781C384.266 141.723 384.472 141.656 384.68 141.576C385.51 141.236 386.341 140.788 387.172 139.885C386.341 138.982 385.51 138.535 384.68 138.195Z"
                    fill="#ADE0EC"
                  />
                </g>
                <g id="g408">
                  <path
                    id="path410"
                    d="M143.253 52.4684C143.044 52.3885 142.835 52.3192 142.626 52.262C142.568 52.0528 142.501 51.8424 142.423 51.6333C142.087 50.7915 141.646 49.9497 140.76 49.1079C139.874 49.9497 139.434 50.7915 139.097 51.6333C139.019 51.8451 138.951 52.0555 138.894 52.2673C138.685 52.3259 138.477 52.3938 138.268 52.4751C137.437 52.8147 136.606 53.2609 135.775 54.1586C136.606 55.0564 137.437 55.5026 138.268 55.8436C138.474 55.9235 138.681 55.9914 138.888 56.0487C138.945 56.2605 139.012 56.4722 139.092 56.6854C139.427 57.5258 139.869 58.3676 140.76 59.2107C141.652 58.3676 142.093 57.5258 142.429 56.6854C142.507 56.4749 142.575 56.2645 142.631 56.0553C142.839 55.9967 143.045 55.9288 143.253 55.8502C144.084 55.5106 144.915 55.0617 145.745 54.1586C144.915 53.2556 144.084 52.8081 143.253 52.4684Z"
                    fill="#ADE0EC"
                  />
                </g>
                <g id="star4">
                  <path
                    id="path414"
                    d="M659.175 279.551C658.966 279.47 658.757 279.402 658.546 279.344C658.49 279.135 658.423 278.925 658.344 278.716C658.009 277.874 657.567 277.032 656.682 276.19C655.796 277.032 655.356 277.874 655.019 278.716C654.939 278.926 654.873 279.138 654.816 279.35C654.605 279.408 654.397 279.476 654.19 279.556C653.359 279.897 652.527 280.343 651.697 281.241C652.527 282.139 653.359 282.585 654.19 282.926C654.396 283.005 654.603 283.074 654.81 283.131C654.867 283.343 654.934 283.555 655.014 283.766C655.349 284.608 655.791 285.45 656.682 286.292C657.574 285.45 658.015 284.608 658.35 283.766C658.429 283.557 658.495 283.347 658.553 283.136C658.761 283.079 658.968 283.011 659.175 282.931C660.006 282.592 660.836 282.144 661.667 281.241C660.836 280.338 660.006 279.89 659.175 279.551Z"
                    fill="#ADE0EC"
                  />
                </g>
                <g id="star5">
                  <path
                    id="path418"
                    d="M412.477 191.341C412.268 191.26 412.059 191.192 411.85 191.133C411.793 190.924 411.727 190.715 411.647 190.506C411.311 189.664 410.871 188.822 409.985 187.98C409.099 188.822 408.659 189.664 408.323 190.506C408.243 190.718 408.176 190.928 408.118 191.14C407.909 191.197 407.7 191.266 407.492 191.346C406.662 191.687 405.831 192.133 405 193.031C405.831 193.929 406.662 194.375 407.492 194.715C407.699 194.795 407.905 194.864 408.113 194.921C408.17 195.133 408.237 195.345 408.317 195.556C408.652 196.398 409.094 197.24 409.985 198.082C410.876 197.24 411.318 196.398 411.653 195.556C411.732 195.346 411.799 195.137 411.856 194.926C412.063 194.869 412.271 194.801 412.477 194.721C413.308 194.382 414.139 193.934 414.97 193.031C414.139 192.128 413.308 191.681 412.477 191.341Z"
                    fill="#D0F6FF"
                  />
                </g>
                <g id="star2">
                  <path
                    id="path422"
                    d="M318.495 91.4014C318.129 91.2602 317.762 91.1403 317.396 91.0391C317.295 90.6715 317.178 90.3039 317.04 89.9363C316.45 88.4605 315.678 86.9847 314.124 85.5075C312.57 86.9847 311.797 88.4605 311.208 89.9363C311.069 90.3079 310.95 90.6782 310.85 91.0484C310.483 91.151 310.117 91.2709 309.752 91.4121C308.295 92.0088 306.837 92.792 305.381 94.3663C306.837 95.9407 308.295 96.7239 309.752 97.3206C310.115 97.4604 310.476 97.5803 310.839 97.6815C310.939 98.0531 311.059 98.4234 311.198 98.795C311.786 100.272 312.56 101.749 314.124 103.225C315.687 101.749 316.463 100.272 317.049 98.795C317.187 98.4274 317.306 98.0598 317.406 97.6922C317.77 97.5896 318.132 97.4711 318.495 97.3312C319.953 96.7358 321.41 95.95 322.868 94.3663C321.41 92.7826 319.953 91.9968 318.495 91.4014Z"
                    fill="#ADE0EC"
                  />
                </g>
                <g id="g424">
                  <path
                    id="path426"
                    d="M95.3161 198.94C94.9494 198.801 94.5826 198.679 94.2171 198.578C94.1159 198.21 93.9989 197.843 93.8609 197.475C93.2706 195.999 92.4989 194.524 90.9451 193.047C89.3912 194.524 88.6182 195.999 88.0293 197.475C87.8899 197.847 87.7703 198.217 87.6704 198.587C87.3036 198.69 86.9382 198.81 86.5727 198.951C85.1161 199.548 83.6582 200.331 82.2017 201.905C83.6582 203.48 85.1161 204.263 86.5727 204.86C86.9355 204.999 87.2971 205.119 87.6599 205.221C87.7598 205.592 87.8794 205.962 88.0188 206.334C88.6064 207.811 89.3807 209.288 90.9451 210.764C92.5081 209.288 93.2838 207.811 93.8701 206.334C94.0081 205.966 94.1264 205.599 94.2263 205.231C94.5892 205.129 94.9533 205.01 95.3161 204.87C96.774 204.275 98.2306 203.49 99.6885 201.905C98.2306 200.322 96.774 199.536 95.3161 198.94Z"
                    fill="#ADE0EC"
                  />
                </g>
                <g id="star3">
                  <path
                    id="path430"
                    d="M567.016 163.164C566.649 163.023 566.282 162.903 565.915 162.8C565.815 162.434 565.697 162.066 565.559 161.699C564.97 160.223 564.197 158.746 562.643 157.27C561.089 158.746 560.316 160.223 559.728 161.699C559.59 162.069 559.47 162.441 559.369 162.81C559.003 162.912 558.638 163.033 558.272 163.175C556.814 163.771 555.358 164.553 553.9 166.129C555.358 167.703 556.814 168.486 558.272 169.082C558.634 169.222 558.997 169.343 559.359 169.444C559.459 169.816 559.579 170.186 559.717 170.558C560.306 172.035 561.08 173.51 562.643 174.986C564.206 173.51 564.982 172.035 565.57 170.558C565.708 170.19 565.826 169.822 565.926 169.453C566.289 169.352 566.653 169.234 567.016 169.094C568.472 168.498 569.93 167.713 571.387 166.129C569.93 164.545 568.472 163.759 567.016 163.164Z"
                    fill="#D0F6FF"
                  />
                </g>
                <g id="star6">
                  <path
                    id="path434"
                    d="M785.486 113.408C785.119 113.267 784.752 113.147 784.385 113.045C784.285 112.678 784.167 112.31 784.03 111.943C783.44 110.467 782.667 108.99 781.113 107.514C779.559 108.99 778.786 110.467 778.198 111.943C778.059 112.314 777.94 112.685 777.839 113.055C777.473 113.157 777.108 113.277 776.742 113.418C775.284 114.015 773.828 114.798 772.37 116.373C773.828 117.947 775.284 118.73 776.742 119.327C777.104 119.467 777.467 119.587 777.829 119.688C777.929 120.06 778.049 120.43 778.187 120.801C778.776 122.279 779.55 123.756 781.113 125.231C782.676 123.756 783.452 122.279 784.04 120.801C784.178 120.434 784.296 120.066 784.396 119.697C784.759 119.596 785.123 119.477 785.486 119.338C786.942 118.742 788.4 117.956 789.857 116.373C788.4 114.789 786.942 114.003 785.486 113.408Z"
                    fill="#D0F6FF"
                  />
                </g>
                <g id="g436">
                  <path
                    id="path438"
                    d="M556.27 45.0362C555.903 44.895 555.536 44.7752 555.169 44.6739C555.069 44.3063 554.951 43.9387 554.813 43.5711C554.224 42.0953 553.451 40.6182 551.897 39.1424C550.343 40.6182 549.57 42.0953 548.983 43.5711C548.843 43.9427 548.724 44.313 548.624 44.6833C548.257 44.7858 547.892 44.9057 547.526 45.0469C546.068 45.6436 544.612 46.4268 543.154 48.0011C544.612 49.5755 546.068 50.3587 547.526 50.9554C547.888 51.0953 548.251 51.2151 548.613 51.3164C548.713 51.688 548.833 52.0583 548.971 52.4299C549.56 53.907 550.334 55.3841 551.897 56.8599C553.46 55.3841 554.236 53.907 554.824 52.4299C554.962 52.0622 555.08 51.6946 555.18 51.327C555.543 51.2245 555.907 51.1059 556.27 50.9661C557.726 50.3707 559.184 49.5848 560.641 48.0011C559.184 46.4175 557.726 45.6316 556.27 45.0362Z"
                    fill="#D0F6FF"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>

        <form className="form-about">
          <h2 className="section-title text-center mb-2">Talk to Us</h2>

          {/* <!-- Name --> */}
          <div className="form-group position-relative">
            <label htmlFor="formName" className="d-block">
              <i className="icon" data-feather="user"></i>
            </label>
            <input
              type="text"
              id="formName"
              className="form-control-about form-control-lg thick"
              placeholder="Name"
            />
          </div>

          {/* <!-- E-mail --> */}
          <div className="form-group position-relative">
            <label htmlFor="formEmail" className="d-block">
              <i className="icon" data-feather="mail"></i>
            </label>
            <input
              type="email"
              id="formEmail"
              className="form-control-about form-control-lg thick"
              placeholder="E-mail"
            />
          </div>

          {/* <!-- Message --> */}
          <div className="form-group message">
            <textarea
              id="formMessage"
              className="form-control-about form-control-lg"
              rows={7}
              placeholder="Message"
            ></textarea>
          </div>

          {/* <!-- Submit btn --> */}
          <div className="text-center">
            <Button
              variant="outlined"
              sx={{
                borderColor: "var(--three-color)",
                color: "var(--three-color)",
                "&:hover": {
                  backgroundColor: "var(--three-color)",
                  color: "var(--second-color)",
                },
              }}
            >
              Send message
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}
export default About;
