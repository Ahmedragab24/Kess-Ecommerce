import "./stores.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Line from "../../assets/imgs/line.png";
import ScrollReveal from "scrollreveal";
import Card from "../../components/UI/card/Card";
import Circle from "../../components/UI/circle/Circle";

interface categore {
    id: string;
    category_name: string;
    category_name_ar: string;
    description?: string;
    description_ar?: string;
    photo: string;
}

type Store = {
    id: string;
    Store_name: string;
    Real_store_name: string;
    Store_link: string;
    Instagram_Link: string;
    title: string;
    Photo: string;
    store_id: string;
};

function Stores() {
    const [checkCategory, setCackCategory] = useState(String);
    const [stores, setStores] = useState([]);
    const [nestedCat, setNestedCat] = useState([]);
    const [noValue, setNoValue] = useState("");
    const getLang = localStorage.getItem("lang");

    const { id } = useParams();

    // Get Data
    useEffect(() => {
        axios
            .get(
                "https://kees90.com/kees/APIs/categories/getCategories.php?globalID=3&is_freelance=-1"
            )
            // .then((res) => setStores(res.data.msg))
            .then((res) => setCackCategory(res.data.msg[0].is_store_parent))
            .catch((error) => setNoValue(error.response.data.msg));

        if (checkCategory === "1") {
            // GET STORES
            axios
                .get(
                    `https://kees90.com/kees/APIs/stores/getStores.php?verified=1&categoryID=${id}`
                )
                .then((res) => setStores(res.data.msg))
                .catch((error) => setNoValue(error.response.data.msg));
        } else {
            // GET Nested Categories
            axios
                .get(
                    `https://kees90.com/kees/APIs/categories/getCategories.php?globalID=${id}&is_freelance=-1`
                )
                .then((res) => setNestedCat(res.data.msg))
                .catch((error) => setNoValue(error.response.data.msg));
        }

        // ScrollReveal
        const sr = ScrollReveal({
            origin: "top",
            distance: "60px",
            duration: 2000,
            delay: 300,
        });

        sr.reveal(`.store-title`);
        sr.reveal(`.line`, { delay: 400 });
        sr.reveal(`.stores-container-child`, { delay: 500 });
    }, [id]);

    // rendering Stores
    const RenderStores = stores.map((stores: Store) => {
        return (
            <Card
                key={stores.id}
                id={stores.id}
                store_id={stores.store_id}
                Store_name={
                    getLang === "ar"
                        ? stores.Real_store_name
                        : stores.Store_name
                }
                Photo={stores.Photo}
                favorite
                Store_link={stores.Store_link}
                Instagram_Link={stores.Instagram_Link}
                linkPath={`/store/${stores.id}`}
            />
        );
    });

    // rendering Nested Categories
    const RenderCategories = nestedCat.map((nestedCat: categore) => {
        return (
            <Circle
                key={nestedCat.id}
                type="CartSmall"
                title={
                    getLang == "en"
                        ? nestedCat.category_name
                        : nestedCat.category_name_ar
                }
                animationTitle="card-title-left"
                imgUrl={nestedCat.photo}
                lightSpeed="animate__lightSpeedInLeft"
                CircleDirection="circleBottom"
                alt={nestedCat.category_name}
                classNameImg={nestedCat.category_name}
                linkPath={`/store/${nestedCat.id}`}
            />
        );
    });

    return (
        <section className="stores">
            <div className="title-container">
                <h1 className="store-title">
                    {stores.length
                        ? getLang === "ar"
                            ? "متاجر"
                            : "Stores"
                        : getLang === "ar"
                        ? "أٌقسام"
                        : "Categories"}
                </h1>
                <img className="line" src={Line} alt="Line" loading="lazy" />
            </div>
            <div
                className={`container ${
                    stores.length
                        ? "stores-container-child"
                        : "nestedCat-container-child"
                }`}
            >
                {stores.length || nestedCat.length ? (
                    checkCategory === "1" ? (
                        RenderStores
                    ) : (
                        RenderCategories
                    )
                ) : (
                    <div className="NoStore"> {noValue}</div>
                )}
            </div>
        </section>
    );
}

export default Stores;
