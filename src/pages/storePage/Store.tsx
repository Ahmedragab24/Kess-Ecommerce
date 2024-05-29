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
// import Image from "../../components/UI/Image";
// import { useEffect, useState } from "react";
// import ScrollReveal from "scrollreveal";
// import { useParams } from "react-router-dom";
// import axios from "axios";

type Store = {
  id: string;
  name: string;
  Store_link: string;
  Instagram_Link: string;
  title: string;
  Photo: string;
  store_id: string;
};

function Store() {
  // const [store, setStore] = useState<Store[]>([]);
  // const [ImagesStore, setImagesStore] = useState([]);
  // const { id } = useParams();

  // Get Store
  // useEffect(() => {
  //   // ** 2 - Fulfilled => SUCCESS => (OPTIONAL)
  //   axios
  //     .get(`https://endlestone.com/kees/APIs/stores/storeInfo.php?storeID=${id}`)
  //     .then((res) => setStore(res.data.msg));

  //   // ScrollReveal
  //   const sr = ScrollReveal({
  //     origin: "top",
  //     distance: "60px",
  //     duration: 2000,
  //     delay: 300,
  //   });

  //   sr.reveal(`.store-details`);
  //   sr.reveal(`.gallery-container`, { delay: 500 });
  // }, [id]);

  // // Get Images Store
  // useEffect(() => {
  //   // ** 2 - Fulfilled => SUCCESS => (OPTIONAL)
  //   axios
  //     .get(
  //       `https://endlestone.com/kees/APIs/products/getProducts.php?storeID=${id}`
  //     )
  //     .then((res) => setImagesStore(res.data.msg));

  //   // ScrollReveal
  //   const sr = ScrollReveal({
  //     origin: "top",
  //     distance: "60px",
  //     duration: 2000,
  //     delay: 300,
  //   });

  //   sr.reveal(`.store-details`);
  //   sr.reveal(`.gallery-container`, { delay: 500 });
  // }, [id]);

  // // rendering Store
  // const RenderStore = store.map((store) => {
  //   return (
  //     <Circle
  //       key={store.id}
  //       type={"CartSmall"}
  //       title={store.Store_name}
  //       imgUrl={store.Photo}
  //       alt={store.Store_name}
  //       description=""
  //       classNameImg="store"
  //       animationTitle="card-title-left"
  //       lightSpeed="animate__lightSpeedInLeft"
  //       linkPath={`/store/${store.store_id}`}
  //       favorite
  //       store_id={store.store_id}
  //       Store_name={store.Store_name}
  //       Store_link={store.Store_link}
  //       Instagram_Link={store.Instagram_Link}
  //     />
  //   );
  // });

  // // rendering Images Store
  // const RenderImagesStore = ImagesStore.map((img: ImagesStore) => {
  //   return <img key={img.id} className="img-slide  rounded" src={img.photo} />;
  // });

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
            <img className="img-slide  rounded" src={imgStore1} alt="slide" />
            <img className="img-slide  rounded" src={imgStore2} alt="slide" />
            <img className="img-slide  rounded" src={imgStore3} alt="slide" />
          </SlideshowLightbox>
        </div>
      </div>
    </div>
  );
}

export default Store;
