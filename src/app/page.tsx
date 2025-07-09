import Link from 'next/link'
import { ArrowRight, Building2, Users, Briefcase, Star, ChevronRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">SagePaths</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/jobs" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Jobs
              </Link>
              <Link href="/companies" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Companies
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Video Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Connect Talent with
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent block drop-shadow-lg">
                Opportunity
              </span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              The premier platform for professionals seeking their next career move and companies building exceptional teams.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white rounded-2xl shadow-lg border border-gray-100">
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="flex-1 px-6 py-4 text-gray-900 placeholder-gray-500 bg-transparent outline-none text-lg"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="sm:w-48 px-6 py-4 text-gray-900 placeholder-gray-500 bg-transparent outline-none text-lg border-t sm:border-t-0 sm:border-l border-gray-100"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2">
                  <span>Search Jobs</span>
               
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-100">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <span className="font-medium">500+ Active Jobs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-blue-400" />
                <span className="font-medium">200+ Companies</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="font-medium">10k+ Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover hand-picked positions from top companies actively hiring now
            </p>
          </div>

          {/* Job Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Senior Product Manager",
                company: "TechCorp",
                location: "San Francisco, CA",
                type: "Full-time",
                salary: "$140k - $180k",
                tags: ["Remote OK", "Equity", "Health"],
                featured: true
              },
              {
                title: "Frontend Developer",
                company: "StartupXYZ",
                location: "New York, NY",
                type: "Full-time",
                salary: "$110k - $150k",
                tags: ["React", "TypeScript", "Remote"],
                featured: false
              },
              {
                title: "Data Scientist",
                company: "DataFlow Inc",
                location: "Austin, TX",
                type: "Full-time",
                salary: "$120k - $160k",
                tags: ["Python", "ML", "Remote OK"],
                featured: true
              }
            ].map((job, index) => (
              <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-200 cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  {job.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-2">{job.company}</p>
                <p className="text-gray-500 text-sm mb-4">{job.location} • {job.type}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">{job.salary}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2">
              <span>View All Jobs</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-gray-600">
              Join industry leaders who choose SagePaths for their hiring needs
            </p>
          </div>

          {/* Company Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {['TechCorp', 'StartupXYZ', 'DataFlow', 'InnovateLabs', 'DevStudio', 'CloudTech'].map((company, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 w-full flex items-center justify-center h-20">
                <span className="text-gray-600 font-semibold">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you're seeking your dream job or looking to hire top talent, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors">
              Browse Jobs
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
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">SagePaths</span>
              </div>
              <p className="text-gray-400">
                Connecting talent with opportunity through innovative recruiting solutions.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Job Seekers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Browse Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Advice</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resume Builder</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Employers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Post Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Find Candidates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
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