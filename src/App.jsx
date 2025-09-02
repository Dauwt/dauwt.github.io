import { useState } from 'react'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import Window from './Window.jsx'
import './App.css'

function App() {
  return (
    <div>
      <Sidebar />
      <Header headerTitle="Projects by Dauwt"/>
      <Window />
    </div>
  )
}

export default App
