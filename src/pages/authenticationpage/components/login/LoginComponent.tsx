import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import GoogleConnect from "../../../../component/GoogleConnect";
import { goToSignup } from "../../../../redux/userHaveAccountSlice";
import { loginSchema } from "../../../../schema/formSchema";
import LoginDescription from "./components/LoginDescription";
import LoginFormComponent from "./components/LoginFormComponent";
import LoginTitle from "./components/LoginTitle";

const LoginComponent: React.FC = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="container flex--center">
      <div className="container-form flex--column--center">
        <LoginTitle />
        <LoginDescription onSignupClick={() => dispatch(goToSignup())} />
        <LoginFormComponent
          registerEmail={register("email")}
          errorEmail={errors?.email?.message?.toString()}
          registerPassword={register("password")}
          errorPassword={errors?.password?.message?.toString()}
          onSubmit={handleSubmit(onSubmit)}
        />
        <GoogleConnect />
      </div>
    </div>
  );
};

export default LoginComponent;
