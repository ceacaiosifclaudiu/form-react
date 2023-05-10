import "./Singup.css";

const Singup = ({ goToLoginPage, goToLandingPage }: any) => {
  return (
    <div className="singupContainer">
      <h1>Create account</h1>
      <div>
        <div className="contact" style={{ display: "flex" }}>
          <input placeholder="First Name" />
          <input placeholder="First Name" />
        </div>
        <input placeholder="email" style={{ width: "100%" }} />
        <div className="security" style={{ display: "flex" }}>
          <input placeholder="Password" />
          <input placeholder="Confirm Password" />
        </div>
        <div className="personalDetails">
          <div>
            <input type="radio" /> Personal
          </div>
          <input type="radio" /> Bussiness
        </div>

        <div className="termsNotification">
          <input type="checkbox" /> Term and conditions
        </div>
      </div>
      <h1 onClick={goToLandingPage}>Go to Landing page</h1>
      <h1 onClick={goToLoginPage}>Go to login page</h1>
    </div>
  );
};

export default Singup;
