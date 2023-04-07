import { createBrowserRouter } from "react-router-dom";

import HomeView from "../pages/HomeView";
import DepartmentView from "../pages/DepartmentView";
import DoctorView from "../pages/DoctorView";
import ServiceView from "../pages/ServiceView";

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
  {
    path: "/services-details",
    element: <ServiceView />,
  },
]);

export default router;
