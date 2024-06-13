import "./loading.css";
import LoadingVideo from "../../assets/video/Kees_Landing Page Animation (Beige).mp4";

const Loading = () => {
  return (
    <div className="loading-page">
      <video className="loading-video" autoPlay muted>
        <source src={LoadingVideo} type="video/mp4" />
      </video>
    </div>
  );
};
export default Loading;
