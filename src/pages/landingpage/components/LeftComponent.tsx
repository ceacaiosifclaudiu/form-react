import { useDispatch } from "react-redux";
import { goToSingup } from "../../../redux/userSlice";

const LeftComponent = () => {
  const dispatch = useDispatch();

  return (
    <div className="left">
      <h1 onClick={() => dispatch(goToSingup())}>Go to singup</h1>
    </div>
  );
};

export default LeftComponent;
