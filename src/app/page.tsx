"use client"

import Link from 'next/link'
import { ArrowRight, Building2, ChevronRight, ChevronLeft } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
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
  }, [lastScrollY])

  const reviews = [
    {
      name: "Sarah Chen",
      title: "Head of Engineering",
      company: "TechFlow Inc.",
      review: "SagePaths completely transformed our hiring process. We reduced our time-to-hire by 40% while significantly improving candidate quality. The technical assessments are spot-on.",
      initials: "SC",
      color: "bg-blue-500"
    },
    {
      name: "Michael Rodriguez",
      title: "VP of Talent Acquisition",
      company: "DataCorp Solutions",
      review: "The live coding interviews feature is a game-changer. Our engineering team loves how seamless the collaboration is, and candidates appreciate the real-world problem-solving approach.",
      initials: "MR",
      color: "bg-green-500"
    },
    {
      name: "Emily Johnson",
      title: "CTO",
      company: "StartupXYZ",
      review: "As a growing startup, we needed a scalable hiring solution. SagePaths delivered exactly that - professional, efficient, and cost-effective. Highly recommend!",
      initials: "EJ",
      color: "bg-purple-500"
    },
    {
      name: "David Park",
      title: "Engineering Manager",
      company: "InnovateLabs",
      review: "The candidate pipeline management is incredibly intuitive. We can track every step of our hiring process and make data-driven decisions. Outstanding platform!",
      initials: "DP",
      color: "bg-orange-500"
    },
    {
      name: "Lisa Thompson",
      title: "HR Director",
      company: "CloudTech Systems",
      review: "SagePaths helped us build our entire development team. Their expertise in technical recruiting is unmatched, and the results speak for themselves.",
      initials: "LT",
      color: "bg-pink-500"
    },
    {
      name: "James Wilson",
      title: "Senior Developer",
      company: "DevStudio Pro",
      review: "From a candidate's perspective, the interview experience was smooth and professional. Now as a hiring manager, I see why companies choose SagePaths.",
      initials: "JW",
      color: "bg-teal-500"
    }
  ]

  const reviewsPerSlide = 3
  const totalSlides = Math.ceil(reviews.length / reviewsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentReviews = () => {
    const startIndex = currentSlide * reviewsPerSlide
    return reviews.slice(startIndex, startIndex + reviewsPerSlide)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className={`border-b sticky top-0 z-50 bg-[#00685E]/80 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
<img src="/logo_white.png" alt="SagePaths" className="h-14 w-auto" />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-white hover:text-gray-900 transition-colors font-medium">
                About Me
              </Link>
              <Link href="/services" className="text-white hover:text-gray-900 transition-colors font-medium">
                Our Services
              </Link>
              <Link href="/contact" className="text-white hover:text-gray-900 transition-colors font-medium">
                Contact Me
              </Link>
            </nav>

            {/* CTA Buttons */}
  
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#f8fffe] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
<div className="mb-4">
  <span className="text-[#00685E] font-light text-base">Where Talent Meets Precision</span>
</div>

<h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
No upfront fees.<br/>No guesswork.<br/>Just great hires.
</h1>

<p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-xl">
Let's build your dream team, one standout candidate at a time!
</p>

              
<div className="w-full max-w-md">
  <div className="relative rounded-xl bg-white/80 backdrop-blur-md shadow-md border border-white/50">
    <input
      type="text"
      placeholder="Search roles, skills, or companies"
      className="w-full pl-5 pr-32 py-4 bg-transparent text-gray-800 placeholder-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200"
    />
<button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#00685E] hover:bg-[#3e6864] text-white font-semibold px-5 py-2 rounded-lg transition">
  Search
</button>
  </div>
</div>

            </div>

            {/* Right Content - Dual Overlapping Videos */}
            <div className="relative w-full max-w-xl mx-auto -mt-20 h-80">
              {/* Background elements */}
              <div className="absolute -top-6 left-8 w-32 h-32 bg-[#7db9b6] rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
              <div className="absolute top-32 -right-8 w-28 h-28 bg-[#4bb79f] rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
              
              {/* Back Video Container */}
              <div className="absolute top-0 left-0 w-8/12 h-64 bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-2 shadow-xl">
                <div className="rounded-2xl overflow-hidden w-full h-full">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="/hero-video-2.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Glass shine effect */}
                <div className="absolute top-4 left-4 w-20 h-20 bg-white/20 rounded-full filter blur-2xl"></div>
              </div>

              {/* Front Video Container - Same Size, Overlapping */}
              <div className="absolute top-40 left-56 w-8/12 h-64 bg-white/25 backdrop-blur-sm border border-white/40 rounded-3xl p-2 shadow-2xl z-10">
                <div className="rounded-2xl overflow-hidden w-full h-full">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="/hero-video-1.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Glass shine effect */}
                <div className="absolute top-4 left-4 w-20 h-20 bg-white/20 rounded-full filter blur-2xl"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-[#f8fffe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from companies who transformed their hiring process
            </p>
          </div>

          {/* Reviews Carousel */}
          <div className="relative">
            {/* Reviews Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {getCurrentReviews().map((review, index) => (
                <div key={`${currentSlide}-${index}`} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
                  {/* Review Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    "{review.review}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${review.color} rounded-full flex items-center justify-center text-white font-semibold`}>
                      {review.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{review.name}</div>
                      <div className="text-sm text-gray-600">{review.title}</div>
                      <div className="text-sm text-gray-500">{review.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center space-x-4">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-gray-300 hover:border-[#00685E] hover:bg-[#00685E] hover:text-white transition-colors"
                disabled={totalSlides <= 1}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Slide Indicators */}
              <div className="flex space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-[#00685E]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-gray-300 hover:border-[#00685E] hover:bg-[#00685E] hover:text-white transition-colors"
                disabled={totalSlides <= 1}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Ready to join our success stories?</p>
            <button className="bg-[#00685E] hover:bg-[#39625e] text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2">
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Technical Hiring Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From initial screening to final evaluation, streamline your entire technical hiring process
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Live Coding Interviews",
                description: "Conduct real-time technical interviews with our advanced platform",
                features: ["Real-time collaboration", "50+ programming languages", "Instant feedback"],
                color: "blue"
              },
              {
                title: "Skills Assessment",
                description: "Comprehensive evaluation of technical competencies and problem-solving",
                features: ["Custom test creation", "Automated scoring", "Detailed analytics"],
                color: "green"
              },
              {
                title: "Candidate Pipeline",
                description: "Manage and track candidates through your entire hiring process",
                features: ["Pipeline management", "Team collaboration", "Integration ready"],
                color: "purple"
              }
            ].map((solution, index) => (
              <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-200">
                <div className={`w-12 h-12 bg-${solution.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                  <Building2 className={`w-6 h-6 text-${solution.color}-600`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                      <ChevronRight className="w-4 h-4 mr-2 text-gray-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-[#00685E] hover:bg-[#39625e] text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2">
              <span>Explore All Features</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00685E] to-[#003c36]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Technical Hiring?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies who have improved their hiring quality and efficiency with SagePaths.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors">
              Request Demo
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/Logo-White.png" alt="SagePaths" className="h-8 w-auto" />
              </div>
              <p className="text-gray-400">
                Transforming technical hiring through innovative assessment and interview solutions.
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
                <li><a href="#" className="hover:text-white transition-colors">About Me</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Me</a></li>
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