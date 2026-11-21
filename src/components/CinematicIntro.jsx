import { useEffect, useRef, useState } from 'react'
import './CinematicIntro.css'

function CinematicIntro({ phase, setPhase, onComplete }) {
    const [filamentActive, setFilamentActive] = useState(false)
    const [particleSparks, setParticleSparks] = useState([])
    const canvasRef = useRef(null)

    useEffect(() => {
        // Reduced motion check -> skip immediately
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            onComplete()
            return
        }

        // =========================================================
        // 4-SCENE CINEMATIC TIMELINE
        // =========================================================
        // Scene 01: Dark Awakening (0.0s - 1.0s)
        setPhase(1)
        const timerFilament = setTimeout(() => {
            setFilamentActive(true)
        }, 300)

        // Scene 02: Liquid Chrome Formation (1.0s - 2.2s)
        const timerScene2 = setTimeout(() => {
            setPhase(2)
        }, 1000)

        // Scene 03: Spatial Awakening (2.2s - 3.6s)
        const timerScene3 = setTimeout(() => {
            setPhase(3)
        }, 2200)

        // Scene 04: Cinematic Transition (3.6s - 4.6s)
        const timerScene4 = setTimeout(() => {
            setPhase(4)
        }, 3600)

        // Final handoff to Hero
        const timerComplete = setTimeout(() => {
            onComplete()
        }, 4600)

        // Keyboard ESC shortcut to skip
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                handleSkip()
            }
        }
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            clearTimeout(timerFilament)
            clearTimeout(timerScene2)
            clearTimeout(timerScene3)
            clearTimeout(timerScene4)
            clearTimeout(timerComplete)
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    // Subtle 2D Canvas Sparks & Metallic Energy
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        let animId

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        // Generate fine silver particles
        const count = window.innerWidth < 768 ? 35 : 75
        const sparks = Array.from({ length: count }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5 + 0.5,
            speedX: (Math.random() - 0.5) * 0.4,
            speedY: -Math.random() * 0.5 - 0.2,
            opacity: Math.random() * 0.6 + 0.2,
            pulse: Math.random() * Math.PI,
        }))

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            sparks.forEach((p) => {
                p.x += p.speedX
                p.y += p.speedY
                p.pulse += 0.03
                const alpha = Math.sin(p.pulse) * 0.3 + p.opacity

                if (p.y < 0) p.y = canvas.height
                if (p.x < 0) p.x = canvas.width
                if (p.x > canvas.width) p.x = 0

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(226, 232, 240, ${Math.max(0, Math.min(1, alpha))})`
                ctx.shadowColor = 'rgba(139, 92, 246, 0.4)'
                ctx.shadowBlur = 6
                ctx.fill()
            })

            animId = requestAnimationFrame(render)
        }
        render()

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    const handleSkip = () => {
        setPhase(4)
        setTimeout(() => {
            onComplete()
        }, 200)
    }

    return (
        <div
            className={`cinematic-intro-stage phase-${phase}`}
            role="region"
            aria-label="Cinematic Opening Sequence"
        >
            {/* Ambient Particle Sparks Canvas */}
            <canvas ref={canvasRef} className="intro-sparks-canvas" aria-hidden="true" />

            {/* SCENE 01: Metallic Light Filament */}
            <div
                className={`intro-light-filament ${filamentActive ? 'active' : ''} ${
                    phase >= 4 ? 'dissolved' : ''
                }`}
                aria-hidden="true"
            >
                <div className="filament-core"></div>
                <div className="filament-glow"></div>
            </div>

            {/* SCENE 02 & 03: Dimensional Liquid-Chrome Typography */}
            <div className={`intro-chrome-wrapper scene-${phase}`}>
                <div className="chrome-eyebrow">
                    <span className="eyebrow-line"></span>
                    <span className="eyebrow-text">CREATIVE ENGINEERING &amp; DESIGN</span>
                    <span className="eyebrow-line"></span>
                </div>

                <div className="chrome-typography-cluster">
                    <h1 className="chrome-wordmark" data-text="PIXORA.">
                        <span className="char p">P</span>
                        <span className="char i">I</span>
                        <span className="char x">X</span>
                        <span className="char o">O</span>
                        <span className="char r">R</span>
                        <span className="char a">A</span>
                        <span className="char dot">.</span>
                    </h1>

                    {/* Volumetric Caustic Reflection Underneath */}
                    <div className="chrome-caustic-reflection" aria-hidden="true"></div>
                </div>

                <div className="chrome-subtext">
                    <span>ATMOSPHERE 01</span>
                    <span className="divider">/</span>
                    <span>HAUTE DIGITAL ARCHITECTURE</span>
                </div>
            </div>

            {/* SCENE 04: Spatial Dissolve Particle Curtain */}
            {phase === 4 && <div className="intro-spatial-warp-glow" aria-hidden="true"></div>}

            {/* Discreet Skip Action (Preserved) */}
            <button
                type="button"
                className="intro-skip-pill"
                onClick={handleSkip}
                aria-label="Skip Introduction"
            >
                <span>Skip</span>
                <kbd>ESC</kbd>
            </button>
        </div>
    )
}

export default CinematicIntro
