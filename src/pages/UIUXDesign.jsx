import { Link } from 'react-router-dom'

function UIUXDesign() {
    return (
        <main className="service-page">

            {/* HERO SECTION */}

            <section className="service-hero">

                <div className="service-hero-content">

                    <p className="section-tag">
                        OUR SERVICES / UI/UX DESIGN
                    </p>

                    <h1>
                        Designs That
                        <span> Inspire & Connect.</span>
                    </h1>

                    <p>
                        We design beautiful, intuitive and user-friendly
                        digital experiences that make your brand stand
                        out and keep your customers engaged.
                    </p>

                    <Link to="/#contact" className="primary-btn">
                        Let's Discuss Your Project →
                    </Link>

                </div>

            </section>


            {/* DESIGN SERVICES */}

            <section className="service-details">

                <div className="service-page-heading">

                    <p className="section-tag">
                        WHAT WE OFFER
                    </p>

                    <h2>
                        Creative Design
                        <span> Solutions.</span>
                    </h2>

                    <p>
                        We combine creativity and usability to create
                        digital experiences that look beautiful and
                        work effortlessly.
                    </p>

                </div>

                <div className="service-details-grid">

                    <div className="service-detail-card">
                        <span>01</span>
                        <h3>Website Design</h3>
                        <p>
                            Modern and visually appealing website
                            designs that represent your brand
                            and connect with your audience.
                        </p>
                    </div>

                    <div className="service-detail-card">
                        <span>02</span>
                        <h3>Mobile App Design</h3>
                        <p>
                            Clean and intuitive mobile interfaces
                            designed to provide smooth experiences
                            across different devices.
                        </p>
                    </div>

                    <div className="service-detail-card">
                        <span>03</span>
                        <h3>Wireframing</h3>
                        <p>
                            Clear layouts and page structures
                            that help plan the user journey
                            before visual design begins.
                        </p>
                    </div>

                    <div className="service-detail-card">
                        <span>04</span>
                        <h3>Prototyping</h3>
                        <p>
                            Interactive design prototypes that
                            demonstrate how users will navigate
                            and interact with a product.
                        </p>
                    </div>

                </div>

            </section>


            {/* DESIGN PRINCIPLES */}

            <section className="service-approach">

                <div className="service-page-heading">

                    <p className="section-tag">
                        OUR DESIGN PHILOSOPHY
                    </p>

                    <h2>
                        Design With
                        <span> Purpose.</span>
                    </h2>

                    <p>
                        Great design is not just about appearance.
                        It's about creating meaningful experiences
                        for real people.
                    </p>

                </div>

                <div className="approach-grid">

                    <div className="approach-item">
                        <h3>Visual Clarity</h3>
                        <p>
                            Clean layouts, balanced spacing and
                            thoughtful typography that make
                            information easy to understand.
                        </p>
                    </div>

                    <div className="approach-item">
                        <h3>User Experience</h3>
                        <p>
                            Simple navigation and intuitive
                            interactions that help users
                            accomplish their goals.
                        </p>
                    </div>

                    <div className="approach-item">
                        <h3>Consistent Design</h3>
                        <p>
                            Consistent colours, components and
                            visual elements that create a
                            recognizable brand identity.
                        </p>
                    </div>

                </div>

            </section>


            {/* DESIGN PROCESS */}

            <section className="service-process">

                <div className="service-page-heading">

                    <p className="section-tag">
                        HOW WE DESIGN
                    </p>

                    <h2>
                        From Idea to
                        <span> Experience.</span>
                    </h2>

                </div>

                <div className="process-grid">

                    <div className="process-item">
                        <span>01</span>
                        <h3>Research</h3>
                        <p>
                            Understand the target audience,
                            business goals and project needs.
                        </p>
                    </div>

                    <div className="process-item">
                        <span>02</span>
                        <h3>Wireframe</h3>
                        <p>
                            Plan the layout, structure and
                            flow of the digital experience.
                        </p>
                    </div>

                    <div className="process-item">
                        <span>03</span>
                        <h3>Design</h3>
                        <p>
                            Create the visual design using
                            colours, typography and components.
                        </p>
                    </div>

                    <div className="process-item">
                        <span>04</span>
                        <h3>Prototype</h3>
                        <p>
                            Build interactive prototypes to
                            demonstrate the user experience.
                        </p>
                    </div>

                </div>

            </section>


            {/* CALL TO ACTION */}

            <section className="service-cta">

                <p className="section-tag">
                    READY TO CREATE SOMETHING?
                </p>

                <h2>
                    Let's Design an
                    <span> Amazing Experience.</span>
                </h2>

                <p>
                    Have a design idea? Let's turn your vision
                    into a beautiful digital experience.
                </p>

                <Link to="/#contact" className="primary-btn">
                    Start Your Design Project →
                </Link>

            </section>

        </main>
    )
}

export default UIUXDesign