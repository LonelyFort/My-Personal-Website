import { useNavigate } from "react-router-dom";

export default function Projects() {
    const navigate = useNavigate();

    return(
        <div className="Projects">
            <h1>Projects</h1>
            <div>
                <h1>Project 1</h1>
                <p>a short description of the project</p>
            </div>
            <button onClick={() => navigate("/contactme")}>
                {" "}
                Go to my Contacts
            </button>
        </div>
    );
}