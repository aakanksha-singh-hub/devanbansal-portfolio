
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-navy-800 via-navy-700 to-navy-600 text-white relative overflow-hidden">
      {/* ✨ Very Subtle Animated Glow Capsules for Contact Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Glow Capsule - Extremely Soft */}
        <div className="absolute top-20 left-20 w-[300px] h-[80px] bg-gradient-to-r from-orange-200 to-amber-200 opacity-5 blur-[90px] rounded-full rotate-[25deg] animate-pulse" style={{ animationDuration: '8s' }}></div>

        {/* Right Glow Capsule - Extremely Soft */}
        <div className="absolute bottom-20 right-20 w-[250px] h-[60px] bg-gradient-to-l from-orange-100 to-yellow-100 opacity-5 blur-[80px] rounded-full rotate-[-15deg] animate-pulse" style={{ animationDuration: '10s', animationDelay: '3s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="text-orange-400">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-navy-900 font-semibold max-w-2xl mx-auto" style={{color: 'rgb(30, 41, 59)'}}>
            Ready to discuss finance opportunities, internships, or collaboration? 
            I'd love to hear from you.
          </p>
        </div>
          <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <Card className="bg-white border-2 border-orange-400 hover:border-orange-500 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/30">
              <CardContent className="p-6 md:p-8 lg:p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 md:mb-8 text-center">
                  Get in Touch
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 max-w-4xl mx-auto">
                  <a 
                    href="mailto:bansaldevanrajan@gmail.com"
                    className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-orange-200"
                  >
                    <div className="p-4 bg-orange-500 rounded-xl group-hover:bg-orange-600 group-hover:scale-110 transition-all duration-300">
                      <Mail className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-navy-900 text-lg font-bold mb-2 group-hover:text-orange-600 transition-colors duration-300">Email</p>
                      <p className="text-navy-600 text-sm group-hover:text-navy-800">Click to send email</p>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+919969938259"
                    className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-green-200"
                  >
                    <div className="p-4 bg-green-500 rounded-xl group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                      <Phone className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-navy-600 text-sm font-semibold mb-2 group-hover:text-navy-800">Phone</p>
                      <span className="text-navy-900 font-bold text-sm group-hover:text-green-600 transition-colors duration-300">
                        +91 99699 38259
                      </span>
                    </div>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/devanbansal/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center space-y-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-blue-200"
                  >
                    <div className="p-4 bg-blue-600 rounded-xl group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300">
                      <Linkedin className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-navy-900 text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">LinkedIn</p>
                      <p className="text-navy-600 text-sm group-hover:text-navy-800">Connect with me</p>
                    </div>
                  </a>
                </div>
                
                <div className="p-4 md:p-6 bg-orange-50 border-2 border-orange-200 rounded-lg hover:bg-orange-100 transition-colors duration-300">
                  <h4 className="text-lg md:text-xl font-bold text-navy-900 mb-3 text-center">
                    Open to Opportunities
                  </h4>
                  <p className="text-navy-700 text-sm md:text-base leading-relaxed text-center font-medium">
                    Currently seeking internship opportunities in finance, investment banking, 
                    corporate finance, and financial analysis roles. Available for summer 2025 
                    and beyond.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
