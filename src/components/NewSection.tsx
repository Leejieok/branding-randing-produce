import type { FC } from 'react';
import { motion } from 'framer-motion';
import GradientButton from './GradientButton';
import { useIsMobile } from '../hooks/useIsMobile';

const services = [
  {
    title: '전문 관리팀 배정',
    description: '업종별 투자전문 담당자를 배정하여 최적의 제안과 최상의 서비스 제공'
  },
  {
    title: '초고속 승인',
    description: '업계 최고 속도로 상담, 접수부터 승인까지 초고속 처리'
  },
  {
    title: '무방문 접수',
    description: '모든 절차를 온라인으로 진행이 가능한 시스템'
  },
  {
    title: '평생 파트너',
    description: '승인 후에도 지속 관리 및 상담 서비스 제공'
  },
  {
    title: '서류 발급 대행',
    description: '수많은 경험을 갖춘 승인 최적화된 사업계획서 작성과 철저한 서류 준비'
  },
  {
    title: '실시간 추적 시스템',
    description: '모든 진행 상황을 실시간으로 투명하게 공유 및 확인 가능'
  }
];

// 서비스 카드 컴포넌트
const ServiceCard: FC<{ service: { title: string; description: string }; index: number }> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="flex flex-col items-center text-center"
    >
      {/* 캘린더 아이콘 */}
      <div className="mb-4">
        <img
          src="/src/assets/icons/CALENDAR.png"
          alt="Calendar Icon"
          className="w-20 h-20 md:w-24 md:h-24 object-contain"
        />
      </div>

      {/* 구분선 */}
      <div className="w-12 h-0.5 bg-white mb-3"></div>

      {/* 제목 */}
      <h3 className="text-lg md:text-xl font-bold text-white mb-2">
        {service.title}
      </h3>

      {/* 설명 */}
      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
};

// 모바일 NewSection 컴포넌트
const MobileNewSection: FC = () => {
  return (
    <section
      className="relative w-full py-12 px-4 tracking-tight"
      style={{
        background: 'linear-gradient(to bottom, #368989 0%, #252366 50%, #252525 100%)'
      }}
    >
      <div className="container max-w-6xl">
        {/* 상단 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-lg text-white mb-2">
            정책비서만의 특별 서비스
          </h2>
          <p className="text-2xl font-bold">
            <span className="bg-white px-0.5 py-0.5 rounded-lg inline-block"><span className="bg-gradient-to-r from-[#4DDDFF] to-[#4CB172] bg-clip-text text-transparent font-black">미세한 차이</span></span>
            <span className="text-white">가</span>
          </p>
          <p className="text-xl font-bold text-white">
            결과를 바꿉니다.
          </p>
        </motion.div>

        {/* 서비스 그리드 - 2-1-2-1 패턴 */}
        <div className="flex flex-col gap-6 mb-10">
          {/* 첫 번째 행: 2개 */}
          <div className="grid grid-cols-2 gap-6">
            {services.slice(0, 2).map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* 두 번째 행: 1개 (왼쪽) */}
          <div className="flex justify-start">
            <div className="w-1/2">
              <ServiceCard service={services[2]} index={2} />
            </div>
          </div>

          {/* 세 번째 행: 2개 */}
          <div className="grid grid-cols-2 gap-6">
            {services.slice(3, 5).map((service, index) => (
              <ServiceCard key={index + 3} service={service} index={index + 3} />
            ))}
          </div>

          {/* 네 번째 행: 1개 (왼쪽) */}
          <div className="flex justify-start">
            <div className="w-1/2">
              <ServiceCard service={services[5]} index={5} />
            </div>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="flex justify-center">
          <GradientButton text="이번 달 가능여부 조회하기" />
        </div>
      </div>
    </section>
  );
};

// PC NewSection 컴포넌트
const PcNewSection: FC = () => {
  return (
    <section
      className="relative w-full py-20 px-8 tracking-tight"
      style={{
        background: 'linear-gradient(to bottom, #368989 0%, #252366 50%, #252525 100%)'
      }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* 상단 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl text-white mb-4">
            정책비서만의 특별 서비스
          </h2>
          <p className="text-5xl font-bold">
            <span className="bg-white px-2 py-1 rounded-lg inline-block"><span className="bg-gradient-to-r from-[#4DDDFF] to-[#4CB172] bg-clip-text text-transparent font-black">미세한 차이</span></span>
            <span className="text-white">가</span>
          </p>
          <p className="text-4xl font-bold text-white mt-2">
            결과를 바꿉니다.
          </p>
        </motion.div>

        {/* 서비스 그리드 - 3열 그리드 */}
        <div className="grid grid-cols-3 gap-12 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* 하단 버튼 */}
        <div className="flex justify-center">
          <GradientButton text="이번 달 가능여부 조회하기" />
        </div>
      </div>
    </section>
  );
};

// 메인 NewSection 컴포넌트
const NewSection: FC = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileNewSection /> : <PcNewSection />;
};

export default NewSection;
