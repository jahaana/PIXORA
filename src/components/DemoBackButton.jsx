import { Link } from 'react-router-dom'
import './DemoBackButton.css'

function DemoBackButton() {
    return (
        <Link
            to="/"
            className="demo-back-btn"
            aria-label="Back to PIXORA Showcase"
        >
            <span className="demo-back-icon" aria-hidden="true">←</span>
            <span className="demo-back-text">
                Back to <strong>PIXORA</strong>
            </span>
        </Link>
    )
}

export default DemoBackButton
