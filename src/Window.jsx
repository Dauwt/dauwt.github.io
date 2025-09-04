import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from './Pages/Homepage.jsx'
import Projects from './Pages/Projects.jsx'
import Models3D from './Pages/Models3D.jsx'
import AboutMe from './Pages/AboutMe.jsx'

function Window() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/3d-models" element={<Models3D />} />
                    <Route path="/about-me" element={<AboutMe />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Window