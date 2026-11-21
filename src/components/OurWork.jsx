import { Link } from 'react-router-dom'
import restaurantImage from '../../images/restaurant.avif'
import travelImage from '../../images/travel.avif'
import ecommerceImage from '../../images/ecommerce.avif'
import './OurWork.css'

function OurWork() {
    return (
        <section className="work-section" id="work">
            <div className="work-intro-row">
                <div className="act-badge">
                    <span>[ ACT III / THE EXHIBITION ]</span>
                </div>

                <h2 className="work-headline">
                    Curated Interactive <span>Demonstrations.</span>
                </h2>

                <p className="work-intro-description">
                    Explore fully functional, custom-engineered digital prototypes across
                    fine dining, boutique hospitality, contemporary fashion, and expedition travel.
                </p>
            </div>

            <div className="exhibition-staggered-stage">
                {/* Plinth 01: Saffron — Culinary Platform (Panoramic) */}
                <div className="exhibition-plinth panoramic">
                    <div className="plinth-media">
                        <img
                            src={restaurantImage}
                            alt="Saffron Restaurant interactive prototype preview"
                            loading="lazy"
                        />
                        <span className="plinth-badge">Fine Dining &amp; Orders</span>
                    </div>

                    <div className="plinth-content">
                        <div>
                            <div className="plinth-meta">PROTOTYPE 01 / HOSPITALITY COMMERCE</div>
                            <h3>Saffron — Culinary Platform</h3>
                            <p>
                                An interactive restaurant website demonstration featuring digital menu
                                discovery, real-time cart calculations, and a complete order placement flow.
                            </p>
                        </div>

                        <div className="plinth-footer">
                            <span className="plinth-status">Live Interactive Prototype</span>
                            <Link to="/demos/restaurant" className="plinth-launch-btn">
                                Launch Demo ↗
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Dual Plinths: Voyora & Lunara */}
                <div className="exhibition-dual-row">
                    {/* Plinth 02: Voyora */}
                    <div className="exhibition-plinth vertical">
                        <div className="plinth-media">
                            <img
                                src={travelImage}
                                alt="Voyora Travel & Tours prototype preview"
                                loading="lazy"
                            />
                            <span className="plinth-badge">Travel &amp; Expeditions</span>
                        </div>

                        <div className="plinth-content">
                            <div>
                                <div className="plinth-meta">PROTOTYPE 02 / TRAVEL PORTAL</div>
                                <h3>Voyora — Expedition Travel</h3>
                                <p>
                                    A bespoke travel platform prototype showcasing destination guides,
                                    curated itineraries, package details, and an interactive enquiry system.
                                </p>
                            </div>

                            <div className="plinth-footer">
                                <span className="plinth-status">Live Prototype</span>
                                <Link to="/demos/travel" className="plinth-launch-btn">
                                    Launch Demo ↗
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Plinth 03: Lunara */}
                    <div className="exhibition-plinth vertical">
                        <div className="plinth-media">
                            <img
                                src={ecommerceImage}
                                alt="Lunara Fashion e-commerce prototype preview"
                                loading="lazy"
                            />
                            <span className="plinth-badge">Digital Commerce</span>
                        </div>

                        <div className="plinth-content">
                            <div>
                                <div className="plinth-meta">PROTOTYPE 03 / HAUTE COMMERCE</div>
                                <h3>Lunara — Contemporary Fashion</h3>
                                <p>
                                    A refined online boutique demonstration featuring curated fashion collections,
                                    instant bag management, and an interactive checkout experience.
                                </p>
                            </div>

                            <div className="plinth-footer">
                                <span className="plinth-status">Live Prototype</span>
                                <Link to="/demos/ecommerce" className="plinth-launch-btn">
                                    Launch Demo ↗
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Plinth 04: The Grand Aurelle (Panoramic Reverse) */}
                <div className="exhibition-plinth panoramic reverse">
                    <div className="plinth-content">
                        <div>
                            <div className="plinth-meta">PROTOTYPE 04 / FIVE-STAR HOSPITALITY</div>
                            <h3>The Grand Aurelle — Luxury Hotel</h3>
                            <p>
                                An elegant hospitality demonstration featuring suite showcases,
                                curated dining experiences, amenities, and a direct reservation interface.
                            </p>
                        </div>

                        <div className="plinth-footer">
                            <span className="plinth-status">Live Interactive Prototype</span>
                            <Link to="/demos/hotel" className="plinth-launch-btn">
                                Launch Demo ↗
                            </Link>
                        </div>
                    </div>

                    <div className="plinth-media">
                        <img
                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900"
                            alt="The Grand Aurelle Luxury Hotel prototype preview"
                            loading="lazy"
                        />
                        <span className="plinth-badge">Luxury Hospitality</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurWork
