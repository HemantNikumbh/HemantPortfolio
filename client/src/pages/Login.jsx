import { useState } from "react";
import{useNavigate} from  "react-router-dom"
import { useAuth } from "../store/auth";


export const Login = () =>{
    const [user,setUser] = useState({
        email:"",
        password:"",
    })

    const navigate = useNavigate();

    const {storetokenInLs} = useAuth();

    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]:value,
        });

    };


    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(user);

        try{
            const response = await fetch(`http://localhost:5000/api/auth/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(user),
            });
    
            if(response.ok){
                const res_data = await response.json()
               // console.log("res from server",res_data)
    
                storetokenInLs(res_data.token);
                //localStorage.setItem("token",res_data.token);
    
    
                alert("Login Successfull")
                setUser({ email:"",password:""});
                navigate("/")
    
            }
    
    
            console.log(response)
    
           }catch(error){
            console.log("register",error);
    
           }
    }
    return(
    <>
    <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="Loging-image">
                            <img src="/image/Login.png" alt="Login" 
                            width="500"
                            height="500"/>
                        </div>

                         {/*Login form*/}
                    <div className="registration-form">
                        <h1 className="main-heading-mb-3">Login Form</h1>
                        <br/>

                        <form onSubmit={handleSubmit}>

                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" placeholder="email" id="email"
                                required
                                autoComplete="off"
                                value={user.email}
                                onChange={handleInput}/>

                            </div>
                            
                            <div>
                                <label htmlFor="passsword">password</label>
                                <input type="text" name="password" placeholder="password" id="password"
                                required
                                autoComplete="off"
                                value={user.password}
                                onChange={handleInput}/>

                            </div>
                            <br/>

                            <button type="submit" className="btn btn-submit">Login</button>
                        </form>
                    </div>
                    </div>

                   
                </div>
            </main>
        </section>
        </>
    );
};
