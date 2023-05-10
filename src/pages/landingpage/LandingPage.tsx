import "./LandingPage.css";
import CenterComponent from "./components/CenterComponent";
import LeftComponent from "./components/LeftComponent";
import RightComponent from "./components/RightComponent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const LandingPage = () => {
  const user = useSelector((state: RootState) => state.userAccount.value);

  return (
    <div className="containerDinamic">
      <div className={`innerContainer ${user ? null : "active"}`}>
        <LeftComponent />
        <CenterComponent />
        <RightComponent />
      </div>
    </div>
  );
};

export default LandingPage;
