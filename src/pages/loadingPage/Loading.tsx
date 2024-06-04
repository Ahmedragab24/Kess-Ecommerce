import "./loading.css";
import LoadingVideo from "../../assets/video/Kees_Landing Page_Alpha.mov";

const Loading = () => {
  return (
    <div className="loading-page">
      <video className="loading-video" autoPlay muted>
        <source src={LoadingVideo} type="video/mov" />
      </video>
    </div>
  );
};
export default Loading;
