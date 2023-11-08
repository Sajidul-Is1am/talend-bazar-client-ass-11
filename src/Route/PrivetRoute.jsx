import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";



const PrivetRoute = ({ children }) => {
    const { user } = useContext(AuthContext)  
    if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }
    return (
        (children)
    );
};

export default PrivetRoute;