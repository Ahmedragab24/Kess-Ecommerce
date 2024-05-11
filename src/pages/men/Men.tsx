import "./men.css";
import { useEffect, useState } from "react";
import Circle from "../../components/UI/circle/Circle";
import axios from "axios";
import { Link } from "react-router-dom";

type Store = {
  id: string;
  name: string;
  photo: string;
};

function Men() {
  const [stores, setStores] = useState<Store[]>([]);

  // Handler
  useEffect(() => {
    try {
      // ** 2 - Fulfilled => SUCCESS => (OPTIONAL)
      axios
        .get(
          "http://endlestone.com/kees/APIs/products/getProducts.php?storeID=13"
        )
        .then((res) => setStores(res.data.msg))
        .catch((err) => console.log("THE ERROR", err));
    } catch (error) {
      console.log("Failed to fetch data:" + error);
    }
  }, []);

  // rendering
  const storeList = stores.map((store) => {
    return (
      <Link key={store.id} to={`/stores/${store.id}`}>
        <Circle
          title={store.name}
          type={"CartSmall"}
          imgUrl={store.photo}
          alt={store.name}
          classNameImg="store"
          animationTitle="card-title-left"
          lightSpeed="animate__lightSpeedInLeft"
        />
      </Link>
    );
  });

  return (
    <section className="stores">
      <div className="stores-container">{storeList}</div>
    </section>
  );
}

export default Men;
