import { Avatar } from "@mui/material";
import "./card.css";
import FavoriteButton from "../favoriteButton/Favorite";
import { Link } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import Image from "../Image";

const storageKey = "User";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;

interface CardProps {
  id?: string;
  store_id?: string;
  Store_name: string;
  Photo: string;
  Store_link?: string;
  Instagram_Link?: string;
  favorite?: boolean;
  linkPath?: string;
}

interface StoreImage {
  name: string;
  photo: string;
  alt: string;
  text?: string;
}

function Card({
  store_id,
  Store_name,
  Photo,
  Store_link,
  Instagram_Link,
  favorite,
  linkPath,
}: CardProps) {
  const [index, setIndex] = useState(0);
  const [storeImages, setStoreImages] = useState<StoreImage[]>([]);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    axios
      .get(
        `https://endlestone.com/kees/APIs/products/getProducts.php?storeID=13`
      )
      .then((res) => {
        setStoreImages(res.data.msg);
      });
  }, []);

  // Render Store Images
  const renderStoreImages = () => {
    return storeImages.map((image) => (
      <Carousel.Item>
        <Image className="store" imageURL={image.photo} alt={image.name} />
      </Carousel.Item>
    ));
  };

  return (
    <figure className="card-figure">
      <Link to={linkPath || "#"}>
        <Carousel
          className="store-carousel"
          activeIndex={index}
          onSelect={handleSelect}
          slide={true}
          pause={false}
          indicators={false}
          touch={true}
        >
          {renderStoreImages()}
        </Carousel>
      </Link>
      <div className="store-info card-title-left fancy animate__animated animate__lightSpeedInLeft">
        <Avatar
          className="avatar-store"
          alt={Store_name}
          src={Photo}
          sx={{ width: 56, height: 56 }}
        />
        <h3 className="store-name">{Store_name}</h3>
      </div>
      <div className="store-links-container">
        <div className="store-links card-title-left fancy animate__animated animate__lightSpeedInLeft">
          {userData && favorite == true ? (
            <FavoriteButton storeID={store_id || ""} />
          ) : null}
          <Link to={Store_link || "#"} target="_blank" rel="noreferrer">
            <LinkIcon className="link-icon" />
          </Link>
          <Link to={Instagram_Link || "#"} target="_blank" rel="noreferrer">
            <InstagramIcon className="link-icon instagram" />
          </Link>
        </div>
      </div>
    </figure>
  );
}

export default Card;
