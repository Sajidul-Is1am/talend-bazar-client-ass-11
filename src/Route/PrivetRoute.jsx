import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";



const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);  
    if (loading) {
        return <span className="loading loading-dots loading-lg text-7xl flex mx-auto justify-center items-center h-screen">Loading</span>;
    }
    if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }
    return (
        (children)
    );
};

export default PrivetRoute;