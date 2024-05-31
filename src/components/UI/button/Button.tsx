import "./button.css";
import { Link } from "react-router-dom";

interface ButtonProps {
  title: string;
  pathLink: string;
}

function Button({ title, pathLink }: ButtonProps) {
  return (
    <Link to={pathLink}>
      <button className="button" type="button">
        {title}
      </button>
    </Link>
  );
}

export default Button;
