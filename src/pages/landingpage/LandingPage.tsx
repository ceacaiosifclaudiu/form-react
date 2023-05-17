import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";
import { logOut } from "../../redux/userAccountSlice";
import "./LandingPage.css";

const LandingPage = () => {
  const user = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(user);

  React.useEffect(() => {
    if (user.email === "") {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="containerLandingPage">
      <img src={user?.picture} alt="" />
      <h1>Hi {user?.name ? user?.name : null}</h1>
      
      <div className="logoutButton" onClick={() => dispatch(logOut())}>
        Log out
      </div>
    </div>
  );
};

export default LandingPage;
