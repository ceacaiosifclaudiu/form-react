import { useDispatch } from "react-redux";
import { goToLogin } from "../../../../redux/userSlice";
import "./Singup.css";

const SingupComponent = () => {
  const dispatch = useDispatch();

  return (
    <div className="singupContainer">
      <div className="containerForm">
        <h2 className="formTitle">
          Welcome to our form,
          <br />
          Sing up to Continue.
        </h2>
        <p className="formDescription">
          Already have an account?{" "}
          <span onClick={() => dispatch(goToLogin())}>Go to login</span>
        </p>
        <form>
          <div className="loginFormCredentils">
            {/* Personal Details */}
            <div className="inputsContainer">
              <div className="inputContainer">
                <input type="text" placeholder="First Name" />
                <p className="inputErrorMessage"></p>
              </div>
              <div className="inputContainer">
                <input type="password" placeholder="Last Name" />
                <p className="inputErrorMessage"></p>
              </div>
            </div>

            {/* Email */}
            <div className="inputContainer">
              <input type="email" placeholder="Email" />
              <p className="inputErrorMessage"></p>
            </div>

            {/* Password */}
            <div className="inputsContainer">
              <div className="inputContainer">
                <input type="password" placeholder="Pasword" />
                <p className="inputErrorMessage"></p>
              </div>
              <div className="inputContainer">
                <input type="password" placeholder="Confirm Password" />
                <p className="inputErrorMessage"></p>
              </div>
            </div>

            {/* Optional Information Inputs */}
            <div className="optionalInfoContainer">
              <div className="radioButtonsContainer">
                <p>Is this account:</p>
                <div className="radioButtonsOptions">
                  <div className="radioButtons">
                    <input type="radio" name="account" placeholder="Pasword" />
                    <label>Personal</label>
                  </div>
                  <div className="radioButtons">
                    <input
                      type="radio"
                      name="account"
                      placeholder="Confirm Password"
                    />
                    <label>Business</label>
                  </div>
                </div>
              </div>
              <div className="selectOptionContainer">
                <label>Choose a pronounce:</label>
                <select>
                  <option value="">--Choose an option--</option>
                  <option value="She/Her">She/Her</option>
                  <option value="He/Him">He/Him</option>
                  <option value="Per/Per">Per/Per</option>
                  <option value="They/Them">They/Them</option>
                </select>
              </div>
            </div>

            <div className="termsContainer">
              <input type="checkbox" />
              <p className="checkboxText">
                Accept terms and conditions{" "}
                <span style={{ color: "var(--pink)" }}>*</span>
              </p>
              <p className="errorCheckbox"></p>
            </div>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default SingupComponent;
