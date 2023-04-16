// import { useSelector } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRouteAdmin({ children }) {
  const userInfo = useSelector((state) => state.auth.userInfo);
  if (userInfo && userInfo["role_id"] === "1") {
    return <>{children}</>;
  }

  return <Navigate to={"/login"} />;
}

export default ProtectedRouteAdmin;
