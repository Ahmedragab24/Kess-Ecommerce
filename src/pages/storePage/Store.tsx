import Circle from "../../components/UI/circle/Circle";
import storeImg from "../../assets/imgs/men/clothes.jpg";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import imgStore1 from "../../assets/imgs/Store/img-store1.jpg";
import imgStore2 from "../../assets/imgs/Store/img-store2.jpg";
import imgStore3 from "../../assets/imgs/Store/img-store3.jpg";
import "./store.css";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterFill,
  RiWhatsappFill,
} from "@remixicon/react";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Store() {
  // ScrollReveal
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2000,
      delay: 300,
    });

    sr.reveal(`.store-details`);
    sr.reveal(`.gallery-container`, { delay: 500 });
  }, []);

  return (
    <div className="store-page">
      <div className="container store-container">
        <div className="container store-details mb-5">
          <Circle
            classNameImg="store-img"
            title="Store Name"
            type="CartSmall"
            imgUrl={storeImg}
            alt="store"
            animationTitle="card-title-left"
            lightSpeed="animate__lightSpeedInLeft"
            linkPath="/store"
          />
          <div className="store-description">
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              recusandae molestiae, maxime illo quisquam vero dignissimos
              tempora libero ea odio. Quae aliquid, debitis suscipit blanditiis
              expedita nostrum maxime libero asperiores. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Sit similique nam
              exercitationem, repellendus accusamus tenetur facere, earum libero
              numquam ullam voluptate sint amet et ipsa! Sunt cupiditate placeat
              deleniti explicabo?
            </p>
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
          </div>
        </div>

        <div className="gallery-container">
          <SlideshowLightbox
            className="slideshow-lightbox"
            showControls={false}
            showThumbnails={true}
            lightboxImgClass={"lightboxImg"}
            thumbnailBorder="silver"
            showMagnificationIcons={false}
            showSlideshowIcon={false}
            imgAnimation="fade"
            modalClose="clickOutside"
            roundedImages={true}
            captionStyle={{ color: "silver" }}
          >
            <img className="img-slide  rounded" src={imgStore1} />
            <img className="img-slide  rounded" src={imgStore2} />
            <img className="img-slide  rounded" src={imgStore3} />
          </SlideshowLightbox>
        </div>
      </div>
    </div>
  );
}

export default Store;
