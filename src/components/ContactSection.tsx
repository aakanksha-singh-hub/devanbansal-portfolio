import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-10 sm:py-16 md:py-24 lg:py-32 bg-black relative overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      {/* Abstract Shape */}
      <div className="absolute -bottom-64 -left-64 w-96 h-96 rounded-full bg-teal/5 filter blur-3xl pointer-events-none"></div>
      <div className="absolute top-20 -right-64 w-96 h-96 rounded-full bg-teal/5 filter blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 relative z-10">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6 font-playfair italic tracking-tight">
            <span className="relative">Contact</span>
          </h2>
          <div className="w-16 sm:w-20 h-[2px] bg-teal mx-auto mb-4 sm:mb-6"></div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto font-geist-mono px-3 sm:px-4">
            Ready to discuss finance opportunities, internships, or
            collaboration? I'd love to hear from you.
          </p>
        </div>

        {/* Simple Contact Layout */}
        <div className="w-full max-w-3xl mx-auto px-2 xs:px-4 sm:px-6">
          <Card className="w-full bg-black border border-white/10 hover:border-teal/30 transition-all duration-300 shadow-lg hover:shadow-teal/5">
            <CardContent className="p-3 xs:p-4 sm:p-5 md:p-7 lg:p-10 animate-fade-in-up">
              <div className="flex items-center gap-3 sm:gap-5 mb-5 sm:mb-10">
                <div className="w-9 h-9 sm:w-12 sm:h-12 border border-teal/30 rounded-full flex items-center justify-center bg-teal/5">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal" />
                </div>
                <h3 className="text-base sm:text-xl font-geist-mono text-white">
                  Let's Connect
                </h3>
              </div>

              <div className="space-y-3 xs:space-y-4 sm:space-y-5 lg:space-y-6">
                <a
                  href="mailto:bansaldevanrajan@gmail.com"
                  className="flex items-center gap-2 xs:gap-3 sm:gap-4 p-2 xs:p-3 sm:p-4 lg:p-5 border border-white/10 rounded-lg hover:border-teal/40 hover:bg-teal/5 transition-all duration-300 group transform w-full overflow-hidden"
                >
                  <div className="shrink-0 min-w-[1.75rem] xs:min-w-[2rem] w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 border border-teal/30 rounded-full flex items-center justify-center group-hover:border-teal/80 transition-all bg-teal/5">
                    <Mail className="w-3 h-3 xs:w-4 xs:h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-teal group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <h4 className="text-white font-medium font-geist-mono text-xs xs:text-sm sm:text-sm lg:text-base overflow-hidden text-ellipsis">
                      Email
                    </h4>
                    <p className="text-gray-400 text-[10px] xs:text-xs sm:text-xs lg:text-sm truncate group-hover:text-teal/80 transition-colors overflow-hidden text-ellipsis">
                      bansaldevanrajan@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919969938259"
                  className="flex items-center gap-2 xs:gap-3 sm:gap-4 p-2 xs:p-3 sm:p-4 lg:p-5 border border-white/10 rounded-lg hover:border-teal/40 hover:bg-teal/5 transition-all duration-300 group transform w-full overflow-hidden"
                >
                  <div className="shrink-0 min-w-[1.75rem] xs:min-w-[2rem] w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 border border-teal/30 rounded-full flex items-center justify-center group-hover:border-teal/80 transition-all bg-teal/5">
                    <Phone className="w-3 h-3 xs:w-4 xs:h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-teal group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <h4 className="text-white font-medium font-geist-mono text-xs xs:text-sm sm:text-sm lg:text-base overflow-hidden text-ellipsis">
                      Phone
                    </h4>
                    <p className="text-gray-400 text-[10px] xs:text-xs sm:text-xs lg:text-sm truncate group-hover:text-teal/80 transition-colors overflow-hidden text-ellipsis">
                      +91 99699 38259
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/devanbansal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 xs:gap-3 sm:gap-4 p-2 xs:p-3 sm:p-4 lg:p-5 border border-white/10 rounded-lg hover:border-teal/30 hover:bg-teal/5 transition-all duration-300 group w-full overflow-hidden"
                >
                  <div className="shrink-0 min-w-[1.75rem] xs:min-w-[2rem] w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 border border-teal/20 rounded-full flex items-center justify-center group-hover:border-teal/40 transition-all bg-teal/5">
                    <Linkedin className="w-3 h-3 xs:w-4 xs:h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-teal group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <h4 className="text-white font-medium font-geist-mono text-xs xs:text-sm sm:text-sm lg:text-base overflow-hidden text-ellipsis">
                      LinkedIn
                    </h4>
                    <p className="text-gray-400 text-[10px] xs:text-xs sm:text-xs lg:text-sm truncate group-hover:text-teal/80 transition-colors overflow-hidden text-ellipsis">
                      linkedin.com/in/devanbansal
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-6 sm:mt-8 lg:mt-10 pt-4 sm:pt-6 lg:pt-8 border-t border-teal/20 text-center">
                <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 font-geist-mono px-2">
                  I'm open to discussions about finance opportunities,
                  internships, and collaborations.
                </p>
                <a
                  href="mailto:bansaldevanrajan@gmail.com"
                  className="inline-flex items-center justify-center border border-teal/30 hover:bg-teal/10 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 font-geist-mono text-xs sm:text-sm hover:shadow-teal/20 hover:shadow-sm"
                >
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-teal" />
                  Send Email
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
