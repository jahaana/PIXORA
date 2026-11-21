import './About.css'

function About() {
    return (
        <section className="about-section" id="about">
            <div className="about-editorial-grid">
                {/* Left Column: Manifesto & Tenets */}
                <div>
                    <div className="act-badge">
                        <span>[ ACT IV / THE MANIFESTO ]</span>
                    </div>

                    <h2 className="about-statement">
                        We Believe Digital Presence Is The Highest Expression Of <span>Brand Identity.</span>
                    </h2>

                    <p className="about-narrative">
                        PIXORA is a creative web solutions brand dedicated to engineering
                        authoritative digital experiences. We bridge the gap between cinematic visual
                        artistry and rock-solid modern frontend engineering.
                    </p>

                    <div className="manifesto-tenets">
                        <div className="tenet-item">
                            <span className="tenet-index">01</span>
                            <div className="tenet-body">
                                <h4>Purity of Design</h4>
                                <p>Aesthetic restraint, precise typographic hierarchy, and purposeful spatial layouts.</p>
                            </div>
                        </div>

                        <div className="tenet-item">
                            <span className="tenet-index">02</span>
                            <div className="tenet-body">
                                <h4>Computational Rigor</h4>
                                <p>Sub-second loading times, fluid responsive kinematics, and scalable bespoke code.</p>
                            </div>
                        </div>

                        <div className="tenet-item">
                            <span className="tenet-index">03</span>
                            <div className="tenet-body">
                                <h4>Enduring Business Impact</h4>
                                <p>Digital platforms engineered to elevate brand perception and compound commercial growth.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Spatial Monolith Viewport (Framing the 3D Core) */}
                <div className="about-spatial-window">
                    <div className="spatial-window-badge">
                        <span>✦ PIXORA STUDIO ETHOS</span>
                    </div>

                    <div className="spatial-window-body">
                        <h3>Crafted With Precision. Engineered For Scale.</h3>
                        <p>
                            Every interaction is deliberate. We replace off-the-shelf templates
                            with bespoke, high-performance digital spaces engineered specifically for your brand.
                        </p>
                    </div>

                    <div className="spatial-window-footer">
                        <span>SPATIAL WEB ARCHITECTURE</span>
                        <span>100% BESPOKE</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
