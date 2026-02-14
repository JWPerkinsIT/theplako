import { useScrollReveal } from '../hooks/useScrollReveal'
import { useState } from 'react'

const skillCategories = [
  {
    title: 'RPA & Process Automation',
    color: 'accent',
    skills: [
      'UiPath Studio / Orchestrator',
      'Power Automate / Power Automate Desktop',
      'Azure Logic Apps',
      'Process Mining & Analysis',
      'Workflow Design & Optimization',
      'Bot Lifecycle Management',
    ],
  },
  {
    title: 'Agentic AI & Intelligent Automation',
    color: 'accent',
    skills: [
      'AI Agent Design & Architecture',
      'Microsoft Copilot Studio',
      'LangGraph / LangChain',
      'AutoGen / Multi-Agent Systems',
      'Model Context Protocol (MCP)',
      'Agent2Agent (A2A) Protocol',
      'n8n Workflow Automation',
      'RAG (Retrieval-Augmented Generation)',
      'Custom GPT Development',
    ],
  },
  {
    title: 'Microsoft & Cloud Platforms',
    color: 'accent',
    skills: [
      'Microsoft 365 Administration',
      'Azure AD / Entra ID',
      'Microsoft Graph API',
      'SharePoint Architecture & Managed Metadata',
      'Microsoft Intune / Endpoint Management',
      'Exchange Online',
      'Microsoft Teams Administration',
    ],
  },
  {
    title: 'Scripting & Development',
    color: 'accent',
    skills: [
      'PowerShell (Advanced)',
      'Python',
      'REST API Integration',
      'ServiceNow Platform Development',
      'Git / GitHub',
    ],
  },
  {
    title: 'Infrastructure & Networking',
    color: 'accent',
    skills: [
      'Hybrid Cloud Environments',
      'Active Directory (On-Prem + Cloud)',
      'Cisco / Ubiquiti Networking',
      'JAMF (macOS Management)',
      'Homelab Architecture',
    ],
  },
  {
    title: 'IT Service Management',
    color: 'accent',
    skills: [
      'ServiceNow (ITSM / Catalog / Workflows)',
      'ITIL Practices',
      'Executive Support Operations',
      'SLA Design & Management',
      'SOX Compliance',
    ],
  },
]

function SkillBadge({ skill, delay, isVisible }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-lg bg-dark-700/60 border border-dark-600/40 text-sm text-gray-300
        hover:border-accent/30 hover:text-accent hover:bg-accent/5 hover:shadow-[0_0_15px_rgba(0,212,255,0.08)]
        transition-all duration-300 cursor-default ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {skill}
    </span>
  )
}

function CategoryCard({ category, index, isVisible }) {
  return (
    <div
      className={`glass-card p-6 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <h3 className="font-display font-600 text-white text-base mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent" />
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <SkillBadge
            key={skill}
            skill={skill}
            delay={index * 80 + i * 30}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, isVisible] = useScrollReveal(0.1)
  const [showCerts, setShowCerts] = useState(false)

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-dark-800/30" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            What I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A technical toolkit built through years of hands-on enterprise work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, i) => (
            <CategoryCard
              key={category.title}
              category={category}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div
          className={`text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={() => setShowCerts(!showCerts)}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors duration-200 group"
          >
            <span>Backed by 40+ professional certifications in AI, automation, and cloud technologies</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${showCerts ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          {showCerts && (
            <div className="mt-6 glass-card p-6 max-w-2xl mx-auto text-left animate-fade-in-up">
              <p className="text-sm text-gray-400 leading-relaxed">
                Certifications span UiPath (Advanced RPA Developer, Orchestrator, specialized automation),
                Microsoft (Azure AI, Power Platform, Copilot), Automation Anywhere, Google AI Essentials,
                and multiple AI/ML specializations. Each certification represents applied knowledge
                actively used in production environments.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
