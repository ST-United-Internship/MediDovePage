import { createBrowserRouter } from "react-router-dom";

import HomeView from "../pages/HomeView";
import DepartmentView from "../pages/DepartmentView";
import DoctorView from "../pages/DoctorView";
import ServiceView from "../pages/ServiceView";
import DoctorDetailView from "../pages/DoctorDetailView";

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
  { path: "/doctors-details", element: <DoctorDetailView /> },
  {
    path: "/services-details",
    element: <ServiceView />,
  },
]);

export default router;
