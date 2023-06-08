import React from "react";
import "../css/Input.css";
import EyeOpen from "../../assets/show.png";
import EyeClose from "../../assets/hide.png";

type Input = {
  type?: string;
  placeholder?: string;
  message?: string | undefined;
  formObject?: any;
};

const Input = ({ type, message, placeholder, formObject }: Input) => {
  const [show, setShow] = React.useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const types = type === "password" ? (show ? "text" : "password") : type;

  return (
    <div className="container-input">
      <input
        {...formObject}
        type={types}
        className="input font--size--small background--container "
        placeholder=" "
        autoComplete="off"
        id={`input-${placeholder?.toLowerCase().replace(/\s/g, "-")}`}
      />
      <label className="input__label font--size--medium">{placeholder}</label>
      {type === "password" ? (
        <img
          onClick={handleShow}
          src={show ? EyeClose : EyeOpen}
          alt="Show"
          className="svg"
        />
      ) : null}
      <p className="input__error-message font--size--smaller ">{message}</p>
    </div>
  );
};

export default Input;
