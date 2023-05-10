import { useDispatch } from "react-redux";
import { goToLogin } from "../../../../redux/userSlice";
import "./Singup.css";

const SingupComponent = () => {
  const dispatch = useDispatch();

  return (
    <div className="singupContainer">
      <div className="containerForm"><h1 onClick={() => dispatch(goToLogin())}>Go to login</h1></div>
    </div>
  );
};

export default SingupComponent;

