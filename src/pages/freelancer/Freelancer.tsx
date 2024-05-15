import { useEffect, useState } from "react";
import "./freelancer.css";
import axios from "axios";
import Circle from "../../components/UI/circle/Circle";
import Line from "../../assets/imgs/line.png";

interface FreelancerItem {
  id: number;
  title: string;
  type: string;
  Photo: string;
  alt: string;
  Store_name: string;
}

const api =
  "http://endlestone.com/kees/APIs/stores/getFreelance.php?categoryID=5";

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

  // Render
  const renderData = data.map((item) => {
    return (
      <Circle
        key={item.id}
        classNameImg="circle-Freelancer"
        animationTitle="card-title-left"
        lightSpeed="animate__lightSpeedInLeft"
        linkPath="/freelancer"
        title={item.Store_name}
        type={"CartSmall"}
        imgUrl={item.Photo}
        alt={item.alt}
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
