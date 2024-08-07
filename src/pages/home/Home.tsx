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
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import cardLink1 from "../../assets/imgs/cardLink1.jpg";
// import cardLink2 from "../../assets/imgs/";
import cardLink3 from "../../assets/imgs/login.jpg";
import { Link } from "react-router-dom";

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
                    "https://kees90.com/kees/APIs/categories/getCategories.php?globalID=0&is_freelance=-1"
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

        sr.reveal(
            `.Logo-1, .stars , .section-title , .container-about , .about-container `
        );
        sr.reveal(`.hero-title, .feature-item , .description`, { delay: 400 });
        sr.reveal(`.child-1`, { origin: "left" });
        sr.reveal(`.child-2`, { origin: "right" });
        sr.reveal(`.hero-description , .LinkCard `, {
            delay: 500,
        });
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
                <Image
                    imageURL={starsTop}
                    alt="stars"
                    className="stars stars-top"
                />
                <Image
                    imageURL={starsBottom}
                    alt="stars"
                    className="stars stars-bottom"
                />

                <h1 className="hero-title">
                    {language === "ar" ? "كيس" : "kees"}
                </h1>
                <p className="hero-description">
                    {language === "ar"
                        ? "نحن شركة رائدة في الشرق الأوسط وخاصة المملكة العربية السعودية في تقديم أفضل المتاجر من حيث الجودة والسعر"
                        : "We are a leading company in the Middle East, especially Saudi Arabia, in providing you with the best stores in terms of quality and price"}
                </p>
                <div className="hero-container  container">
                    <div className="row">{renderCategories()}</div>
                </div>
            </section>

            <section className="about">
                <div className="container about-container">
                    <div className="parent row gy-3  gy-md-4 gy-lg-0 align-items-lg-center">
                        <div className="child-1 col-12 col-lg-6 ">
                            <div className=" row justify-content-xl-center">
                                <div className=" col-12 col-xl-11">
                                    <div className="group-descrition">
                                        <h2 className="title mb-3 ">
                                            Who Are We?
                                        </h2>
                                        <p className="lead fs-4  mb-3">
                                            We help people to build incredible
                                            brands and superior products. Our
                                            perspective is to furnish
                                            outstanding captivating services.
                                        </p>
                                        <p className="description mb-5">
                                            We are a fast-growing company, but
                                            we have never lost sight of our core
                                            values. We believe in collaboration,
                                            innovation, and customer
                                            satisfaction. We are always looking
                                            for new ways to improve our products
                                            and services.
                                        </p>
                                    </div>
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
                                                    <h2 className="titleIcon h4 mb-3">
                                                        Versatile Brand
                                                    </h2>
                                                    <p className="description mb-0">
                                                        We are crafting a
                                                        digital method that
                                                        subsists life across all
                                                        mediums.
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
                                                    <h2 className="titleIcon h4 mb-3">
                                                        Digital Agency
                                                    </h2>
                                                    <p className="description mb-0">
                                                        We believe in innovation
                                                        by merging primary with
                                                        elaborate ideas.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="dev-baner child-2 col-12 col-lg-6 col-xl-5">
                            <Image
                                imageURL={baner}
                                alt="baner"
                                className="baner"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="section-features features text-center"
                aria-label="features"
            >
                <div className="container">
                    <h2 className="headline-1 section-title">
                        We help you with
                    </h2>

                    <ul className="container grid-list">
                        <li className="feature-item">
                            <div className="feature-card">
                                <div className="card-icon">
                                    <img
                                        src={featuresIcon1}
                                        width="100"
                                        height="80"
                                        alt="icon"
                                    />
                                </div>

                                <h3 className="title-2 card-title">
                                    Professionalism
                                </h3>

                                <p className="label-1 card-text">
                                    We have a team of professionals with diverse
                                    experience in various aspects of the real
                                    estate industry. They have in-depth
                                    knowledge of market trends, regulations,
                                    financing options and legal considerations.
                                    Their professionalism and experience can
                                    guide you through the complex real estate
                                    landscape and help you make informed
                                    decisions.
                                </p>
                            </div>
                        </li>

                        <li className="feature-item">
                            <div className="feature-card">
                                <div className="card-icon">
                                    <img
                                        src={featuresIcon2}
                                        width="100"
                                        height="80"
                                        alt="icon"
                                    />
                                </div>

                                <h3 className="title-2 card-title">
                                    Extensive Resources
                                </h3>

                                <p className="label-1 card-text">
                                    The company has access to extensive
                                    resources, including financial capital,
                                    advanced technology, industry networks, and
                                    established relationships with key
                                    stakeholders. These resources can be
                                    leveraged to your advantage, facilitating
                                    smoother transactions, faster project
                                    execution, and access to a wider range of
                                    opportunities.
                                </p>
                            </div>
                        </li>

                        <li className="feature-item">
                            <div className="feature-card">
                                <div className="card-icon">
                                    <img
                                        src={featuresIcon3}
                                        width="100"
                                        height="80"
                                        alt="icon"
                                    />
                                </div>

                                <h3 className="title-2 card-title">
                                    Diverse Portfolio
                                </h3>

                                <p className="label-1 card-text">
                                    The company owns a diversified portfolio of
                                    real estate and projects. Whether you are
                                    looking for residential, commercial,
                                    commercial or industrial properties, a great
                                    real estate company can offer a wide range
                                    of options to suit your specific needs and
                                    preferences.
                                </p>
                            </div>
                        </li>

                        <li className="feature-item">
                            <div className="feature-card">
                                <div className="card-icon">
                                    <img
                                        src={featuresIcon4}
                                        width="100"
                                        height="80"
                                        alt="icon"
                                    />
                                </div>

                                <h3 className="title-2 card-title">
                                    Market Knowledge
                                </h3>

                                <p className="label-1 card-text">
                                    With access to comprehensive market research
                                    and analysis, we can provide valuable
                                    insights into market trends, investment
                                    opportunities and potential risks. They can
                                    help you identify emerging markets, forecast
                                    property values, and make strategic
                                    investment decisions.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="cardLink">
                <h2 className="section-title text-center mb-4">
                    Register with us
                </h2>
                <p className="description text-center mb-5 w-75 mx-auto">
                    Be part of us if you are a store owner and want to display
                    it with us to reach a large segment of people, or if you are
                    a freelancer and looking for a job.
                </p>
                <div className="container cardLink-container">
                    <Link className="LinkCard" to="/registertionStore">
                        <Card
                            sx={{
                                margin: 0,
                                maxWidth: 400,
                                backgroundColor: "var(--spical-color-2)",
                                borderRadius: "2rem",
                                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height={180}
                                    image={cardLink1}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        sx={{ color: "var(--three-color)" }}
                                    >
                                        Store owner
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Lizards are a widespread group of
                                        squamate reptiles, with over 6,000
                                        species, ranging across all continents
                                        except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>

                    {/* <Link className="LinkCard" to="/registertionFreelancer">
                        <Card
                            sx={{
                                maxWidth: 400,
                                backgroundColor: "var(--spical-color-2)",
                                borderRadius: "2rem",
                                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height={180}
                                    image={cardLink2}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        sx={{ color: "var(--three-color)" }}
                                    >
                                        Freelancer
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Lizards are a widespread group of
                                        squamate reptiles, with over 6,000
                                        species, ranging across all continents
                                        except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link> */}

                    <Link className="LinkCard" to={"/register"}>
                        <Card
                            sx={{
                                maxWidth: 400,
                                backgroundColor: "var(--spical-color-2)",
                                borderRadius: "2rem",
                                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height={180}
                                    image={cardLink3}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                        sx={{ color: "var(--three-color)" }}
                                    >
                                        New customer
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Lizards are a widespread group of
                                        squamate reptiles, with over 6,000
                                        species, ranging across all continents
                                        except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </div>
            </section>

            <section
                className="container-about  contact-section d-flex justify-content-center align-items-center "
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
                    <h2 className="section-title text-center mb-2">
                        Talk to Us
                    </h2>

                    {/* <!-- Name --> */}
                    <div className="form-group position-relative">
                        <label htmlFor="formName" className="d-block">
                            <i className="icon" data-feather="user"></i>
                        </label>
                        <input
                            type="text"
                            id="formName"
                            className="form-control-about mb-4 form-control-lg thick"
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
                            className="form-control-about  form-control-lg thick"
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
        </>
    );
}

export default Home;
