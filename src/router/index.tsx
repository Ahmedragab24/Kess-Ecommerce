import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../pages/Layout";
import Home from "../pages/home/Home";
import Men from "../pages/men/Men";

import Register from "../pages/register/Register";
import Login from "../pages/login/login";
import ErrorHandeler from "../components/errors/ErrorRoutHandeler";
import PageNotFound from "../components/errors/pageNotFound/PageNotFound";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Profile from "../components/auth/profilePage/Profile";
import StoriesFavorites from "../components/auth/storiesPage/StoriesPage";
import Freelancer from "../pages/freelancer/Freelancer";
import Store from "../pages/storePage/Store";
import Otp from "../pages/otp/Otp";
import Stores from "../pages/stores/Stores";
import Women from "../pages/women/Women";

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
        <Route path="stores/:id" element={<Stores />} />

        <Route path="/FreeLance" element={<Freelancer />} />
        <Route path="/store" element={<Store />} />
        <Route path="/otp" element={<Otp />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute
              isLoggedIn={userData?.email}
              redirecpath="/"
              data={userData}
            >
              <Profile userData={userData} />
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
