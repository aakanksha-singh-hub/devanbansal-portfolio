import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-black relative overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      {/* Abstract Shape */}
      <div className="absolute -bottom-64 -left-64 w-96 h-96 rounded-full bg-teal/5 filter blur-3xl pointer-events-none"></div>
      <div className="absolute top-20 -right-64 w-96 h-96 rounded-full bg-teal/5 filter blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-10 lg:px-20 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair italic tracking-tight">
            <span className="relative">Contact</span>
          </h2>
          <div className="w-24 h-[2px] bg-teal mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-geist-mono">
            Ready to discuss finance opportunities, internships, or
            collaboration? I'd love to hear from you.
          </p>
        </div>

        {/* Simple Contact Layout */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-black border border-white/10 hover:border-teal/30 transition-all duration-300 shadow-lg hover:shadow-teal/5">
            <CardContent className="p-10 md:p-12 animate-fade-in-up">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-12 h-12 border border-teal/30 rounded-full flex items-center justify-center bg-teal/5">
                  <MessageCircle className="w-5 h-5 text-teal" />
                </div>
                <h3 className="text-xl font-geist-mono text-white">
                  Let's Connect
                </h3>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:bansaldevanrajan@gmail.com"
                  className="flex items-center gap-5 p-5 border border-white/10 rounded-lg hover:border-teal/40 hover:bg-teal/5 transition-all duration-300 group transform"
                >
                  <div className="w-10 h-10 border border-teal/30 rounded-full flex items-center justify-center group-hover:border-teal/80 transition-all bg-teal/5">
                    <Mail className="w-5 h-5 text-teal group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium font-geist-mono">
                      Email
                    </h4>
                    <p className="text-gray-400 text-sm group-hover:text-teal/80 transition-colors">
                      bansaldevanrajan@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919953547671"
                  className="flex items-center gap-5 p-5 border border-white/10 rounded-lg hover:border-teal/40 hover:bg-teal/5 transition-all duration-300 group transform"
                >
                  <div className="w-10 h-10 border border-teal/30 rounded-full flex items-center justify-center group-hover:border-teal/80 transition-all bg-teal/5">
                    <Phone className="w-5 h-5 text-teal group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium font-geist-mono">
                      Phone
                    </h4>
                    <p className="text-gray-400 text-sm group-hover:text-teal/80 transition-colors">
                      +91 99535 47671
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/devanbansal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 border border-white/10 rounded-lg hover:border-teal/30 hover:bg-teal/5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 border border-teal/20 rounded-full flex items-center justify-center group-hover:border-teal/40 transition-all bg-teal/5">
                    <Linkedin className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium font-geist-mono">
                      LinkedIn
                    </h4>
                    <p className="text-gray-400 text-sm">
                      linkedin.com/in/devanbansal
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-teal/20 text-center">
                <p className="text-gray-400 text-sm mb-6 font-geist-mono">
                  I'm open to discussions about finance opportunities,
                  internships, and collaborations.
                </p>
                <a
                  href="mailto:bansaldevanrajan@gmail.com"
                  className="inline-flex items-center justify-center border border-teal/30 hover:bg-teal/10 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 font-geist-mono"
                >
                  <Mail className="w-4 h-4 mr-2 text-teal" />
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
