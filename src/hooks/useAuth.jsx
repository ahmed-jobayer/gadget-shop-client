import { useContext } from "react";
import { AuthCOntext } from "../AuthProvider/AuthProvider";

const useAuth = () => {

    const auth = useContext(AuthCOntext)

    return auth
};

export default useAuth;