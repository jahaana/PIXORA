function Footer() {
    return (
        <footer className="footer-section">

            <div className="footer-container">

                {/* BRAND */}

                <div className="footer-brand">

                    <a href="#home" className="footer-logo">
                        PIXORA<span>.</span>
                    </a>

                    <p>
                        Bringing Your Business Ideas to Life.
                        We build creative digital experiences
                        that help businesses grow.
                    </p>

                </div>

                {/* QUICK LINKS */}

                <div className="footer-links">

                    <h3>Quick Links</h3>

                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#work">Our Work</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                </div>

                {/* SERVICES */}

                <div className="footer-links">

                    <h3>Our Services</h3>

                    <ul>
                        <li>Web Development</li>
                        <li>UI/UX Design</li>
                        <li>E-commerce Solutions</li>
                        <li>Business Websites</li>
                    </ul>

                </div>

                {/* CONTACT */}

                <div className="footer-links">

                    <h3>Get In Touch</h3>

                    <ul>
                        <li>hello@pixora.com</li>
                        <li>Let's build something amazing!</li>
                    </ul>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 PIXORA. All Rights Reserved.
                </p>

                <p>
                    Designed & Developed with ♥ by PIXORA
                </p>

            </div>

        </footer>
    )
}

export default Footer