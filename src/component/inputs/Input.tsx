type Input = {
  type?: string;
  placeholder?: string;
  message?: string | undefined;
  formObject?: any;
};

const Input = ({ type, message, placeholder, formObject }: Input) => {
  return (
    <div className="inputNewContainer">
      <input {...formObject} type={type} className="inputNew" placeholder=" " />
      <label className="inputNewLabel">{placeholder}</label>
      <p className="inputErrorMessage">{message}</p>
    </div>
  );
};

export default Input;
