import Radios from "../../../../../component/inputs/radios/Radios";
import Select from "../../../../../component/inputs/select/Select";

const Optionalinfo = ({ register }: any) => {
  return (
    <div className="optionalInfoContainer">
      <Radios formObject={register("accountType")} />
      <Select formObject={register("pronounce")} />
    </div>
  );
};

export default Optionalinfo;
