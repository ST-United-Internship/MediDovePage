import { createBrowserRouter } from "react-router-dom";

import HomeView from "../pages/HomeView";
import DepartmentView from "../pages/DepartmentView";
import DoctorView from "../pages/DoctorView";
<<<<<<< HEAD
import ServiceView from "../pages/ServiceView";
import DoctorDetailView from "../pages/DoctorDetailView";
=======
import Navbar from "../components/Navbar";
>>>>>>> feat: navbar

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
<<<<<<< HEAD
  { path: "/doctors-details", element: <DoctorDetailView /> },
  {
    path: "/services-details",
    element: <ServiceView />,
=======
  {
    path: "/navbar",
    element: <Navbar />,
>>>>>>> feat: navbar
  },
]);

export default router;
