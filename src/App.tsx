import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useEffect, useState } from "react";
import Loading from "./pages/loadingPage/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
