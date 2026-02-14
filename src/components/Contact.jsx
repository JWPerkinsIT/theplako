import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const [ref, isVisible] = useScrollReveal(0.1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    // Placeholder submission handler
    // Replace with Formspree, EmailJS, or similar service
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setSubmitting(false)
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-radial-fade opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative" ref={ref}>
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Ready to <span className="gradient-text">Automate?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tell me about your project and let's build something that works.
          </p>
        </div>

        {submitted ? (
          <div
            className={`glass-card p-12 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="font-display font-700 text-2xl text-white mb-2">Message Sent</h3>
            <p className="text-gray-400">I'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`glass-card p-8 md:p-10 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600/50 rounded-xl text-white placeholder-gray-500
                    focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600/50 rounded-xl text-white placeholder-gray-500
                    focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600/50 rounded-xl text-white placeholder-gray-500
                  focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                placeholder="Your company (optional)"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600/50 rounded-xl text-white placeholder-gray-500
                  focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 resize-none"
                placeholder="Tell me about your project or challenge..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full px-8 py-4 bg-accent text-dark-950 font-semibold rounded-xl
                hover:bg-accent-300 hover:shadow-lg hover:shadow-accent/20
                disabled:opacity-50 disabled:cursor-not-allowed
                transition-all duration-300 text-base"
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">
              Or reach out directly at{' '}
              <a href="mailto:contact@theplako.com" className="text-accent hover:text-accent-300 transition-colors">
                contact@theplako.com
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
