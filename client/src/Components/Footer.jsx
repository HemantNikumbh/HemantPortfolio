import "./Footer.css"
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export const Footer=()=>{
    return (
        <>
        <footer>
            <div className="Container">
            <div className="brand">
              <p>
                @HemantNikumbh 2024
              </p>
            </div>
            
            <nav>
                <ul>
                    <li><a href="https://www.instagram.com/hemant_nikumbh12/?__pwa=1"><FaInstagram /></a></li>
                    <li><a href="https://www.linkedin.com/in/hemant-nikumbh-453b89255/"><CiLinkedin /></a></li>
                    <li><a href="https://github.com/HemantNikumbh"><FaGithub /></a></li>
                </ul>
            </nav>
        </div>    
        </footer>
        </>
    )
}