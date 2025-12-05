import type { FC } from 'react';
import { motion } from 'framer-motion';
import ApprovalGauge from './ApprovalGauge';
import PolicyFundCard from './PolicyFundCard';
import SpecialBenefit from './SpecialBenefit';

const Hero: FC = () => {
  return (
    <section className="pt-16 relative" style={{ background: 'radial-gradient(circle at 100% 50%, #372AF2 0%, #242424 70%)' }}>
      {/* Background image with opacity - starts 140px from top */}
      <div
        className="absolute z-0"
        style={{
          top: '140px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/src/assets/images/chart-line.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
        }}
      />

      <div className="mx-auto px-4 py-4 lg:py-12 relative z-10">

        {/* Flex 컨테이너: 텍스트와 게이지를 가로로 배치 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-row items-center justify-between lg:justify-start lg:gap-12"
        >
          {/* 텍스트 영역 */}
          <h1 className="text-xl md:text-4xl lg:text-6xl font-bold leading-tight text-white tracking-tight shrink-0">
            <span className="block">한 사람을 위한</span>
            <span className="block">한 사람에 의한</span>

            <span className="block mt-1 text-[#4ade80] whitespace-nowrap">
              나만의 맞춤 설계
            </span>
          </h1>

          {/* 게이지 영역 */}
          <div className="flex-shrink-0 transform scale-90 origin-right md:scale-100">
            <ApprovalGauge percentage={94.65} label="승인률" />
          </div>
        </motion.div>
        <PolicyFundCard delay={0.2} />
        <SpecialBenefit delay={0.4} />

      </div>
    </section>
  );
};

export default Hero;