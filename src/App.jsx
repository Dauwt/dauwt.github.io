import { useState } from 'react'
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import './App.css'
import Homepage from './Pages/Homepage.jsx'
import Projects from './Pages/Projects.jsx'
import Models3D from './Pages/Models3D.jsx'
import AboutMe from './Pages/AboutMe.jsx'

function App() {
  return (
    <div className='main'>
      <HashRouter>
        <Header headerTitle="Projects by Dauwt"/>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/3d-models" element={<Models3D />} />
            <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
