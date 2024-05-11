import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Iprops {
  isLoggedIn: boolean;
  redirecpath: string;
  children: ReactNode;
  data?: unknown;
}

function ProtectedRoute({ isLoggedIn, redirecpath, children, data }: Iprops) {
  if (!isLoggedIn) return <Navigate to={redirecpath} replace state={data} />;
  return children;
}

export default ProtectedRoute;
