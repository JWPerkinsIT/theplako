import { useScrollReveal } from '../hooks/useScrollReveal'

const highlights = [
  {
    label: 'CEO Club Award Winner',
    sublabel: 'Recognized for Outstanding IT Support',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-5.54 0" />
      </svg>
    ),
  },
  {
    label: '24/7 Support for 17+ C-Level Executives',
    sublabel: 'White-Glove Technology Operations',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    label: 'RPA Controller Team Lead',
    sublabel: 'Enterprise Automation Leadership',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    label: '8+ AI & Automation Certifications',
    sublabel: 'Continuous Professional Development',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
]

export default function About() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-radial-fade opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Built on <span className="gradient-text">Real Experience</span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I'm an RPA Controller Team Lead and Senior Service Desk Specialist who's spent years
                building automation solutions at enterprise scale. From designing intelligent bots
                that handle thousands of operations to providing white-glove support for C-suite
                executives, I bring a rare combination of technical depth and operational polish.
              </p>
              <p>
                My work sits at the intersection of process automation, cloud infrastructure,
                and AI-driven tooling. I don't just implement solutions — I architect them
                with scalability, maintainability, and real business impact in mind. Every
                project I deliver is built to run long after the initial handoff.
              </p>
              <p>
                Whether it's an RPA strategy from the ground up, a custom automation framework,
                or a critical infrastructure decision, I bring the same standard: engineer it
                right, make it resilient, and make it matter.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className={`glass-card p-6 glow-hover transition-all duration-500 hover:-translate-y-1 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="text-accent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-display font-600 text-white text-sm leading-snug mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-gray-500">
                  {item.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
