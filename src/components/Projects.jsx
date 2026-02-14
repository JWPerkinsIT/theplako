import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'AI-Powered IT Support Chatbot',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    description: 'Designed, built, and deployed a company-wide AI chatbot for IT service desk support. Integrated with internal knowledge bases using managed metadata for precision responses.',
    outcomes: ['Reduced repetitive ticket volume', 'Improved first-contact resolution'],
    tech: 'Microsoft Copilot Studio / SharePoint',
  },
  {
    title: 'Identity & Access Management Automation',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    description: 'Automated user group provisioning and access management across cloud and on-premises directories. Integrated ITSM platform with directory services for hands-free fulfillment.',
    outcomes: ['Eliminated manual provisioning delays', 'Reduced human error'],
    tech: 'ServiceNow / Azure AD / PowerShell',
  },
  {
    title: 'Enterprise License Management System',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    description: 'Built automated license provisioning and de-provisioning for 1,000+ users with batch processing, error handling, and audit logging.',
    outcomes: ['Significant cost savings', '1,000+ users managed automatically'],
    tech: 'Microsoft Graph API / PowerShell',
  },
  {
    title: 'Custom Automation Frameworks',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L3.81 12.58a1.5 1.5 0 01-.47-2.47l7.23-7.23a1.5 1.5 0 012.47.47L10.54 6.87m-5.22 3.2l7.23-7.23M14.58 8.83l5.1 5.1m0 0l2.51-2.51a1.5 1.5 0 00.47-2.47l-7.23-7.23a1.5 1.5 0 00-2.47.47l2.51 2.51m5.22 3.2l-7.23 7.23M8.83 14.58l-2.51 2.51a1.5 1.5 0 00-.47 2.47l7.23 7.23a1.5 1.5 0 002.47-.47l-2.51-2.51m-5.22-3.2l7.23 7.23" />
      </svg>
    ),
    description: 'Developed modular PowerShell frameworks bridging ITSM platforms with cloud identity services, email systems, and endpoint management. Designed for extensibility.',
    outcomes: ['Teams can extend without deep scripting knowledge', 'Multi-stage workflow handling'],
    tech: 'PowerShell / REST APIs / ServiceNow',
  },
  {
    title: 'White-Glove Executive Technology Support',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    description: 'Direct support for C-level executives with 24/7 availability and rapid response. Built repeatable playbooks so high-stakes moments run seamlessly every time.',
    outcomes: ['Calm under pressure', 'Repeatable playbooks for critical events'],
    tech: 'Executive Operations / AV Systems',
  },
]

function ProjectCard({ project, index, isVisible }) {
  return (
    <div
      className={`glass-card p-8 glow-hover transition-all duration-500 hover:-translate-y-1 group flex flex-col ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-300 flex-shrink-0">
          {project.icon}
        </div>
        <h3 className="font-display font-700 text-lg text-white leading-snug pt-1">
          {project.title}
        </h3>
      </div>

      <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
        {project.description}
      </p>

      <div className="space-y-2 mb-5">
        {project.outcomes.map((outcome, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-warm flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span className="text-gray-300">{outcome}</span>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-dark-600/50">
        <span className="text-xs text-gray-500 font-mono">{project.tech}</span>
      </div>
    </div>
  )
}

export default function Projects() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-display font-800 text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            What I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world automation solutions deployed at enterprise scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
