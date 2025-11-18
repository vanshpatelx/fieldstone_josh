"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Features() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });


    const card1Y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
    const card1Opacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);
    const card1Scale = useTransform(scrollYProgress, [0.2, 0.4], [1, 0.8]);

    const card2Y = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);
    const card2Opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.6, 0.8], [0, 1, 1, 0]);
    const card2Scale = useTransform(scrollYProgress, [0.3, 0.5, 0.6, 0.8], [0.8, 1, 1, 0.8]);

    const card3Y = useTransform(scrollYProgress, [0.6, 0.9], [100, 0]);
    const card3Opacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
    const card3Scale = useTransform(scrollYProgress, [0.6, 0.8], [0.8, 1]);

    const cards = [
        {
            id: 1,
            number: "1",
            title: {
                part1: "A ",
                highlighted: "First-Principles",
                part2: " Mindset"
            },
            description: "We don't rely on templates. We approach every opportunity by breaking it down to its fundamental variables. Using scenario-based stress tests and comprehensive risk modeling, we build our investment thesis from the ground up, ensuring every decision is based on a deep, analytical understanding of the project's unique dynamics.",
            image: "./ImageCard1.jpg",
            buttonText: "Learn more"
        },
        {
            id: 2,
            number: "2",
            title: {
                part1: "Data-Driven ",
                highlighted: "Investment Strategy",
                part2: ""
            },
            description: "Our approach combines quantitative analysis with qualitative insights. We leverage advanced analytics and machine learning algorithms to identify patterns and opportunities that traditional methods might miss, creating a competitive edge in today's dynamic markets.",
            image: "./ImageCard2.png",
            buttonText: "Learn more"

        },
        {
            id: 3,
            number: "3",
            title: {
                part1: "Long-Term ",
                highlighted: "Value Creation",
                part2: ""
            },
            description: "We focus on sustainable growth and lasting impact. Through strategic partnerships and continuous innovation, we help portfolio companies scale efficiently while maintaining operational excellence and market leadership in their respective industries.",
            image: "./ImageCard3.png",
            buttonText: "Learn more"

        }
    ];

    return (
        <section ref={containerRef} id="features" className="w-full bg-[#E7EBE8] py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative min-h-[300vh]">
            {/* Heading */}
            <div className="text-center mb-12 ">
                <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl font-medium text-[#03030F]">
                    Our core <span id="highlight" className="italic">Features</span>
                </h2>
                <p className="text-[#4A4A4A] mt-3 text-sm sm:text-base">
                    From intelligent systems to expert execution, we help you move faster with confidence.
                </p>
            </div>
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex items-center justify-center">
                <div className="max-w-6xl mx-auto w-full relative h-[600px]">

                    {/* Card 1 */}
                    <motion.div
                        style={{
                            y: card1Y,
                            opacity: card1Opacity,
                            scale: card1Scale
                        }}
                        className="absolute inset-0 bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center h-full p-8 lg:p-12">
                            <div className="space-y-8">
                                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-lg font-bold">
                                    {cards[0].number}
                                </div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#03030F] leading-tight">
                                    {cards[0].title.part1}
                                    <span id="highlight" className="italic text-[#2E6153]">{cards[0].title.highlighted}</span>
                                    {cards[0].title.part2}
                                </h2>
                                <p className="text-[14px] text-gray-500 leading-relaxed">
                                    {cards[0].description}
                                </p>
                                <motion.div
                                    initial="initial"
                                    whileHover="hover"
                                    className="group"
                                >
                                    <button className="relative flex items-center justify-between gap-4 bg-[#2E6153] text-white pl-4.5 cursor-pointer pr-2.5 py-1.5 sm:pl-5 sm:py-1.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden w-fit max-w-xs">
                                        <motion.div
                                            variants={{
                                                rest: { scale: 0, opacity: 0 },
                                                hover: { scale: 12, opacity: 1 },
                                            }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            className="absolute right-2 sm:right-4 w-8 h-8 bg-white rounded-full pointer-events-none"
                                        />
                                        <span className="text-sm sm:text-base font-medium transition-all duration-300 z-50 group-hover:text-[#2E6153]">
                                            {cards[0].buttonText}
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
                            <div className="flex items-center justify-center">
    <img
        src={cards[0].image}
        className="object-contain w-full max-w-full h-[300px] sm:h-[400px] rounded-xl"
        alt={cards[0].title.part1 + cards[0].title.highlighted + cards[0].title.part2}
    />
</div>

                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        style={{
                            y: card2Y,
                            opacity: card2Opacity,
                            scale: card2Scale
                        }}
                        className="absolute inset-0 bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center h-full p-8 lg:p-12">
                            <div className="space-y-8">
                                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-lg font-bold">
                                    {cards[1].number}
                                </div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#03030F] leading-tight">
                                    {cards[1].title.part1}
                                    <span id="highlight" className="italic text-[#2E6153]">{cards[1].title.highlighted}</span>
                                    {cards[1].title.part2}
                                </h2>
                                <p className="text-[14px] text-gray-500 leading-relaxed">
                                    {cards[1].description}
                                </p>
                                <motion.div
                                    initial="initial"
                                    whileHover="hover"
                                    className="group"
                                >
                                    <button className="relative flex items-center justify-between gap-4 bg-[#2E6153] text-white pl-4.5 cursor-pointer pr-2.5 py-1.5 sm:pl-5 sm:py-1.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden w-fit max-w-xs group-hover:text-[#2E6153]">
                                        <motion.div
                                            variants={{
                                                rest: { scale: 0, opacity: 0 },
                                                hover: { scale: 12, opacity: 1 },
                                            }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            className="absolute right-2 sm:right-4 w-8 h-8 bg-white rounded-full pointer-events-none"
                                        />
                                        <span className="text-sm sm:text-base font-medium transition-all duration-300 z-50 group-hover:text-[#2E6153]">
                                            {cards[1].buttonText}
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
                            <div className="flex items-center justify-center">
                                <img
                                    src={cards[1].image}
                                    className="object-cover w-auto h-[400px] rounded-xl"
                                    alt={cards[1].title.part1 + cards[1].title.highlighted + cards[1].title.part2}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        style={{
                            y: card3Y,
                            opacity: card3Opacity,
                            scale: card3Scale
                        }}
                        className="absolute inset-0 bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center h-full p-8 lg:p-12">
                            <div className="space-y-8">
                                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-lg font-bold">
                                    {cards[2].number}
                                </div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#03030F] leading-tight">
                                    {cards[2].title.part1}
                                    <span id="highlight" className="italic text-[#2E6153]">{cards[2].title.highlighted}</span>
                                    {cards[2].title.part2}
                                </h2>
                                <p className="text-[14px] text-gray-500 leading-relaxed">
                                    {cards[2].description}
                                </p>
                                <motion.div
                                    initial="initial"
                                    whileHover="hover"
                                    className="group"
                                >
                                    <button className="relative flex items-center justify-between gap-4 bg-[#2E6153] text-white pl-4.5 cursor-pointer pr-2.5 py-1.5 sm:pl-5 sm:py-1.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden w-fit max-w-xs">
                                        <motion.div
                                            variants={{
                                                rest: { scale: 0, opacity: 0 },
                                                hover: { scale: 12, opacity: 1 },
                                            }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            className="absolute right-2 sm:right-4 w-8 h-8 bg-white rounded-full pointer-events-none"
                                        />
                                        <span className="text-sm sm:text-base font-medium transition-all duration-300 z-50 group-hover:text-[#2E6153]">
                                            {cards[2].buttonText}
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
                            <div className="flex items-center justify-center">
                                <img
                                    src={cards[2].image}
                                    className="object-cover w-auto h-[400px] rounded-xl"
                                    alt={cards[2].title.part1 + cards[2].title.highlighted + cards[2].title.part2}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}