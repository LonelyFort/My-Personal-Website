//This page serves as the slider page for Home
import { ProjectsData } from "./ProjectsData";
import { useRef, useState } from "react";

export default function ProjectSliderPanel() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const containerRef = useRef();

    return (
        <div className="ProjectPanel">
            <h1 className="Title">My Work</h1>
            <div className="project-container">
                <div className="panel" ref={containerRef}>
                    <div className="project-box">
                        {ProjectsData.map((item, key) => (
                            <div key={key} className="box" onClick={() => window.location.pathname = item.link}>
                                <img src={item.photo} height="350px" width="200px" alt="test"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}