import { createContext, useContext, useEffect, useState} from "react";
export const AuthContext = createContext();//gobal store to store everythinng


export const Authprovider = ({children}) =>{

    const [token,setToken] = useState(localStorage.getItem("token"));
    const [user,setUser] = useState("")
    //to pass data
        const storetokenInLs =(serverToken)=>{
        return localStorage.setItem("token",serverToken)

    };

    //check that value of token is true or false
    let isLoggedIn = !!token;


    console.log("isLoggedIn",isLoggedIn)


    //tracking the logout functionalities
    const LogoutUser = () =>{
        setToken("");
        return localStorage.removeItem("token")


    }

    //JWT Authentication - to get the currently loggedIN user data

    const userAuthentication = async() =>{
        try{

            const respone = await fetch(`http://localhost:5000/api/auth/user`,{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,
                }
            })

            if(respone.ok){
                const data = await respone.json();
                console.log("data",data.userData);
                setUser(data.userData);
            }

        }catch(error){
            console.log("error occure");

        }
    }

    useEffect(()=>{
        userAuthentication();

    },[]);

    //anyone access it
    return(
    <AuthContext.Provider value={{isLoggedIn,storetokenInLs,LogoutUser,user}}>
        {children}
    </AuthContext.Provider>
    );
};

//hook help to deliver
export const useAuth = () => {
    const authContexValue =  useContext(AuthContext)//to use Authcontext just like doreomon pocket to store every thing
    if(!authContexValue){
        throw new Error("useAuth used outside of the Provider")
    }
    return authContexValue;
}