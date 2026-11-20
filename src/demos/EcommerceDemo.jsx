import { useState } from 'react'
import './EcommerceDemo.css'

function EcommerceDemo() {
    const [cart, setCart] = useState([])
    const [cartOpen, setCartOpen] = useState(false)
    const [checkoutOpen, setCheckoutOpen] = useState(false)
    const [orderPlaced, setOrderPlaced] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const addToCart = (product) => {
        setCart([...cart, product])
    }
    const removeFromCart = (indexToRemove) => {
        setCart(cart.filter((item, index) => index !== indexToRemove))
    }

    return (
        <div className="lunara">

            <header className="lunara-navbar">

                <div className="lunara-logo">
                    LUNARA<span>.</span>
                </div>

                <button
                    className="lunara-menu-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>

                <nav className={`lunara-nav ${mobileMenuOpen ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
                    <a href="#collections" onClick={() => setMobileMenuOpen(false)}>Collections</a>
                    <a href="#products" onClick={() => setMobileMenuOpen(false)}>Shop</a>
                    <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                </nav>

                <button
                    className="lunara-cart-btn"
                    onClick={() => setCartOpen(!cartOpen)}
                >
                    CART <span>({cart.length})</span>
                </button>

            </header>

            {/* SHOPPING CART */}

            {cartOpen && (
                <div className="lunara-cart-panel">

                    <div className="lunara-cart-heading">
                        <h2>Your Shopping Bag</h2>

                        <button onClick={() => setCartOpen(false)}>
                            ✕
                        </button>
                    </div>

                    {cart.length === 0 ? (
                        <p className="lunara-empty-cart">
                            Your cart is empty.
                        </p>
                    ) : (
                        cart.map((item, index) => (
                            <div className="lunara-cart-item" key={index}>
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>₹{item.price.toLocaleString('en-IN')}</p>
                                </div>

                                <button
                                    className="lunara-remove-btn"
                                    onClick={() => removeFromCart(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    )}

                    <div className="lunara-cart-total">
                        <span>Total</span>
                        <strong>
                            ₹{cart.reduce((total, item) => total + item.price, 0).toLocaleString('en-IN')}
                        </strong>
                    </div>

                    {cart.length > 0 && (
                        <button
                            className="lunara-checkout-btn"
                            onClick={() => {
                                setCartOpen(false)
                                setCheckoutOpen(true)
                            }}
                        >
                            Proceed to Checkout →
                        </button>
                    )}

                </div>
            )}

            {/* CHECKOUT SECTION */}

            {checkoutOpen && (
                <section className="lunara-checkout">

                    <div className="lunara-checkout-container">

                        <h2>Complete Your Order</h2>
                        <p>Almost there! Please enter your details.</p>

                        <form onSubmit={(e) => {
                            e.preventDefault()
                            setOrderPlaced(true)
                            setCheckoutOpen(false)
                        }}>

                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                required
                            />

                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                            />

                            <label>Phone Number</label>
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                required
                            />

                            <label>Delivery Address</label>
                            <textarea
                                placeholder="Enter your complete address"
                                required
                            />

                            <div className="lunara-checkout-total">
                                <span>Order Total</span>
                                <strong>
                                    ₹{cart.reduce((total, item) => total + item.price, 0).toLocaleString('en-IN')}
                                </strong>
                            </div>

                            <button type="submit">
                                Place Demo Order →
                            </button>

                        </form>

                    </div>

                </section>
            )}

            {/* ORDER CONFIRMATION */}

            {orderPlaced && (
                <div className="lunara-order-success">

                    <div className="lunara-success-icon">✓</div>

                    <h2>Thank You for Your Order!</h2>

                    <p>
                        Your demo order has been placed successfully.
                    </p>

                    <h3>
                        Order Total: ₹{cart.reduce(
                            (total, item) => total + item.price, 0
                        ).toLocaleString('en-IN')}
                    </h3>

                    <button onClick={() => {
                        setOrderPlaced(false)
                        setCart([])
                    }}>
                        Continue Shopping
                    </button>

                </div>
            )}

            {/* HERO SECTION */}

            <section className="lunara-hero" id="home">

                <div className="lunara-hero-content">

                    <p className="lunara-tag">
                        NEW SEASON COLLECTION 2026
                    </p>

                    <h1>
                        Style That <br />
                        Speaks <span>For You.</span>
                    </h1>

                    <p className="lunara-hero-text">
                        Discover timeless fashion pieces designed
                        to make every moment unforgettable.
                    </p>

                    <a href="#products" className="lunara-shop-btn">
                        Explore Collection →
                    </a>

                </div>

                <div className="lunara-hero-image">
                    <img
                        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000"
                        alt="Fashion collection"
                    />
                </div>

            </section>

            {/* COLLECTIONS SECTION */}

            <section className="lunara-collections" id="collections">

                <div className="lunara-section-heading">
                    <p>CURATED FOR YOU</p>
                    <h2>Explore Our Collections</h2>
                    <span>
                        Find your style among our carefully selected collections.
                    </span>
                </div>

                <div className="lunara-collection-grid">

                    <div className="lunara-collection-card">
                        <img
                            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700"
                            alt="Women's fashion"
                        />
                        <div className="lunara-collection-info">
                            <h3>Women's Fashion</h3>
                            <a href="#products">Explore Collection →</a>
                        </div>
                    </div>

                    <div className="lunara-collection-card">
                        <img
                            src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=700"
                            alt="Men's fashion"
                        />
                        <div className="lunara-collection-info">
                            <h3>Men's Fashion</h3>
                            <a href="#products">Explore Collection →</a>
                        </div>
                    </div>

                    <div className="lunara-collection-card">
                        <img
                            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=700"
                            alt="Fashion accessories"
                        />
                        <div className="lunara-collection-info">
                            <h3>Accessories</h3>
                            <a href="#products">Explore Collection →</a>
                        </div>
                    </div>

                </div>

            </section>

            {/* PRODUCTS SECTION */}

            <section className="lunara-products" id="products">

                <div className="lunara-section-heading">
                    <p>THE LUNARA EDIT</p>
                    <h2>Featured Products</h2>
                    <span>Our most-loved pieces, selected just for you.</span>
                </div>

                <div className="lunara-product-grid">

                    <div className="lunara-product-card">
                        <div className="lunara-product-image">
                            <span>BESTSELLER</span>
                            <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600" alt="Elegant dress" />
                        </div>
                        <h3>Elegant Summer Dress</h3>
                        <p>₹2,499</p>

                        <button
                            className="lunara-add-btn"
                            onClick={() => addToCart({
                                name: 'Elegant Summer Dress',
                                price: 2499
                            })}
                        >
                            Add to Cart +
                        </button>
                    </div>

                    <div className="lunara-product-card">
                        <div className="lunara-product-image">
                            <span>NEW</span>
                            <img src="https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=600" alt="Stylish blazer" />
                        </div>
                        <h3>Classic Tailored Blazer</h3>
                        <p>₹3,299</p>

                        <button
                            className="lunara-add-btn"
                            onClick={() => addToCart({
                                name: 'Classic Tailored Blazer',
                                price: 3299
                            })}
                        >
                            Add to Cart +
                        </button>
                    </div>

                    <div className="lunara-product-card">
                        <div className="lunara-product-image">
                            <span>POPULAR</span>
                            <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600" alt="Designer handbag" />
                        </div>
                        <h3>Everyday Luxury Bag</h3>
                        <p>₹1,899</p>


                        <button
                            className="lunara-add-btn"
                            onClick={() => addToCart({
                                name: 'Everyday Luxury Bag',
                                price: 1899
                            })}
                        >
                            Add to Cart +
                        </button>
                    </div>

                    <div className="lunara-product-card">
                        <div className="lunara-product-image">
                            <span>LIMITED</span>
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600" alt="Fashion sneakers" />
                        </div>
                        <h3>Urban Classic Sneakers</h3>
                        <p>₹2,799</p>

                        <button
                            className="lunara-add-btn"
                            onClick={() => addToCart({
                                name: 'Urban Classic Sneakers',
                                price: 2799
                            })}
                        >
                            Add to Cart +
                        </button>
                    </div>

                </div>

            </section>

                        {/* ABOUT SECTION */}

            <section className="lunara-about" id="about">

                <div className="lunara-about-image">
                    <img
                        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900"
                        alt="LUNARA fashion collection"
                    />
                </div>

                <div className="lunara-about-content">
                    <p className="lunara-about-tag">OUR STORY</p>

                    <h2>
                        Fashion That
                        <br />
                        Feels Like You.
                    </h2>

                    <p>
                        At LUNARA, we believe fashion is more than
                        what you wear. It's a reflection of who you are.
                    </p>

                    <p>
                        From timeless essentials to statement pieces,
                        every selection is thoughtfully curated to bring
                        confidence, comfort, and effortless elegance
                        to your everyday style.
                    </p>

                    <a href="#collections">
                        DISCOVER OUR COLLECTIONS →
                    </a>
                </div>

            </section>
            

            {/* LUNARA FOOTER */}

            <footer className="lunara-footer">

                <div className="lunara-footer-content">

                    <div className="lunara-footer-brand">
                        <h2>LUNARA<span>.</span></h2>
                        <p>
                            Timeless fashion. Effortless elegance.
                            Discover your style with LUNARA.
                        </p>
                    </div>

                    <div className="lunara-footer-links">
                        <h3>Explore</h3>
                        <a href="#home">Home</a>
                        <a href="#collections">Collections</a>
                        <a href="#products">Shop</a>
                    </div>

                    <div className="lunara-footer-links">
                        <h3>Customer Care</h3>
                        <a href="#products">Shopping</a>
                        <a href="#home">Our Story</a>
                        <a href="mailto:hello@lunara.com">Contact Us</a>
                    </div>

                    <div className="lunara-footer-social">
                        <h3>Follow Us</h3>
                        <a href="#home">Instagram</a>
                        <a href="#home">Facebook</a>
                        <a href="#home">Pinterest</a>
                    </div>

                </div>

                <div className="lunara-footer-bottom">
                    <p>© 2026 LUNARA. All Rights Reserved.</p>
                    <span>Designed with elegance.</span>
                </div>

            </footer>

        </div>
    )
}

export default EcommerceDemo