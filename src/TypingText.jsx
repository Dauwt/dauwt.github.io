import { useState, useEffect } from "react";
import './App.css'

function TypingText({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [text, speed]);

  return (
    <h1 className="welcome-header-2">
      {displayedText}
      <span className="welcome-header-2" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </h1>
  );
}

export default TypingText;