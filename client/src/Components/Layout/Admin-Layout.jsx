import { NavLink, Outlet } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";

export const Adminlayout = () =>{
    return (
        <>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><NavLink to="/admin/users"><FaUser />Users</NavLink></li>
                        <li><NavLink to="/admin/contacts"><FaMessage />Contacts</NavLink></li>
                        <li><NavLink to="/service"><FaRegListAlt />Services</NavLink></li>
                        <li><NavLink to="/"><FaHome />Home</NavLink></li>
                    </ul>
                </nav>
            </div>
            <Outlet/>
        </header>
        </>

    )
    
}