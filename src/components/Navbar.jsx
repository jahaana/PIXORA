import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

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
            hash: `#${sectionId}`
        })

    }

    useEffect(() => {

        if (location.pathname === '/' && location.hash) {

            const sectionId = location.hash.substring(1)

            const timer = setTimeout(() => {

                const section = document.getElementById(sectionId)

                if (section) {
                    section.scrollIntoView({
                        behavior: 'smooth'
                    })
                }

            }, 100)

            return () => clearTimeout(timer)

        }

    }, [location.pathname, location.hash, location.key])


    return (
        <nav className="navbar">

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

            <button
                type="button"
                className="menu-toggle"
                onClick={() => setMenuOpen(prev => !prev)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                aria-controls="navigation-menu"
            >
                {menuOpen ? '✕' : '☰'}
            </button>

            <div
                id="navigation-menu"
                className={`nav-menu ${menuOpen ? 'active' : ''}`}
            >

                <ul className="nav-links">

                    <li>
                        <a href="/#home" onClick={(e) => {
                            e.preventDefault()
                            handleNavigation('home')
                        }}>
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="/#services" onClick={(e) => {
                            e.preventDefault()
                            handleNavigation('services')
                        }}>
                            Services
                        </a>
                    </li>

                    <li>
                        <a href="/#work" onClick={(e) => {
                            e.preventDefault()
                            handleNavigation('work')
                        }}>
                            Our Work
                        </a>
                    </li>

                    <li>
                        <a href="/#about" onClick={(e) => {
                            e.preventDefault()
                            handleNavigation('about')
                        }}>
                            About
                        </a>
                    </li>

                    <li>
                        <a href="/#contact" onClick={(e) => {
                            e.preventDefault()
                            handleNavigation('contact')
                        }}>
                            Contact
                        </a>
                    </li>

                </ul>

                <a
                    href="/#contact"
                    className="nav-btn"
                    onClick={(e) => {
                        e.preventDefault()
                        handleNavigation('contact')
                    }}
                >
                    Get Started
                </a>

            </div>

        </nav>
    )
}

export default Navbar