import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import "./facorite.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
import { useState } from "react";
import axios from "axios";

interface FavoriteButtonProps {
  userFavorite: string;
  storeID: string;
}

const FavoriteButton = ({ storeID, userFavorite }: FavoriteButtonProps) => {
  // Add storeID as a prop to the component
  const [checked, setChecked] = useState(false);

  const handleChange = async () => {
    setChecked(!checked);

    await axios.post(
      `http://endlestone.com/kees/APIs/favorites/addFavorites.php?email=R@gmail.com&storeID=${storeID}`,
      userFavorite,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
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
