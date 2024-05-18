import { useEffect, useState } from "react";
import "./freelancer.css";
import axios from "axios";
import Circle from "../../components/UI/circle/Circle";
import Line from "../../assets/imgs/line.png";
import ScrollReveal from "scrollreveal";

interface FreelancerItem {
  id: number;
  title: string;
  type: string;
  Photo: string;
  photo: string;
  category_name: string;
}

const api =
  "http://endlestone.com/kees/APIs/categories/getCategories.php?globalID=5&is_freelance=-1";

function Freelancer() {
  const [data, setData] = useState<FreelancerItem[]>([]);

  // Fetch data
  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        console.log(res.data.msg);

        setData(res.data.msg as FreelancerItem[]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // setLoading(false);
      });
  }, []);

  // ScrollReveal
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2000,
      delay: 300,
    });

    sr.reveal(`.store-title`, { delay: 400 });
    sr.reveal(`.line`, { delay: 500 });
    sr.reveal(`.container-Freelancer`, { delay: 600 });
  }, []);

  // Render
  const renderData = data.map((item) => {
    return (
      <Circle
        key={item.id}
        classNameImg="circle-Freelancer"
        animationTitle="card-title-left"
        lightSpeed="animate__lightSpeedInLeft"
        linkPath="/freelancer"
        title={item.category_name}
        type={"CartSmall"}
        imgUrl={item.photo}
        alt={item.category_name}
      />
    );
  });

  return (
    <div className="section-Freelancer">
      <div className="title-container">
        <h1 className="store-title">Freelancer</h1>
        <img className="line" src={Line} alt="Line" loading="lazy" />
      </div>
      <div className="container-Freelancer">{renderData}</div>
    </div>
  );
}

export default Freelancer;
