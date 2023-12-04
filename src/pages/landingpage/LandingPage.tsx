import React from "react";
import { useSelector } from "react-redux";
import useRedirectIfNotLoggedIn from "../../hooks/useRedirectIfNotLoggedIn";
import LogoutButton from "../../component/LogoutButton";
import "../../css/LandingPage.css";

const LandingPage: React.FC = () => {
  const user = useSelector((state: any) => state.user);
  useRedirectIfNotLoggedIn(user);

  return (
    <div className="container-landing-page flex--center">
      <div className="flex--center--column">
        <img src={user?.picture} alt="user-picture" className="img" />
        <h1 className="font--size--bigger">
          Hi, {user?.name ? user?.name : null}
        </h1>

        <LogoutButton />
      </div>
    </div>
  );
};

export default LandingPage;
