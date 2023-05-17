import { GoogleOAuthProvider } from "@react-oauth/google";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./navigation/router";

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}

export default App;
