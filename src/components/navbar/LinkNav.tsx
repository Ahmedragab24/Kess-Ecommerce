import axios from "axios";
import { useEffect, useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

interface Iprops {
  GlobalID: string;
}

interface Category {
  id: number;
  category_name: string;
  photo: string;
  description: string;
}

function LinkNav({ GlobalID }: Iprops) {
  const [categories, setCategories] = useState<Category[]>([]);

  // Fetch GlobalCategory
  //   let GlobalID: string = "1";
  useEffect(() => {
    try {
      axios
        .get(
          `http://endlestone.com/kees/APIs/categories/getCategories.php?globalID=${GlobalID}&is_freelance=-1`
        )
        .then((res) => setCategories(res.data.msg));
    } catch (error) {
      console.log("Failed to fetch data:" + error);
    }
  }, [GlobalID]);

  // render Categories
  const NavList = () => {
    return categories.map((stores) => {
      <NavDropdown.Item
        href="#action/3.1"
        as={NavLink}
        to={`/stores/${stores.id}`}
        className="dropdown-item text-color"
      >
        {stores.category_name}
      </NavDropdown.Item>;
    });
  };
  return { NavList };
}

export default LinkNav;
