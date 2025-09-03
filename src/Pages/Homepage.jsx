import '../App.css'
import TypingText from '../TypingText';

function Homepage() {
    return (
        <div className="window">
            <div className='welcome-header'>
                <h1 className="welcome-header-1">Welcome to</h1>
                <TypingText text="Projects by Dauwt" speed={100} />
            </div>
            <div className="news">
                <div className="news-header">
                    <span className='news-header-title'>New stuff</span>
                </div>
            </div>
        </div>
    );
}

export default Homepage