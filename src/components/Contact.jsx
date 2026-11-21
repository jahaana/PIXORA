import { useState } from 'react'
import './Contact.css'

function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
    }

    const handleReset = () => {
        setFormData({
            name: '',
            email: '',
            projectType: '',
            message: '',
        })
        setIsSubmitted(false)
    }

    return (
        <section className="contact-section" id="contact">
            <div className="contact-intro-row">
                <div className="act-badge">
                    <span>[ ACT V / THE CONSULTATION ]</span>
                </div>

                <h2 className="contact-headline">
                    Initiate Your Project <span>Dialogue.</span>
                </h2>

                <p className="contact-intro-description">
                    Have an upcoming project or vision? Connect with our studio to discuss
                    tailored web engineering, interactive interfaces, or digital commerce.
                </p>
            </div>

            <div className="contact-container">
                <div className="contact-info-panel">
                    <h3>Let's Talk About Your Project</h3>

                    <p>
                        We collaborate closely with ambitious brands to transform their digital
                        presence into a high-performance commercial engine.
                    </p>

                    <div className="contact-details-list">
                        <div className="contact-detail-item">
                            <div className="contact-detail-icon" aria-hidden="true">✉</div>
                            <div className="contact-detail-text">
                                <h4>Studio Email</h4>
                                <p>hello@pixora.com</p>
                            </div>
                        </div>

                        <div className="contact-detail-item">
                            <div className="contact-detail-icon" aria-hidden="true">🌐</div>
                            <div className="contact-detail-text">
                                <h4>Core Capabilities</h4>
                                <p>Web Architecture &amp; Development</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-panel">
                    {!isSubmitted ? (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="contact-name">Your Name</label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-email">Business Email</label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-project-type">Project Scope</label>
                                <input
                                    id="contact-project-type"
                                    type="text"
                                    name="projectType"
                                    placeholder="e.g. Website Redesign, Digital Commerce, UI/UX"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-message">Project Vision</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    placeholder="Tell us about your brand, timeline, and goals..."
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="contact-submit-btn">
                                <span>Send Message</span>
                                <span aria-hidden="true">→</span>
                            </button>
                        </form>
                    ) : (
                        <div className="contact-success" role="status">
                            <div className="success-badge" aria-hidden="true">✓</div>
                            <h3>Inquiry Received</h3>
                            <p>
                                Thank you, <strong>{formData.name}</strong>. Your project brief has been
                                received. We will review your requirements and reach out to you shortly.
                            </p>
                            <button
                                type="button"
                                className="contact-reset-btn"
                                onClick={handleReset}
                            >
                                Send Another Message
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Contact
