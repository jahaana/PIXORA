import './App.css'
import { useState, Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import OurWork from './components/OurWork'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DemoBackButton from './components/DemoBackButton'
import CinematicIntro from './components/CinematicIntro'

const Scene3D = lazy(() => import('./components/Scene3D'))

import WebDevelopment from './pages/WebDevelopment'
import UIUXDesign from './pages/UIUXDesign'
import Ecommerce from './pages/Ecommerce'

import RestaurantDemo from './demos/RestaurantDemo'
import TravelDemo from './demos/TravelDemo'
import EcommerceDemo from './demos/EcommerceDemo'
import HotelDemo from './demos/HotelDemo'

function Home() {
    const [showIntro, setShowIntro] = useState(() => {
        try {
            return !sessionStorage.getItem('pixora_intro_seen')
        } catch {
            return false
        }
    })
    const [introPhase, setIntroPhase] = useState(1)

    const handleIntroComplete = () => {
        setShowIntro(false)
        try {
            sessionStorage.setItem('pixora_intro_seen', 'true')
        } catch {
            // sessionStorage might be restricted
        }
    }

    return (
        <div className="pixora-home">
            {showIntro && (
                <CinematicIntro
                    phase={introPhase}
                    setPhase={setIntroPhase}
                    onComplete={handleIntroComplete}
                />
            )}
            <Suspense fallback={null}>
                <Scene3D introActive={showIntro} introPhase={introPhase} />
            </Suspense>
            <div className={`pixora-content-layer ${showIntro ? 'intro-held' : 'intro-active'}`}>
                <Hero />
                <Services />
                <OurWork />
                <About />
                <Contact />
            </div>
        </div>
    )
}

function App() {
    const location = useLocation()
    const isDemoPage = location.pathname.startsWith('/demos/')
    return (
        <>
            {!isDemoPage && <Navbar />}
            {isDemoPage && <DemoBackButton />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/web-development" element={<WebDevelopment />} />
                <Route path="/ui-ux-design" element={<UIUXDesign />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                <Route path="/demos/restaurant" element={<RestaurantDemo />} />
                <Route path="/demos/travel" element={<TravelDemo />} />
                <Route path="/demos/ecommerce" element={<EcommerceDemo />} />
                <Route path="/demos/hotel" element={<HotelDemo />} />
            </Routes>

            {!isDemoPage && <Footer />}
        </>
    )
}

export default App