import { useState, useEffect } from "react";
import '../App.css'
import TypingText from '../TypingText';

function Homepage() {
    return (
        <div className="window">
            <div className='welcome-header'>
                <h1 className="welcome-header-1">Welcome to</h1>
                <TypingText text="Projects by Dauwt" speed={100} />
            </div>

            <ProjectCarousel />
        </div>
    );
}

const projects = [
  { title: "ESP32 Smart Lamp", description: "IoT + LED project" },
  { title: "Portfolio Site", description: "React + Vite project" },
  { title: "3D Printed Organizer", description: "CAD & 3D printing" },
  { title: "Self Driven Robot", description: "ESP32" },
  { title: "ESP32 PCB", description: "KiCAD" },
  { title: "Robot", description: "KiCAD" },
  { title: "3D Printingt", description: "KiCAD" },
];

function ProjectCarousel({ interval = 3000 }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % projects.length);
        }, interval);
        return () => clearInterval(timer);
    }, [interval]);

    return (
        <div className="carousel-container">             
            {projects.map((project, index) => {
                let positionClass = "";

                if (index === current) {
                    positionClass = "active";
                } else if (index === (current - 1 + projects.length) % projects.length) {
                    positionClass = "left";
                } else if (index === (current - 2 + projects.length) % projects.length) {
                    positionClass = "outLeft";
                } else if (index === (current + 1) % projects.length) {
                    positionClass = "right";
                } else {
                    positionClass= "none";
                }

                const ClassName = `news ${positionClass}`

                return (
                    <div key={index} className={ClassName}>
                        <div className="news-header">
                            <span className='news-header-title'>{project.title}</span>
                        </div>
                    </div>
                    
                );
            })}
        </div>
    );
    
}


export default Homepage