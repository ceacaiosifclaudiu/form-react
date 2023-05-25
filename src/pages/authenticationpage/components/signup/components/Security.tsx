import Input from "../../../../../component/inputs/Input";

const Security = ({ register, errors }: any) => {
  return (
    <div className="flex--center container-half">
      <Input
        formObject={register("password")}
        message={errors?.password?.message?.toString()}
        type="password"
        placeholder="Password"
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
