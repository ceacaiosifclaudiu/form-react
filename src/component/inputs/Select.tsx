import "../css/Select.css";

const Select = ({ formObject }: any) => {
  return (
    <div className="flex--column--end  container-select-option">
      <label className="font--size--small">Choose a pronounce:</label>
      <select {...formObject}>
        <option value="">--Choose an option--</option>
        <option value="She/Her">She/Her</option>
        <option value="He/Him">He/Him</option>
        <option value="Per/Per">Per/Per</option>
        <option value="They/Them">They/Them</option>
      </select>
    </div>
  );
};

export default Select;
