import type { FC } from 'react';
import { motion } from 'framer-motion';
import ApprovalGauge from './ApprovalGauge';
import PolicyFundCard from './PolicyFundCard';
import SpecialBenefit from './SpecialBenefit';
import { useIsMobile } from '../hooks/useIsMobile';

// 이미지 import
import chartLineImage from '../assets/images/chart-line.png';

// 모바일 Hero 컴포넌트
const MobileHero: FC = () => {
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
          backgroundImage: `url(${chartLineImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
        }}
      />

      <div className="mx-auto px-4 py-4 relative z-10">
        {/* Flex 컨테이너: 텍스트와 게이지를 가로로 배치 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-row items-center justify-between"
        >
          {/* 텍스트 영역 */}
          <h1 className="text-xl font-bold leading-tight text-white tracking-tight shrink-0">
            <span className="block">한 사람을 위한</span>
            <span className="block">한 사람에 의한</span>

            <span className="block mt-1 text-[#4ade80] whitespace-nowrap">
              나만의 맞춤 설계
            </span>
          </h1>

          {/* 게이지 영역 */}
          <div className="flex-shrink-0 transform scale-90 origin-right">
            <ApprovalGauge percentage={94.65} label="승인률" />
          </div>
        </motion.div>
        <PolicyFundCard delay={0.2} />
        <SpecialBenefit delay={0.4} />
      </div>
    </section>
  );
};

// PC Hero 컴포넌트
const PcHero: FC = () => {
  return (
    <section
      className=" relative overflow-hidden pt-24"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      }}
    >
      {/* 배경 장식 요소 */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-20"
        style={{
          background: 'radial-gradient(circle at 80% 30%, #372AF2 0%, transparent 50%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-10"
        style={{
          background: 'radial-gradient(circle at 20% 80%, #4ade80 0%, transparent 50%)',
        }}
      />
      <div className="container mx-auto px-12 py-20 relative z-10">
        {/* 상단: 타이틀 + 통계카드 (50/50 분할) */}
        <div className="flex flex-row items-start justify-between gap-16 mb-12">

          {/* 왼쪽: 메인 타이틀 + 서브 텍스트 */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* 메인 타이틀 */}
              <h1 className="text-7xl font-extrabold leading-tight text-white tracking-tight mb-6">
                <span className="block">한 사람을 위한</span>
                <span className="block">한 사람에 의한</span>
                <span
                  className="block mt-4 bg-gradient-to-r from-[#4ade80] to-[#22d3ee] bg-clip-text text-transparent"
                >
                  나만의 맞춤 설계
                </span>
              </h1>

              {/* 서브 텍스트 */}
              <p className="text-xl text-gray-400 mt-6 leading-relaxed">
                정책자금 전문가가 최적의 자금 솔루션을 제안합니다
              </p>
            </motion.div>
          </div>

          {/* 오른쪽: 통계 카드 영역 */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-8"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-12 py-10 border border-white/20 min-w-[400px]">
                <p className="text-gray-400 text-lg mb-3">누적 승인 금액</p>
                <p className="text-5xl font-bold text-white">1,200억+</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-12 py-10 border border-white/20 min-w-[400px]">
                <p className="text-gray-400 text-lg mb-3">평균 처리 기간</p>
                <p className="text-5xl font-bold text-[#4ade80]">7일</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 하단: 게이지 + PolicyFundCard (전체 너비 사용) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-row items-center justify-between"
        >
          <div className="transform scale-110">
            <ApprovalGauge percentage={94.65} label="승인률" />
          </div>

          {/* PolicyFundCard - 오른쪽 정렬 */}
          <div className="flex-1 flex justify-end">
            <PolicyFundCard delay={0.3} />
          </div>
        </motion.div>

        {/* 하단: SpecialBenefit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-2"
        >
          <SpecialBenefit delay={0.6} />
        </motion.div>
      </div>
    </section>
  );
};

// 메인 Hero 컴포넌트
const Hero: FC = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileHero /> : <PcHero />;
};

export default Hero;