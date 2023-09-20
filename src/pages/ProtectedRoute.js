import { Navigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";
import { store } from "../store";

const ProtectedRoute = ({children}) =>{
    const {user} = useSelector((store) => store.user);
    if(!user){
        return <Navigate to='/landing'/>;
    }
    return children;
};

export default ProtectedRoute;