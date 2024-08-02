import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import "./facorite.css";
import axios from "axios";
import { ReactNode, useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
// const getLang = localStorage.getItem("lang");

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
                const { status } = await axios.get(
                    "https://kees90.com/kees/APIs/favorites/addFavorites.php",
                    {
                        params: {
                            email: userEmail,
                            storeID: storeID,
                        },
                    }
                );

                if (status === 200) {
                    setCheck(true);
                    localStorage.setItem(`${storeID}`, JSON.stringify(check));
                }
            } catch (error) {
                await axios.get(
                    "https://kees90.com/kees/APIs/favorites/removeFavorites.php",
                    {
                        params: {
                            email: userEmail,
                            storeID: storeID,
                        },
                    }
                );
            }
        } else {
            localStorage.removeItem(`${storeID}`);
            await axios.get(
                "https://kees90.com/kees/APIs/favorites/removeFavorites.php",
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
            {/* <h4 className="favorite-text">
        {localGetFavorite
          ? getLang === "ar"
            ? "تم اضافته الي المفضله"
            : "Added To Favorite"
          : getLang === "ar"
          ? "إضف إلي المفضلة"
          : "Add To Favorite"}
      </h4> */}
        </div>
    );
};

export default FavoriteButton;
