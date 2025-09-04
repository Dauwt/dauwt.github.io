import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from './Pages/Homepage.jsx'
import Projects from './Pages/Projects.jsx'

function Window() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Window