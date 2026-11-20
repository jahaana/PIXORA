import { Link } from 'react-router-dom'

function Ecommerce() {
    return (
        <main className="service-page">

            {/* HERO SECTION */}

            <section className="service-hero">

                <div className="service-hero-content">

                    <p className="section-tag">
                        OUR SERVICES / E-COMMERCE
                    </p>

                    <h1>
                        Turn Your Store
                        <span> Into an Experience.</span>
                    </h1>

                    <p>
                        We create modern online stores that help
                        businesses showcase products, connect with
                        customers and grow their digital presence.
                    </p>

                    <Link to="/#contact" className="primary-btn">
                        Let's Discuss Your Store →
                    </Link>

                </div>

            </section>


            {/* E-COMMERCE SERVICES */}

            <section className="service-details">

                <div className="service-page-heading">

                    <p className="section-tag">
                        WHAT WE BUILD
                    </p>

                    <h2>
                        Everything Your
                        <span> Online Store Needs.</span>
                    </h2>

                    <p>
                        From product displays to smooth checkout
                        experiences, we build online shopping
                        solutions designed around your business.
                    </p>

                </div>

                <div className="service-details-grid">

                    <div className="service-detail-card">
                        <span>01</span>
                        <h3>Online Store Development</h3>
                        <p>
                            Professional online stores where
                            customers can explore products
                            and shop with ease.
                        </p>
                    </div>

                    <div className="service-detail-card">
                        <span>02</span>
                        <h3>Product Management</h3>
                        <p>
                            Organised product catalogues with
                            product images, descriptions,
                            prices and categories.
                        </p>
                    </div>

                    <div className="service-detail-card">
                        <span>03</span>
                        <h3>Shopping Cart & Checkout</h3>
                        <p>
                            Simple shopping cart and checkout
                            experiences that make purchasing
                            convenient for customers.
                        </p>
                    </div>

                    <div className="service-detail-card">
                        <span>04</span>
                        <h3>Payment Integration</h3>
                        <p>
                            Integration with suitable payment
                            gateways to support secure
                            online transactions.
                        </p>
                    </div>

                </div>

            </section>


            {/* STORE FEATURES */}

            <section className="service-approach">

                <div className="service-page-heading">

                    <p className="section-tag">
                        STORE FEATURES
                    </p>

                    <h2>
                        Designed for
                        <span> Better Shopping.</span>
                    </h2>

                    <p>
                        We focus on the features that make
                        online shopping simple, enjoyable
                        and convenient.
                    </p>

                </div>

                <div className="approach-grid">

                    <div className="approach-item">
                        <h3>Mobile-Friendly Shopping</h3>
                        <p>
                            Responsive online stores that
                            provide a smooth shopping
                            experience across devices.
                        </p>
                    </div>

                    <div className="approach-item">
                        <h3>Easy Navigation</h3>
                        <p>
                            Clear product categories and
                            organised layouts that help
                            customers find what they need.
                        </p>
                    </div>

                    <div className="approach-item">
                        <h3>Smooth Checkout</h3>
                        <p>
                            A straightforward checkout flow
                            that helps customers complete
                            their purchases easily.
                        </p>
                    </div>

                </div>

            </section>


            {/* DEVELOPMENT PROCESS */}

            <section className="service-process">

                <div className="service-page-heading">

                    <p className="section-tag">
                        HOW WE WORK
                    </p>

                    <h2>
                        From Business Idea
                        <span> to Online Store.</span>
                    </h2>

                </div>

                <div className="process-grid">

                    <div className="process-item">
                        <span>01</span>
                        <h3>Understand</h3>
                        <p>
                            Learn about your products,
                            business goals and customer needs.
                        </p>
                    </div>

                    <div className="process-item">
                        <span>02</span>
                        <h3>Plan & Design</h3>
                        <p>
                            Plan the store structure and
                            create an attractive shopping layout.
                        </p>
                    </div>

                    <div className="process-item">
                        <span>03</span>
                        <h3>Develop</h3>
                        <p>
                            Build the store and implement
                            its required shopping features.
                        </p>
                    </div>

                    <div className="process-item">
                        <span>04</span>
                        <h3>Test & Launch</h3>
                        <p>
                            Test the shopping experience
                            and prepare the store for launch.
                        </p>
                    </div>

                </div>

            </section>


            {/* CALL TO ACTION */}

            <section className="service-cta">

                <p className="section-tag">
                    READY TO SELL ONLINE?
                </p>

                <h2>
                    Let's Build Your
                    <span> Online Store.</span>
                </h2>

                <p>
                    Have a business idea? Let's create
                    an online shopping experience that
                    helps your business grow.
                </p>

                <Link to="/#contact" className="primary-btn">
                    Start Your Store Project →
                </Link>

            </section>

        </main>
    )
}

export default Ecommerce