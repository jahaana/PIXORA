import { Link } from 'react-router-dom'

function WebDevelopment() {
    return (
        <main className="service-page">

            {/* HERO SECTION */}

            <section className="service-hero">

                <div className="service-hero-content">

                    <p className="section-tag">
                        OUR SERVICES / WEB DEVELOPMENT
                    </p>

                    <h1>
                        Websites That
                        <span> Work For You.</span>
                    </h1>

                    <p>
                        We create modern, responsive and powerful
                        websites that help businesses establish
                        their online presence and grow with confidence.
                    </p>

                    <Link to="/#contact" className="primary-btn">
                        Let's Discuss Your Project →
                    </Link>

                </div>

            </section>


            {/* WHAT WE BUILD */}

            <section className="service-details">

                <div className="service-page-heading">

                    <p className="section-tag">
                        WHAT WE BUILD
                    </p>

                    <h2>
                        Digital Solutions for
                        <span> Every Business.</span>
                    </h2>

                    <p>
                        From simple business websites to advanced
                        web applications, we build digital experiences
                        designed around your business needs.
                    </p>

                </div>

                <div className="service-details-grid">

                    <div className="service-detail-card">
                        <span>01</span>
                        <h3>Business Websites</h3>
                        <p>
                            Professional websites that showcase
                            your brand, services and business
                            information.
                        </p>
                    </div>

                    <div className="service-detail-card">
                        <span>02</span>
                        <h3>Portfolio Websites</h3>
                        <p>
                            Beautiful personal and professional
                            portfolios that highlight your work
                            and achievements.
                        </p>
                    </div>

                    <div className="service-detail-card">
                        <span>03</span>
                        <h3>Web Applications</h3>
                        <p>
                            Interactive web applications built
                            to simplify processes and solve
                            business problems.
                        </p>
                    </div>

                    <div className="service-detail-card">
                        <span>04</span>
                        <h3>Landing Pages</h3>
                        <p>
                            Focused landing pages designed to
                            introduce your offerings and encourage
                            customer enquiries.
                        </p>
                    </div>

                </div>

            </section>


            {/* OUR APPROACH */}

            <section className="service-approach">

                <div className="service-page-heading">

                    <p className="section-tag">
                        OUR APPROACH
                    </p>

                    <h2>
                        Built With
                        <span> Purpose.</span>
                    </h2>

                </div>

                <div className="approach-grid">

                    <div className="approach-item">
                        <h3>Responsive Design</h3>
                        <p>
                            Websites that adapt smoothly to
                            desktops, tablets and mobile devices.
                        </p>
                    </div>

                    <div className="approach-item">
                        <h3>Modern Technology</h3>
                        <p>
                            Modern development tools and technologies
                            selected to suit each project.
                        </p>
                    </div>

                    <div className="approach-item">
                        <h3>User-Friendly Experience</h3>
                        <p>
                            Clear layouts and intuitive navigation
                            that make websites easy to use.
                        </p>
                    </div>

                </div>

            </section>


            {/* OUR PROCESS */}

            <section className="service-process">

                <div className="service-page-heading">

                    <p className="section-tag">
                        HOW WE WORK
                    </p>

                    <h2>
                        Our Development
                        <span> Process.</span>
                    </h2>

                </div>

                <div className="process-grid">

                    <div className="process-item">
                        <span>01</span>
                        <h3>Discover</h3>
                        <p>
                            We understand your business,
                            goals and project requirements.
                        </p>
                    </div>

                    <div className="process-item">
                        <span>02</span>
                        <h3>Design</h3>
                        <p>
                            We plan the website structure
                            and create the visual direction.
                        </p>
                    </div>

                    <div className="process-item">
                        <span>03</span>
                        <h3>Develop</h3>
                        <p>
                            We turn the approved design
                            into a functional website.
                        </p>
                    </div>

                    <div className="process-item">
                        <span>04</span>
                        <h3>Launch</h3>
                        <p>
                            We prepare the website for
                            launch after testing and approval.
                        </p>
                    </div>

                </div>

            </section>


            {/* CALL TO ACTION */}

            <section className="service-cta">

                <p className="section-tag">
                    HAVE A PROJECT IN MIND?
                </p>

                <h2>
                    Let's Build Something
                    <span> Great Together.</span>
                </h2>

                <p>
                    Tell us about your idea and let's discuss
                    how we can bring it to life.
                </p>

                <Link to="/#contact" className="primary-btn">
                    Start Your Project →
                </Link>

            </section>

        </main>
    )
}

export default WebDevelopment