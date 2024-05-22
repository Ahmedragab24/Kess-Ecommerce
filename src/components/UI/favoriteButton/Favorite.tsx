import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import "./facorite.css";
import axios from "axios";
import { ReactNode, useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface FavoriteButtonProps {
  storeID: string;
}

const user = JSON.parse(localStorage.getItem("User") || "{}");
const userEmail = user ? user.email : "";

const FavoriteButton = ({ storeID }: FavoriteButtonProps) => {
  const [check, setCheck] = useState<boolean>(false);
  // const [addButton, setAddButton] = useState<AddButton>();

  // Handler
  const handleAddFavorite = async () => {
    if (check == false) {
      try {
        const { status, data } = await axios.get(
          "http://endlestone.com/kees/APIs/favorites/addFavorites.php",
          {
            params: {
              email: userEmail,
              storeID: storeID,
            },
          }
        );
        console.log(data);

        if (status === 200) {
          setCheck(true);
          console.log("succfully");
          localStorage.setItem(`${storeID}`, JSON.stringify(check));
        }
      } catch (error) {
        console.log(error);
        console.log(userEmail);
        console.log(storeID);
      }
    } else {
      console.log("bad");
      localStorage.removeItem(`${storeID}`);
      await axios.get(
        "http://endlestone.com/kees/APIs/favorites/removeFavorites.php",
        {
          params: {
            email: userEmail,
            storeID: storeID,
          },
        }
      );
      setCheck(false);
    }
  };

  const localGetFavorite = localStorage.getItem(`${storeID}`);

  const checkingIcon = (): ReactNode => {
    return localGetFavorite ? <Favorite /> : <FavoriteBorder />;
  };

  return (
    <div className="container-favorite d-flex align-items-center justify-content-center mt-3 card-title-left fancy animate__animated animate__lightSpeedInLeft">
      <Checkbox
        onClick={handleAddFavorite}
        className="favorite-icon"
        {...label}
        icon={<FavoriteBorder />}
        // LinkComponent={localGetFavorite ? <Favorite /> : <FavoriteBorder />}
        checkedIcon={checkingIcon()}
        checked={true}
        color="error"
      />
      <h4 className="favorite-text">
        {localGetFavorite ? "Added To Favorite" : "Add To Favorite"}
      </h4>
    </div>
  );
};

export default FavoriteButton;
