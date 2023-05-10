import { useDispatch } from "react-redux";
import { goToSingup } from "../../../../redux/userSlice";
import "./Login.css";

const LoginComponent = () => {
  const dispatch = useDispatch();

  return (
    <div className="loginContainer">
      <div className="containerForm">
        <h2 className="formTitle">
          Welcome back,
          <br />
          Sing in to Continue.
        </h2>
        <p className="formDescription">
          Don't have an account?{" "}
          <span onClick={() => dispatch(goToSingup())}>Create a account</span>
          <br /> It Takes less than a minute.
        </p>
        <form>
          <div className="loginFormCredentils">
            <input type="text" className="userName" placeholder="Username" />
            <input
              type="password"
              className="userName"
              placeholder="Password"
            />
            <p>Forgot Password?</p>
          </div>

          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
