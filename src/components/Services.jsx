import { Link } from 'react-router-dom'
function Services() {
    return (
        <section className="services-section" id="services">

            <div className="services-heading">

                <p className="section-tag">
                    WHAT WE DO
                </p>

                <h2>
                    Our <span>Services</span>
                </h2>

                <p>
                    We provide creative digital solutions
                    to help businesses build a strong online presence.
                </p>

            </div>

            <div className="services-container">

                {/* SERVICE 1 */}

                <div className="service-card">

                    <div className="service-icon">
                        &lt;/&gt;
                    </div>

                    <h3>Web Development</h3>

                    <p>
                        We build modern, responsive and
                        high-performance websites that
                        help your business grow online.
                    </p>

                    <Link to="/web-development" className="service-link">
                        Explore Service →
                    </Link>

                </div>

                {/* SERVICE 2 */}

                <div className="service-card">

                    <div className="service-icon">
                        ✦
                    </div>

                    <h3>UI/UX Design</h3>

                    <p>
                        We create beautiful, intuitive and
                        user-friendly designs that make
                        every digital experience memorable.
                    </p>

                    <Link to="/ui-ux-design" className="service-link">
                        Explore Service →
                    </Link>

                </div>

                {/* SERVICE 3 */}

                <div className="service-card">

                    <div className="service-icon">
                        🛒
                    </div>

                    <h3>E-commerce Solutions</h3>

                    <p>
                        We develop online stores that help
                        businesses showcase products and
                        reach more customers.
                    </p>

                    <Link to="/ecommerce" className="service-link">
                        Explore Service →
                    </Link>

                </div>

            </div>

        </section>
    )
}

export default Services