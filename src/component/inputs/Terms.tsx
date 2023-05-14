const Terms = ({ register, errors }: any) => {
  return (
    <div className="termsContainer">
      <input type="checkbox" {...register("acceptTerms")} name="acceptTerms" />
      <p className="checkboxText">
        Accept terms and conditions{" "}
        <span style={{ color: "var(--errorColor)" }}>*</span>
      </p>
      <p className="errorCheckbox">
        {errors?.acceptTerms?.message?.toString()}
      </p>
    </div>
  );
};

export default Terms;
