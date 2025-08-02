"use client"

import Link from 'next/link'
import { Mail, Phone, Search, Users, Target, DollarSign, Zap } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b sticky top-0 z-50 bg-[#00685E] backdrop-blur-md">
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
              <Link href="/about" className="text-white hover:text-gray-300 transition-colors font-medium">
                About Me
              </Link>
              <Link href="/services" className="text-white border-b-2 border-white/30 pb-1 font-medium">
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
      <section className="bg-[#f8fffe] py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="text-[#00685E] font-light text-lg">What We Offer</span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            Our Services
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            From talent sourcing to final hire, we provide comprehensive recruitment solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            
            {/* Service 1: Talent Sourcing & Outreach */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Talent Sourcing & Outreach
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We use a mix of AI-powered tools and hands-on research to find active and passive candidates who are a perfect fit — fast.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <Search className="w-32 h-32 text-blue-600 opacity-20" />
                </div>
              </div>
            </div>

            {/* Service 2: Full-Cycle Recruitment */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                <Users className="w-32 h-32 text-green-600 opacity-20" />
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Full-Cycle Recruitment
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We manage the entire hiring process — from job description to offer acceptance. What sets us apart is how we find top talent: some of the best hires we&apos;ve placed weren&apos;t even actively looking.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through long-standing relationships and a trusted network, we connect exceptional candidates with roles that align with their goals — and yours.
                </p>
              </div>
            </div>

            {/* Service 3: Specialized Hiring */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Specialized Hiring
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We&apos;ve recruited in legal, accounting, technology, finance, construction, manufacturing, and more. We understand the nuances of each role and industry.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From C-level to entry level, we&apos;ve done roles above and in between.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <Target className="w-32 h-32 text-purple-600 opacity-20" />
                </div>
              </div>
            </div>

            {/* Service 4: Contingency-Based Model */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                <DollarSign className="w-32 h-32 text-orange-600 opacity-20" />
              </div>
              <div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Contingency-Based Model
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Only pay if you hire. No upfront costs, no risk — just results.
                </p>
              </div>
            </div>

            {/* Service 5: AI-Enhanced Efficiency */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  AI-Enhanced Efficiency
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Ever wanted to implement AI with your business process but didn&apos;t know how?
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  SagePaths blends human intuition and connections with AI automation tools to streamline your hiring process and surface top talent faster than ever.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <Zap className="w-32 h-32 text-yellow-600 opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#f8fffe]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Why Choose SagePaths?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#00685E] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Risk</h3>
              <p className="text-gray-600">Pay only when you hire. Zero upfront costs.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#00685E] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record across multiple industries and roles.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#00685E] rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Touch</h3>
              <p className="text-gray-600">Human connections enhanced by AI efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#00685E] to-[#003c36]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Hiring?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss your hiring needs and how we can help you find the perfect candidates.
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
                <li><a href="#" className="hover:text-white transition-colors">Talent Sourcing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Full-Cycle Recruitment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Specialized Hiring</a></li>
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