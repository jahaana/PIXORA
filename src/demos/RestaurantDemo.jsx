import { useState } from 'react'
function RestaurantDemo() {

    const [cart, setCart] = useState([])
    const [menuOpen, setMenuOpen] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showCheckout, setShowCheckout] = useState(false)
    const [showOrderConfirmation, setShowOrderConfirmation] = useState(false)
    const [orderDetails, setOrderDetails] = useState(null)

    const totalAmount = cart.reduce((total, item) => {
        return total + item.price
    }, 0)

    const addToCart = (item) => {
        setCart((previousCart) => [...previousCart, item])
    }

    const removeFromCart = (indexToRemove) => {
        setCart((previousCart) =>
            previousCart.filter((item, index) => index !== indexToRemove)
        )
    }

    const handlePlaceOrder = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const order = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            items: [...cart],
            total: totalAmount
        }

        setOrderDetails(order)
        setShowOrderConfirmation(true)
        setShowCheckout(false)
        setCart([])
    }

    return (

        <main className="restaurant-demo">

            {/* NAVBAR */}

            <nav className="restaurant-navbar">

                <h2>SAFFRON<span>.</span></h2>

                <button
                    className="restaurant-menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                <div className={`restaurant-nav-links ${menuOpen ? 'active' : ''}`}>
                    <a href="#restaurant-home" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#restaurant-menu" onClick={() => setMenuOpen(false)}>Menu</a>
                    <a href="#restaurant-about" onClick={() => setMenuOpen(false)}>About</a>
                    <a href="#restaurant-contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </div>

                <button
                    className="restaurant-nav-btn"
                    onClick={() => {
                        setShowCart(!showCart)
                        setMenuOpen(false)
                    }}
                >
                    Cart ({cart.length})
                </button>

            </nav>

            {showCheckout && (
                <div className="restaurant-checkout">
                    <h2>Complete Your Order</h2>

                    <form onSubmit={handlePlaceOrder}>

                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                        />

                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter your phone number"
                            required
                        />

                        <label>Delivery Address</label>
                        <textarea
                            name="address"
                            placeholder="Enter your delivery address"
                            required
                        />

                        <h3>Order Total: ₹{totalAmount}</h3>

                        <button type="submit">
                            Place Order →
                        </button>

                    </form>
                </div>
            )}

            {showOrderConfirmation && orderDetails && (
                <div className="restaurant-order-success">

                    <div className="success-icon">✓</div>

                    <h2>Order Placed Successfully!</h2>

                    <p>Thank you, {orderDetails.name}!</p>

                    <h3>Order Summary</h3>

                    {orderDetails.items.map((item, index) => (
                        <div className="success-order-item" key={index}>
                            <span>{item.name}</span>
                            <strong>₹{item.price}</strong>
                        </div>
                    ))}

                    <h3>Order Total: ₹{orderDetails.total}</h3>

                    <p>We appreciate your order!</p>

                    <button onClick={() => setShowOrderConfirmation(false)}>
                        Back to Home
                    </button>

                </div>
            )}

            {/* HERO */}

            {showCart && (
                <div className="restaurant-cart">
                    <h2>Your Cart</h2>

                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <>
                            {cart.map((item, index) => (
                                <div className="cart-item" key={index}>
                                    <span>{item.name}</span>
                                    <strong>₹{item.price}</strong>

                                    <button onClick={() => removeFromCart(index)}>
                                        Remove
                                    </button>
                                </div>
                            ))}

                            <div className="cart-total">
                                <h3>Total Amount: ₹{totalAmount}</h3>
                            </div>
                            <button
                                className="checkout-btn"
                                onClick={() => {
                                    setShowCheckout(true)
                                    setShowCart(false)
                                }}
                            >
                                Proceed to Checkout →
                            </button>
                            <button
                                className="continue-shopping-btn"
                                onClick={() => setShowCart(false)}
                            >
                                Continue Shopping
                            </button>
                        </>
                    )}
                </div>
            )}

            <section className="restaurant-hero" id="restaurant-home">

                <div className="restaurant-hero-content">

                    <span>WELCOME TO SAFFRON TABLE</span>

                    <h1>
                        A Taste of
                        <br />
                        <span>Something Special.</span>
                    </h1>

                    <p>
                        Experience exceptional flavours,
                        fresh ingredients and unforgettable
                        dining moments.
                    </p>

                    <a href="#restaurant-menu">
                        Explore Our Menu →
                    </a>

                </div>

            </section>


            {/* MENU */}

            <section className="restaurant-menu" id="restaurant-menu">

                <div className="restaurant-section-heading">

                    <span>OUR SPECIALITIES</span>

                    <h2>
                        Discover Our <span>Menu</span>
                    </h2>

                    <p>
                        Carefully prepared dishes made with
                        fresh ingredients and authentic flavours.
                    </p>

                </div>

                <div className="restaurant-menu-grid">

                    <div className="restaurant-food-card">

                        <img
                            src="https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=900"
                            alt="Chef's special herb-grilled chicken"
                        />

                        <div>
                            <h3>Chef's Special</h3>
                            <p>A delicious signature dining experience.</p>
                            <strong>₹299</strong>
                            <button onClick={() => addToCart({
                                name: "Chef's Special",
                                price: 299
                            })}>
                                Add to Cart +
                            </button>
                        </div>

                    </div>

                    <div className="restaurant-food-card">

                        <img
                            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
                            alt="Freshly baked pizza"
                        />

                        <div>
                            <h3>Italian Pizza</h3>
                            <p>Freshly baked with delicious toppings.</p>
                            <strong>₹349</strong>
                            <button onClick={() => addToCart({
                                name: "Italian Pizza",
                                price: 349
                            })}>
                                Add to Cart +
                            </button>
                        </div>

                    </div>

                    <div className="restaurant-food-card">

                        <img
                            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600"
                            alt="Delicious burger"
                        />

                        <div>
                            <h3>Classic Burger</h3>
                            <p>Juicy, flavourful and freshly prepared.</p>
                            <strong>₹249</strong>
                            <button onClick={() => addToCart({
                                name: "Classic Burger",
                                price: 249
                            })}>
                                Add to Cart +
                            </button>
                        </div>

                    </div>

                </div>

            </section>


            {/* ABOUT */}

            <section className="restaurant-about" id="restaurant-about">

                <div>
                    <span>OUR STORY</span>

                    <h2>
                        Good Food.
                        <br />
                        <span>Beautiful Moments.</span>
                    </h2>

                    <p>
                        At Saffron Table, we believe every meal
                        should be memorable. Our passion for
                        quality ingredients and exceptional
                        flavours brings people together.
                    </p>

                </div>

            </section>


            {/* CONTACT */}

            <section className="restaurant-contact" id="restaurant-contact">

                <span>YOUR TABLE IS WAITING</span>

                <h2>
                    Make Every Meal
                    <span> Special.</span>
                </h2>

                <p>
                    Visit us and experience the perfect
                    combination of taste and hospitality.
                </p>

                <div className="restaurant-contact-details">

                    <div>
                        <h3>📍 Our Location</h3>
                        <p>123 Food Street, Your City</p>
                    </div>

                    <div>
                        <h3>🕒 Opening Hours</h3>
                        <p>Monday – Sunday: 11 AM – 10 PM</p>
                    </div>

                    <div>
                        <h3>📞 Call Us</h3>
                        <p>Contact details coming soon</p>
                    </div>

                </div>

                <a href="#restaurant-menu">Explore Menu →</a>

            </section>


            {/* FOOTER */}

            <footer className="restaurant-footer">

                <h2>SAFFRON<span>.</span></h2>

                <p>Good food brings people together.</p>

                <small>© 2026 Saffron Table. Demo Website.</small>

            </footer>

            <div className="restaurant-footer-links">
                <a href="#restaurant-home">Home</a>
                <a href="#restaurant-menu">Menu</a>
                <a href="#restaurant-about">About</a>
                <a href="#restaurant-contact">Contact</a>
            </div>

        </main>
    )
}

export default RestaurantDemo