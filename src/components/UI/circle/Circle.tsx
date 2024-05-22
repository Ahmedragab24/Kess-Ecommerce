import "./circle.css";
import Image from "../Image";
import { HTMLProps, ReactNode } from "react";
import FavoriteButton from "../favoriteButton/Favorite";
import { Link } from "react-router-dom";

const storageKey = "User";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;

export interface IuserFavorite {
  Certificate_No?: string;
  Commercial_Activity?: string;
  Contact_no?: string;
  Email?: string;
  Instagram_Link?: string;
  Phone_No?: string;
  Photo?: string;
  Real_store_name?: string;
  Store_link?: string;
  Store_location?: string;
  Store_name?: string;
  approve?: string;
  category_id?: string;
  clicks?: string;
  created?: string;
  id?: string;
  login_name?: string;
  password?: string;
  store_id?: string;
  subscribed_plan_id?: string;
}

interface Icircle extends HTMLProps<HTMLDivElement> {
  id?: string;
  title: string;
  description?: string;
  type: "CartBig" | "CartSmall";
  imgUrl: string;
  alt: string;
  CircleDirection?: "circleLeft" | "circleRight" | "circleBottom";
  classNameImg: string;
  animationTitle: "card-title-left" | "card-title-right";
  lightSpeed:
    | "animate__lightSpeed"
    | "animate__lightSpeedInLeft"
    | "animate__lightSpeedInRight";
  linkPath: string;
  favorite?: boolean;
  icon?: ReactNode;
  store_id?: string;
  Store_name?: string;
  Store_link?: string;
  Instagram_Link?: string;
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
  icon,
  store_id,
}: // Store_name,
// Store_link,
// Instagram_Link,
// userFavorite,
Icircle) {
  return (
    <div className="circle-container ">
      <div className="circle" key={id}>
        <div className={type}>
          <Link to={linkPath}>
            <Image imageURL={imgUrl} alt={alt} className={classNameImg} />
          </Link>
        </div>

        <div className="details">
          <h3
            className={` card-title ${animationTitle}  fancy  mt-3  animate__animated ${lightSpeed}`}
          >
            {title}
          </h3>
          {icon}
          {/* {Store_name} {Store_link} {Instagram_Link} */}
        </div>
        {description && <p className="card-description">{description}</p>}
      </div>
      {userData && favorite == true ? (
        <FavoriteButton
          storeID={store_id || ""}
          // userFavorite={userFavorite || {}}
        />
      ) : null}
    </div>
  );
}

export default Circle;
