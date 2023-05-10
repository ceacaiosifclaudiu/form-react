import "./LandingPage.css";
import CenterComponent from "./components/CenterComponent";
import LoginComponent from "./components/login/LoginComponent";
import SingupComponent from "./components/singup/SingupComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const LandingPage = () => {
  const user = useSelector((state: RootState) => state.userAccount.value);

  return (
    <div className="containerDinamic">
      <div className={`innerContainer ${user ? null : "active"}`}>
        <LoginComponent />
        <CenterComponent />
        <SingupComponent />
      </div>
    </div>
  );
};

export default LandingPage;
