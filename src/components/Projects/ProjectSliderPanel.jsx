//This page serves as the slider page for Home
import { ProjectsData } from "./ProjectsData";
import { useRef, useState } from "react";

export default function ProjectSliderPanel() {
    const [scrollPosition, setScrollPosition] = useState(0);

    const containerRef = useRef();

    return (
        <div className="ProjectPanel">
            <h1>My Work</h1>
            <div className="project-container">
                <div className="panel" ref={containerRef}>
                    <div className="project-box">
                        {ProjectsData.map((item) => (
                            <div className="box" onClick={() => window.location.pathname = item.link}>
                                <p>{item.project}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}