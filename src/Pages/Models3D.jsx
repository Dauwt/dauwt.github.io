import { useState, useEffect } from "react";
import '../App.css'
import './Models3D.css'

function Models3D() {
    return (
        <div className="window">
            <div className='window-models3d'>
                <div className='models3d-header'>
                    <h1 className="models3d-header-title">My 3D Models</h1>
                </div>
                <div className='models3d-main'>
                    <ProjectCarousel />
                    <div className='models3d-cards'>
                        <div className="models3d-cards-separator">
                            <p className="models3d-cards-separator-text">All 3D Models</p>
                            <div className="models3d-cards-separator-border"></div>
                        </div>
                        <div className="models3d-card">
                            <img src="https://makerworld.bblmw.com/makerworld/model/US3082c6ae454965/design/2025-01-17_13378c30f2efe.jpg?x-oss-process=image/resize,w_1000/format,webp" alt="Placeholder image" className="models3d-card-image" />
                            <div className="models3d-card-about">
                                <div className="models3d-card-about-title">Pencil/Tool Case V2 - Print in Place</div>
                                <div className="models3d-card-about-description">A Strong, spacious, cool looking, Print in Place Pencil Case!</div>
                            </div>
                            <div className="models3d-card-buttons">
                                <div className="models3d-card-button-div">
                                    <button className="models3d-card-button">Download</button>
                                </div>
                                <div className="models3d-card-button-div">
                                    <button className="models3d-card-button">Visit</button>
                                </div>
                            </div>
                        </div>
                        <div className="models3d-card">
                            <img src="https://placehold.co/250x155" alt="Placeholder image" className="models3d-card-image" />
                            <div className="models3d-card-about">
                                <div className="models3d-card-about-title">Pencil/Tool Case V2 - Print in Place</div>
                                <div className="models3d-card-about-description">A Strong, spacious, cool looking, Print in Place Pencil Case!</div>
                            </div>
                            <div className="models3d-card-buttons">
                                <div className="models3d-card-button-div">
                                    <button className="models3d-card-button">Download</button>
                                </div>
                                <div className="models3d-card-button-div">
                                    <button className="models3d-card-button">Visit</button>
                                </div>
                            </div>
                        </div>
                        <div className="models3d-card">
                            <img src="https://placehold.co/250x155" alt="Placeholder image" className="models3d-card-image" />
                            <div className="models3d-card-about">
                                <div className="models3d-card-about-title">Pencil/Tool Case V2 - Print in Place</div>
                                <div className="models3d-card-about-description">A Strong, spacious, cool looking, Print in Place Pencil Case!</div>
                            </div>
                            <div className="models3d-card-buttons">
                                <div className="models3d-card-button-div">
                                    <button className="models3d-card-button">Download</button>
                                </div>
                                <div className="models3d-card-button-div">
                                    <button className="models3d-card-button">Visit</button>
                                </div>
                            </div>
                        </div>
                        <div className="models3d-card">
                            <img src="https://placehold.co/250x155" alt="Placeholder image" className="models3d-card-image" />
                            <div className="models3d-card-about">
                                <div className="models3d-card-about-title">Pencil/Tool Case V2 - Print in Place</div>
                                <div className="models3d-card-about-description">A Strong, spacious, cool looking, Print in Place Pencil Case!</div>
                            </div>
                            <div className="models3d-card-buttons">
                                <div className="models3d-card-button-div">
                                    <button className="models3d-card-button">Download</button>
                                </div>
                                <div className="models3d-card-button-div">
                                    <button className="models3d-card-button">Visit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Models3D

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
        <div className="models3d-carousel">             
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

                const ClassName = `models3d-carousel-card ${positionClass}`

                return (
                    <div key={index} className={ClassName}>
                        <div className="models3d-carousel-card-header">
                            <span className='models3d-carousel-card-header-title'>{project.title}</span>
                        </div>
                    </div>
                    
                );
            })}
        </div>
    );
    
}