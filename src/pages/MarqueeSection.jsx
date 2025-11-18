"use client";
import { motion } from "framer-motion";

const MarqueeSection = () => {
  const logos = [
    { id: 1, name: "Logoipsum", component: "oipsum" },
    { id: 2, name: "Logoipsum", component: "Logoipsum" },
    { id: 3, name: "Logoipsum", component: "Logoipsum" },
    { id: 4, name: "Logoipsum", component: "Logoipsum" },
    { id: 5, name: "Logoipsum", component: "Logoipsum" },
    { id: 6, name: "Logoipsum", component: "Logoipsum" },
  ];


  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 ">
          <h3 className="text-sm sm:text-lg font-medium text-gray-600 mb-2">
            Trusted by 10,000+ founders & business owners.
          </h3>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white to-transparent z-10" />
          
          {/* Marquee */}
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="shrink-0 px-6 sm:px-8 lg:px-12 cursor-pointer"
              >
                <div className="flex flex-col items-center">
                 
                  
                  {/* Regular Logos */}
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 opacity-60 hover:opacity-100 transition-opacity duration-300">
                    {logo.component}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;