import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Menu } from 'lucide-react';
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // nav links scroll
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      }
    }
  };

  const mobileMenuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Teams", id: "teams" },
    { label: "Features", id: "features" },
    { label: "Projects", id: "projects" }
  ];

  return (
    <div id="home" className="min-h-screen bg-black overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 flex items-center px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300 z-999`}
      >
        <div
          className={`
      rounded-full px-4 sm:px-8 py-2.5 flex items-center w-full max-w-6xl 4k:max-w-[1800px] mx-auto shadow-lg transition-all duration-300
      ${isScrolled ? "bg-white backdrop-blur-xl shadow-lg" : "bg-transparent shadow-none"}
    `}
        >

          {/* Logo */}
          <h1 id='highlight' title='Fieldstone capital' className={`italic text-xl sm:text-2xl lg:text-3xl 4k:text-4xl font-medium cursor-pointer font-serif transition-all duration-300 ${isScrolled ? "text-[#2E6153]" : "text-white"
            }`}>
            Fieldstone
          </h1>

          {/* Desktop Navlinks */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-7 4k:gap-10 mx-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
      font-light transition text-sm lg:text-base 4k:text-lg whitespace-nowrap cursor-pointer
      ${isScrolled ? "text-[#03030F] hover:text-[#2E6153]" : "text-white hover:text-[#f7f7f4da]"}
    `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileHover="hover"
            className="hidden md:block"
          >
            <button className="relative flex items-center justify-between gap-3 bg-white text-[#2E6153] pl-3 sm:pl-4 4k:pl-5 pr-1.5 sm:pr-2 4k:pr-2.5 py-2 sm:py-2 4k:py-3 rounded-full font-medium transition-all duration-300 overflow-hidden cursor-pointer">

              {/* Hover expanding light animation */}
              <motion.div
                variants={{
                  rest: { scale: 0, opacity: 0 },
                  hover: { scale: 12, opacity: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute right-2 sm:right-1.2 4k:right-2 w-6 h-6 sm:w-8 sm:h-8 4k:w-10 4k:h-10 bg-[#2E6153]/10 rounded-full pointer-events-none"
              />
              {/* Text */}
              <span className="text-sm sm:text-base 4k:text-lg font-medium transition-all duration-300 group-hover:text-green-900 whitespace-nowrap cursor-pointer">
                Contact Us
              </span>

              {/* Arrow Circle Container */}
              <div className="relative w-6 h-6 sm:w-8 sm:h-8 4k:w-10 4k:h-10 bg-[#2E6153] rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:bg-green-900 group-hover:scale-110">
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
                  <ArrowUpRight className="w-3 h-3 sm:w-5 sm:h-5 4k:w-6 4k:h-6 text-white relative z-10" />
                </motion.div>
              </div>
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1 ml-auto p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 cursor-pointer transition-colors duration-300 ${isScrolled ? "text-gray-700" : "text-white"
                  }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 cursor-pointer transition-colors duration-300 ${isScrolled ? "text-gray-700" : "text-white"
                  }`}
              />
            )}
          </button>

        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-24 right-4 left-4 bg-white rounded-2xl shadow-2xl z-50 md:hidden overflow-hidden"
            >
              <div className="p-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    variants={mobileMenuItemVariants}
                    transition={{ delay: index * 0.1 }}
                    className="block w-full text-left py-3 px-4 text-[#03030F] font-light hover:text-[#2E6153] hover:bg-gray-50 rounded-lg transition-colors text-base"

                  >
                    {item.label}
                  </motion.button>
                ))}

                {/* Mobile Contact Button */}
                <motion.div
                  variants={mobileMenuItemVariants}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <button className="relative flex items-center justify-between cursor-pointer gap-3 bg-[#2E6153] text-white pl-4 pr-2 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden w-full">
                    <span className="text-sm font-medium">Contact Us</span>
                    <div className="relative w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#2E6153]" />
                    </div>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center pt-16 sm:pt-20 md:pt-24 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/bg.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/60" />
          <div className="absolute inset-0 bg-linear-to-l from-black/70 via-transparent to-black/50" />
        </div>

        {/* Content Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full flex flex-col sm:items-start items-center justify-center max-w-6xl 4k:max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-4 sm:mb-5 md:mb-6 4k:mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 4k:text-8xl font-semibold text-white leading-tighter text-balance">
              Powering the Future
              <br />
              <span id='highlight' className="italic font-light">through Investments</span>
            </h2>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg 4k:text-xl text-[#F7F7F4] max-w-xl 4k:max-w-2xl leading-relaxed text-center sm:text-left tracking-tight mb-6 sm:mb-8 md:mb-10 4k:mb-12 w-full font-normal"
          >
            Extraordinary returns are found at the intersection of structural inefficiency, complexity, and real-world necessity
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileHover="hover"
            className="group"
          >
            <button className="relative flex items-center justify-between gap-3 bg-white text-[#2E6153] pl-3 sm:pl-4 4k:pl-5 pr-1.5 sm:pr-2 4k:pr-2.5 py-2 sm:py-2 4k:py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-xl border border-gray-200 overflow-hidden cursor-pointer">

              {/* Hover expanding light animation */}
              <motion.div
                variants={{
                  rest: { scale: 0, opacity: 0 },
                  hover: { scale: 12, opacity: 1 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute right-2 sm:right-1.2 4k:right-2 w-6 h-6 sm:w-8 sm:h-8 4k:w-10 4k:h-10 bg-[#2E6153]/10 rounded-full pointer-events-none"
              />

              {/* Text */}
              <span className="text-sm sm:text-base 4k:text-lg font-medium transition-all duration-300 group-hover:text-green-900 whitespace-nowrap cursor-pointer">
                Learn more
              </span>

              {/* Arrow Circle Container */}
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 4k:w-10 4k:h-10 bg-[#2E6153] rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:bg-green-900 group-hover:scale-110 ">
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
                  <ArrowUpRight className="w-3 h-3 sm:w-5 sm:h-5 4k:w-6 4k:h-6 text-white relative z-10" />
                </motion.div>
              </div>
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-10 sm:bottom-10 2xl:bottom-20 4k:bottom-24 right-8 sm:right-12 lg:right-48 4k:right-56 max-w-xs sm:max-w-sm 4k:max-w-md text-right z-10"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl 4k:text-4xl font-bold text-white mb-2 sm:mb-3 4k:mb-4 text-balance">
            Let's Move Your Business Forward
          </h3>
          <p className="text-xs sm:text-sm 4k:text-base text-gray-300 text-balance">
            Success doesn't happen by chance—it's built on strategy, expertise, and relentless execution.
          </p>
        </motion.div>
      </div>
    </div>
  );
}