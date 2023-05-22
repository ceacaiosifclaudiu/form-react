import "../css/Radios.css";

type Input = {
  formObject?: any;
};

const Radios = ({ formObject }: Input) => {
  return (
    <div className="radio-buttons-containers">
      <p className="font--size--medium">Is this account:</p>
      <div className="radio-buttons-options flex--column--end">
        <div className="radio-buttons flex--center">
          <input {...formObject} type="radio" value="Personal" />
          <label>Personal</label>
        </div>
        <div className="radio-buttons flex--center">
          <input {...formObject} type="radio" id="radio1" value="Business" />
          <label>Business</label>
        </div>
      </div>
    </div>
  );
};

export default Radios;
