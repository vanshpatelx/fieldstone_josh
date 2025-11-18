import { motion } from 'framer-motion';
import { ArrowUpRight, } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const About = ({
    from = 0,
    to = 25,
    duration = 2,
    suffix = "+"
}) => {

    const [count, setCount] = useState(from);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView) {
            const startTime = Date.now();
            const endTime = startTime + duration * 1000;

            const updateCount = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / (duration * 1000), 1);

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentCount = Math.floor(from + (to - from) * easeOutQuart);

                setCount(currentCount);

                if (now < endTime) {
                    requestAnimationFrame(updateCount);
                } else {
                    setCount(to);
                }
            };

            requestAnimationFrame(updateCount);
        }
    }, [inView, from, to, duration]);
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <>
            {/* About Us Section */}
            <section id='about' className="relative w-full min-h-screen bg-[#F7F7F4] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl 2xl:max-w-7xl 4k:max-w-[1800px] mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl 4k:text-6xl font-medium text-[#03030F] mb-12 max-w-3xl 4k:max-w-4xl">
                        Fieldstone is a private equity firm focused on <span id='highlight' className="italic font-light tracking-14">essential energy</span> and critical mineral
                        assets in
                        <span id='highlight' className="italic font-light tracking-14"> high-growth markets.</span>
                        <br />
                    </h2>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-20 4k:gap-32 items-end justify-between"
                    >
                        {/* Column 1: Description */}
                        <motion.div variants={itemVariants} className="flex flex-col justify-between gap-28 4k:gap-36 w-full order-2 lg:order-1">
                            <p className="text-sm sm:text-base 4k:text-lg text-[#02020B] leading-snug tracking-tighter text-balance font-light">
                                Established in 1990 in New York, Fieldstone began as an investment bank specializing in project finance for energy and infrastructure. Decades of execution inform how we underwrite, structure, and operate assets today. We now deploy private equity to create value through active ownership, disciplined risk management, and complex structuring.
                            </p>
                            <div ref={ref} className="border-l-4 border-[#2E6153] pl-6 4k:pl-8">
                                <motion.h3
                                    className="text-4xl md:text-6xl 4k:text-7xl font-bold text-gray-900 mb-2"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {count}{suffix}
                                </motion.h3>
                                <p className="text-gray-600 font-medium 4k:text-lg">Successful Projects Delivered</p>
                            </div>
                        </motion.div>

                        {/* Column 2: img  */}
                        <motion.div variants={itemVariants} className="flex flex-col gap-8 4k:gap-12 w-full order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="w-full h-60 sm:h-88 4k:h-96 rounded-2xl overflow-hidden shadow-lg"
                            >
                                <img
                                    src="/about.png"
                                    alt="Business Team"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Column 3: Stats */}
                        <motion.div variants={itemVariants} className="flex flex-col gap-8 4k:gap-12 order-3 lg:order-3">
                            {/* Services Card */}
                            <div className="bg-white rounded-xl shadow-lg py-8 px-6 w-full  4k:max-w-sm 4k:py-10 4k:px-8 space-y-3 4k:space-y-4">

                                {/* Single Pin Icon */}
                                <div className="text-[#2E6153] text-xl 4k:text-2xl">📌</div>

                                {/* Service Items */}
                                <div className="space-y-2 text-[#03030F]/70 text-sm sm:text-[14px] 4k:text-base font-normal">

                                    <p>Fieldstone is a private equity firm</p>

                                    <p>Focused on essential energy & critical minerals</p>

                                    <p>Established in 1990 in New York</p>

                                    <p>Specialized in project finance for energy & infrastructure</p>

                                </div>
                            </div>

                            {/* CTA Button */}
                            <motion.div
                                variants={containerVariants}
                                initial="initial"
                                whileHover="hover"
                                className="group"
                            >
                                <button className="relative flex items-center justify-between gap-4 bg-[#2E6153] text-white pl-4.5 cursor-pointer pr-2.5 py-2 sm:pl-5 sm:py-1.5 4k:pl-6 4k:py-2.5 4k:text-lg rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden w-fit border max-w-xs">

                                    {/* Hover expanding animation */}
                                    <motion.div
                                        variants={{
                                            rest: { scale: 0, opacity: 0 },
                                            hover: { scale: 12, opacity: 1 },
                                        }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="absolute right-2 sm:right-4 4k:right-5 w-8 h-8 4k:w-10 4k:h-10 bg-white rounded-full pointer-events-none"
                                    />

                                    {/* Text */}
                                    <span className="text-sm sm:text-base 4k:text-lg font-medium transition-all duration-300 z-50 group-hover:text-[#2E6153]">
                                        Book A Free Call
                                    </span>

                                    {/* Arrow Circle Container */}
                                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 4k:w-12 4k:h-12 bg-white rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:bg-white group-hover:scale-110 z-20">

                                        {/* Main Arrow */}
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
                                            <ArrowUpRight className="w-5 h-5 4k:w-6 4k:h-6 text-[#2E6153] relative z-10" />
                                        </motion.div>
                                    </div>
                                </button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default About;