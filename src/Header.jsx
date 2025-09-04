import PropTypes from "prop-types";
import './App.css'

function Header(props) {
    return(
        <div className="header">
            <div className="header-info">
                <img src="/dwtLogo.svg" alt="dwt - Logo" className="header-info-dwt-logo" />
                <div className="header-info-title">{props.headerTitle}</div>
            </div>

            <div className="header-pages">
                <a href="/" className="header-pages-button">Home</a>
                <div className="header-pages-separator">|</div>
                <a href="/projects" className="header-pages-button">Projects</a>
                <div className="header-pages-separator">|</div>
                <a href="/" className="header-pages-button">3D Models</a>
                <div className="header-pages-separator">|</div>
                <a href="/" className="header-pages-button">About me</a>
            </div>
            <div className="header-social">
                <a href="https://github.com/dauwt" target="_blank" rel="noopener noreferrer">
                    <button className="header-social-github">
                        <svg className="header-social-github-svg" aria-hidden="true" viewBox="0 0 24 24" data-view-component="true">
                            <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
                        </svg>
                    </button>
                </a>

                <a href="https://makerworld.com/en/@dauwt" target="_blank" rel="noopener noreferrer">
                    <button className="header-social-makerworld">
                        <svg className="header-social-makerworld-svg" aria-hidden="true" viewBox="0 0 28 28" data-view-component="true">
                            <path d="M27.2867 2.68142L20.8492 0.160571L20.4386 0L20.0257 0.160571L13.9977 2.51861L7.96978 0.160571L7.56139 0L7.15188 0.160571L0.713275 2.68142L0 2.96102V25.0401L0.713275 25.3186L7.15188 27.8394L7.56139 28L7.97091 27.8394L14 25.4814L20.028 27.8394L20.4386 28L20.8492 27.8394L27.2867 25.3186L28 25.0401V2.96102L27.2867 2.68142ZM20.4386 1.20372L26.8772 3.7257V12.8356L20.4386 10.3158V1.20372ZM14.4095 13.8787L20.4386 11.5207L26.4677 13.8787L26.7748 13.9989L26.4677 14.119L20.4386 16.4771L14.4095 14.119L14.1024 13.9989L14.4095 13.8787ZM7.56139 1.20372L14 3.7257V12.8356L7.56139 10.3147V1.20372ZM1.53343 13.8787L7.56139 11.5207L13.5905 13.8787L13.8976 13.9989L13.5905 14.119L7.56139 16.4771L1.53343 14.119L1.22629 13.9989L1.53343 13.8787ZM1.12504 24.2732V15.1588L7.56365 17.6785V26.7895L1.12504 24.2732ZM14.0022 24.2732V15.1588L20.4409 17.6785V26.7895L14.0022 24.2732Z"></path>
                        </svg>
                    </button>
                </a>
            </div>
        </div>
    );
}

Header.propTypes = {
    headerTitle: PropTypes.string.isRequired
}

Header.defaultProps = {
    headerTitle: "Projects by Dauwt",
}

export default Header