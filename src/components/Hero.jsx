import './Hero.css'

function Hero() {
    return (
        <section className="hero-section" id="home">
            <div className="hero-inner">
                <div className="hero-eyebrow">
                    <span className="sparkle">✦</span>
                    <span>CREATIVE WEB DESIGN &amp; DEVELOPMENT</span>
                </div>

                <h1 className="hero-headline">
                    We Shape Digital <br />
                    Experiences That <br />
                    <span className="hero-headline-accent">Define Brands.</span>
                </h1>

                <p className="hero-description">
                    PIXORA crafts bespoke digital architecture, intuitive interfaces,
                    and high-performance web experiences engineered to help businesses
                    stand out and grow online.
                </p>

                <div className="hero-actions">
                    <a href="#work" className="hero-btn-primary">
                        Explore Selected Work ↓
                    </a>
                    <a href="#contact" className="hero-btn-secondary">
                        Initiate Project ↗
                    </a>
                </div>

                <div className="hero-metrics">
                    <div className="hero-metric-item">
                        <span className="hero-metric-value">4 Prototypes</span>
                        <span className="hero-metric-label">Interactive Demonstrations</span>
                    </div>

                    <div className="hero-metric-item">
                        <span className="hero-metric-value">Bespoke Code</span>
                        <span className="hero-metric-label">Creative Architecture</span>
                    </div>

                    <div className="hero-metric-item">
                        <span className="hero-metric-value">High Performance</span>
                        <span className="hero-metric-label">Engineered For Growth</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
