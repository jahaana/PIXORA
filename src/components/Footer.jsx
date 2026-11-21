import './Footer.css'

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <footer className="footer-section">
            <div className="footer-container">
                {/* Brand Column */}
                <div className="footer-brand">
                    <a href="#home" className="footer-logo">
                        PIXORA<span>.</span>
                    </a>

                    <p>
                        Digital Architecture &amp; Creative Engineering Studio.
                        We craft bespoke digital experiences that help modern businesses scale.
                    </p>

                    <div className="footer-availability">
                        <span className="footer-availability-dot"></span>
                        <span>Available for select Q1/Q2 engagements</span>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="footer-links">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#work">Selected Work</a></li>
                        <li><a href="#about">Studio Philosophy</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Capabilities */}
                <div className="footer-links">
                    <h3>Capabilities</h3>
                    <ul>
                        <li>Web Architecture</li>
                        <li>UI/UX Design</li>
                        <li>E-Commerce Solutions</li>
                        <li>Creative Engineering</li>
                    </ul>
                </div>

                {/* Contact Coordinates */}
                <div className="footer-links">
                    <h3>Coordinates</h3>
                    <ul>
                        <li>hello@pixora.com</li>
                        <li>Mon – Fri : 9:00 – 18:00</li>
                        <li>Remote &amp; Global Studio</li>
                    </ul>
                </div>
            </div>

            {/* Monumental Typographic Horizon (3D Caustics Glow Behind) */}
            <div className="footer-monumental-text" aria-hidden="true">
                <span>PIXORA</span>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} PIXORA. All rights reserved.</p>

                <button
                    type="button"
                    className="footer-back-to-top"
                    onClick={scrollToTop}
                    aria-label="Back to top of page"
                >
                    <span>Back to Top</span>
                    <span aria-hidden="true">↑</span>
                </button>
            </div>
        </footer>
    )
}

export default Footer
