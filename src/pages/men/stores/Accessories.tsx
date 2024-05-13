import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Circle from "../../../components/UI/circle/Circle";
import Line from "../../../assets/imgs/line.png";
import ScrollReveal from "scrollreveal";

type Store = {
  id: string;
  Store_name: string;
  photo: string;
};

function Accessories() {
  const [accessories, setAccessories] = useState<Store[]>([]);

  // Handler
  useEffect(() => {
    try {
      // ** 2 - Fulfilled => SUCCESS => (OPTIONAL)
      axios
        .get(
          "http://endlestone.com/kees/APIs/stores/getStores.php?verified=1&categoryID=6"
        )
        .then((res) => setAccessories(res.data.msg));

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
  const storeList = accessories.map((store) => {
    return (
      <Link className="store-link" key={store.id} to={`/stores/${store.id}`}>
        <Circle
          type={"CartSmall"}
          title={store.Store_name}
          imgUrl={store.photo}
          alt={store.photo}
          classNameImg="store"
          animationTitle="card-title-left"
          lightSpeed="animate__lightSpeedInLeft"
        />
      </Link>
    );
  });

  return (
    <section className="stores">
      <div className="title-container">
        <h1 className="store-title">Men's Accessories</h1>
        <img className="line" src={Line} alt="Line" />
      </div>
      <div className="stores-container">{storeList}</div>
    </section>
  );
}
export default Accessories;
