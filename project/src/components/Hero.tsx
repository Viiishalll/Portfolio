import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-ping"></div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient hover:scale-105 transition-transform duration-300 inline-block">
                Vishal Dubey 
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-purple-200 mb-6 font-light animate-slide-up" style={{animationDelay: '0.2s'}}>
              Full Stack Developer & UI/UX Designer
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl animate-slide-up" style={{animationDelay: '0.4s'}}>
              I craft exceptional digital experiences that combine beautiful design with powerful functionality. 
              Let's build something amazing together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 flex items-center justify-center">
                View My projects 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              
              <a
                 href="/Resume.pdf"
                download
               className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                Download Resume
                 <Download className="ml-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
              </a>
            </div>
            
            
            

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 animate-slide-up" style={{animationDelay: '0.8s'}}>
             {[
                { icon: Github, href: 'https://github.com/Viiishalll', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/vishal-dubey-3b1aa6263/', label: 'LinkedIn' },
                { icon: Mail, href: 'viiishalll77@gmail.com', label: 'Email' },
             ].map(({ icon: Icon, href, label }, index) => (
               <a
                  key={label}
                href={href}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-lg animate-bounce"
                 aria-label={label}
                style={{animationDelay: `${1 + index * 0.1}s`, animationDuration: '2s'}}
              target="_blank"
              rel="noopener noreferrer"
  >
    <Icon size={20} />
  </a>
))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-2xl opacity-50 animate-pulse scale-110 animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl hover:scale-105 transition-transform duration-500 hover:rotate-3">
                <img src="/P1.jpg" alt="P1.jpg" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;