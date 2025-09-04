import { useState, useEffect } from "react";
import '../App.css'
import TypingText from '../TypingText';

function Projects() {
    return (
        <div className="window">
            <div className='welcome-header'>
                <h1 className="welcome-header-1">Welcome to</h1>
                <TypingText text="Projects by Dauwt" speed={100} />
            </div>
        </div>
    );
}

export default Projects