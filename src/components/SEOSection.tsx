import React from 'react';

const partnersRow1 = [
  "Greenply", "CenturyPly", "Hafele", "Hettich", "Blum", "Saint-Gobain", "Merino Laminates", "Kajaria", "Asian Paints",
  "Greenply", "CenturyPly", "Hafele", "Hettich", "Blum", "Saint-Gobain", "Merino Laminates", "Kajaria", "Asian Paints"
];

const partnersRow2 = [
  "Bosch", "Siemens", "Faber", "Godrej Interio", "Ebco", "Rehau", "Ozone", "Sleek", "Kaff",
  "Bosch", "Siemens", "Faber", "Godrej Interio", "Ebco", "Rehau", "Ozone", "Sleek", "Kaff"
];

const SEOSection: React.FC = () => {
  return (
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
  );
};

export default SEOSection;