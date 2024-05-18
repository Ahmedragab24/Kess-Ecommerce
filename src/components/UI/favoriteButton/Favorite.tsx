import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import "./facorite.css";
import { IuserFavorite } from "../circle/Circle";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
import { useState } from "react";
// import axios from "axios";

interface FavoriteButtonProps {
  userFavorite: IuserFavorite;
  storeID: string;
}

const FavoriteButton = ({ storeID, userFavorite }: FavoriteButtonProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    if (checked == false) {
      setChecked(true);
      localStorage.setItem(`${storeID}`, JSON.stringify(true));
      localStorage.setItem(`${userFavorite.id}`, JSON.stringify(userFavorite));
    } else {
      setChecked(false);
      localStorage.removeItem(`${storeID}`);
      localStorage.removeItem(`${userFavorite.id}`);
    }
  };

  return (
    <div
      className="container-favorite d-flex align-items-center justify-content-center  mt-3
      card-title-left  fancy    animate__animated animate__lightSpeedInLeft"
    >
      <Checkbox
        onClick={handleChange}
        className="favorite-icon"
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        color="error"
      />
      <h4 className="favorite-text">
        {checked ? "Added To Favorite" : "Add To Favorite"}
      </h4>
    </div>
  );
};

export default FavoriteButton;
