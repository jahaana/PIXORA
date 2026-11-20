import { Link } from 'react-router-dom'
import restaurantImage from '../../images/restaurant.avif'
import travelImage from '../../images/travel.avif'
import ecommerceImage from '../../images/ecommerce.avif'
function OurWork() {
    return (
        <section className="work-section" id="work">

            <div className="work-heading">

                <p className="section-tag">
                    OUR PORTFOLIO
                </p>

                <h2>
                    Explore Our <span>Work</span>
                </h2>

                <p>
                    Discover the digital experiences we create
                    for businesses across different industries.
                </p>

            </div>

            <div className="work-container">

                {/* RESTAURANT */}

                <div className="work-card">

                    <div className="work-image restaurant-image">
                        <img
                            src={restaurantImage}
                            alt="Restaurant website preview"
                        />
                    </div>

                    <div className="work-info">
                        <span>RESTAURANT</span>
                        <h3>Restaurant Website</h3>

                        <p>
                            Beautiful restaurant websites with
                            digital menus and online ordering.
                        </p>

                        <Link to="/demos/restaurant" className="work-demo-btn">
                            View Demo →
                        </Link>
                    </div>

                </div>

            
                {/* TRAVEL */}

                <div className="work-card">

                    <div className="work-image travel-image">
                        <img
                            src={travelImage}
                            alt="Manarola coastal village in Italy"
                        />
                    </div>

                    <div className="work-info">
                        <span>TRAVEL & TOURS</span>
                        <h3>Travel Website</h3>

                        <p>
                            Explore beautiful destinations and discover
                            exciting travel experiences around the world.
                        </p>

                        <Link to="/demos/travel" className="work-demo-btn">
                            View Demo →
                        </Link>
                    </div>

                </div>

                {/* E-COMMERCE - LUNARA */}

                <div className="work-card">
                    <div className="work-image ecommerce-image">
                        <img
                            src={ecommerceImage}
                            alt="LUNARA fashion e-commerce website"
                        />
                    </div>

                    <div className="work-info">
                        <span>E-COMMERCE</span>
                        <h3>LUNARA – Fashion Store</h3>

                        <p>
                            A premium fashion shopping experience
                            with curated collections and interactive shopping.
                        </p>

                        <Link to="/demos/ecommerce" className="work-demo-btn">
                            View Demo →
                        </Link>
                    </div>
                </div>

                {/* HOTEL WEBSITE */}

                <div className="work-card">

                    <div className="work-image hotel-image">
                        <img
                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900"
                            alt="Luxury hotel website"
                        />
                    </div>

                    <div className="work-info">
                        <h3>THE GRAND AURELLE – Luxury Hotel</h3>

                        <p>
                            An elegant hotel website featuring luxury rooms,
                            dining experiences and online booking interface.
                        </p>

                        <Link to="/demos/hotel" className="work-demo-btn">
                            View Demo →
                        </Link>
                    </div>

                </div>
            </div>    

            

        </section>
    )
}

export default OurWork