import "./men.css";
import { useEffect, useState } from "react";
import Circle from "../../components/UI/circle/Circle";
import axios from "axios";
import Line from "../../assets/imgs/line.png";
import ScrollReveal from "scrollreveal";

type Store = {
    id: string;
    category_name: string;
    category_name_ar: string;
    description?: string;
    description_ar?: string;
    photo: string;
};

function Men() {
    const [storesOfMen, setStoresOfMen] = useState<Store[]>([]);
    const getLang = localStorage.getItem("lang");

    // Handler
    useEffect(() => {
        try {
            // ** 2 - Fulfilled => SUCCESS => (OPTIONAL)
            axios
                .get(
                    "https://kees90.com/kees/APIs/categories/getCategories.php?globalID=1&is_freelance=-1"
                )
                .then((res) => setStoresOfMen(res.data.msg));

            // ScrollReveal
            const sr = ScrollReveal({
                origin: "top",
                distance: "60px",
                duration: 2000,
                delay: 300,
            });

            sr.reveal(`.store-title`);
            sr.reveal(`.line`, { delay: 400 });
            sr.reveal(`.stores-container`, { delay: 500 });
        } catch (error) {
            console.log("Failed to fetch data:" + error);
        }
    }, []);

    // rendering
    const storeList = storesOfMen.map((store) => {
        return (
            <Circle
                key={store.id}
                id={store.id}
                type={"CartSmall"}
                title={
                    getLang === "ar"
                        ? store.category_name_ar
                        : store.category_name
                }
                imgUrl={store.photo}
                alt={store.category_name}
                classNameImg="store"
                animationTitle="card-title-left"
                lightSpeed="animate__lightSpeedInLeft"
                linkPath={`/stores/${store.id}`}
            />
        );
    });

    return (
        <section className="stores">
            <div className="title-container">
                <h1 className="store-title">
                    {getLang === "ar" ? "قسم الرجال" : "Men's section"}
                </h1>
                <img className="line" src={Line} alt="Line" loading="lazy" />
            </div>
            <div className="stores-container">{storeList}</div>
        </section>
    );
}

export default Men;
