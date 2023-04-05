import { createBrowserRouter } from "react-router-dom";

import HomeView from "../pages/HomeView";
import DepartmentView from "../pages/DepartmentView";
import DoctorView from "../pages/DoctorView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/department",
    element: <DepartmentView />,
  },
  {
    path: "/doctor",
    element: <DoctorView />,
  },
]);

export default router;
