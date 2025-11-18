import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#F7F7F5] pt-12 pb-8 px-4 sm:px-6 lg:px-20">
            <div className="max-w-6xl mx-auto w-full">
                {/* TOP SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-8 lg:gap-10">

                    {/* mail */}
                    <div className="w-full">
                        <h3 className="text-xl sm:text-2xl font-medium text-[#03030F] mb-4">Get in Touch</h3>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-2xl sm:rounded-full p-1 shadow-sm w-full max-w-md">
                            <input
                                type="text"
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 sm:py-3 text-[#03030F] bg-transparent outline-none rounded-2xl sm:rounded-none"
                            />
                            <button className="bg-[#2E6153] hover:bg-[#265045] cursor-pointer text-white px-6 py-3 rounded-full sm:rounded-full font-medium flex items-center justify-center gap-2 transition-all mt-2 sm:mt-0 sm:ml-2">
                                Send <ArrowUpRight size={20} className="sm:w-6 sm:h-6" />
                            </button>
                        </div>

                        <p className="mt-3 text-gray-600 text-sm sm:text-base">
                            Let's transform your vision into results.
                        </p>
                    </div>

                    {/* ADDRESS */}
                    <div className="w-full">
                        <p className="text-gray-600 text-sm sm:text-base">Visit Us</p>
                        <p className="text-base sm:text-lg font-light text-[#03030F] leading-relaxed">
                            Republic of Kazakhstan, Astana city, Yessil district, Mangilik El avenue, building 55/20,
                            Z05T3D0, block C4.1, office No.318
                        </p>
                    </div>
                </div>

                {/* MIDDLE CONTACT ROW */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-14 mt-12 sm:mt-16">
                    {/* EMAIL */}
                    <div className="w-full">
                        <p className="text-gray-600 text-sm sm:text-base">Email</p>
                        <p className="text-base sm:text-lg font-light text-[#03030F] wrap-break-word">
                            info@fieldstone.capital
                        </p>
                    </div>

                    {/* PHONE */}
                    <div className="w-full sm:pl-0 lg:pl-8">
                        <p className="text-gray-600 text-sm sm:text-base">Call us Now</p>
                        <p className="text-base sm:text-lg font-light italic text-[#03030F]">
                            +91 99660 88441
                        </p>
                    </div>
                </div>

                {/* BLUE BOTTOM BAR */}
                <div className="bg-[#2E6153] text-white mt-12 sm:mt-20 rounded-xl p-6 sm:p-8 flex flex-col gap-6">

                    {/* BRAND & LINKS CONTAINER */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                        {/* LEFT BRAND */}
                        <div id="highlight" className="italic text-2xl sm:text-3xl font-normal tracking-wide text-center sm:text-left">
                            Fieldstone
                        </div>

                        {/* SOCIAL LINKS */}
                        <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6 text-sm opacity-90 flex-wrap">
                            <span className="hover:underline cursor-pointer">Twitter</span>
                            <span className="hover:underline cursor-pointer">LinkedIn</span>
                            <span className="hover:underline cursor-pointer">Facebook</span>
                            <span className="hover:underline cursor-pointer">Instagram</span>
                        </div>
                    </div>

                    {/* POLICY LINKS */}
                    <div className="flex items-center justify-center sm:justify-end gap-4 text-sm opacity-90 flex-wrap">
                        <span className="hover:underline cursor-pointer">Accessibility statement</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="hover:underline cursor-pointer">Privacy policy</span>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <p className="text-gray-500 text-center mt-6 text-xs sm:text-sm">
                    © 2025. All rights reserved by Fieldstone.
                </p>
            </div>
        </footer>
    );
}