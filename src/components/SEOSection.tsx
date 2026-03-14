import React from 'react';

const partnersRow1 = [
  "Greenply", "CenturyPly", "Hafele", "Hettich", "Blum", "Saint-Gobain", "Merino Laminates", "Kajaria", "Asian Paints",
  "Greenply", "CenturyPly", "Hafele", "Hettich", "Blum", "Saint-Gobain", "Merino Laminates", "Kajaria", "Asian Paints"
];

const partnersRow2 = [
  "Bosch", "Siemens", "Faber", "Godrej Interio", "Ebco", "Rehau", "Ozone", "Sleek", "Kaff",
  "Bosch", "Siemens", "Faber", "Godrej Interio", "Ebco", "Rehau", "Ozone", "Sleek", "Kaff"
];

const brandPartners1 = [
  "Kohler", "Jaquar", "Grohe", "Hindware", "Cera", "Parryware", "Nitco", "Somany", "Dorsët",
  "Kohler", "Jaquar", "Grohe", "Hindware", "Cera", "Parryware", "Nitco", "Somany", "Dorsët"
];

const brandPartners2 = [
  "Samsung", "LG", "Panasonic", "Philips", "Havells", "Syska", "Wipro", "Bosch", "IFB",
  "Samsung", "LG", "Panasonic", "Philips", "Havells", "Syska", "Wipro", "Bosch", "IFB"
];

const SEOSection: React.FC = () => {
  return (
    <>
      <section className="py-16 bg-gray-50 border-t border-gray-200 overflow-hidden relative">
        <style>
          {`
            @keyframes marqueeLeft {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marqueeRight {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0%); }
            }
            @keyframes floatBrand {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
            @keyframes pulseGlow {
              0%, 100% { box-shadow: 0 0 20px rgba(251,191,36,0.1); }
              50% { box-shadow: 0 0 40px rgba(251,191,36,0.3); }
            }
            .animate-marquee-left {
              display: flex;
              width: max-content;
              animation: marqueeLeft 40s linear infinite;
            }
            .animate-marquee-right {
              display: flex;
              width: max-content;
              animation: marqueeRight 40s linear infinite;
            }
            .marquee-container:hover .animate-marquee-left,
            .marquee-container:hover .animate-marquee-right {
              animation-play-state: paused;
            }
            .brand-card {
              animation: floatBrand 5s ease-in-out infinite;
            }
          `}
        </style>

        <div className="container mx-auto px-4 text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase tracking-wider">Our Premium Partners</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="flex flex-col gap-8 marquee-container relative z-10">
          {/* Row 1: Scrolls Left */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee-left gap-6 px-4">
              {partnersRow1.map((partner, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="flex-none bg-white border border-gray-100 px-8 py-6 rounded-xl shadow-sm hover:shadow-2xl hover:border-secondary hover:-translate-y-2 transition-all duration-300 w-64 flex items-center justify-center group cursor-pointer"
                >
                  <span className="text-xl md:text-2xl font-black text-gray-300 group-hover:text-primary transition-colors uppercase tracking-wider">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolls Right */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" dir="ltr">
            <div className="animate-marquee-right gap-6 px-4">
              {partnersRow2.map((partner, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="flex-none bg-white border border-gray-100 px-8 py-6 rounded-xl shadow-sm hover:shadow-2xl hover:border-secondary hover:-translate-y-2 transition-all duration-300 w-64 flex items-center justify-center group cursor-pointer"
                >
                  <span className="text-xl md:text-2xl font-black text-gray-300 group-hover:text-primary transition-colors uppercase tracking-wider">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Brand Partners Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] via-[#151515] to-[#0a0a0a] overflow-hidden relative border-t border-white/5">
        {/* Abstract Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}>
        </div>

        <div className="container mx-auto px-4 text-center mb-12 relative z-10">
          <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-3 block font-mono">
            // EXCELLENCE IN DETAIL
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 uppercase tracking-tight">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-500">Brand</span> Partners</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-yellow-500 mx-auto shadow-[0_0_15px_rgba(251,191,36,0.5)]"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-sm tracking-wide">
            Collaborating with industry-leading brands to bring you unparalleled quality and aesthetics.
          </p>
        </div>

        <div className="flex flex-col gap-8 marquee-container relative z-10 pb-6">
          {/* Row 1: Right to Left */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-marquee-left gap-8 px-4 items-center">
              {brandPartners1.map((partner, idx) => (
                <div
                  key={`b1-${idx}`}
                  className="brand-card flex-none bg-[#111111]/80 backdrop-blur-xl border border-white/5 px-8 py-5 rounded-xl hover:border-secondary/40 hover:bg-[#1a1a1a] shadow-lg hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500 w-64 flex items-center justify-center group cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="text-xl md:text-2xl font-black text-gray-600 group-hover:text-white transition-all duration-500 uppercase tracking-widest group-hover:scale-110 relative z-10 drop-shadow-md">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Left to Right */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]" dir="ltr">
            <div className="animate-marquee-right gap-8 px-4 items-center">
              {brandPartners2.map((partner, idx) => (
                <div
                  key={`b2-${idx}`}
                  className="brand-card flex-none bg-[#111111]/80 backdrop-blur-xl border border-white/5 px-8 py-5 rounded-xl hover:border-secondary/40 hover:bg-[#1a1a1a] shadow-lg hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500 w-64 flex items-center justify-center group cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${idx * 0.15 + 0.5}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="text-xl md:text-2xl font-black text-gray-600 group-hover:text-white transition-all duration-500 uppercase tracking-widest group-hover:scale-110 relative z-10 drop-shadow-md">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SEOSection;