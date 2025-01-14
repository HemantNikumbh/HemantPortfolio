import { createContext, useContext, useEffect, useState} from "react";
export const AuthContext = createContext();//gobal store to store everythinng


export const Authprovider = ({children}) =>{

    const [token,setToken] = useState(localStorage.getItem("token"));
    const [user,setUser] = useState("")
    const [services,setservices] = useState([])
    const AuthorizationToken = `Bearer ${token}`;
    
    //to pass data
        const storetokenInLs =(serverToken)=>{
        setToken(serverToken)
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

            const respone = await fetch("http://localhost:5000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization: AuthorizationToken  ,
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

    //to fetch services data from back end
    const getservices = async() =>{
        try{
            const response = await fetch("http://localhost:5000/api/data/service",{
                method:"GET"
            })
            if(response.ok){
                const data = await response.json()
                console.log(data.msg)
                setservices(data.msg)
            }

        }catch(error){
            console.log(`services found error : ${error}`)
            
        }
    }

    useEffect(()=>{
        getservices();
        userAuthentication();

    },[]);

    //anyone can access it
    return(
    <AuthContext.Provider value={{isLoggedIn,storetokenInLs,LogoutUser,user,services,AuthorizationToken}}>
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