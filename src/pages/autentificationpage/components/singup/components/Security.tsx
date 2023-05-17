import Input from "../../../../../component/inputs/input/Input";

const Security = ({ register, errors }: any) => {
  return (
    <div className="inputsContainer">
      <Input
        formObject={register("password")}
        message={errors?.password?.message?.toString()}
        type="password"
        placeholder="Pasword"
      />
      <Input
        formObject={register("confirmPassword")}
        message={errors?.confirmPassword?.message?.toString()}
        type="password"
        placeholder="Confirm Password"
      />
    </div>
  );
};

export default Security;
