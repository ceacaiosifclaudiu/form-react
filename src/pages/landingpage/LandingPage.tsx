import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/userAccountSlice";
import "../../css/LandingPage.css";

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
    <div className="container-landing-page flex--center">
      <div className="flex--center--column">
        <img src={user?.picture} alt="" className="img" />
        <h1 className="font--size--bigger">
          Hi, {user?.name ? user?.name : null}
        </h1>

        <div
          className="logout-button font--size--big"
          onClick={() => dispatch(logOut())}
        >
          Log out
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
