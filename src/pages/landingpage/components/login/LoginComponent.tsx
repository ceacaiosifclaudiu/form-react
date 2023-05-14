import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { goToSingup } from "../../../../redux/userSlice";
import "./Login.css";

import { useForm } from "react-hook-form";
import { loginSchema } from "../../../../schema/formSchema";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitForm = (data: any) => {
    console.log(data);
  };

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
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="loginFormCredentils">
            <div className="inputNewContainer">
              <input
                {...register("email")}
                type="email"
                className="inputNew"
                placeholder=" "
              />
              <label className="inputNewLabel">Email</label>
              <p className="inputErrorMessage">
                {errors?.email?.message?.toString()}
              </p>
            </div>

            <div className="inputNewContainer">
              <input
                {...register("password")}
                type="password"
                className="inputNew"
                placeholder=" "
              />
              <label className="inputNewLabel">Password</label>
              <p className="inputErrorMessage">
                {errors?.password?.message?.toString()}
              </p>
            </div>
            <p className="forgotPassword">Forgot Password?</p>
          </div>

          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
