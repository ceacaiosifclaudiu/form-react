import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { goToSignup } from "../../../../redux/userHaveAccountSlice";

import { useForm } from "react-hook-form";
import { loginSchema } from "../../../../schema/formSchema";
import GoogleConnect from "../../../../component/GoogleConnect";
import Input from "../../../../component/inputs/Input";

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
    <div className="container flex--center ">
      <div className="container-form flex--column--center ">
        <h2 className="formTitle font--size--bigger">
          Welcome back,
          <br />
          Sign in to Continue.
        </h2>
        <p className="form-description font--size--medium">
          Don't have an account?{" "}
          <span onClick={() => dispatch(goToSignup())}>Create a account</span>
          <br /> It Takes less than a minute.
        </p>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex--column--center form--inputs--gap">
            <Input
              formObject={register("email")}
              message={errors?.email?.message?.toString()}
              type="email"
              placeholder="Email"
            />

            <Input
              formObject={register("password")}
              message={errors?.password?.message?.toString()}
              type="password"
              placeholder="Password"
            />
            <p className="forgot-password font--size--smaller">
              Forgot Password?
            </p>
          </div>

          <input type="submit" value="Login" className="font--size--big" />
        </form>
        <GoogleConnect />
      </div>
    </div>
  );
};

export default LoginComponent;
