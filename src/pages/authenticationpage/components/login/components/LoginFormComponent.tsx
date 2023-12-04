import React from "react";
import Input from "../../../../../component/inputs/Input";

interface LoginFormComponentProps {
    registerEmail: any;
    errorEmail: string | undefined;
    registerPassword: any;
    errorPassword: string | undefined;
    onSubmit: any;
}

const LoginFormComponent: React.FC<LoginFormComponentProps> = ({
    registerEmail,
    errorEmail,
    registerPassword,
    errorPassword,
    onSubmit,
}) => (
    <form onSubmit={onSubmit}>
        <div className="flex--column--center form--inputs--gap">
            <Input formObject={registerEmail} message={errorEmail} type="email" placeholder="Email" />
            <Input
                formObject={registerPassword}
                message={errorPassword}
                type="password"
                placeholder="Password"
            />
            <p className="forgot-password font--size--smaller">Forgot Password?</p>
        </div>
        <input type="submit" value="Login" className="font--size--big" />
    </form>
);

export default LoginFormComponent;
