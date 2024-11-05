import { useEffect } from "react"
import { Form, Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Logout = ()=>{

    const{LogoutUser} = useAuth();


    useEffect(()=>{
        LogoutUser();
    },[LogoutUser])

    return <Navigate to="/Login" />
}