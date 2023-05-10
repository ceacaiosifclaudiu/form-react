import { createBrowserRouter, Outlet } from "react-router-dom";
import LandingPage from "../pages/landingpage/LandingPage";
import PageNotFound from "../pages/404/404";

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
        element: <LandingPage />,
      },
    ],
  },
]);

export default router;
