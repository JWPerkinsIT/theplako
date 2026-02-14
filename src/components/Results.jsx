import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal'

const metrics = [
  {
    value: 1000,
    suffix: '+',
    label: 'Licenses Managed',
    description: 'Through automated provisioning and lifecycle management',
  },
  {
    value: 17,
    suffix: '',
    label: 'C-Level Executives',
    description: 'Supported with 5-minute SLA and 24/7 availability',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Uptime Maintained',
    description: 'Through critical business continuity events',
  },
  {
    value: 40,
    suffix: '+',
    label: 'Certifications',
    description: 'In AI, automation, and cloud technologies',
  },
]

function MetricCard({ metric, index, isVisible }) {
  const count = useCountUp(metric.value, 2000, isVisible)

  return (
    <div
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="font-display font-bold text-5xl md:text-6xl lg:text-7xl gradient-text mb-2 tabular-nums">
        {count.toLocaleString()}
        {metric.suffix}
      </div>
      <div className="font-display font-600 text-white text-lg mb-2">
        {metric.label}
      </div>
      <p className="text-gray-500 text-sm max-w-xs mx-auto">
        {metric.description}
      </p>
    </div>
  )
}

export default function Results() {
  const [ref, isVisible] = useScrollReveal(0.15)

  return (
    <section id="results" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-800/30" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Proven <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Numbers that reflect real enterprise outcomes, not vanity metrics.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, i) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
