import { useEffect, useState, useRef } from 'react'

function NetworkCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let nodes = []

    function resize() {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    function initNodes() {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      nodes = Array.from({ length: 40 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
      }))
    }

    function draw() {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > w) node.vx *= -1
        if (node.y < 0 || node.y > h) node.vy *= -1
      })

      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      nodes.forEach((node) => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 212, 255, 0.3)'
        ctx.fill()
      })

      animationId = requestAnimationFrame(draw)
    }

    resize()
    initNodes()
    draw()

    window.addEventListener('resize', () => {
      resize()
      initNodes()
    })

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  )
}

function TypingEffect({ texts, className }) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setDisplayText(currentText.slice(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)
        if (charIndex <= 1) {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 30 : 80)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <NetworkCanvas />

      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <div
            className={`flex flex-wrap gap-2.5 mb-8 transition-all duration-700 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {[
              'RPA Controller Team Lead',
              'Senior Service Desk Specialist',
              'Enterprise Automation Expert',
            ].map((role, i) => (
              <div
                key={role}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10 text-accent text-sm font-medium"
                style={{ transitionDelay: `${200 + i * 80}ms` }}
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
                {role}
              </div>
            ))}
          </div>

          <h1
            className={`font-display font-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2] tracking-tight text-white mb-6 transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Enterprise Automation.<br />
            <span className="gradient-text">Engineered to Perfection.</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-400 max-w-2xl mb-4 leading-relaxed transition-all duration-700 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            RPA, IT consulting, and executive-grade support — built by someone who's done it at the highest level.
          </p>

          <div
            className={`text-sm md:text-base text-accent/60 font-mono mb-10 h-6 transition-all duration-700 delay-600 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <TypingEffect
              texts={[
                'Automating enterprise workflows',
                'Building intelligent RPA solutions',
                'Supporting C-level executives 24/7',
                'Engineering process excellence',
              ]}
            />
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-accent text-dark-950 rounded-xl hover:bg-accent-300 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group"
            >
              Let's Talk
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-300 border border-dark-600 rounded-xl hover:border-accent/30 hover:text-accent hover:bg-accent/5 transition-all duration-300"
            >
              See What I Do
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
