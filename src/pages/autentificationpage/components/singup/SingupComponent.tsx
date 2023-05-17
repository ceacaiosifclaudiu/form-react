import { useDispatch } from "react-redux";
import Terms from "../../../../component/inputs/terms/Terms";
import { goToLogin } from "../../../../redux/userHaveAccountSlice";
import "./Singup.css";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../.../../../../schema/formSchema";
import GoogleConnect from "../../../../component/googleConnect/GoogleConnect";
import Input from "../../../../component/inputs/input/Input";
import Optionalinfo from "./components/Optionalinfo";
import PersonalDetails from "./components/PersonalDetails";
import Security from "./components/Security";

const SingupComponent = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const submitForm = (data: any) => {
    console.log(data);
  };

  return (
    <div className="singupContainer">
      <div className="containerForm">
        <h2 className="formTitle">
          Welcome to our form,
          <br />
          Sing up to Continue.
        </h2>
        <p className="formDescription">
          Already have an account?{" "}
          <span onClick={() => dispatch(goToLogin())}>Go to login</span>
        </p>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="loginFormCredentils">
            <PersonalDetails register={register} errors={errors} />

            <Input
              formObject={register("email")}
              message={errors?.email?.message?.toString()}
              type="email"
              placeholder="Email"
            />

            <Security register={register} errors={errors} />

            <Optionalinfo register={register} />

            <Terms register={register} errors={errors} />
          </div>
          <input type="submit" value="Create Account" />
        </form>
        <GoogleConnect />
      </div>
    </div>
  );
};

export default SingupComponent;
