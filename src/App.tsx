import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";

const Layout = () => {
  return (
    <div>
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
        element: <>Hi</>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
