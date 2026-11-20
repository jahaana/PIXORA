import { useState } from 'react'
import './HotelDemo.css'


function HotelDemo() {

    const [menuOpen, setMenuOpen] = useState(false)
    const [bookingSubmitted, setBookingSubmitted] = useState(false)

    return (
        <div className="aurelle">

            <header className="aurelle-navbar">

                <div className="aurelle-logo">
                    THE GRAND <span>AURELLE</span>
                </div>

                <button
                    className="aurelle-menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? '✕' : '☰'}
                </button>

                <nav className={menuOpen ? 'aurelle-nav active' : 'aurelle-nav'}>
                    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#rooms" onClick={() => setMenuOpen(false)}>Rooms</a>
                    <a href="#dining" onClick={() => setMenuOpen(false)}>Dining</a>
                    <a href="#experiences" onClick={() => setMenuOpen(false)}>Experiences</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </nav>

                <a href="#booking" className="aurelle-book-btn">
                    BOOK YOUR STAY
                </a>

            </header>

            {/* HERO SECTION */}

            <section className="aurelle-hero" id="home">

                <div className="aurelle-hero-overlay">

                    <p>AN EXTRAORDINARY ESCAPE</p>

                    <h1>
                        Experience
                        <br />
                        Timeless Luxury.
                    </h1>

                    <span>
                        Where elegance meets unforgettable hospitality.
                    </span>

                    <a href="#booking">
                        DISCOVER YOUR STAY →
                    </a>

                </div>

            </section>

            {/* ROOMS & SUITES */}

            <section className="aurelle-rooms" id="rooms">

                <div className="aurelle-section-heading">
                    <p>EXCEPTIONAL COMFORT</p>
                    <h2>Rooms & Suites</h2>
                    <span>
                        Beautifully designed spaces for an unforgettable stay.
                    </span>
                </div>

                <div className="aurelle-room-grid">

                    <div className="aurelle-room-card">
                        <img
                            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800"
                            alt="Deluxe room"
                        />
                        <div className="aurelle-room-info">
                            <span>FROM ₹8,999 / NIGHT</span>
                            <h3>Deluxe Room</h3>
                            <p>Elegant interiors and peaceful comfort.</p>
                            <a href="#booking">EXPLORE ROOM →</a>
                        </div>
                    </div>

                    <div className="aurelle-room-card">
                        <img
                            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800"
                            alt="Luxury suite"
                        />
                        <div className="aurelle-room-info">
                            <span>FROM ₹14,999 / NIGHT</span>
                            <h3>Luxury Suite</h3>
                            <p>Spacious living with exceptional elegance.</p>
                            <a href="#booking">EXPLORE ROOM →</a>
                        </div>
                    </div>

                    <div className="aurelle-room-card">
                        <img
                            src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800"
                            alt="Presidential suite"
                        />
                        <div className="aurelle-room-info">
                            <span>FROM ₹24,999 / NIGHT</span>
                            <h3>Presidential Suite</h3>
                            <p>The finest expression of luxury and privacy.</p>
                            <a href="#booking">EXPLORE ROOM →</a>
                        </div>
                    </div>

                </div>

            </section>

            {/* DINING SECTION */}

            <section className="aurelle-dining" id="dining">

                <div className="aurelle-dining-image">
                    <img
                        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000"
                        alt="Luxury hotel fine dining"
                    />
                </div>

                <div className="aurelle-dining-content">

                    <p>AN ART OF FINE DINING</p>

                    <h2>
                        A Taste of
                        <br />
                        Extraordinary.
                    </h2>

                    <span>
                        Discover exceptional flavours, carefully crafted menus,
                        and unforgettable dining experiences in an atmosphere
                        of timeless elegance.
                    </span>

                    <a href="#contact">EXPLORE DINING →</a>

                </div>

            </section>

            {/* EXPERIENCES SECTION */}

            <section className="aurelle-experiences" id="experiences">

                <div className="aurelle-section-heading">
                    <p>BEYOND THE ORDINARY</p>
                    <h2>Experiences to Remember</h2>
                    <span>Every moment deserves to be extraordinary.</span>
                </div>

                <div className="aurelle-experience-grid">

                    <div className="aurelle-experience-card">
                        <img
                            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=700"
                            alt="Luxury swimming pool"
                        />
                        <div>
                            <h3>Infinity Pool</h3>
                            <p>Relax, unwind and enjoy the extraordinary.</p>
                        </div>
                    </div>

                    <div className="aurelle-experience-card">
                        <img
                            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700"
                            alt="Luxury spa"
                        />
                        <div>
                            <h3>Wellness & Spa</h3>
                            <p>Discover complete relaxation and rejuvenation.</p>
                        </div>
                    </div>

                    <div className="aurelle-experience-card">
                        <img
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700"
                            alt="Luxury fitness centre"
                        />
                        <div>
                            <h3>Fitness Centre</h3>
                            <p>Stay active with our premium fitness facilities.</p>
                        </div>
                    </div>

                </div>

            </section>

            {/* BOOKING SECTION */}

            <section className="aurelle-booking" id="booking">

                <div className="aurelle-booking-heading">
                    <p>YOUR JOURNEY BEGINS HERE</p>
                    <h2>Reserve Your Stay</h2>
                    <span>Make your next escape unforgettable.</span>
                </div>

                {bookingSubmitted ? (

                    <div className="aurelle-booking-success">
                        <h3>Thank You!</h3>
                        <p>Your demo reservation request has been received.</p>
                        <button onClick={() => setBookingSubmitted(false)}>
                            Make Another Reservation
                        </button>
                    </div>

                ) : (

                    <form
                        className="aurelle-booking-form"
                        onSubmit={(e) => {
                            e.preventDefault()
                            setBookingSubmitted(true)
                        }}
                    >

                        <div>
                            <label>Check In</label>
                            <input type="date" required />
                        </div>

                        <div>
                            <label>Check Out</label>
                            <input type="date" required />
                        </div>

                        <div>
                            <label>Guests</label>
                            <select required defaultValue="">
                                <option value="" disabled>Select Guests</option>
                                <option>1 Guest</option>
                                <option>2 Guests</option>
                                <option>3 Guests</option>
                                <option>4 Guests</option>
                            </select>
                        </div>

                        <div>
                            <label>Room Type</label>
                            <select required defaultValue="">
                                <option value="" disabled>Select Room</option>
                                <option>Deluxe Room</option>
                                <option>Luxury Suite</option>
                                <option>Presidential Suite</option>
                            </select>
                        </div>

                        <button type="submit">
                            CHECK AVAILABILITY →
                        </button>

                    </form>

                )}

            </section>

            {/* CONTACT SECTION */}

            <section className="aurelle-contact" id="contact">

                <div className="aurelle-contact-content">

                    <p>WE WOULD LOVE TO WELCOME YOU</p>

                    <h2>Every Great Stay<br />Begins With a Hello.</h2>

                    <span>
                        Have questions about your stay? Get in touch
                        with our hospitality team.
                    </span>

                    <div className="aurelle-contact-details">
                        <div>
                            <small>CALL US</small>
                            <p>+91 98765 43210</p>
                        </div>

                        <div>
                            <small>EMAIL US</small>
                            <p>hello@grandaurelle.com</p>
                        </div>

                        <div>
                            <small>FIND US</small>
                            <p>Kerala, India</p>
                        </div>
                    </div>

                </div>

            </section>

            {/* FOOTER */}

            <footer className="aurelle-footer">

                <div className="aurelle-footer-content">

                    <div className="aurelle-footer-brand">
                        <h2>THE GRAND <span>AURELLE</span></h2>
                        <p>
                            An extraordinary escape where
                            every moment becomes a memory.
                        </p>
                    </div>

                    <div>
                        <h3>EXPLORE</h3>
                        <a href="#home">Home</a>
                        <a href="#rooms">Rooms & Suites</a>
                        <a href="#dining">Dining</a>
                        <a href="#experiences">Experiences</a>
                    </div>

                    <div>
                        <h3>RESERVATIONS</h3>
                        <a href="#booking">Book Your Stay</a>
                        <a href="#contact">Contact Us</a>
                    </div>

                    <div>
                        <h3>FOLLOW US</h3>
                        <a href="#contact">Instagram</a>
                        <a href="#contact">Facebook</a>
                        <a href="#contact">Pinterest</a>
                    </div>

                </div>

                <div className="aurelle-footer-bottom">
                    <p>© 2026 THE GRAND AURELLE. All Rights Reserved.</p>
                    <span>Crafted with elegance.</span>
                </div>

            </footer>

        </div>
    )
}

export default HotelDemo
