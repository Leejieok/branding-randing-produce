import type { FC } from 'react';
import { motion } from 'framer-motion';

const Hero: FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary text-white">
      {/* Background Gradient/Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-900 to-slate-800 z-0" />
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 border border-accent/30">
            1:1 비공개 무료상담
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            모든 채무를 <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              정리해 드립니다
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            개인회생, 파산, 신용회복까지. <br className="hidden md:block" />
            정책비서가 당신의 새로운 출발을 응원합니다.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-lg font-semibold text-lg shadow-lg shadow-blue-500/30 transition-all duration-300"
          >
            무료 상담 신청하기
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
