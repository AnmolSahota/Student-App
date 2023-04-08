import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  let { isAuth } = useSelector((state) => state.authReducer);
  let location = useLocation();
  return isAuth ? (
    children
  ) : (
    <Navigate to={"/login"} state={location.pathname} replace />
  );
};
