import { createBrowserRouter, Outlet } from "react-router-dom";
import LandingPage from "../pages/landingpage/LandingPage";
import Singup from "../component/singup/Singup";
import Login from "../component/login/Login";

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
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
]);

export default router;
