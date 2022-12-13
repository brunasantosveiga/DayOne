import { useRoutes } from "react-router-dom";
import { DayOne } from "../pages/DayOne";
import { DayTwo } from "../pages/DayTwo";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/day1", element: <DayOne /> },
    { path: "/day2", element: <DayTwo /> },
  ]);
};
