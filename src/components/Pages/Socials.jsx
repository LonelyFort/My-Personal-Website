import Navbar from "../Navigation/Navbar";
import Github from "./logos/github-icon.svg"
import LinkedIn from "./logos/linkedin-icon.svg"

export default function Socials() {    
    return(
        <div>
            <Navbar/>
            <div className="Socials">
                <h1>My Socials</h1>
                <ul>
                    <li>
                        <a href="https://github.com/LonelyFort" target="_blank" rel="noopener noreferrer">
                            <button className="nav_button">
                                <img src={Github} alt="github"/>
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/liu-yu-wei-b182a52ab" target="_blank" rel="noopener noreferrer">
                            <button className="nav_button">
                                <img src={LinkedIn} alt="linkedin"/>
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}