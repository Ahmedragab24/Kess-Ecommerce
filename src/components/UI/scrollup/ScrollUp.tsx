import "./scrollup.css";
import { RiArrowUpSLine } from "@remixicon/react";

function ScrollUp() {
  /*==================== SHOW SCROLL UP ====================*/
  function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (window.scrollY >= 200) scrollUp?.classList.add("show-scroll");
    else scrollUp?.classList.remove("show-scroll");
  }
  window.addEventListener("scroll", scrollUp);

  return (
    <a href="#" className="scrollup" id="scroll-up">
      <RiArrowUpSLine className="scrollup__icon" />
    </a>
  );
}

export default ScrollUp;
