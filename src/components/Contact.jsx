function Contact() {
    return (
        <section className="contact-section" id="contact">

            <div className="contact-heading">

                <p className="section-tag">
                    GET IN TOUCH
                </p>

                <h2>
                    Let's Build Something
                    <span> Amazing.</span>
                </h2>

                <p>
                    Have a project in mind? Tell us about your
                    business, and let's create something great together.
                </p>

            </div>

            <div className="contact-container">

                <div className="contact-info">

                    <h3>Let's Talk About Your Project</h3>

                    <p>
                        We're here to help bring your business ideas
                        to life with creative digital solutions.
                    </p>

                    <div className="contact-detail">
                        <span>✉</span>
                        <div>
                            <h4>Email</h4>
                            <p>hello@pixora.com</p>
                        </div>
                    </div>

                    <div className="contact-detail">
                        <span>🌐</span>
                        <div>
                            <h4>Services</h4>
                            <p>Web Design & Development</p>
                        </div>
                    </div>

                </div>

                <form className="contact-form">

                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                    />

                    <input
                        type="text"
                        placeholder="Project Type"
                        required
                    />

                    <textarea
                        placeholder="Tell us about your project..."
                        rows="5"
                        required
                    ></textarea>

                    <button type="submit">
                        Send Message →
                    </button>

                </form>

            </div>

        </section>
    )
}

export default Contact