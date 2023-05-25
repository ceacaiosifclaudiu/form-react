import Radios from "../../../../../component/inputs/Radios";
import Select from "../../../../../component/inputs/Select";

const Optionalinfo = ({ register }: any) => {
  return (
    <div className="flex--center container-half">
      <Radios formObject={register("accountType")} />
      <Select formObject={register("pronounce")} />
    </div>
  );
};

export default Optionalinfo;
