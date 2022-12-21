import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes(){
    const {signed} = useContext(AuthContext);
    return signed  ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;