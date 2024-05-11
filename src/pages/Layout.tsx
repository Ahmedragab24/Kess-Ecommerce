import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import ScrollUp from "../components/UI/scrollup/ScrollUp";

function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <ScrollUp />
      <Footer />
    </>
  );
}

export default RootLayout;
