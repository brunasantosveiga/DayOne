import { useRoutes } from "react-router-dom";
import { DayOne } from "../pages/DayOne";
export const MainRoutes = () => {
  return useRoutes([{ path: "/day1", element: <DayOne /> }]);
};
