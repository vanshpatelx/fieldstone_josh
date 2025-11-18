"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const team = [
  {
    name: "Ajay Kumar Dasarathy",
    role: "Senior Advisor - Project Management",
    img: "/img1.jpeg",
  },
  {
    name: "Kartik Vaideswaran",
    role: "Lead Petrochemical Engineer",
    img: "/img2.png",
  },
  {
    name: "Dr. Suman Banerjee",
    role: "Senior Advisor & Head of Finance",
    img: "/img3.jpeg",
  },
  {
    name: "Rahul Ajay",
    role: "Vice President",
    img: "/img4.jpeg",
  },
  {
    name: "Dr. Manfred Ernst",
    role: "Director & Advisor",
    img: "/img5.jpeg",
  },
  {
    name: "Sundar Sundaresan",
    role: "Managing Director & President",
    img: "/img6.jpeg",
  },
];

export default function TeamSection() {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 640) return; 

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % team.length;
        
        // Scroll to the next card
        if (scrollContainerRef.current) {
          const scrollContainer = scrollContainerRef.current;
          const cardWidth = scrollContainer.children[0]?.offsetWidth || 0;
          const gap = 24; // gap-6 = 24px
          const scrollPosition = nextIndex * (cardWidth + gap);
          
          scrollContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
          });
        }
        
        return nextIndex;
      });
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="teams" className="w-full bg-[#E7EBE8] py-20 px-6 sm:px-10">
      {/* Heading */}
      <div className="text-center mb-12 ">
        <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl font-medium text-[#03030F]">
          Meet our <span id="highlight" className="italic">team</span>
        </h2>
        <p className="text-[#4A4A4A] mt-3 text-sm sm:text-base">
          We are a passionate group of innovators and problem solvers.
        </p>
      </div>

      {/* TEAM DESKTOP GRID */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto place-items-center max-w-6xl ">
        {team.map((member, i) => (
          <div key={i} className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            >
              <img
                src={member.img}
                alt="team-member"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            <div className="px-3 py-6">
              <h3 className="text-lg font-semibold text-start text-[#121212]">
                {member.name}
              </h3>
              <p className="text-sm text-[#666] mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* TEAM MOBILE SCROLL (HORIZONTAL) */}
      <div className="sm:hidden relative">
        {/* Scroll container with hidden scrollbar */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 pt-3 scrollbar-hide"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {team.map((member, i) => (
            <motion.div 
              key={i} 
              className="snap-center min-w-[85%] shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.1)] relative">
                {/* Glow effect for active card */}
                <motion.div
                  animate={{
                    opacity: currentIndex === i ? [0.3, 0.6, 0.3] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-3xl pointer-events-none"
                />
                
                <img
                  src={member.img}
                  alt="team-member"
                  className="w-full h-64 object-cover relative z-10"
                />
                
                <div className="px-4 py-5 relative z-10">
                  <h3 className="text-lg font-semibold text-[#121212]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#666] mt-1">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom scroll indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {team.map((_, i) => (
            <motion.button
            type="button"
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === i ? 'bg-[#2E6153] w-6' : 'bg-gray-400'
              }`}
              onClick={() => {
                setCurrentIndex(i);
                if (scrollContainerRef.current) {
                  const scrollContainer = scrollContainerRef.current;
                  const cardWidth = scrollContainer.children[0]?.offsetWidth || 0;
                  const gap = 24;
                  const scrollPosition = i * (cardWidth + gap);
                  
                  scrollContainer.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Scroll hint animation */}
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-center mt-4"
        >
          <p className="text-xs text-[#666]">Swipe to explore →</p>
        </motion.div>
      </div>
    </section>
  );
}