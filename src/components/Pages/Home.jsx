import ProjectSliderPanel from "../Projects/ProjectSliderPanel";
import { useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return(
        <div className="Home">
            <div className="HomePage">
                     <h1>Hi, I am Jeff</h1>
                     <h3>and welcome to my space.</h3>
                     <div className="buttons">
                        <button className="about-me-button" onClick={() => navigate("/about")}>
                            {" "}
                            About Me
                        </button>
                        <button className="contacts-button" onClick={() => navigate("/contactme")}>
                            {" "}
                            My Socials
                        </button>
                     </div>
            </div>
            <ProjectSliderPanel/>
        </div>
    );
}