import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import './Scene3D.css'

function isWebGLAvailable() {
    try {
        const canvas = document.createElement('canvas')
        return Boolean(
            window.WebGLRenderingContext &&
            (canvas.getContext('webgl2') || canvas.getContext('webgl'))
        )
    } catch {
        return false
    }
}

function Scene3D({ introActive = false, introPhase = 0 }) {
    const containerRef = useRef(null)
    const [webglSupported, setWebglSupported] = useState(true)

    // Keep ref to intro states so animation loop reads latest values without re-mounting Three.js
    const introRef = useRef({ introActive, introPhase })
    useEffect(() => {
        introRef.current = { introActive, introPhase }
    }, [introActive, introPhase])

    useEffect(() => {
        if (!isWebGLAvailable()) {
            setWebglSupported(false)
            return
        }

        const container = containerRef.current
        if (!container) return

        // Reduced motion check
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches

        const isMobile = window.innerWidth < 768

        // Scene, Camera, Renderer
        const scene = new THREE.Scene()

        // Subtle Volumetric Atmospheric Fog
        scene.fog = new THREE.FogExp2(0x050508, 0.038)

        const camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        )
        camera.position.set(0, 0, 5.2)

        const renderer = new THREE.WebGLRenderer({
            antialias: !isMobile,
            alpha: true,
            powerPreference: 'high-performance',
        })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
        renderer.toneMapping = THREE.ACESFilmicToneMapping
        renderer.toneMappingExposure = 1.15
        container.appendChild(renderer.domElement)

        // Lighting Architecture
        const ambientLight = new THREE.AmbientLight(0x222232, 0.95)
        scene.add(ambientLight)

        const keyLight = new THREE.DirectionalLight(0xf8fafc, 2.6)
        keyLight.position.set(4, 5, 4)
        scene.add(keyLight)

        const rimLight = new THREE.DirectionalLight(0x8b5cf6, 1.8)
        rimLight.position.set(-4, -3, -2)
        scene.add(rimLight)

        const fillLight = new THREE.DirectionalLight(0x64748b, 1.1)
        fillLight.position.set(0, -4, 3)
        scene.add(fillLight)

        // 3D Central Organic Sculptural Mesh
        // Liquid Chrome Titanium Torus Knot
        const knotGeometry = new THREE.TorusKnotGeometry(
            1.1,
            0.32,
            isMobile ? 80 : 160,
            isMobile ? 18 : 32,
            2,
            3
        )
        const knotMaterial = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(0x181824),
            emissive: new THREE.Color(0x08080f),
            metalness: 0.96,
            roughness: 0.16,
            clearcoat: 1.0,
            clearcoatRoughness: 0.12,
            reflectivity: 0.95,
        })
        const coreMesh = new THREE.Mesh(knotGeometry, knotMaterial)
        coreMesh.position.set(0, 0, 0)
        scene.add(coreMesh)

        // Orbiting Satellite Gyroscope Rings
        const ring1Geo = new THREE.TorusGeometry(2.1, 0.015, 12, isMobile ? 64 : 120)
        const ringMaterial = new THREE.MeshStandardMaterial({
            color: 0x94a3b8,
            metalness: 0.98,
            roughness: 0.25,
            transparent: true,
            opacity: 0.72,
        })
        const ring1 = new THREE.Mesh(ring1Geo, ringMaterial)
        ring1.rotation.x = Math.PI / 3
        scene.add(ring1)

        const ring2Geo = new THREE.TorusGeometry(2.35, 0.012, 12, isMobile ? 64 : 120)
        const ring2 = new THREE.Mesh(ring2Geo, ringMaterial)
        ring2.rotation.y = Math.PI / 4
        ring2.rotation.x = -Math.PI / 6
        scene.add(ring2)

        // Ambient Stardust Particles
        const particleCount = isMobile ? 350 : 800
        const particleGeo = new THREE.BufferGeometry()
        const particlePos = new Float32Array(particleCount * 3)

        for (let i = 0; i < particleCount * 3; i += 3) {
            particlePos[i] = (Math.random() - 0.5) * 18
            particlePos[i + 1] = (Math.random() - 0.5) * 18
            particlePos[i + 2] = (Math.random() - 0.5) * 12 - 2
        }
        particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3))

        const particleMaterial = new THREE.PointsMaterial({
            color: 0xc4b5fd,
            size: isMobile ? 0.025 : 0.038,
            transparent: true,
            opacity: 0.52,
            blending: THREE.AdditiveBlending,
        })
        const particles = new THREE.Points(particleGeo, particleMaterial)
        scene.add(particles)

        // Pointer Tracking
        let targetRotX = 0
        let targetRotY = 0
        let currentRotX = 0
        let currentRotY = 0

        // Spatial State Coordinates (Interpolated)
        let camX = 0, camY = 0, camZ = 5.2
        let lookX = 0, lookY = 0, lookZ = 0
        let meshX = 0, meshY = 0, meshZ = 0
        let meshScale = 1.0
        let ringScale = 1.0

        let animationFrameId = null
        let isPaused = false

        // Section Offsets (Cached on resize/load)
        let servicesTop = 0
        let servicesHeight = 0
        let maxScroll = 1

        const measureSections = () => {
            const servicesEl = document.getElementById('services')
            if (servicesEl) {
                servicesTop = servicesEl.offsetTop
                servicesHeight = servicesEl.offsetHeight
            }
            maxScroll = Math.max(
                document.documentElement.scrollHeight - window.innerHeight,
                1
            )
        }

        measureSections()
        const timer1 = setTimeout(measureSections, 300)
        const timer2 = setTimeout(measureSections, 1000)

        const handlePointerMove = (e) => {
            if (prefersReducedMotion) return
            const x = (e.clientX / window.innerWidth) * 2 - 1
            const y = -(e.clientY / window.innerHeight) * 2 + 1
            targetRotY = x * 0.4
            targetRotX = -y * 0.3
        }

        const handleScroll = () => {
            const scrollY = window.scrollY
            const normalized = Math.min(Math.max(scrollY / maxScroll, 0), 1)
            document.documentElement.style.setProperty(
                '--scroll-progress',
                normalized.toFixed(4)
            )
        }

        const handleResize = () => {
            if (!container) return
            const width = window.innerWidth
            const height = window.innerHeight
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderer.setSize(width, height)
            measureSections()
            handleScroll()
        }

        window.addEventListener('pointermove', handlePointerMove, { passive: true })
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleResize)
        handleScroll()

        // Tab Visibility Observer
        const handleVisibilityChange = () => {
            isPaused = document.hidden
        }
        document.addEventListener('visibilitychange', handleVisibilityChange)

        // Render Loop
        const clock = new THREE.Clock()

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate)

            if (isPaused) return

            const delta = clock.getDelta()
            const elapsedTime = clock.getElapsedTime()

            // Smooth pointer damping
            currentRotX += (targetRotX - currentRotX) * 0.05
            currentRotY += (targetRotY - currentRotY) * 0.05

            if (!prefersReducedMotion) {
                const breathe = Math.sin(elapsedTime * 0.8) * 0.08
                const scrollY = window.scrollY
                const vh = window.innerHeight

                const { introActive: isIntro, introPhase: p } = introRef.current

                let targetCamX = 0
                let targetCamY = 0
                let targetCamZ = 5.2
                let targetLookY = 0
                let targetMeshX = 0
                let targetMeshY = breathe
                let targetMeshZ = 0
                let targetMeshScale = 1.0
                let targetRingScale = 1.0
                let targetRimIntensity = 1.8
                let targetKeyIntensity = 2.6
                let targetAmbientIntensity = 0.95

                // =========================================================
                // INTRO VS. HOMEPAGE SCROLL ENGINE
                // =========================================================
                if (isIntro) {
                    // SCENE 01: Dark Awakening (p === 1)
                    if (p === 1) {
                        targetCamZ = 5.6
                        targetMeshZ = -2.2
                        targetMeshScale = 0.02 // Dormant
                        targetRingScale = 0.02
                        targetRimIntensity = 0.15
                        targetKeyIntensity = 0.3
                        targetAmbientIntensity = 0.2
                    }
                    // SCENE 02: Liquid Chrome Formation (p === 2)
                    else if (p === 2) {
                        targetCamZ = 5.4
                        targetMeshZ = -1.5
                        targetMeshScale = 0.4
                        targetRingScale = 0.35
                        targetRimIntensity = 0.8
                        targetKeyIntensity = 1.0
                        targetAmbientIntensity = 0.45
                    }
                    // SCENE 03: Spatial Awakening (p === 3)
                    else if (p === 3) {
                        targetCamZ = 5.2
                        targetMeshZ = 0
                        targetMeshScale = 1.0
                        targetRingScale = 1.0
                        targetRimIntensity = 2.6 // Surge of rim light!
                        targetKeyIntensity = 2.8
                        targetAmbientIntensity = 0.95
                    }
                    // SCENE 04: Cinematic Transition (p === 4)
                    else if (p === 4) {
                        targetCamZ = 4.6 // Pushes forward through the particle field!
                        targetMeshZ = 0
                        targetMeshScale = 1.0
                        targetRingScale = 1.0
                        targetRimIntensity = 2.0
                        targetKeyIntensity = 2.6
                        targetAmbientIntensity = 0.95
                    }
                } else {
                    // Section-Aware Hero -> Services Trajectory
                    const servicesStart = Math.max(servicesTop - vh * 0.85, 0)
                    const servicesCenter = Math.max(servicesTop - vh * 0.15, servicesStart + 1)
                    const servicesEnd = servicesTop + servicesHeight - vh * 0.3

                    let servicesT = 0
                    if (scrollY <= servicesStart) {
                        servicesT = 0
                    } else if (scrollY >= servicesCenter) {
                        if (scrollY <= servicesEnd) {
                            servicesT = 1
                        } else {
                            servicesT = Math.max(1 - (scrollY - servicesEnd) / (vh * 0.7), 0)
                        }
                    } else {
                        const raw = (scrollY - servicesStart) / (servicesCenter - servicesStart)
                        servicesT = raw < 0.5 ? 2 * raw * raw : -1 + (4 - 2 * raw) * raw
                    }

                    targetCamX = 0
                    targetCamY = -0.25 * servicesT
                    targetCamZ = 5.2 - 1.8 * servicesT
                    targetLookY = 0.16 * servicesT
                    targetMeshX = 0
                    targetMeshY = breathe + 0.08 * servicesT
                    targetMeshZ = -0.55 * servicesT
                    targetMeshScale = 1.0 - 0.16 * servicesT
                    targetRingScale = 1.0 + 0.68 * servicesT
                    targetRimIntensity = 1.8 + 0.8 * servicesT
                    targetKeyIntensity = 2.6
                    targetAmbientIntensity = 0.95

                    if (scrollY > servicesEnd) {
                        const postT = (scrollY - servicesEnd) / (maxScroll - servicesEnd || 1)
                        targetCamZ = 3.4 + postT * 2.8
                        targetCamX = Math.sin(postT * Math.PI) * 0.6
                        targetMeshZ = -0.55 - postT * 2.0
                    }
                }

                // Smooth exponential lerp
                camX += (targetCamX - camX) * 0.055
                camY += (targetCamY - camY) * 0.055
                camZ += (targetCamZ - camZ) * 0.055
                lookY += (targetLookY - lookY) * 0.055
                camera.position.set(camX, camY, camZ)
                camera.lookAt(lookX, lookY, lookZ)

                meshX += (targetMeshX - meshX) * 0.055
                meshY += (targetMeshY - meshY) * 0.055
                meshZ += (targetMeshZ - meshZ) * 0.055
                coreMesh.position.set(meshX, meshY, meshZ)

                meshScale += (targetMeshScale - meshScale) * 0.055
                coreMesh.scale.setScalar(meshScale)

                ringScale += (targetRingScale - ringScale) * 0.055
                ring1.scale.setScalar(ringScale)
                ring2.scale.setScalar(ringScale)

                rimLight.intensity += (targetRimIntensity - rimLight.intensity) * 0.05
                keyLight.intensity += (targetKeyIntensity - keyLight.intensity) * 0.05
                ambientLight.intensity += (targetAmbientIntensity - ambientLight.intensity) * 0.05

                // Continuous rotation
                const normalizedScroll = Math.min(Math.max(scrollY / maxScroll, 0), 1)
                coreMesh.rotation.x = currentRotX + elapsedTime * 0.16 + normalizedScroll * 2.2
                coreMesh.rotation.y = currentRotY + elapsedTime * 0.22 + normalizedScroll * 3.4

                ring1.rotation.z += delta * 0.16
                ring1.rotation.x = Math.PI / 3 + currentRotX * 0.35
                ring2.rotation.y += delta * 0.18
                ring2.rotation.x = -Math.PI / 6 + currentRotY * 0.35

                particles.rotation.y = elapsedTime * 0.025 + normalizedScroll * 0.4
                particles.rotation.x = -normalizedScroll * 0.35
            }

            renderer.render(scene, camera)
        }

        animate()

        // GPU Resource Disposal on Unmount
        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId)
            clearTimeout(timer1)
            clearTimeout(timer2)

            window.removeEventListener('pointermove', handlePointerMove)
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
            document.removeEventListener('visibilitychange', handleVisibilityChange)

            scene.traverse((object) => {
                if (object.geometry) {
                    object.geometry.dispose()
                }
                if (object.material) {
                    if (Array.isArray(object.material)) {
                        object.material.forEach((mat) => mat.dispose())
                    } else {
                        object.material.dispose()
                    }
                }
            })

            renderer.dispose()
            renderer.forceContextLoss?.()

            if (renderer.domElement && renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement)
            }
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className="scene3d-container"
            aria-hidden="true"
        >
            {!webglSupported && (
                <div className="scene3d-fallback-atmosphere">
                    <div className="fallback-glow-center"></div>
                    <div className="fallback-glow-rim"></div>
                </div>
            )}
        </div>
    )
}

export default Scene3D
