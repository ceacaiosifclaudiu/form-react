import { createBrowserRouter, Outlet } from "react-router-dom";
import AutentificationPage from "../pages/autentificationpage/AutentificationPage";
import PageNotFound from "../pages/404/404";
import LandingPage from "../pages/landingpage/LandingPage";

const Layout = () => {
  return (
    <div className="background">
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
