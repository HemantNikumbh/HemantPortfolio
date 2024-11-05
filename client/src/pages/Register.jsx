import{useState} from "react";
import{useNavigate} from  "react-router-dom"
import { useAuth } from "../store/auth";

export const Register=()=>{

    const[user,setUser] = useState({
        username:"",
        email:"",
        phone:"",
        password:"",
    });

    const navigate = useNavigate();

    const {storetokenInLs} = useAuth();




    //handling events
    const handleInput=(e)=>{
        console.log(e)
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]:value,

        });
    };

    //handling form 
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(user);

         try{
        const response = await fetch(`http://localhost:5000/api/auth/register`,{
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


            alert("Registration Successfull")
            setUser({ username:"",email:"",phone:"",password:""});
            navigate("/Login")

        }


        console.log(response)

       }catch(error){
        console.log("register",error);

       }
    };
return(
        <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img src="/image/rg.webp" alt="Registration" 
                            width="500"
                            height="500"/>
                        </div>

                         {/*registration form*/}
                    <div className="registration-form">
                        <h1 className="main-heading-mb-3">Registration Form</h1>
                        <br/>

                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text" name="username" placeholder="username" id="username"
                                required
                                autoComplete="off" 
                                value={user.username}
                                onChange={handleInput}/>
                                

                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" placeholder="email" id="email"
                                required
                                autoComplete="off"
                                value={user.email}
                                onChange={handleInput}/>

                            </div>
                            <div>
                                <label htmlFor="phone">phone</label>
                                <input type="number" name="phone" placeholder="phone" id="phone"
                                required
                                autoComplete="off"
                                value={user.phone}
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

                            <button type="submit" className="btn btn-submit">Register Now</button>
                        </form>
                    </div>
                    </div>

                   
                </div>
            </main>
        </section>
        </>
    );
};