import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { goToSingup } from "../../../../redux/userHaveAccountSlice";
import "./Login.css";

import { useForm } from "react-hook-form";
import { loginSchema } from "../../../../schema/formSchema";
import GoogleConnect from "../../../../component/googleConnect/GoogleConnect";
import Input from "../../../../component/inputs/input/Input";

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
            <Input
              formObject={register("email")}
              message={errors?.firstName?.message?.toString()}
              type="email"
              placeholder="Email"
            />

            <Input
              formObject={register("password")}
              message={errors?.firstName?.message?.toString()}
              type="password"
              placeholder="Password"
            />
            <p className="forgotPassword">Forgot Password?</p>
          </div>

          <input type="submit" value="Login" />
        </form>
        <GoogleConnect />
      </div>
    </div>
  );
};

export default LoginComponent;