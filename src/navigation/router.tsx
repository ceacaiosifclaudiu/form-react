import { createBrowserRouter, Outlet } from "react-router-dom";
import PageNotFound from "../pages/404/404";
import LandingPage from "../pages/landingpage/LandingPage";
import AuthenticationPage from "../pages/authenticationpage/AuthenticationPage";

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
        element: <AuthenticationPage />,
      },
      {
        path: "/store",
        element: <LandingPage />,
      },
    ],
  },
]);

export default router;
