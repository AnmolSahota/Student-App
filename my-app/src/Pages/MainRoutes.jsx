import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../Components/PrivateRoute";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { StudentDetail } from "./StudentDetail";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/student/:id"
        element={
          <PrivateRoute>
            <StudentDetail />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};
