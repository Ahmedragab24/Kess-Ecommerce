import axios from "axios";
import { useEffect, useState } from "react";

import Circle from "../../../components/UI/circle/Circle";
import Line from "../../../assets/imgs/line.png";
import ScrollReveal from "scrollreveal";

type Store = {
  id: string;
  Store_name: string;
  Photo: string;
};

function GulfAbayas() {
  const [gulfAbayas, setGulfAbayas] = useState<Store[]>([]);

  // Handler
  useEffect(() => {
    try {
      // ** 2 - Fulfilled => SUCCESS => (OPTIONAL)
      axios
        .get(
          "http://endlestone.com/kees/APIs/stores/getStores.php?verified=1&categoryID=6"
        )
        .then((res) => setGulfAbayas(res.data.msg));

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
  const storeList = gulfAbayas.map((store) => {
    return (
      <Circle
        key={store.id}
        type={"CartSmall"}
        title={store.Store_name}
        imgUrl={store.Photo}
        alt={store.Store_name}
        classNameImg="store"
        animationTitle="card-title-left"
        lightSpeed="animate__lightSpeedInLeft"
        linkPath={`/stores/${store.id}`}
        favorite
      />
    );
  });

  return (
    <section className="stores">
      <div className="title-container">
        <h1 className="store-title">Gulf Abayas</h1>
        <img className="line" src={Line} alt="Line" loading="lazy" />
      </div>
      <div className="stores-container">{storeList}</div>
    </section>
  );
}
export default GulfAbayas;
