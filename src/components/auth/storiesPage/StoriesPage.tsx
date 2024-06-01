import Circle from "../../../components/UI/circle/Circle";
import Line from "../../../assets/imgs/line.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ScrollReveal from "scrollreveal";

const getLang = localStorage.getItem("lang");

type User = {
  id: string;
  Store_name: string;
  Photo: string;
  store_id: string;
  favoriteUser: [];
};

const user = JSON.parse(localStorage.getItem("User") || "{}");
const userEmail = user ? user.email : "";

function StoriesPage() {
  const [favoriteUser, setFavoriteUser] = useState<User[]>([]);
  // const [noValues, setNoValues] = useState("");

  // Get Data
  useEffect(() => {
    try {
      // ** 2 - Fulfilled => SUCCESS => (OPTIONAL)
      axios
        .get("https://endlestone.com/kees/APIs/favorites/getFavorites.php", {
          params: {
            email: userEmail,
          },
        })
        .then((res) => setFavoriteUser(res.data.msg));

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
      console.log(error);
    }
  }, []);

  // rendering
  const storeList = favoriteUser.map((item) => {
    return (
      <Circle
        key={item.id}
        type={"CartSmall"}
        title={item.Store_name}
        imgUrl={item.Photo}
        alt={item.Store_name}
        classNameImg="store"
        animationTitle="card-title-left"
        lightSpeed="animate__lightSpeedInLeft"
        linkPath={`/store/${item.store_id}`}
        store_id={item.store_id}
        icon={
          <IconButton
            className="dev-delete"
            aria-label="delete"
            onClick={() => handelDelete(item.store_id)}
          >
            <DeleteIcon className="delete" />
          </IconButton>
        }
      />
    );
  });

  // Handler
  const handelDelete = async (storeID: string) => {
    await axios.get(
      "https://endlestone.com/kees/APIs/favorites/removeFavorites.php",
      {
        params: {
          email: userEmail,
          storeID: storeID,
        },
      }
    );
    localStorage.removeItem(`${storeID}`);
    console.log(storeID);
    setFavoriteUser((favoriteUser) =>
      favoriteUser.filter((item) => item.store_id !== storeID)
    );
  };

  // No Values
  const NoValues = () => {
    if (!favoriteUser.length) {
      return (
        <div className="NoValues">
          {getLang === "ar"
            ? "لا يوجد متاجر مفضلة"
            : "There are no stores in the favorite"}
        </div>
      );
    }
  };

  return (
    <section className="stores">
      <div className="title-container">
        <h1 className="store-title">
          {getLang === "ar" ? "المتاجر المفضلة" : "Favorite stores"}
        </h1>
        <img className="line" src={Line} alt="Line" loading="lazy" />
      </div>
      <div className="stores-container">{storeList}</div>
      {NoValues()}
    </section>
  );
}

export default StoriesPage;
