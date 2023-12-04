import React from "react";
import FormTitle from "./components/FormTitle";
import FormDescription from "./components/FormDescription";
import RegistrationForm from "./components/RegistrationForm";
import GoogleConnect from "../../../../component/GoogleConnect";

const SignUpComponent: React.FC = () => {
  const submitForm = (data: any) => {
    console.log(data);
  };

  return (
    <div className="container flex--center">
      <div className="container-form ">
        <FormTitle />
        <FormDescription />
        <RegistrationForm onSubmit={submitForm} />
        <GoogleConnect />
      </div>
    </div>
  );
};

export default SignUpComponent;
