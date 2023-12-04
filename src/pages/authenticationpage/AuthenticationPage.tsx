import { useSelector } from "react-redux";
import "../../css/AuthenticationPage.css";
import { RootState } from "../../redux/store";
import CenterComponent from "./components/CenterComponent";
import LoginComponent from "./components/login/LoginComponent";
import SignUpComponent from "./components/signup/SignUpComponent";

const AuthenticationPage = () => {
  const user = useSelector((state: RootState) => state.userHaveAccount.value);

  return (
    <div className="container-dynamic">
      <div className={`inner-container flex--center ${user ? null : "active"}`}>
        <LoginComponent />
        <CenterComponent />
        <SignUpComponent />
      </div>
    </div>
  );
};

export default AuthenticationPage;
