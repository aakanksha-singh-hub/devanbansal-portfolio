
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Target, TrendingUp, Award, Linkedin } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4 md:mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-navy-600 to-orange-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div>
            <div className="prose prose-lg text-navy-600 mb-6 md:mb-10">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-4 md:mb-6">
                I'm a 2nd-year Accounting and Finance student at NMIMS Mumbai with a CGPA of 
                <span className="font-bold text-orange-500"> 3.76/4.00</span>, on track for 
                <span className="font-bold text-navy-800"> ACCA and CFA certifications</span>.
              </p>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                I thrive on financial analysis, corporate finance, and strategic decision-making, 
                having earned top ranks in national and international finance olympiads. My passion 
                lies in transforming complex financial data into actionable insights that drive 
                business growth.
              </p>
            </div>
            
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold btn-hover w-full sm:w-auto">
              <Download className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
              View Complete Resume
            </Button>
          </div>
          
          <div className="grid gap-4 md:gap-6 lg:gap-8">
            <Card className="group border-gray-300 hover:border-orange-300 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/20 bg-white hover:bg-gradient-to-br hover:from-white hover:to-orange-50/20">
              <CardContent className="p-4 md:p-6 lg:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-3 md:p-4 bg-navy-100 group-hover:bg-orange-100 rounded-xl mr-3 md:mr-5 transition-all duration-300 flex-shrink-0">
                    <Target className="h-6 w-6 md:h-8 md:w-8 text-navy-700 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-navy-800">Strategic Focus</h3>
                </div>
                <p className="text-navy-600 text-sm md:text-base lg:text-lg leading-relaxed">
                  Specialized in financial analysis, WACC calculations, and investment valuation with 
                  hands-on experience in corporate finance projects.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group border-gray-300 hover:border-orange-300 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/20 bg-white hover:bg-gradient-to-br hover:from-white hover:to-orange-50/20">
              <CardContent className="p-4 md:p-6 lg:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-3 md:p-4 bg-orange-100 group-hover:bg-navy-100 rounded-xl mr-3 md:mr-5 transition-all duration-300 flex-shrink-0">
                    <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-orange-600 group-hover:text-navy-700 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-navy-800">Academic Excellence</h3>
                </div>
                <p className="text-navy-600 text-sm md:text-base lg:text-lg leading-relaxed">
                  Maintaining top academic performance while pursuing professional certifications 
                  in ACCA, NISM, and CA Foundation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group border-gray-300 hover:border-orange-300 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/20 bg-white hover:bg-gradient-to-br hover:from-white hover:to-orange-50/20">
              <CardContent className="p-4 md:p-6 lg:p-8">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="p-3 md:p-4 bg-navy-100 group-hover:bg-orange-100 rounded-xl mr-3 md:mr-5 transition-all duration-300 flex-shrink-0">
                    <Award className="h-6 w-6 md:h-8 md:w-8 text-navy-700 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-navy-800">Recognition</h3>
                </div>
                <p className="text-navy-600 text-sm md:text-base lg:text-lg leading-relaxed">
                  Achieved Zonal Rank 2 in SOF Commerce Olympiad and International Rank 4 
                  in BSE Finance Olympiad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
