import { createBrowserRouter, Outlet } from "react-router-dom";
import PageNotFound from "../pages/404/404";
import AutentificationPage from "../pages/autentificationpage/AutentificationPage";
import LandingPage from "../pages/landingpage/LandingPage";

const Layout = () => {
  return (
    <div className="background flex--center">
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <AutentificationPage />,
      },
      {
        path: "/store",
        element: <LandingPage />,
      },
    ],
  },
]);

export default router;
