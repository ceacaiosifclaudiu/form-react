import "./Radios.css";

type Input = {
  formObject?: any;
};

const Radios = ({ formObject }: Input) => {
  return (
    <div className="radioButtonsContainer">
      <p className="titleRadios">Is this account:</p>
      <div className="radioButtonsOptions">
        <div className="radioButtons">
          <input {...formObject} type="radio" value="Personal" />
          <label>Personal</label>
        </div>
        <div className="radioButtons">
          <input {...formObject} type="radio" id="radio1" value="Business" />
          <label>Business</label>
        </div>
      </div>
    </div>
  );
};

export default Radios;
