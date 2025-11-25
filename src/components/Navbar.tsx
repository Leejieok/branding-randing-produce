import { type FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center"
                    >
                        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tertiary">
                            정책비서
                        </h1>
                    </motion.div>

                    {/* Desktop Menu */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="hidden md:flex items-center gap-8"
                    >
                        <a href="#services" className="text-white/80 hover:text-white transition-colors duration-200">
                            서비스
                        </a>
                        <a href="#process" className="text-white/80 hover:text-white transition-colors duration-200">
                            진행과정
                        </a>
                        <a href="#reviews" className="text-white/80 hover:text-white transition-colors duration-200">
                            후기
                        </a>
                        <button className="px-6 py-2 bg-gradient-to-r from-secondary to-primary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300">
                            상담신청
                        </button>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
                        aria-label="메뉴"
                    >
                        <motion.span
                            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-white rounded-full transition-all"
                        />
                        <motion.span
                            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-0.5 bg-white rounded-full transition-all"
                        />
                        <motion.span
                            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-white rounded-full transition-all"
                        />
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
                        className="md:hidden bg-background/95 backdrop-blur-lg border-t border-white/10 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            <a
                                href="#services"
                                onClick={toggleMenu}
                                className="text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-200"
                            >
                                서비스
                            </a>
                            <a
                                href="#process"
                                onClick={toggleMenu}
                                className="text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-200"
                            >
                                진행과정
                            </a>
                            <a
                                href="#reviews"
                                onClick={toggleMenu}
                                className="text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-200"
                            >
                                후기
                            </a>
                            <button className="w-full px-6 py-3 bg-gradient-to-r from-secondary to-primary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300">
                                상담신청
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
