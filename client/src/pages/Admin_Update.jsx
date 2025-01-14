import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import{useAuth} from "../store/auth"
import { toast } from "react-toastify";


export const AdminUpdate = ()=>{

    const{AuthorizationToken} = useAuth();

    const[data,setData] = useState({
        username:"",
        email:"",
        phone:""
    })

    const params = useParams();

    const getSingleUdserData = async(id) =>{
        const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`,{
            method:"GET",
            headers:{
                Authorization:AuthorizationToken,
            }
        })
        const data = await response.json()
        console.log(`user : ${data}`)

        setData(data)
        
    }


    useEffect(()=>{
        getSingleUdserData()
    },[])

    const handleInput = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        setData({
            ...data,
            [name]:value,
        })      
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log(data)
        try{

            const response = await fetch(`http://localhost:5000/api/admin//users/update/${params.id}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:AuthorizationToken,
                },
                body:JSON.stringify(data)
            }
        )

        if(response.ok){
            toast.success("Update Successfully")
        }else{
            toast.error("cannot update")
        }

        }catch(error){
            console.log(error)
        }
    }

    return (
        <section className="section-contact">
            <div className="contact-content container">
                <h1 className="textshadow">User Data Update</h1>
            </div>
            <div className="container grid grid-two-cols">
                <section className="section-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Username</label>
                                <input type="text"
                                name="username"
                                value={data.username}
                                onChange={handleInput}
                                required
                                />
                        </div>
                        <div>
                            <label htmlFor="username">Email</label>
                                <input type="email"
                                name="email"
                                id="email"
                                value={data.email}
                                onChange={handleInput}
                                required
                                />
                        </div>
                        <div>
                            <label htmlFor="mobile">Phone</label>
                                <input type="phone"
                                name="phone"
                                id="phone"
                                value={data.phone}
                                onChange={handleInput}
                                
                                required
                                />
                        </div>
                        <div>
                            <button type="submit">Update</button>
                        </div>
                    </form>
                </section>

            </div>
        </section>
    )

}