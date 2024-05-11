/*==================== SCROLL REVEAL ANIMATION ====================*/
import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true,
});

sr.reveal(`.right-circle`);
sr.reveal(`form, .section-title`, { delay: 500 });
sr.reveal(`.footer-description`, { delay: 600 });
sr.reveal(`.social , .footer-title`, { delay: 700 });
sr.reveal(`.list-unstyled`, { delay: 800 });
sr.reveal(`.Copyright`, { delay: 900 });
sr.reveal(`.`, {
  delay: 800,
  origin: "bottom",
});
sr.reveal(`.social, .stores, .category`, { interval: 300 });
sr.reveal(`.men`, { origin: "left" });
sr.reveal(`.women`, { origin: "right" });
