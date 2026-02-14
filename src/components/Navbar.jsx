import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Results', href: '#results' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleClick = () => setIsOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/90 backdrop-blur-md border-b border-dark-600/30 shadow-lg shadow-dark-950/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2 group" onClick={handleClick}>
            <span className="text-xl md:text-2xl font-display font-800 tracking-tight">
              <span className="text-white group-hover:text-accent transition-colors duration-300">The</span>
              <span className="gradient-text ml-1">PlaKo</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-accent transition-colors duration-200 relative group"
              >
                {label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2 text-sm font-semibold bg-accent/10 text-accent border border-accent/20 rounded-lg hover:bg-accent/20 hover:border-accent/40 transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-gray-300 hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${
                  isOpen ? 'opacity-0 scale-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-16 bg-dark-950/98 backdrop-blur-xl transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 pb-20">
          {navLinks.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={handleClick}
              className="text-2xl font-display font-semibold text-gray-300 hover:text-accent transition-colors duration-200"
              style={{ transitionDelay: isOpen ? `${i * 50}ms` : '0ms' }}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleClick}
            className="mt-4 px-8 py-3 text-lg font-semibold bg-accent text-dark-950 rounded-xl hover:bg-accent-300 transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  )
}
