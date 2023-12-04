import React from "react";

interface LoginDescriptionProps {
    onSignupClick: () => void;
}

const LoginDescription: React.FC<LoginDescriptionProps> = ({ onSignupClick }) => (
    <p className="form-description font--size--medium">
        Don't have an account?{" "}
        <span onClick={onSignupClick}>Create an account</span>
        <br /> It Takes less than a minute.
    </p>
);

export default LoginDescription;
