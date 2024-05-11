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
// import ProtectedRoute from "../components/auth/ProtectedRoute";

// const isLoggedIn = false;
// const useData: { email: string } | null = isLoggedIn
//   ? { email: "test@test.com" }
//   : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Rout Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandeler />}>
        <Route index element={<Home />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        {/* <Route
          path="login"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              redirecpath="/ahmed"
              data={useData}
            >
              <Login />
            </ProtectedRoute>
          }
        /> */}
      </Route>
      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;
