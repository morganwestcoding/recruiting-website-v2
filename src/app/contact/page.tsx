"use client"

import Link from 'next/link'
import { ArrowRight, Mail, Phone, Calendar, Clock, MapPin, MessageCircle } from 'lucide-react'

export default function ContactPage() {
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
              <Link href="/services" className="text-white hover:text-gray-300 transition-colors font-medium">
                Our Services
              </Link>
              <Link href="/contact" className="text-white border-b-2 border-white/30 pb-1 font-medium">
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
            <span className="text-[#00685E] font-light text-lg">Get In Touch</span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            Contact Me
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Ready to transform your hiring process? Let's discuss how we can help you find the perfect candidates for your team.
          </p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Primary Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            
            {/* Email Card */}
            <a 
              href="mailto:kylie@sagepaths.co"
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors">
                <Mail className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Me</h3>
              <p className="text-gray-600 mb-4">Get a response within 24 hours</p>
              <p className="text-lg font-medium text-[#00685E]">kylie@sagepaths.co</p>
            </a>

            {/* Phone Card */}
            <a 
              href="tel:+19495045794"
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 bg-green-100 group-hover:bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors">
                <Phone className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Me</h3>
              <p className="text-gray-600 mb-4">Direct line for immediate assistance</p>
              <p className="text-lg font-medium text-[#00685E]">(949) 504-5794</p>
            </a>

            {/* Book Meeting Card */}
            <a 
              href="https://outlook.office.com/bookwithme/user/111a00440c694fbf92eb8ba52cf8cbc2%40sagepaths.co/meetingtype/hnGIry7UqkCHE-HWLmF--w2?anonymous&ismsaljsauthenabled=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 bg-purple-100 group-hover:bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors">
                <Calendar className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Book a Meeting</h3>
              <p className="text-gray-600 mb-4">Schedule a time that works for you</p>
              <p className="text-lg font-medium text-[#00685E]">View Available Times</p>
            </a>
          </div>

          {/* Best Time to Reach */}
          <div className="bg-[#f8fffe] rounded-3xl p-8 text-center">
            <div className="w-12 h-12 bg-[#00685E] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Time to Reach Me</h3>
            <p className="text-gray-600 mb-4">
              I'm typically available Monday through Friday, 9 AM to 6 PM PST. 
            </p>
            <p className="text-gray-600">
              For urgent matters, feel free to call anytime and leave a message if I don't answer immediately.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-[#f8fffe]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600">
              Here's what happens when you reach out
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#00685E] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Initial Consultation</h3>
              <p className="text-gray-600">
                We'll discuss your hiring needs, company culture, and ideal candidate profile.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#00685E] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Strategy</h3>
              <p className="text-gray-600">
                I'll create a tailored recruitment approach based on your specific requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-[#00685E] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Results Delivery</h3>
              <p className="text-gray-600">
                You'll receive qualified candidates who are genuinely interested in your opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly can you start working on my role?</h3>
              <p className="text-gray-600">
                I can typically begin sourcing candidates within 24-48 hours of our initial consultation, depending on the role complexity.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What are your fees?</h3>
              <p className="text-gray-600">
                I work on a contingency basis, meaning you only pay when you successfully hire a candidate I've presented. No upfront costs or retainers.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer guarantees?</h3>
              <p className="text-gray-600">
                Yes, I provide a replacement guarantee if a placed candidate doesn't work out within the agreed timeframe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#00685E] to-[#003c36]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's find your next great hire together. Reach out today to discuss your needs.
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
              href="https://outlook.office.com/bookwithme/user/111a00440c694fbf92eb8ba52cf8cbc2%40sagepaths.co/meetingtype/hnGIry7UqkCHE-HWLmF--w2?anonymous&ismsaljsauthenabled=true"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-[#00685E] px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Meeting</span>
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
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Me</Link></li>
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