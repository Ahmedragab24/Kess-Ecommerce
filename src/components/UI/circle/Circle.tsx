import "./circle.css";
import Image from "../Image";
import { HTMLProps } from "react";
import FavoriteButton from "../favoriteButton/Favorite";
import { Link } from "react-router-dom";

const storageKey = "User";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;

interface Icircle extends HTMLProps<HTMLDivElement> {
  id?: string;
  title: string;
  description?: string;
  type: "CartBig" | "CartSmall";
  imgUrl: string;
  alt: string;
  classNameImg: string;
  animationTitle: "card-title-left" | "card-title-right";
  lightSpeed: "animate__lightSpeedInLeft" | "animate__lightSpeedInRight";
  linkPath: string;
  favorite?: boolean;
  storeID?: string;
  userFavorite?: string;
}

function Circle({
  id,
  title,
  description,
  type,
  imgUrl,
  alt,
  classNameImg,
  animationTitle,
  lightSpeed,
  linkPath,
  favorite,
  storeID,
  userFavorite,
}: Icircle) {
  return (
    <div className="circle-container ">
      <div className="circle" key={id}>
        <div className={type}>
          <Link to={linkPath}>
            <Image imageURL={imgUrl} alt={alt} className={classNameImg} />
          </Link>
        </div>

        <h3
          className={` card-title ${animationTitle}  fancy  mt-3  animate__animated ${lightSpeed}`}
        >
          {title}
        </h3>
        {description && <p className="card-description">{description}</p>}
      </div>
      {userData && favorite == true ? (
        <FavoriteButton
          storeID={storeID || "defaultStoreID"}
          userFavorite={userFavorite || "defaultUserFavorite"}
        />
      ) : null}
    </div>
  );
}

export default Circle;
