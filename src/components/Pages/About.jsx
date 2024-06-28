import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();

    return (
        <div className="About">
            <div className="self-intro">
                <h1>This will be about me</h1>
                <h2>put pic here lol</h2>
            </div>
            <button onClick={() => navigate("/projects")}>
                {" "}
                Go to Projects
            </button>
        </div>
    );
}