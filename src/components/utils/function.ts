export const diractionLang = () => {
  const getLang: string | null = localStorage.getItem("lang");
  const body: HTMLElement | null = document.body;
  const navRight: HTMLElement | null = document.querySelector(".right-menu");
  const navLeft: HTMLElement | null = document.querySelector(".left-menu");
  const loginPage: HTMLElement | null = document.querySelector(".section-form-login");

  if (getLang === "en") {
    if (body) body.style.direction = "ltr";
  } else if (getLang === "ar") {
    if (body) body.style.direction = "rtl";
    if (navRight) navRight.style.flex = "inherit";
    if (navLeft) navLeft.style.flex = "none";
    if (loginPage) loginPage.style.direction = "ltr";
  }
};