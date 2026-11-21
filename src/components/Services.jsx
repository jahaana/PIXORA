import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
    const sectionRef = useRef(null)
    const [isRevealed, setIsRevealed] = useState(false)

    useEffect(() => {
        // Reduced motion check
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setIsRevealed(true)
            return
        }

        const section = sectionRef.current
        if (!section) return

        // IntersectionObserver for continuous scroll-triggered reveals
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Reveal when entering, reverse naturally when scrolling back up
                setIsRevealed(entry.isIntersecting && entry.intersectionRatio > 0.15)
            },
            {
                threshold: [0, 0.15, 0.5],
                rootMargin: '0px 0px -10% 0px',
            }
        )

        observer.observe(section)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            className={`services-amphitheatre ${isRevealed ? 'revealed' : ''}`}
            id="services"
            aria-label="Services — Act II: The Amphitheatre"
        >
            {/* Ambient Background Aura */}
            <div className="amphitheatre-aura" aria-hidden="true"></div>

            {/* Stage Header */}
            <header className="amphitheatre-header">
                <div className="amphitheatre-badge">
                    <span>[ ACT II / THE DISCIPLINES ]</span>
                </div>

                <h2 className="amphitheatre-headline">
                    Spatial Architecture &amp; <span>Creative Engineering.</span>
                </h2>

                <p className="amphitheatre-subheadline">
                    We craft bespoke digital platforms at the intersection of aesthetic restraint,
                    computational speed, and intuitive ergonomics.
                </p>
            </header>

            {/* Asymmetric Spatial Amphitheatre Composition */}
            <div className="amphitheatre-stage">
                {/* Left Wing: Discipline 01 (Creative Engineering) */}
                <div className="amphitheatre-left-wing">
                    <div className="wing-plinth primary">
                        <div className="plinth-header">
                            <span className="plinth-index">01 / CORE DISCIPLINE</span>
                            <div className="plinth-glyph" aria-hidden="true">&lt;/&gt;</div>
                        </div>

                        <div className="plinth-body">
                            <h3>Web Development &amp; Architecture</h3>
                            <p>
                                High-performance, responsive websites engineered with modern React,
                                smooth transitions, and scalable clean code built for maximum speed and longevity.
                            </p>

                            <div className="plinth-specs" aria-label="Technical specifications">
                                <span className="spec-badge">React 19</span>
                                <span className="spec-badge">Bespoke SPA</span>
                                <span className="spec-badge">Kinematic Flow</span>
                            </div>
                        </div>

                        <Link to="/web-development" className="plinth-link">
                            <span>Explore Engineering</span>
                            <span className="arrow" aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>

                {/* Center Spatial Void: Dedicated Open Window for the 3D Gyroscope */}
                <div className="amphitheatre-portal" aria-hidden="true">
                    <div className="portal-sightline"></div>
                </div>

                {/* Right Wing: Disciplines 02 & 03 (Staggered Plinths) */}
                <div className="amphitheatre-right-wing">
                    {/* Discipline 02: UI/UX & Spatial */}
                    <div className="wing-plinth">
                        <div className="plinth-header">
                            <span className="plinth-index">02 / INTERACTION</span>
                            <div className="plinth-glyph" aria-hidden="true">✦</div>
                        </div>

                        <div className="plinth-body">
                            <h3>UI/UX &amp; Spatial Design</h3>
                            <p>
                                Visually memorable interfaces, design systems, and user flows
                                crafted with clarity, aesthetic restraint, and seamless user interaction.
                            </p>
                        </div>

                        <Link to="/ui-ux-design" className="plinth-link">
                            <span>Explore Design</span>
                            <span className="arrow" aria-hidden="true">→</span>
                        </Link>
                    </div>

                    {/* Discipline 03: Digital Commerce */}
                    <div className="wing-plinth">
                        <div className="plinth-header">
                            <span className="plinth-index">03 / COMMERCE</span>
                            <div className="plinth-glyph" aria-hidden="true">🛒</div>
                        </div>

                        <div className="plinth-body">
                            <h3>High-Conversion Commerce</h3>
                            <p>
                                Modern online storefronts and bespoke product discovery flows
                                engineered to elevate brand prestige and accelerate customer conversion.
                            </p>
                        </div>

                        <Link to="/ecommerce" className="plinth-link">
                            <span>Explore Commerce</span>
                            <span className="arrow" aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
