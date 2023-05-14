
const Select = ({formObject}:any) => {
  return (
    <div className="selectOptionContainer">
                <label>Choose a pronounce:</label>
                <select {...formObject}>
                  <option value="">--Choose an option--</option>
                  <option value="She/Her">She/Her</option>
                  <option value="He/Him">He/Him</option>
                  <option value="Per/Per">Per/Per</option>
                  <option value="They/Them">They/Them</option>
                </select>
              </div>
  )
}

export default Select