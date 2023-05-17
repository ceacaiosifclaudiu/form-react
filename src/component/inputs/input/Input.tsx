import "./Input.css";

type Input = {
  type?: string;
  placeholder?: string;
  message?: string | undefined;
  formObject?: any;
};

const Input = ({ type, message, placeholder, formObject }: Input) => {
  return (
    <div className="inputContainer">
      <input {...formObject} type={type} className="input" placeholder=" " />
      <label className="inputLabel">{placeholder}</label>
      <p className="inputErrorMessage">{message}</p>
    </div>
  );
};

export default Input;
