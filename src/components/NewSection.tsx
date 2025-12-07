import type { FC } from 'react';
import { motion } from 'framer-motion';
import GradientButton from './GradientButton';

const NewSection: FC = () => {
  const services = [
    // ... (기존 데이터 유지)
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

  return (
    <section
      className="relative w-full py-16 px-4"
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
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            정책비서만의 특별 서비스
          </h2>
          <p className="text-3xl md:text-4xl font-bold">
            <span className="text-cyan-400">미래한 지원</span>
            <span className="text-white">가</span>
          </p>
          <p className="text-2xl md:text-3xl font-bold text-white">
            결과를 바꿉니다.
          </p>
        </motion.div>

        {/* 서비스 그리드 - 2-1-2-1 패턴 */}
        <div className="flex flex-col gap-6 md:gap-8 mb-12">
          {/* 첫 번째 행: 2개 */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {services.slice(0, 2).map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* 두 번째 행: 1개 (왼쪽) */}
          <div className="flex justify-start">
            <div className="w-full md:w-1/2">
              <ServiceCard service={services[2]} index={2} />
            </div>
          </div>

          {/* 세 번째 행: 2개 */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {services.slice(3, 5).map((service, index) => (
              <ServiceCard key={index + 3} service={service} index={index + 3} />
            ))}
          </div>

          {/* 네 번째 행: 1개 (왼쪽) */}
          <div className="flex justify-start">
            <div className="w-full md:w-1/2">
              <ServiceCard service={services[5]} index={5} />
            </div>
          </div>
        </div>

        {/* 하단 버튼 (테스트용) */}
        <div className="flex justify-center">
          <GradientButton text="이번 달 가능여부 조회하기" />
        </div>
      </div>
    </section>
  );
};

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

export default NewSection;
