import { useNavigate} from "react-router-dom";

export default function ContactMe() {
    const navigate = useNavigate();
    
    return(
        <div className="ContactMe">
            <h1>Contact Meeeeeee</h1>
            <p>
                <a href="https://github.com/LonelyFort" target="_blank" rel="noopener noreferrer">My GitHub</a>
            </p>
            <p>
                <a href="https://linkedin.com/in/liu-yu-wei-b182a52ab" target="_blank" rel="noopener noreferrer">My LinkedIn</a>
            </p>
            <div>
            <button onClick={() => navigate("/")}>
                {" "}
                Back to Home
            </button>
            </div>
        </div>
    );
}