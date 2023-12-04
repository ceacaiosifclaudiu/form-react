import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/userAccountSlice";

const LogoutButton: React.FC = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logOut());
    };

    return (
        <div className="logout-button font--size--big" onClick={handleLogout}>
            Log out
        </div>
    );
};

export default LogoutButton;
