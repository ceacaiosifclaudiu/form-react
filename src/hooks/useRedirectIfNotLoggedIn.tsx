import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirectIfNotLoggedIn = (user: { email: string }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user || !user.email) {
            navigate("/");
        }
    }, [user, navigate]);
};

export default useRedirectIfNotLoggedIn;
