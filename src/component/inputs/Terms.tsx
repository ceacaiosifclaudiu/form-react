import "../css/Terms.css";

const Terms = ({ register, errors }: any) => {
  return (
    <div className="terms-container flex--start">
      <input type="checkbox" {...register("acceptTerms")} name="acceptTerms" />
      <p className="font--size--medium ">
        Accept terms and conditions{" "}
        <span style={{ color: "var(--errorColor)" }}>*</span>
      </p>
      <p className="error-checkbox font--size--smaller">
        {errors?.acceptTerms?.message?.toString()}
      </p>
    </div>
  );
};

export default Terms;
