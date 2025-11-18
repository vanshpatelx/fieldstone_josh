import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
    const cards = [
        {
            img: "./project1.jpg",
            title: "BSES Andhra Power Limited — 220 MW Power Project",
            desc: "Financial advisory for a naphtha-fired combined-cycle plant in Samalkot, arranging INR 2,450M equity and INR 5,030M long-term debt.",
        },
        {
            img: "./project2.jpg",
            title: "NEPC Consortium Power — 125 MW Generation Project",
            desc: "Advised on financing for a 125 MW oil/gas-fired facility in Haripur, Bangladesh, with a total project cost of USD 124.3M.",
        },
        {
            img: "./project3.jpg",
            title: "GSEG — 156 MW Gas-Fired Plant, Gujarat",
            desc: "Acted as financial advisor for GSPC to arrange INR 1,716M equity and INR 4,444M long-term debt for the Mora Village power plant.",
        },
        {
            img: "./project4.jpg",
            title: "Bhote Koshi Power — 36 MW Hydroelectric Project",
            desc: "Financial advisor for MCN Energy on the sale of its 64% stake in the 36 MW run-of-the-river hydro project in Bhote Koshi, Nepal.",
        },
    ];

    return (
        <section id="projects" className="w-full bg-white py-20 px-6 sm:px-10">
            <div className="max-w-6xl mx-auto bg-white py-20">
                {/* TITLE SECTION */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 ">
                    <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl font-medium text-[#03030F]">
                        Leading Power Projects  <br />
                        <span id="highlight" className="italic">With Impact</span>
                    </h1>

                    <motion.div
                        initial="initial"
                        whileHover="hover"
                        className="group"
                    >
                        <button type="button" className="relative flex items-center justify-between gap-4 bg-[#2E6153] text-white pl-4.5 cursor-pointer pr-2.5 py-1.5 sm:pl-5 sm:py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden w-fit max-w-xs">
                            <motion.div
                                variants={{
                                    rest: { scale: 0, opacity: 0 },
                                    hover: { scale: 13, opacity: 1 },
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="absolute right-2 sm:right-4 w-8 h-8 bg-white rounded-full pointer-events-none"
                            />
                            <span className="text-sm sm:text-base font-medium transition-all duration-300 z-50 group-hover:text-[#2E6153]">
                                View more projects
                            </span>
                            <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:bg-white group-hover:scale-110 z-20">
                                <motion.div
                                    className="flex items-center justify-center"
                                    animate={{
                                        x: [0, 1, 0],
                                        y: [0, -1, 0],
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <ArrowUpRight className="w-5 h-5 text-[#2E6153] relative z-10" />
                                </motion.div>
                            </div>
                        </button>
                    </motion.div>
                </div>

                {/* CARD GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14 ">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="cursor-pointer group"
                        >
                            {/* IMAGE */}
                            <div className="w-full h-[260px] rounded-xl overflow-hidden">
                                <img
                                   alt={card.title}
                                    src={card.img}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                                />
                            </div>

                            {/* TEXT CONTENT */}
                            <h2 className="mt-4 text-xl font-semibold leading-snug text-[#03030F]">
                                {card.title}
                            </h2>

                            <p className="mt-2 text-gray-600 text-sm">{card.desc}</p>

                            {/* READ MORE BUTTON */}
                            <button type="button" className="mt-4 text-[#03030F] font-medium flex items-center gap-2 group-hover:underline group-hover:text-[#2E6153] cursor-pointer">
                                Read More <ArrowUpRight size={18} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    );
}
