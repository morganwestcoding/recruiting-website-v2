"use client"

import Link from 'next/link'
import { ArrowRight, Mail, Phone, Linkedin, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  // Mount effect to prevent hydration issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return // Only run on client side
    
    let ticking = false

    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
      ticking = false
    }

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(controlNavbar)
        ticking = true
      }
    }

    window.addEventListener('scroll', requestTick)
    return () => window.removeEventListener('scroll', requestTick)
  }, [lastScrollY, isMounted])

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className={`border-b sticky top-0 z-50 bg-[#00685E] backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
        isMounted ? (isVisible ? 'translate-y-0' : '-translate-y-full') : 'translate-y-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <img src="/logo_white.png" alt="SagePaths" className="h-14 w-auto" />
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-white border-b-2 border-white/30 pb-1 font-medium">
                About Me
              </Link>
              <Link href="/services" className="text-white hover:text-gray-300 transition-colors font-medium">
                Our Services
              </Link>
              <Link href="/contact" className="text-white hover:text-gray-300 transition-colors font-medium">
                Contact Me
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#f8fffe] py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="text-[#00685E] font-light text-lg">Meet the Founder</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Hi, I'm Kylie
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Founder of SagePaths — where smart recruiting meets human connection
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Photo Placeholder */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Photo placeholder - you can replace this with actual photo */}
                <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-[#00685E] to-[#4bb79f] rounded-3xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  K
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#7db9b6] rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#4bb79f] rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">With experience across legal, technology, manufacturing, construction, finance, and accounting recruitment,</span> I'm passionate about finding the right people for the right roles, every time.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  I believe recruiting is more than just matching resumes — it's about understanding company culture, business goals, and candidate aspirations. That's why I combine personalized, hands-on service with cutting-edge AI tools to streamline the hiring process without losing the human touch.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#00685E]">If you're looking for a recruiting partner who's dedicated, efficient, and truly cares about your team's success, let's connect.</span>
                </p>

                {/* Contact Information */}
                <div className="pt-8 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
                  
                  <div className="space-y-4">
                    {/* Email */}
                    <a 
                      href="mailto:kylie@sagepaths.co" 
                      className="flex items-center space-x-3 text-gray-700 hover:text-[#00685E] transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gray-100 group-hover:bg-[#00685E] rounded-lg flex items-center justify-center transition-colors">
                        <Mail className="w-5 h-5 text-gray-600 group-hover:text-white" />
                      </div>
                      <span className="text-lg">kylie@sagepaths.co</span>
                    </a>

                    {/* Phone */}
                    <a 
                      href="tel:+19495045794" 
                      className="flex items-center space-x-3 text-gray-700 hover:text-[#00685E] transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gray-100 group-hover:bg-[#00685E] rounded-lg flex items-center justify-center transition-colors">
                        <Phone className="w-5 h-5 text-gray-600 group-hover:text-white" />
                      </div>
                      <span className="text-lg">(949) 504-5794</span>
                    </a>

                    {/* LinkedIn */}
                    <a 
                      href="https://www.linkedin.com/in/kyliemasumiya/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-700 hover:text-[#00685E] transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gray-100 group-hover:bg-[#00685E] rounded-lg flex items-center justify-center transition-colors">
                        <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white" />
                      </div>
                      <span className="text-lg">LinkedIn Profile</span>
                    </a>

                    {/* Website */}
                    <a 
                      href="https://sagepaths.co" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-700 hover:text-[#00685E] transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gray-100 group-hover:bg-[#00685E] rounded-lg flex items-center justify-center transition-colors">
                        <Globe className="w-5 h-5 text-gray-600 group-hover:text-white" />
                      </div>
                      <span className="text-lg">sagepaths.co</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-[#f8fffe]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industry Experience
            </h2>
            <p className="text-xl text-gray-600">
              Specialized expertise across diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Legal", description: "Law firms, corporate legal departments, compliance roles" },
              { name: "Technology", description: "Software development, IT infrastructure, digital transformation" },
              { name: "Manufacturing", description: "Operations, engineering, supply chain management" },
              { name: "Construction", description: "Project management, engineering, skilled trades" },
              { name: "Finance", description: "Investment, banking, financial planning, analysis" },
              { name: "Accounting", description: "CPA firms, corporate accounting, tax specialists" }
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                <h3 className="text-xl font-semibold text-[#00685E] mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00685E] to-[#003c36]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how I can help you find the perfect candidates for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:kylie@sagepaths.co"
              className="bg-white text-[#00685E] hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </a>
            <a 
              href="tel:+19495045794"
              className="border-2 border-white text-white hover:bg-white hover:text-[#00685E] px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Me</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo_white.png" alt="SagePaths" className="h-12 w-auto" />
              </div>
              <p className="text-gray-400">
                Transforming hiring through innovative assessment and interview solutions.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Live Interviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Skills Assessment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Candidate Pipeline</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Practices</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Me</Link></li>
                <li><a href="mailto:kylie@sagepaths.co" className="hover:text-white transition-colors">Contact Me</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SagePaths. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}