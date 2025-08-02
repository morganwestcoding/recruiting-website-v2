"use client"

import Link from 'next/link'
import { ArrowRight} from 'lucide-react'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [currentSet, setCurrentSet] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
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

  const reviews = [
    {
      name: "Sarah Chen",
      title: "Head of Engineering",
      company: "TechFlow Inc.",
      review: "SagePaths completely transformed our hiring process. We reduced our time-to-hire by 40% while significantly improving candidate quality. The assessments are spot-on.",
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
      review: "SagePaths helped us build our entire development team. Their expertise in recruiting is unmatched, and the results speak for themselves.",
      initials: "LT",
      color: "bg-pink-500"
    },
    {
      name: "James Wilson",
      title: "Senior Developer",
      company: "DevStudio Pro",
      review: "From a candidate&apos;s perspective, the interview experience was smooth and professional. Now as a hiring manager, I see why companies choose SagePaths.",
      initials: "JW",
      color: "bg-teal-500"
    }
  ]

  // Auto-scroll carousel
  useEffect(() => {
    if (!isMounted || isPaused) return // Only run on client side and when not paused
    
    const interval = setInterval(() => {
      setIsTransitioning(true)
      
      setTimeout(() => {
        setCurrentSet(prev => {
          const totalSets = Math.ceil(reviews.length / 3)
          return (prev + 1) % totalSets
        })
        
        // Wait a bit longer before starting fade in
        setTimeout(() => {
          setIsTransitioning(false)
        }, 600) // Delay before fade in starts
      }, 3000) // Wait for complete staggered fade out
      
    }, 8000) // Increased total cycle time to accommodate longer transitions
    
    return () => clearInterval(interval)
  }, [isPaused, reviews.length, isMounted])

  // Get current set of 3 reviews
  const getCurrentReviewSet = () => {
    const startIndex = currentSet * 3
    return reviews.slice(startIndex, startIndex + 3)
  }

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
                Let&apos;s build your dream team, one standout candidate at a time!
              </p>

              <div className="w-full max-w-md">
                <div className="relative rounded-xl bg-white/80 backdrop-blur-md shadow-md border border-white/50">
                  <input
                    type="text"
                    placeholder="Search roles to find your perfect match"
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

      {/* Complete Hiring Solution Section */}
<section className="py-20  bg-[#f8fffe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Hiring Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From initial screening to final evaluation, streamline your entire hiring process
            </p>
          </div>

          {/* Solutions Card Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Role Scoping & Job Description Support",
                description: "Expert guidance to define role requirements and craft compelling job descriptions"
              },
              {
                title: "Automated Sourcing & Outreach via AI",
                description: "Leverage advanced AI technology to identify and engage top talent automatically"
              },
              {
                title: "Pre-Screening Interviews & Assessments",
                description: "Comprehensive evaluation process to ensure only qualified candidates advance"
              },
              {
                title: "Scheduling & Interview Coordination",
                description: "Seamless coordination of all interview stages with your team and candidates"
              },
              {
                title: "Reference Checks & Offer Support",
                description: "Thorough background verification and assistance with offer negotiations"
              },
              {
                title: "Dedicated Account Manager for Each Role",
                description: "Personal point of contact ensuring consistent communication and quality service"
              }
            ].map((solution, index) => (
              <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#00685E] transition-all duration-200">
                {/* Light green background with darker green checkmark */}
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#00685E" fill="none">
                    <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-[#00685E] hover:bg-[#39625e] text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2">
              <span>Submit a Hiring Request</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section - Crossfade */}
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

          {/* Crossfade Container */}
          <div 
            className="relative min-h-[400px]"
            onMouseEnter={() => isMounted && setIsPaused(true)}
            onMouseLeave={() => isMounted && setIsPaused(false)}
          >
            {/* Current Set of Reviews */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getCurrentReviewSet().map((review, index) => (
                <div 
                  key={`${currentSet}-${index}`} 
                  className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-2000 ease-in-out h-full ${
                    isMounted && isTransitioning ? 'opacity-0' : 'opacity-100'
                  }`}
                  style={isMounted ? {
                    transitionDelay: isTransitioning ? `${index * 700}ms` : `${(2 - index) * 700}ms`
                  } : {}}
                >
                  {/* Large Quote Mark */}
                  <div className="text-6xl text-[#00685E] font-serif leading-none mb-4 opacity-20">"</div>
                  
                  {/* Review Text */}
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg italic">
                    {review.review}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4 mt-auto">
                    <div className={`w-14 h-14 ${review.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                      {review.initials}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{review.name}</div>
                      <div className="text-[#00685E] font-medium">{review.title}</div>
                      <div className="text-gray-500">{review.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Indicator */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              {isMounted ? (isPaused ? "Paused - Move cursor away to resume" : "Hover to pause • Auto-advancing every 8 seconds") : "Loading..."}
            </p>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00685E] to-[#003c36]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies who have improved their hiring quality and efficiency with SagePaths.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#00685E] hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors">
              Request Demo
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#00685E] px-8 py-4 rounded-lg font-semibold transition-colors">
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