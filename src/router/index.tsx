import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../pages/Layout";
import Home from "../pages/home/Home";
import Men from "../pages/men/Men";
import Women from "../pages/women/Women";
import Freelancer from "../pages/catfreelancer/Freelancer";
import Register from "../pages/register/Register";
import Login from "../pages/login/login";
import ErrorHandeler from "../components/errors/ErrorRoutHandeler";
import PageNotFound from "../components/errors/pageNotFound/PageNotFound";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Profile from "../components/auth/profilePage/Profile";
import StoriesFavorites from "../components/auth/storiesPage/StoriesPage";
import Store from "../pages/storePage/Store";
import Otp from "../pages/otp/Otp";
import Stores from "../pages/stores/Stores";
import About from "../pages/about/About";
import Freelanc from "../pages/freelancer/Freelanc";
import PrivacyPolicy from "../pages/Privacy policy/Privacy policy";
import TermsOfService from "../pages/Terms of Service/Terms of Service";
import RegistertionStore from "../pages/registertionStore/RegistertionStore";
import RegistertionFreelancer from "../pages/registertionFreelacer/RegistertionFreelancer";

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
        <Route path="about" element={<About />} />
        <Route path="Man Category" element={<Men />} />
        <Route path="Woman Category" element={<Women />} />
        <Route path="/FreeLance" element={<Freelancer />} />
        <Route path="stores/:id" element={<Stores />} />
        <Route path="/store/:id" element={<Store />} />
        <Route path="/freelancer/:id" element={<Freelanc />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/termsOfService" element={<TermsOfService />} />
        <Route path="/registertionStore" element={<RegistertionStore />} />
        <Route
          path="/registertionFreelancer"
          element={<RegistertionFreelancer />}
        />

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
