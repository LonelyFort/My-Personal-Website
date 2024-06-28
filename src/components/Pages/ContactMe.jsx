import { useNavigate, Link } from "react-router-dom";

export default function ContactMe() {
    const navigate = useNavigate();
    
    return(
        <div className="ContactMe">
            <h1>Contact Meeeeeee</h1>
            <div>
                <Link to={{ pathname: "https://github.com/LonelyFort"}} target="_blank">My GitHub</Link>
            </div>
            <div>
                <Link to={{ pathname: "linkedin.com/in/liu-yu-wei-b182a52ab"}} target="_blank">My LinkedIn</Link>
            </div>
            <div>
            <button onClick={() => navigate("/")}>
                {" "}
                Back to Home
            </button>
            </div>
        </div>
    );
}