import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import OurWork from './components/OurWork'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

import WebDevelopment from './pages/WebDevelopment'
import UIUXDesign from './pages/UIUXDesign'
import Ecommerce from './pages/Ecommerce'

import RestaurantDemo from './demos/RestaurantDemo'
import TravelDemo from './demos/TravelDemo'
import EcommerceDemo from './demos/EcommerceDemo'
import HotelDemo from './demos/HotelDemo'

function Home() {
    return (
        <>
            <Hero />
            <Services />
            <OurWork />
            <About />
            <Contact />
        </>
    )
}

function App() {
    const location = useLocation()
    const isDemoPage = location.pathname.startsWith('/demos/')
    return (
        <>
            {!isDemoPage && <Navbar />}

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