import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    title: 'RPA & Process Automation',
    lead: true,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      'Robotic Process Automation strategy and implementation',
      'End-to-end workflow design and optimization',
      'UiPath, Power Automate, and custom automation solutions',
      'Process mining, analysis, and continuous improvement',
    ],
  },
  {
    title: 'Enterprise Automation',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    items: [
      'ServiceNow platform development and integration',
      'PowerShell automation frameworks',
      'Azure AD and Microsoft Graph API automation',
      'Custom workflow orchestration across hybrid environments',
    ],
  },
  {
    title: 'IT Consulting',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-1.5M12 12.75l3 1.5M12 12.75V18" />
      </svg>
    ),
    items: [
      'Infrastructure assessment and optimization',
      'Cloud and hybrid environment strategy',
      'Identity and access management architecture',
      'Microsoft 365 ecosystem expertise',
    ],
  },
  {
    title: 'Executive IT Support',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    items: [
      'White-glove, 24/7 executive technology support',
      'Conference room and AV technology management',
      'High-stakes event support (board meetings, earnings calls, executive presentations)',
      '5-minute SLA methodology and best practices',
    ],
  },
]

function ServiceCard({ service, index, isVisible }) {
  return (
    <div
      className={`glass-card p-8 glow-hover transition-all duration-500 group hover:-translate-y-1 ${
        service.lead ? 'md:col-span-2 lg:col-span-1 ring-1 ring-accent/10' : ''
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {service.lead && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4 tracking-wider uppercase">
          Lead Service
        </div>
      )}

      <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>

      <h3 className="font-display font-700 text-xl text-white mb-4">
        {service.title}
      </h3>

      <ul className="space-y-3">
        {service.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Services() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From strategy to execution, I build automation solutions that transform how enterprises operate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
