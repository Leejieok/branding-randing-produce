import { type FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import navLogo from '../assets/images/navlogo.png';
import { useIsMobile } from '../hooks/useIsMobile';
import ConsultationSlidePanel from './ConsultationSlidePanel';

// 모바일 네비게이션 컴포넌트
const MobileNav: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isConsultationOpen, setIsConsultationOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const openConsultation = () => {
        setIsConsultationOpen(true);
    };

    const closeConsultation = () => {
        setIsConsultationOpen(false);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#5B4E7E]/95 backdrop-blur-lg">
                <div className="container mx-auto px-4">
                    <div className="flex items-center h-14 relative">
                        {/* Mobile Menu Button - Left */}
                        <button
                            onClick={toggleMenu}
                            className="w-8 h-8 flex flex-col items-center justify-center gap-1 focus:outline-none z-10"
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
                                    className="h-8 w-auto"
                                />
                            </motion.div>
                        </div>

                        {/* Mobile Consultation Button - Right */}
                        <button
                            onClick={openConsultation}
                            className="px-3 py-1 bg-transparent text-white text-xs rounded-full font-semibold border-[3px] border-transparent bg-clip-padding relative overflow-hidden transition-all duration-300 ml-auto z-10"
                        >
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
                            className="bg-[#5B4E7E]/98 backdrop-blur-lg border-t border-white/10 overflow-hidden"
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

            {/* Consultation Slide Panel */}
            <ConsultationSlidePanel
                isOpen={isConsultationOpen}
                onClose={closeConsultation}
            />
        </>
    );
};

// PC 네비게이션 컴포넌트
const PcNav: FC = () => {
    const [isConsultationOpen, setIsConsultationOpen] = useState(false);

    const openConsultation = () => {
        setIsConsultationOpen(true);
    };

    const closeConsultation = () => {
        setIsConsultationOpen(false);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#5B4E7E]/95 backdrop-blur-lg">
                <div className="container mx-auto px-8">
                    <div className="flex items-center h-20 relative">
                        {/* Logo - Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex-shrink-0"
                        >
                            <img
                                src={navLogo}
                                alt="정책비서"
                                className="h-12 w-auto"
                            />
                        </motion.div>

                        {/* Desktop Menu - Center (viewport 기준) */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="fixed left-1/2 transform -translate-x-1/2 flex items-center gap-12"
                        >
                            <a href="#services" className="text-white/90 hover:text-white transition-colors duration-200 font-medium text-lg">
                                서비스
                            </a>
                            <a href="#process" className="text-white/90 hover:text-white transition-colors duration-200 font-medium text-lg">
                                진행과정
                            </a>
                            <a href="#reviews" className="text-white/90 hover:text-white transition-colors duration-200 font-medium text-lg">
                                후기
                            </a>
                        </motion.div>

                        {/* Consultation Button - Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="ml-auto"
                        >
                            <button
                                onClick={openConsultation}
                                className="px-6 py-2 bg-transparent text-white text-sm rounded-full font-semibold border-[3px] border-transparent bg-clip-padding relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30"
                            >
                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-green-400 opacity-100"></span>
                                <span className="absolute inset-[3px] rounded-full bg-[#5B4E7E]"></span>
                                <span className="relative z-10 text-white">상담신청</span>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </nav>

            {/* Consultation Slide Panel */}
            <ConsultationSlidePanel
                isOpen={isConsultationOpen}
                onClose={closeConsultation}
            />
        </>
    );
};

// 메인 Navbar 컴포넌트
const Navbar: FC = () => {
    const isMobile = useIsMobile();

    return isMobile ? <MobileNav /> : <PcNav />;
};

export default Navbar;
