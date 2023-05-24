import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/userAccountSlice";
import "./css/GoogleConnect.css";

const GoogleConnect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container-google">
      <p className="brake-line background--container">Or</p>
      <div className="flex--center">
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
    </div>
  );
};

export default GoogleConnect;
