import "../css/Input.css";

type Input = {
  type?: string;
  placeholder?: string;
  message?: string | undefined;
  formObject?: any;
};

const Input = ({ type, message, placeholder, formObject }: Input) => {
  return (
    <div className="input-container">
      <input
        {...formObject}
        type={type}
        className="input font--size--small background--container "
        placeholder=" "
      />
      <label className="input__label font--size--medium">{placeholder}</label>
      <p className="input__error-message font--size--smaller ">{message}</p>
    </div>
  );
};

export default Input;
