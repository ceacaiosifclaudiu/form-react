import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";
import { logOut } from "../../redux/userAccountSlice";

const OtherPage = () => {
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
    <>
      <h1>Hi</h1>
      <div onClick={() => dispatch(logOut())}>Log out</div>
    </>
  );
};

export default OtherPage;
