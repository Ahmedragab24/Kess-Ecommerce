import "./circle.css";
import Image from "../Image";
import { HTMLProps } from "react";

interface Icircle extends HTMLProps<HTMLDivElement> {
  id?: string;
  title: string;
  type: "CartBig" | "CartSmall";
  imgUrl: string;
  alt: string;
  classNameImg: string;
  animationTitle: "card-title-left" | "card-title-right";
  lightSpeed: "animate__lightSpeedInLeft" | "animate__lightSpeedInRight";
}

function Circle({
  id,
  title,
  type,
  imgUrl,
  alt,
  classNameImg,
  animationTitle,
  lightSpeed,
}: Icircle) {
  return (
    <div className="circle" key={id}>
      <div className={type}>
        <Image imageURL={imgUrl} alt={alt} className={classNameImg} />
      </div>

      <h3
        className={` card-title ${animationTitle}  fancy  mt-3  animate__animated ${lightSpeed}`}
      >
        {title}
      </h3>
    </div>
  );
}

export default Circle;
