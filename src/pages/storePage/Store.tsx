import Circle from "../../components/UI/circle/Circle";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import "./store.css";
import {
    RiFacebookCircleFill,
    RiInstagramFill,
    RiTwitterFill,
    RiWhatsappFill,
} from "@remixicon/react";
import { useEffect, useState } from "react";
import axios from "axios";
import ScrollReveal from "scrollreveal";
import { useParams } from "react-router-dom";

type Store = {
    id: string;
    Store_name: string;
    Store_link: string;
    Instagram_Link: string;
    title: string;
    Photo: string;
    store_id: string;
    description: string;
};

type ImagesStore = {
    id: string;
    photo: string;
};

const getLang = localStorage.getItem("lang");

function Store() {
    const [store, setStore] = useState<Store[]>([]);
    const [ImagesStore, setImagesStore] = useState<ImagesStore[]>([]);
    const { id } = useParams();

    // Get Store
    useEffect(() => {
        axios
            .get(
                `https://endlestone.com/kees/APIs/stores/storeInfo.php?storeID=${id}`
            )
            .then((res) => setStore(res.data.msg));

        // ScrollReveal
        const sr = ScrollReveal({
            origin: "top",
            distance: "60px",
            duration: 2000,
            delay: 300,
        });

        sr.reveal(`.store-details`);
        sr.reveal(`.gallery-container`, { delay: 500 });
    }, [id]);

    // // Get Images Store
    useEffect(() => {
        axios
            .get(
                `https://endlestone.com/kees/APIs/products/getProducts.php?storeID=${id}`
            )
            .then((res) => setImagesStore(res.data.msg))
            .catch((err) => console.log(err));

        // ScrollReveal
        const sr = ScrollReveal({
            origin: "top",
            distance: "60px",
            duration: 2000,
            delay: 300,
        });

        sr.reveal(`.store-details`);
        sr.reveal(`.gallery-container`, { delay: 500 });
    }, [id]);

    // // rendering Store
    const RenderStore = store.map((store) => {
        return (
            <div className="container store-details mb-5">
                <Circle
                    key={store.id}
                    type={"CartSmall"}
                    title={store.Store_name}
                    imgUrl={store.Photo}
                    alt={store.Store_name}
                    description=""
                    classNameImg="store"
                    animationTitle="card-title-left"
                    lightSpeed="animate__lightSpeedInLeft"
                    linkPath={`/store/${store.store_id}`}
                    favorite
                    store_id={store.store_id}
                    Store_name={store.Store_name}
                    Store_link={store.Store_link}
                    Instagram_Link={store.Instagram_Link}
                />
                <div className="store-description">
                    <p className="description">{store.description}</p>
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
        );
    });

    // rendering Images Store
    const RenderImagesStore = ImagesStore.map((img) => {
        return (
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
                <img
                    key={img.id}
                    className="img-slide rounded"
                    src={img.photo}
                    alt="slide"
                />
            </SlideshowLightbox>
        );
    });

    return (
        <div className="store-page">
            {store.length ? (
                <div className="container store-container">
                    {RenderStore}
                    <div className="gallery-container">{RenderImagesStore}</div>
                </div>
            ) : (
                <div className="py-5">
                    <h2 className="NoStore">
                        {getLang === "ar"
                            ? "لا يوجد بيانات للمتجر"
                            : "There is no data for the store."}
                    </h2>
                </div>
            )}
        </div>
    );
}

export default Store;
