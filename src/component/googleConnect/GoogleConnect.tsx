import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/userAccountSlice";
import "./GoogleConnect.css";

const GoogleConnect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="singinWithGoogleContainer">
      <p className="brakeLine">Or</p>
      <GoogleLogin
        onSuccess={(credentialResponse: any) => {
          const details = jwt_decode(credentialResponse?.credential);
          dispatch(setUser(details));
          navigate("/store");
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default GoogleConnect;
