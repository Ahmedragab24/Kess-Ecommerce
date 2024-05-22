import axios from "axios";
import { useEffect, useState } from "react";
import Circle from "../../components/UI/circle/Circle";
import { Link } from "react-router-dom";
import Line from "../../assets/imgs/line.png";
import ScrollReveal from "scrollreveal";

type Store = {
  id: string;
  category_name: string;
  description: string;
  photo: string;
};

function Women() {
  const [storesOfWomen, setStoresOfWomen] = useState<Store[]>([]);

  // Handler
  useEffect(() => {
    try {
      // ** 2 - Fulfilled => SUCCESS => (OPTIONAL)
      axios
        .get(
          "http://endlestone.com/kees/APIs/categories/getCategories.php?globalID=3&is_freelance=-1"
        )
        .then((res) => setStoresOfWomen(res.data.msg));

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
  const storeListWomen = storesOfWomen.map((store) => {
    return (
      <Link key={store.id} to={`/stores/${store.id}`}>
        <Circle
          key={store.id}
          id={store.id}
          type={"CartSmall"}
          title={store.category_name}
          description={store.description}
          imgUrl={store.photo}
          alt={store.category_name}
          classNameImg="store"
          animationTitle="card-title-left"
          lightSpeed="animate__lightSpeedInLeft"
          linkPath={`/stores/${store.id}`}
        />
      </Link>
    );
  });

  return (
    <section className="stores">
      <div className="title-container">
        <h1 className="store-title">Women's section</h1>
        <img className="line" src={Line} alt="Line" loading="lazy" />
      </div>
      <div className="stores-container">{storeListWomen}</div>
    </section>
  );
}

export default Women;
