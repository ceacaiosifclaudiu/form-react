import "./Name.css";

const Name = () => {
  return (
    <div className="nameContainer">
      <input type="text" placeholder="First Name" className="inputSmall"/>
      <input type="text" placeholder="Last Name" className="inputSmall"/>
    </div>
  );
};

export default Name;
