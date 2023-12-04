import React from "react";
import { useDispatch } from "react-redux";
import { goToLogin } from "../../../../../redux/userHaveAccountSlice";

const FormDescription: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <p className="form-description font--size--medium">
            Already have an account?{" "}
            <span onClick={() => dispatch(goToLogin())}>Go to login</span>
        </p>
    );
};

export default FormDescription;