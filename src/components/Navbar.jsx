import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const closeMenu = () => {
        setMenuOpen(false)
    }

    const handleNavigation = (sectionId) => {
        closeMenu()
        navigate({
            pathname: '/',
            hash: `#${sectionId}`,
        })
    }

    useEffect(() => {
        if (location.pathname === '/' && location.hash) {
            const sectionId = location.hash.substring(1)
            const timer = setTimeout(() => {
                const section = document.getElementById(sectionId)
                if (section) {
                    section.scrollIntoView({
                        behavior: 'smooth',
                    })
                }
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [location.pathname, location.hash, location.key])

    return (
        <header className="navbar-wrapper">
            <nav className="navbar" aria-label="Main Navigation">
                <a
                    href="/"
                    className="logo"
                    onClick={(e) => {
                        e.preventDefault()
                        closeMenu()
                        navigate('/')
                    }}
                >
                    PIXORA<span>.</span>
                </a>

                <div className="nav-status-pill" aria-label="Studio status">
                    <span className="nav-status-dot"></span>
                    <span>AVAILABLE FOR Q1/Q2</span>
                </div>

                <div
                    id="navigation-menu"
                    className={`nav-menu ${menuOpen ? 'active' : ''}`}
                >
                    <ul className="nav-links">
                        <li>
                            <a
                                href="/#home"
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleNavigation('home')
                                }}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#services"
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleNavigation('services')
                                }}
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#work"
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleNavigation('work')
                                }}
                            >
                                Selected Work
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#about"
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleNavigation('about')
                                }}
                            >
                                Studio
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#contact"
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleNavigation('contact')
                                }}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    <a
                        href="/#contact"
                        className="nav-cta"
                        onClick={(e) => {
                            e.preventDefault()
                            handleNavigation('contact')
                        }}
                    >
                        Initiate Project ↗
                    </a>
                </div>

                <button
                    type="button"
                    className="menu-toggle"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    aria-controls="navigation-menu"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </nav>
        </header>
    )
}

export default Navbar
