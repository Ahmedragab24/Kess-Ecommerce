import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Category {
  id: number;
  category_name: string;
  category_name_ar: string;
  photo: string;
  description: string;
}

interface Iprops {
  categoryID: string;
}

function LinkCate({ categoryID }: Iprops) {
  const [categories, setCategories] = useState<Category[]>([]);
  const getLang = localStorage.getItem("lang");

  useEffect(() => {
    // ** 2 - Fulfilled => SUCCESS => (OPTIONAL)
    axios
      .get(
        `http://endlestone.com/kees/APIs/categories/getCategories.php?globalID=${categoryID}&is_freelance=-1`
      )
      .then((res) => setCategories(res.data.msg));
  }, [categoryID]);

  // render Categories
  const renderCategories = () => {
    return categories.map((category) => {
      return (
        <ul className="footerUL list-unstyled mb-0" key={category.id}>
          <li key={category.id}>
            <Link
              className="footer-link"
              id="footer-link"
              to={`/stores/${category.id}`}
            >
              {getLang === "ar"
                ? category.category_name_ar
                : category.category_name}
            </Link>
          </li>
        </ul>
      );
    });
  };

  return <>{renderCategories()}</>;
}

export default LinkCate;
