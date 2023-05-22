import "../../css/AutentificationPage.css";
import CenterComponent from "./components/CenterComponent";
import LoginComponent from "./components/login/LoginComponent";
import SingupComponent from "./components/singup/SingupComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const AutentificationPage = () => {
  const user = useSelector((state: RootState) => state.userHaveAccount.value);

  return (
    <div className="container-dinamic">
      <div className={`inner-container ${user ? null : "active"}`}>
        <LoginComponent />
        <CenterComponent />
        <SingupComponent />
      </div>
    </div>
  );
};

export default AutentificationPage;
