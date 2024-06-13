import "./stores.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Line from "../../assets/imgs/line.png";
import ScrollReveal from "scrollreveal";
import Card from "../../components/UI/card/Card";

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
  const [stores, setStores] = useState([]);
  const [noValue, setNoValue] = useState("");
  const getLang = localStorage.getItem("lang");

  const { id } = useParams();

  // Get Data
  useEffect(() => {
    // ** 2 - Fulfilled => SUCCESS => (OPTIONAL)
    axios
      .get(
        `https://endlestone.com/kees/APIs/stores/getStores.php?verified=1&categoryID=${id}`
      )
      .then((res) => setStores(res.data.msg))
      .catch((error) => setNoValue(error.response.data.msg));

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

  // rendering
  const RenderStores = stores.map((stores: Store) => {
    return (
      <Card
        key={stores.id}
        id={stores.id}
        store_id={stores.store_id}
        Store_name={
          getLang === "ar" ? stores.Real_store_name : stores.Store_name
        }
        Photo={stores.Photo}
        favorite
        Store_link={stores.Store_link}
        Instagram_Link={stores.Instagram_Link}
        linkPath={`/store/${stores.id}`}
      />
    );
  });

  return (
    <section className="stores">
      <div className="title-container">
        <h1 className="store-title">{getLang === "ar" ? "متاجر" : "Stores"}</h1>
        <img className="line" src={Line} alt="Line" loading="lazy" />
      </div>
      <div className="stores-container-child container ">
        {stores.length ? (
          RenderStores
        ) : (
          <div className="NoStore"> {noValue}</div>
        )}
      </div>
    </section>
  );
}

export default Stores;
