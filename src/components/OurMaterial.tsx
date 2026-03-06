import React from 'react';

const materials = [
    {
        name: "MDF Wood",
        image: "img/mofwood.jpeg",
        description: "High-density precision board engineered for seamless finish and consistent strength."
    },
    {
        name: "Ply Wood",
        image: "img/Plywood.jpeg",
        description: "Premium boiling waterproof plywood, built for extreme durability and layered structural integrity."
    },
    {
        name: "HDHMR",
        image: "img/hdhmr.jpeg",
        description: "High-Density High Moisture Resistance boards, the absolute pinnacle for wet areas."
    },
    {
        name: "Boilo Sheets",
        image: "img/boilo.jpeg",
        description: "Advanced fire-retardant and boiling water-proof engineered sheets for maximum safety."
    },
    {
        name: "UPVC",
        image: "img/uPVC.jpeg",
        description: "Unplasticized Polyvinyl Chloride offering unmatched weather resistance and zero maintenance."
    },
    {
        name: "Aluminium",
        image: "img/aluminium.jpeg",
        description: "Sleek, lightweight, and rust-proof metal framing for modern, industrial-grade aesthetics."
    }
];

const OurMaterial: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm block mb-4">The Foundation</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Our Materials</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Great engineering demands great materials. We source only the highest-grade boards and metals to ensure your factory-made interiors stand the test of time.
                    </p>
                </div>

                {/* Zigzag Layout */}
                <div className="space-y-20 lg:space-y-32 relative z-10">
                    {materials.map((material, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div
                                key={idx}
                                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 group ${isEven ? '' : 'lg:flex-row-reverse'}`}
                            >
                                {/* Image Container */}
                                <div className="w-full lg:w-1/2 relative overflow-hidden rounded-sm shadow-2xl">
                                    {/* Image with grayscale effect by default, color and zoom on hover */}
                                    <div className="overflow-hidden bg-black w-full h-[350px] md:h-[450px]">
                                        <img
                                            src={material.image}
                                            alt={material.name}
                                            className="w-full h-full object-cover filter grayscale opacity-90 transition-all duration-700 ease-in-out transform scale-100 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                                        />
                                    </div>
                                    {/* Inner subtle border */}
                                    <div className="absolute inset-4 border border-white/20 pointer-events-none rounded-sm transition-colors duration-500 group-hover:border-white/40"></div>
                                </div>

                                {/* Text Content */}
                                <div className="w-full lg:w-1/2">
                                    <div className="max-w-xl relative">
                                        {/* Background Number */}
                                        <div className="absolute -top-16 -left-8 text-[120px] font-black text-gray-200/50 -z-10 select-none transition-transform duration-700 group-hover:translate-x-4">
                                            0{idx + 1}
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 transition-colors duration-300 group-hover:text-secondary">
                                            {material.name}
                                        </h3>
                                        <div className="w-16 h-1 bg-secondary mb-6 transition-all duration-500 origin-left group-hover:w-32"></div>

                                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                                            {material.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OurMaterial;
