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
      <section className="section-carousel">
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

              <a href="#" className="btn btn-primary">
                <span className="text text-1">Read more</span>

                <span className="text text-2" aria-hidden="true">
                  Read more
                </span>
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
        <p className="text-blk team-head-text">Our Team</p>
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
                    className="twitter-icon"
                    imageURL="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg"
                    alt="social"
                  />
                </Link>
                <Link to="https://www.facebook.com" target="_blank">
                  <Image
                    className="facebook-icon"
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
                    className="twitter-icon"
                    imageURL="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg"
                    alt="social"
                  />
                </Link>
                <Link to="https://www.facebook.com" target="_blank">
                  <Image
                    className="facebook-icon"
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
                    className="twitter-icon"
                    imageURL="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Icon.svg"
                    alt="social"
                  />
                </Link>
                <Link to="https://www.facebook.com" target="_blank">
                  <Image
                    className="facebook-icon"
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
              <h2 className="fs-6 text-secondary mb-2 text-uppercase text-center">
                Our Clients
              </h2>

              <p className="fs-5 text-secondary mb-5 text-center">
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
    </main>
  );
}

export default About;
