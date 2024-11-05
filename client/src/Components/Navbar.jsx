import { NavLink } from "react-router-dom"
import "./Navbar.css"
import { useAuth } from "../store/auth"

export const Navbar = ()=>{

    const{isLoggedIn} = useAuth();
  
    return(
        <>
        <header>
            <div className="container">
                <div className="logo-brnad">
                    <NavLink to="/">Hemant Nikumbh</NavLink>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/About">About</NavLink>
                        </li>

                        <li>
                            <NavLink to="/Service">service</NavLink>
                        </li>

                        <li>
                            <NavLink to="/Contact">Contact</NavLink>
                        </li>

                        { isLoggedIn ? (
    
                         <li>
                            <NavLink to="/Logout">Logout</NavLink>
                        </li>
                        
                        ) : (
                        <>
                         <li>
                            <NavLink to="/Register">Register</NavLink>
                        </li>

                        <li>
                            <NavLink to="/Login">Login</NavLink>
                        </li>

                        </>
                        )}

                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
}