import axios from "axios";
import { useEffect, useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

interface Category {
  id: number;
  category_name: string;
  category_name_ar: string;
  photo: string;
  description: string;
}

function LinkCate1() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // ** 2 - Fulfilled => SUCCESS => (OPTIONAL)
    axios
      .get(
        `https://endlestone.com/kees/APIs/categories/getCategories.php?globalID=1&is_freelance=-1`
      )
      .then((res) => setCategories(res.data.msg));
  }, []);

  // render Categories
  const renderCategories = () => {
    return categories.map((category) => {
      const getLang = localStorage.getItem("lang");
      return (
        <NavDropdown.Item
          key={category.id}
          // href={`stores/${category.id}`}
          as={NavLink}
          eventKey={`/stores/${category.id}`}
          to={`/stores/${category.id}`}
          className="dropdown-item text-color"
        >
          {getLang === "ar"
            ? category.category_name_ar
            : category.category_name}
        </NavDropdown.Item>
      );
    });
  };

  return <>{renderCategories()}</>;
}

export default LinkCate1;
