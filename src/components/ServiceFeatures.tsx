import type { FC } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';

const features = [
  '사업자등록 보유 신청가능',
  '신용점수 450점 이상 신청가능',
  '창업 3개월 이상 신청가능',
  '예비 창업자 신청가능',
  '국내 사업장 보유 신청가능',
  '휴업, 폐업이 아닌 경우 신청가능',
  '유흥업, 향락산업, 도박이 아닌 경우 신청가능'
];

// 체크리스트 아이템 컴포넌트
const ChecklistItem: FC<{ feature: string; index: number }> = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
    className="flex items-start gap-3"
  >
    {/* 체크박스 아이콘 */}
    <div className="flex-shrink-0 w-6 h-6 mt-0.5">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#00D9FF" />
        <path
          d="M7 12L10.5 15.5L17 9"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>

    {/* 텍스트 */}
    <p className="text-gray-800 text-base md:text-lg font-medium leading-relaxed">
      {feature.split(' ').map((word, i) => (
        <span key={i}>
          {word.includes('신청가능') ? (
            <span className="text-red-500 font-bold">{word}</span>
          ) : (
            word
          )}
          {i < feature.split(' ').length - 1 && ' '}
        </span>
      ))}
    </p>
  </motion.div>
);

// 모바일 ServiceFeatures 컴포넌트
const MobileServiceFeatures: FC = () => {
  return (
    <section className="relative w-full bg-[#2A2A2A] text-white py-12 px-4 overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col items-center">
          {/* 상단 텍스트 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl font-bold mb-3">
              저도 가능할까요?
            </h2>
            <p className="text-lg text-gray-300">
              하나씩 체크해보세요!
            </p>
          </motion.div>

          {/* OK 손 이미지 + 꽃가루 오버레이 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 relative"
          >
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                backgroundImage: 'url(/src/assets/images/pretty.png)',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <img
              src="/src/assets/images/ok.png"
              alt="OK Hand"
              className="w-48 h-48 object-contain relative z-0"
            />
          </motion.div>

          {/* 체크리스트 카드 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-6 shadow-2xl w-full max-w-md"
          >
            <div className="space-y-3">
              {features.map((feature, index) => (
                <ChecklistItem key={index} feature={feature} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// PC ServiceFeatures 컴포넌트
const PcServiceFeatures: FC = () => {
  return (
    <section className="relative w-full bg-[#2A2A2A] text-white py-20 px-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center">
          {/* 상단 텍스트 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-5xl font-bold mb-4">
              저도 가능할까요?
            </h2>
            <p className="text-2xl text-gray-300">
              하나씩 체크해보세요!
            </p>
          </motion.div>

          {/* OK 손 이미지 + 꽃가루 오버레이 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10 relative"
          >
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                backgroundImage: 'url(/src/assets/images/pretty.png)',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <img
              src="/src/assets/images/ok.png"
              alt="OK Hand"
              className="w-80 h-80 object-contain relative z-0"
            />
          </motion.div>

          {/* 체크리스트 카드 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-10 shadow-2xl w-full max-w-lg"
          >
            <div className="space-y-4">
              {features.map((feature, index) => (
                <ChecklistItem key={index} feature={feature} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 메인 ServiceFeatures 컴포넌트
const ServiceFeatures: FC = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileServiceFeatures /> : <PcServiceFeatures />;
};

export default ServiceFeatures;
