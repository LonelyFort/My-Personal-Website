import ScrollAnimation from "react-animate-on-scroll";
import Navbar from "../../Navigation/Navbar";
import { ProjectData } from "./ProjectData";

export default function Projects() {
    return(
        <div>
            <Navbar/>
            <div className="Projects">
                <h1 className="title-text">Projects</h1>
                <p className="title-text">You may click on the media to visit their respective GitHub Repositories</p>
                <ul className="project-list">
                    {ProjectData.map((item, key) => (
                        key === 0
                        ? <li className="project-item">                           
                            <div className="project-text">
                                <h1 className="project-title">{item.title}</h1>
                                <p className="summary">{item.summary}</p>
                                <p className="project-stack">{item.techstack}</p>
                            </div>
                            <a className="" href={item.link} target="_blank" rel="noopener noreferrer">
                                <button className="project-link-button">
                                    <img className="project-media" src={item.media} alt="project-img"/>
                                </button>
                            </a>
                        </li>
                        : <ScrollAnimation animateIn="fadeInDown" duration={1.2} animateOnce={true} key={key}>
                            <li className="project-item">                           
                                <div className="project-text">
                                    <h1 className="project-title">{item.title}</h1>
                                    <p className="summary">{item.summary}</p>
                                    <p className="project-stack">{item.techstack}</p>
                                </div>
                                <a className="" href={item.link} target="_blank" rel="noopener noreferrer">
                                    <button className="project-link-button">
                                        <img className="project-media" src={item.media} alt="project-img"/>
                                    </button>
                                </a>
                            </li>
                        </ScrollAnimation>  
                    ))}
                </ul>
            </div>
        </div>  
    );
}