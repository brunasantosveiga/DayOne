import { useRoutes } from "react-router-dom";
import { DayOne } from "../pages/DayOne";
import { DayTwo } from "../pages/DayTwo";
import { Login1 } from "../pages/login1";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/day1", element: <DayOne /> },
    { path: "/day2", element: <DayTwo /> },
    { path: "/login1", element: <Login1 /> },
  ]);
};
