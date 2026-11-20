function Hero() {
    return (
        <section className="hero-section" id="home">

            <div className="hero-content">

                <p className="hero-tag">
                    CREATIVE WEB DESIGN & DEVELOPMENT
                </p>

                <h1>
                    We Build Digital <br />
                    Experiences That <br />
                    <span>Grow Your Business.</span>
                </h1>

                <p className="hero-description">
                    Transform your ideas into powerful digital experiences.
                    We design and develop modern websites that help your
                    business stand out and grow online.
                </p>

                <div className="hero-buttons">
                    <a href="#work" className="primary-btn">
                        Explore Our Work →
                    </a>

                    <a href="#contact" className="secondary-btn">
                        Let's Talk
                    </a>
                </div>

                <div className="hero-stats">
                    <div>
                        <h3>Creative</h3>
                        <p>Design Solutions</p>
                    </div>

                    <div>
                        <h3>Modern</h3>
                        <p>Web Experiences</p>
                    </div>
                </div>

            </div>

            <div className="hero-visual" aria-hidden="true">

                <div className="visual-glow"></div>

                <div className="visual-card">
                    <div className="card-top">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="visual-content">
                        <div className="visual-sidebar"></div>

                        <div className="visual-main">
                            <div className="visual-heading"></div>
                            <div className="visual-line"></div>
                            <div className="visual-line short"></div>

                            <div className="visual-boxes">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="floating-badge">
                    ✦ Creative Digital Solutions
                </div>

            </div>

        </section>
    )
}

export default Hero