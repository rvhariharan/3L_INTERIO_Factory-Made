import React from 'react';
import { Briefcase, Quote, Star } from 'lucide-react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-24 bg-dark-surface relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Client Stories</h2>
          <p className="text-gray-400 text-lg font-light">
            Real experiences from homeowners and businesses in Theni who chose factory-made precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PARTNERS.filter(partner => !['Mr. KATHIRESAN', 'Mr. REVANTH', 'Mr. SIVASANKAR C', 'Mr. VIGNESHRAJA R'].includes(partner.name)).map((partner) => (
            <div
              key={partner.id}
              className="bg-primary/50 backdrop-blur-sm p-6 rounded-sm border border-white/10 hover:border-secondary/50 flex flex-col relative transition-all duration-500 hover:-translate-y-2 group text-left"
            >
              {/* Quote Icon */}
              <div className="absolute -top-5 left-6 w-10 h-10 bg-secondary flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-primary fill-current" />
              </div>

              <div className="mt-6 mb-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-gray-300 italic text-sm leading-relaxed min-h-[100px]">
                  "{partner.quote}"
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <h4 className="font-bold text-white text-lg tracking-wide">{partner.name}</h4>
                <p className="text-xs text-secondary font-semibold uppercase tracking-widest mt-1 mb-3">{partner.projectType}</p>

                <div className="flex flex-col space-y-2">
                  {partner.company && (
                    <div className="flex items-center text-gray-400 text-xs">
                      <Briefcase className="w-3 h-3 mr-2 text-secondary" />
                      {partner.company}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
