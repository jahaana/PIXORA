import { useState } from 'react'
import './TravelDemo.css'

function TravelDemo() {

    const [enquirySent, setEnquirySent] = useState(false)

    const handleEnquiry = (e) => {
    e.preventDefault()
    setEnquirySent(true)
    }

  return (
    <div className="travel-demo">

      {/* NAVBAR */}
      <nav className="travel-navbar">
        <a href="#travel-home" className="travel-logo">
          VOYORA<span>.</span>
        </a>

        <div className="travel-nav-links">
          <a href="#travel-home">Home</a>
          <a href="#destinations">Destinations</a>
          <a href="#packages">Packages</a>
          <a href="#about-travel">About</a>
        </div>

        <a href="#travel-contact" className="travel-nav-btn">
          Plan Your Trip ↗
        </a>
      </nav>


      {/* HERO */}
      <section className="travel-hero" id="travel-home">

        <div className="travel-hero-overlay"></div>

        <div className="travel-hero-content">

          <p className="travel-hero-tag">
            DISCOVER THE WORLD WITH VOYORA
          </p>

          <h1>
            Your Next Great
            <br />
            <span>Adventure</span>
            Starts Here.
          </h1>

          <p className="travel-hero-description">
            Discover extraordinary destinations, unforgettable
            experiences, and journeys made just for you.
          </p>

          <div className="travel-hero-buttons">
            <a href="#destinations" className="travel-primary-btn">
              Explore Destinations ↗
            </a>

            <a href="#packages" className="travel-secondary-btn">
              View Packages
            </a>
          </div>

        </div>

        <div className="travel-hero-bottom">
          <span>01 — EXPLORE</span>
          <span>MAKE EVERY JOURNEY COUNT</span>
        </div>

      </section>


      {/* POPULAR DESTINATIONS */}

        <section className="travel-destinations" id="destinations">

        <div className="travel-section-heading">
            <p>EXPLORE THE WORLD</p>
            <h2>Popular Destinations</h2>
            <span>
            Discover breathtaking places and create memories
            that last a lifetime.
            </span>
        </div>

        <div className="travel-destination-grid">

            <div className="travel-destination-card">
            <img
                src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800"
                alt="New York"
            />
            <div className="travel-destination-info">
                <span>UNITED STATES</span>
                <h3>New York</h3>
                <a href="#packages">Explore Destination ↗</a>
            </div>
            </div>

            <div className="travel-destination-card">
            <img
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800"
                alt="Italy"
            />
            <div className="travel-destination-info">
                <span>ITALY</span>
                <h3>Amalfi Coast</h3>
                <a href="#packages">Explore Destination ↗</a>
            </div>
            </div>

            <div className="travel-destination-card">
            <img
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800"
                alt="Bali"
            />
            <div className="travel-destination-info">
                <span>INDONESIA</span>
                <h3>Bali</h3>
                <a href="#packages">Explore Destination ↗</a>
            </div>
            </div>

            <div className="travel-destination-card">
            <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800"
                alt="Switzerland"
            />
            <div className="travel-destination-info">
                <span>SWITZERLAND</span>
                <h3>Swiss Alps</h3>
                <a href="#packages">Explore Destination ↗</a>
            </div>
            </div>

        </div>

        </section>


        {/* TOUR PACKAGES */}

        <section className="travel-packages" id="packages">

        <div className="travel-section-heading">
            <p>CURATED EXPERIENCES</p>
            <h2>Explore Our Tour Packages</h2>
            <span>
            Carefully designed journeys for unforgettable adventures.
            </span>
        </div>

        <div className="travel-package-grid">

            <div className="travel-package-card">
            <div className="travel-package-image">
                <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900"
                alt="Swiss Alps"
                />
                <span>BEST SELLER</span>
            </div>

            <div className="travel-package-content">
                <p>🇨🇭 SWITZERLAND</p>
                <h3>Alpine Escape</h3>
                <div className="travel-package-details">
                <span>✈ 7 Days</span>
                <span>★ 4.9 Rating</span>
                </div>
                <div className="travel-package-bottom">
                <div>
                    <small>Starting from</small>
                    <h4>₹89,999</h4>
                </div>
                <a href="#travel-contact">View Details ↗</a>
                </div>
            </div>
            </div>


            <div className="travel-package-card">
            <div className="travel-package-image">
                <img
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900"
                alt="Bali"
                />
                <span>POPULAR</span>
            </div>

            <div className="travel-package-content">
                <p>🇮🇩 INDONESIA</p>
                <h3>Tropical Bali Retreat</h3>
                <div className="travel-package-details">
                <span>✈ 5 Days</span>
                <span>★ 4.8 Rating</span>
                </div>
                <div className="travel-package-bottom">
                <div>
                    <small>Starting from</small>
                    <h4>₹54,999</h4>
                </div>
                <a href="#travel-contact">View Details ↗</a>
                </div>
            </div>
            </div>


            <div className="travel-package-card">
            <div className="travel-package-image">
                <img
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900"
                alt="Italy"
                />
                <span>EXCLUSIVE</span>
            </div>

            <div className="travel-package-content">
                <p>🇮🇹 ITALY</p>
                <h3>Italian Dream Journey</h3>
                <div className="travel-package-details">
                <span>✈ 8 Days</span>
                <span>★ 5.0 Rating</span>
                </div>
                <div className="travel-package-bottom">
                <div>
                    <small>Starting from</small>
                    <h4>₹1,09,999</h4>
                </div>
                <a href="#travel-contact">View Details ↗</a>
                </div>
            </div>
            </div>

        </div>

        </section>


        {/* WHY CHOOSE US */}

        <section className="travel-why-us" id="about-travel">

        <div className="travel-why-content">

            <p className="travel-why-tag">WHY TRAVEL WITH VOYORA</p>

            <h2>
            We Don't Just Plan Trips.
            <span> We Create Memories.</span>
            </h2>

            <p className="travel-why-description">
            Every journey deserves to be extraordinary.
            From handpicked destinations to personalized experiences,
            we take care of every detail so you can enjoy every moment.
            </p>

            <div className="travel-features">

            <div className="travel-feature">
                <span>✈</span>
                <div>
                <h3>Personalized Journeys</h3>
                <p>Travel experiences designed around you.</p>
                </div>
            </div>

            <div className="travel-feature">
                <span>♧</span>
                <div>
                <h3>Expert Travel Guides</h3>
                <p>Explore the world with experienced professionals.</p>
                </div>
            </div>

            <div className="travel-feature">
                <span>◇</span>
                <div>
                <h3>Best Value Packages</h3>
                <p>Unforgettable adventures at great prices.</p>
                </div>
            </div>

            <div className="travel-feature">
                <span>♡</span>
                <div>
                <h3>24/7 Travel Support</h3>
                <p>We're here whenever you need us.</p>
                </div>
            </div>

            </div>

        </div>

        <div className="travel-why-image">
            <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1000"
            alt="Beautiful mountain lake travel destination"
            />

            <div className="travel-experience-badge">
            <h3>10+</h3>
            <p>Years of<br />Experience</p>
            </div>
        </div>

        </section>


        {/* TRAVEL EXPERIENCES */}

        <section className="travel-experiences">

        <div className="travel-section-heading">
            <p>COLLECT MOMENTS, NOT THINGS</p>
            <h2>Experiences Worth Remembering</h2>
            <span>
            Every destination has a story. Let's make yours unforgettable.
            </span>
        </div>

        <div className="travel-experience-grid">

            <div className="travel-experience-card experience-large">
            <img
                src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000"
                alt="Mountain adventure"
            />
            <div className="travel-experience-overlay">
                <span>ADVENTURE</span>
                <h3>Into The Wild</h3>
            </div>
            </div>

            <div className="travel-experience-card">
            <img
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800"
                alt="Beach holiday"
            />
            <div className="travel-experience-overlay">
                <span>RELAXATION</span>
                <h3>Ocean Escapes</h3>
            </div>
            </div>

            <div className="travel-experience-card">
            <img
                src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=800"
                alt="City exploration"
            />
            <div className="travel-experience-overlay">
                <span>CULTURE</span>
                <h3>Discover Cities</h3>
            </div>
            </div>

        </div>

        </section>

        {/* CONTACT & BOOKING */}

        <section className="travel-contact" id="travel-contact">

        <div className="travel-contact-heading">
            <p>YOUR JOURNEY STARTS HERE</p>
            <h2>Let's Plan Your Next Adventure</h2>
            <span>
            Tell us where you want to go. We'll help you make it happen.
            </span>
        </div>

        <div className="travel-contact-container">

            <div className="travel-contact-info">

            <p className="travel-contact-tag">GET IN TOUCH</p>

            <h2>
                Your Dream Trip Is
                <span> Just One Step Away.</span>
            </h2>

            <p className="travel-contact-description">
                Whether you're planning a relaxing escape or an exciting
                adventure, our travel experts are ready to help you.
            </p>

            <div className="travel-contact-detail">
                <span>✉</span>
                <div>
                <h4>Email Us</h4>
                <p>hello@voyora.com</p>
                </div>
            </div>

            <div className="travel-contact-detail">
                <span>☎</span>
                <div>
                <h4>Call Us</h4>
                <p>+91 98765 43210</p>
                </div>
            </div>

            <div className="travel-contact-detail">
                <span>⌖</span>
                <div>
                <h4>Visit Us</h4>
                <p>Kerala, India</p>
                </div>
            </div>

            </div>


            <form
                className="travel-booking-form"
                onSubmit={(e) => {
                    handleEnquiry(e)
                    e.currentTarget.reset()
                }}
            >

            <h3>Plan Your Trip</h3>
            <p>Fill in your details and let's get started.</p>

            {enquirySent && (
                <div className="travel-success-message">
                    <span>✓</span>
                    <div>
                    <h4>Enquiry Submitted!</h4>
                    <p>Thank you! Your dream journey starts here.</p>
                    </div>
                </div>
                )}

            <div className="travel-form-row">

                <div className="travel-form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" required />
                </div>

                <div className="travel-form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" required />
                </div>

            </div>

            <div className="travel-form-row">

                <div className="travel-form-group">
                <label>Destination</label>
                <select defaultValue="" required>
                    <option value="" disabled>Select destination</option>
                    <option>Switzerland</option>
                    <option>Bali</option>
                    <option>Italy</option>
                    <option>New York</option>
                    <option>Other</option>
                </select>
                </div>

                <div className="travel-form-group">
                <label>Travel Date</label>
                <input type="date" required />
                </div>

            </div>

            <div className="travel-form-group">
                <label>Number of Travellers</label>
                <select defaultValue="" required>
                <option value="" disabled>Select travellers</option>
                <option>1 Person</option>
                <option>2 People</option>
                <option>3–5 People</option>
                <option>6+ People</option>
                </select>
            </div>

            <div className="travel-form-group">
                <label>Tell Us More (Optional)</label>
                <textarea
                rows="3"
                placeholder="Any special requests or preferences?"
                ></textarea>
            </div>

            <button type="submit" className="travel-submit-btn">
                Send Trip Enquiry ↗
            </button>

            <small className="travel-form-note">
                Our travel team will be happy to assist you.
            </small>

            </form>

        </div>

        </section>


        {/* FOOTER */}

        <footer className="travel-footer">

        <div className="travel-footer-main">

            <div className="travel-footer-brand">
            <a href="#travel-home" className="travel-logo">
                VOYORA<span>.</span>
            </a>

            <p>
                Discover the world, one unforgettable journey at a time.
                Your next adventure begins with us.
            </p>

            <div className="travel-social-links">
                <a href="#travel-home">IG</a>
                <a href="#travel-home">FB</a>
                <a href="#travel-home">X</a>
                <a href="#travel-home">IN</a>
            </div>
            </div>


            <div className="travel-footer-column">
            <h3>Explore</h3>
            <a href="#travel-home">Home</a>
            <a href="#destinations">Destinations</a>
            <a href="#packages">Tour Packages</a>
            <a href="#about-travel">About Us</a>
            </div>


            <div className="travel-footer-column">
            <h3>Discover</h3>
            <a href="#destinations">Popular Places</a>
            <a href="#packages">Best Packages</a>
            <a href="#about-travel">Why Voyora</a>
            <a href="#travel-contact">Plan a Trip</a>
            </div>


            <div className="travel-footer-column">
            <h3>Get In Touch</h3>
            <p>hello@voyora.com</p>
            <p>+91 98765 43210</p>
            <p>Kerala, India</p>
            </div>

        </div>


        <div className="travel-footer-bottom">
            <p>© 2026 VOYORA. All Rights Reserved.</p>
            <p>Designed for unforgettable journeys.</p>
        </div>

        </footer>
    </div>
  )
}

export default TravelDemo