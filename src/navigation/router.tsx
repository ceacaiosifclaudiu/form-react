import { createBrowserRouter, Outlet } from "react-router-dom";
import LandingPage from "../pages/landingpage/LandingPage";
import PageNotFound from "../pages/404/404";
import OtherPage from "../pages/otherpage/OtherPage";

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
      {
        path: "otherpage",
        element: <OtherPage />,
      },
    ],
  },
]);

export default router;
