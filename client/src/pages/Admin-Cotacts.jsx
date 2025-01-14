import { useEffect, useState } from "react"
import{useAuth} from "../store/auth"
import { toast } from "react-toastify";
export const AdminContacts = () =>{
    const{AuthorizationToken} = useAuth();

    const[getContact,setContact] = useState([])
    const getContactData = async()=>{
        try{
            const respose = await fetch("http://localhost:5000/api/admin/contacts",{
                method:"GET",
                headers:{
                    Authorization:AuthorizationToken,
                }
            })
            const data = await respose.json()
            console.log(data)
            if(respose.ok){
                setContact(data)
            }else{
                console.log("something is wrong")
            }

        }catch(error){
            console.log(error)
        }
    }

    const deleteContact = async(id)=>{
        try{
            const response = await fetch(`http://localhost:5000/api/admin/users/deleteContact/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:AuthorizationToken,
                }
            }
            )
            const data = await response.json()
            console.log(data)
            if(response.ok){
                getContactData()
                toast.success("successfully deleted")
            }else{
                console.log("something wrong")
            }

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getContactData()
    },[])


    return(
        <>
        <section className="admin-contacts-section">
            <h1 className="textshadow">Contact Detail</h1>
            <div className="container grid grid-three-cols">
                {getContact.map((curelem,index)=>{
                    return(
                        <div className="card" key={index}>
                            <p>Name:{curelem.username}</p>
                            <p>Email:{curelem.email}</p>
                            <p>Message:{curelem.message}</p>
                            <div className="btn">
                                <button className="dltbtn" onClick={()=>deleteContact(curelem._id)}>Delete</button>
                            </div>
                        </div>    
                    )
                })}
            </div>
        </section>
        </>
    )
}