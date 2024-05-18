import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../pages/Layout";
import Home from "../pages/home/Home";
import Men from "../pages/men/Men";
import Women from "../pages/women/Women";
import Register from "../pages/register/Register";
import Login from "../pages/login/login";
import ErrorHandeler from "../components/errors/ErrorRoutHandeler";
import PageNotFound from "../components/errors/pageNotFound/PageNotFound";
import Clothes from "../pages/men/stores/Clothes";
import Sport from "../pages/men/stores/Sport";
import Shoes from "../pages/men/stores/Shoes";
import Accessories from "../pages/men/stores/Accessories";
import Perfumes from "../pages/men/stores/Perfumes";
import Dresses from "../pages/women/stores/Dresses";
import GulfAbayas from "../pages/women/stores/GulfAbayas";
import MakeUp from "../pages/women/stores/MakeUp";
import WomenPerfumes from "../pages/women/stores/WomenPerfumes";
import VariousClothes from "../pages/women/stores/VariousClothes";
import WomenAccessories from "../pages/women/stores/WomenAccessories";
import WomenShoes from "../pages/women/stores/WomenShoes";
import WomenSport from "../pages/women/stores/WomenSport";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Profile from "../components/auth/profilePage/Profile";
import StoriesFavorites from "../components/auth/storiesPage/StoriesPage";
import Freelancer from "../pages/freelancer/Freelancer";
import Store from "../pages/storePage/Store";

const storageKey = "User";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Rout Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandeler />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="Man Category" element={<Men />} />
        <Route path="Woman Category" element={<Women />} />
        <Route path="/men-clothes" element={<Clothes />} />
        <Route path="/men-sport" element={<Sport />} />
        <Route path="/men-shoes" element={<Shoes />} />
        <Route path="/men-accessories" element={<Accessories />} />
        <Route path="/men-perfumes" element={<Perfumes />} />
        <Route path="/women-gulfAbayas" element={<GulfAbayas />} />
        <Route path="/women-dresses" element={<Dresses />} />
        <Route path="/women-makeUp" element={<MakeUp />} />
        <Route path="/women-perfumes" element={<WomenPerfumes />} />
        <Route path="/women-variousClothes" element={<VariousClothes />} />
        <Route path="/women-accessories" element={<WomenAccessories />} />
        <Route path="/women-shoes" element={<WomenShoes />} />
        <Route path="/women-sportClothes" element={<WomenSport />} />
        <Route path="/FreeLance" element={<Freelancer />} />
        <Route path="/store" element={<Store />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute
              isLoggedIn={userData?.email}
              redirecpath="/"
              data={userData}
            >
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/storiesFavorites"
          element={
            <ProtectedRoute
              isLoggedIn={userData?.email}
              redirecpath="/"
              data={userData}
            >
              <StoriesFavorites />
            </ProtectedRoute>
          }
        />
      </Route>
      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;
