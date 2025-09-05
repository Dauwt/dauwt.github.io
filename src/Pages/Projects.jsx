import { useState, useEffect } from "react";
import '../App.css'
import './Projects.css'

function Projects() {
    return (
        <div className="window">
            <div className='window-projects'>
                <div className='projects-header'>
                    <h1 className="projects-header-title">My Projects</h1>
                </div>
                <div className='projects-main'>
                    <ProjectCarousel />
                    <div className='projects-cards'>
                        <div className="projects-cards-separator">
                            <p className="projects-cards-separator-text">All Projects</p>
                            <div className="projects-cards-separator-border"></div>
                        </div>
                        <div className="projects-card">
                            <img src="https://preview.redd.it/thanks-for-all-of-your-help-esp32-pcb-v0-t1lkjjr9cflf1.jpg?width=1080&crop=smart&auto=webp&s=755a58648473ac70328b821e0efcdd2958e93a8f" alt="Placeholder image" className="projects-card-image" />
                            <div className="projects-card-about">
                                <div className="projects-card-about-title">ESP32 PCB - DWT32</div>
                                <div className="projects-card-about-description">I designed with Kicad a ESP32-WROOM-32E PCB from scratch!</div>
                            </div>
                            <div className="projects-card-buttons">
                                <div className="projects-card-button-div">
                                    <button className="projects-card-button">Repository</button>
                                </div>
                                <div className="projects-card-button-div">
                                    <button className="projects-card-button">Visit</button>
                                </div>
                            </div>
                        </div>
                        <div className="projects-card">
                            <img src="https://placehold.co/250x155" alt="Placeholder image" className="projects-card-image" />
                            <div className="projects-card-about">
                                <div className="projects-card-about-title">ESP32 PCB - DWT32</div>
                                <div className="projects-card-about-description">I designed with Kicad a ESP32-WROOM-32E PCB from scratch!</div>
                            </div>
                            <div className="projects-card-buttons">
                                <div className="projects-card-button-div">
                                    <button className="projects-card-button">Repository</button>
                                </div>
                                <div className="projects-card-button-div">
                                    <button className="projects-card-button">Visit</button>
                                </div>
                            </div>
                        </div>
                        <div className="projects-card">
                            <img src="https://placehold.co/250x155" alt="Placeholder image" className="projects-card-image" />
                            <div className="projects-card-about">
                                <div className="projects-card-about-title">ESP32 PCB - DWT32</div>
                                <div className="projects-card-about-description">I designed with Kicad a ESP32-WROOM-32E PCB from scratch!</div>
                            </div>
                            <div className="projects-card-buttons">
                                <div className="projects-card-button-div">
                                    <button className="projects-card-button">Repository</button>
                                </div>
                                <div className="projects-card-button-div">
                                    <button className="projects-card-button">Visit</button>
                                </div>
                            </div>
                        </div>
                        <div className="projects-card">
                            <img src="https://placehold.co/250x155" alt="Placeholder image" className="projects-card-image" />
                            <div className="projects-card-about">
                                <div className="projects-card-about-title">ESP32 PCB - DWT32</div>
                                <div className="projects-card-about-description">I designed with Kicad a ESP32-WROOM-32E PCB from scratch!</div>
                            </div>
                            <div className="projects-card-buttons">
                                <div className="projects-card-button-div">
                                    <button className="projects-card-button">Repository</button>
                                </div>
                                <div className="projects-card-button-div">
                                    <button className="projects-card-button">Visit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
  { title: "3D Printing", description: "KiCAD" },
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
        <div className="projects-carousel">             
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

                const ClassName = `projects-carousel-card ${positionClass}`

                return (
                    <div key={index} className={ClassName}>
                        <div className="projects-carousel-card-header">
                            <span className='projects-carousel-card-header-title'>{project.title}</span>
                        </div>
                    </div>
                    
                );
            })}
        </div>
    );
    
}

export default Projects