import React from "react";
import "./LandingPage.css";
import CenterComponent from "./components/CenterComponent";
import LeftComponent from "./components/LeftComponent";
import RightComponent from "./components/RightComponent";

const LandingPage = () => {
  const [userHaveAccount, setUserHaveAccount] = React.useState(true);

  const goToSingup = () => {
    setUserHaveAccount(false);
  };

  const goToLogin = () => {
    setUserHaveAccount(true);
  };

  return (
    <div className="containerDinamic">
      <div className={`innerContainer ${userHaveAccount ? null : "active"}`}>
        <LeftComponent goToSingup={goToSingup} />
        <CenterComponent />
        <RightComponent goToLogin={goToLogin} />
      </div>
    </div>
  );
};

export default LandingPage;
