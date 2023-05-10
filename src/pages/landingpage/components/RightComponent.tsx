import { useDispatch } from "react-redux";
import { goToLogin } from "../../../redux/userSlice";

const RightComponent = () => {
  const dispatch = useDispatch();

  return (
    <div className="right">
      <h1 onClick={() => dispatch(goToLogin())}>Go to login</h1>
    </div>
  );
};

export default RightComponent;
