import { useNavigate } from "react-router-dom";

export default function Projects() {
    const navigate = useNavigate();

    return(
        <div className="Projects">
            <h1>Projects</h1>
            <h2>as you can see it is barren, like my life</h2>
            <button onClick={() => navigate("/contactme")}>
                {" "}
                Go to my Contacts
            </button>
        </div>
    );
}