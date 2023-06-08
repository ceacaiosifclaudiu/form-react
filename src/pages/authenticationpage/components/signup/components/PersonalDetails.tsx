import Input from "../../../../../component/inputs/Input";

const PersonalDetails = ({ register, errors }: any) => {
  return (
    <div className="flex--center container-half">
      <Input
        formObject={register("firstName")}
        message={errors?.firstName?.message?.toString()}
        type="text"
        placeholder="First Name"
      />
      <Input
        formObject={register("lastName")}
        message={errors?.lastName?.message?.toString()}
        type="text"
        placeholder="Last Name"
        
      />
    </div>
  );
};

export default PersonalDetails;
