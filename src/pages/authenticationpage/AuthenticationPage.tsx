import "../../css/AuthenticationPage.css";
import CenterComponent from "./components/CenterComponent";
import LoginComponent from "./components/login/LoginComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import SignupComponent from "./components/signup/SignupComponent";

const AuthenticationPage = () => {
  const user = useSelector((state: RootState) => state.userHaveAccount.value);

  return (
    <div className="container-dynamic">
      <div className={`inner-container flex--center ${user ? null: "active"}`}>
        <LoginComponent />
        <CenterComponent />
        <SignupComponent />
      </div>
    </div>
  );
};

export default AuthenticationPage;
