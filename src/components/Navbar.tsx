import { type FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import navLogo from '../assets/images/navlogo.png';

const Navbar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#5B4E7E]/95 backdrop-blur-lg">
            <div className="container mx-auto px-4">
                <div className="flex items-center h-14 md:h-16 relative">
                    {/* Mobile Menu Button - Left */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1 focus:outline-none z-10"
                        aria-label="메뉴"
                    >
                        <motion.span
                            animate={isMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                            className="w-5 h-0.5 bg-white rounded-full transition-all"
                        />
                        <motion.span
                            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-5 h-0.5 bg-white rounded-full transition-all"
                        />
                        <motion.span
                            animate={isMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                            className="w-5 h-0.5 bg-white rounded-full transition-all"
                        />
                    </button>

                    {/* Logo - Absolute Center */}
                    <div className="absolute left-0 right-0 flex justify-center pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="pointer-events-auto"
                        >
                            <img
                                src={navLogo}
                                alt="정책비서"
                                className="h-8 md:h-10 w-auto"
                            />
                        </motion.div>
                    </div>

                    {/* Desktop Menu - Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="hidden md:flex items-center gap-8 ml-auto"
                    >
                        <a href="#services" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
                            서비스
                        </a>
                        <a href="#process" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
                            진행과정
                        </a>
                        <a href="#reviews" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
                            후기
                        </a>
                        <button className="px-4 py-1.5 bg-transparent text-white text-sm rounded-full font-semibold border-[3px] border-transparent bg-clip-padding relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30">
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-green-400 opacity-100"></span>
                            <span className="absolute inset-[3px] rounded-full bg-[#5B4E7E]"></span>
                            <span className="relative z-10 text-white">상담신청</span>
                        </button>
                    </motion.div>

                    {/* Mobile Consultation Button - Right */}
                    <button className="md:hidden px-3 py-1 bg-transparent text-white text-xs rounded-full font-semibold border-[3px] border-transparent bg-clip-padding relative overflow-hidden transition-all duration-300 ml-auto z-10">
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-green-400 opacity-100"></span>
                        <span className="absolute inset-[3px] rounded-full bg-[#5B4E7E]"></span>
                        <span className="relative z-10 text-white">상담예약</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#5B4E7E]/98 backdrop-blur-lg border-t border-white/10 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            <a
                                href="#services"
                                onClick={toggleMenu}
                                className="text-white/90 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium"
                            >
                                서비스
                            </a>
                            <a
                                href="#process"
                                onClick={toggleMenu}
                                className="text-white/90 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium"
                            >
                                진행과정
                            </a>
                            <a
                                href="#reviews"
                                onClick={toggleMenu}
                                className="text-white/90 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium"
                            >
                                후기
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
