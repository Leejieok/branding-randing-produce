import type { FC } from 'react';
import GradientButton from './GradientButton';
import bearCTA from '../assets/images/bearCTA.png';
import { useIsMobile } from '../hooks/useIsMobile';

// 모바일 ConsultationCTA 컴포넌트
const MobileConsultationCTA: FC = () => {
  return (
    <section className="py-10 bg-white text-black text-center tracking-tight">
      <div className="container mx-auto px-6 pb-4">
        <span className="text-xl font-bold mb-8 bg-gradient-to-r from-[#14A7C0] to-[#6F18CE] bg-clip-text text-transparent tracking-tight">
          정책자금
        </span>
        <span className="text-xl font-bold mb-8 tracking-tight"> 나도 해당될까?</span>
      </div>
      <div className="container mx-auto px-6">
        <p>업종별 최대 한도</p>
        <p>10억 원까지 가능!</p>
        <p>지금 바로 상담신청 해보세요!</p>
        <img src={bearCTA} alt="Consultation Bear" className="mx-auto my-8 max-w-[200px]" />
        <div className="flex justify-center">
          <GradientButton text="무료 상담 신청하기" />
        </div>
      </div>
    </section>
  );
};

// PC ConsultationCTA 컴포넌트
const PcConsultationCTA: FC = () => {
  return (
    <section className="py-16 bg-white text-black text-center tracking-tight">
      <div className="container mx-auto px-8 pb-6">
        <span className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#14A7C0] to-[#6F18CE] bg-clip-text text-transparent tracking-tight">
          정책자금
        </span>
        <span className="text-3xl font-bold mb-8 tracking-tight"> 나도 해당될까?</span>
      </div>
      <div className="container mx-auto px-8">
        <p className="text-xl">업종별 최대 한도</p>
        <p className="text-2xl font-bold">10억 원까지 가능!</p>
        <p className="text-lg mt-2">지금 바로 상담신청 해보세요!</p>
        <img src={bearCTA} alt="Consultation Bear" className="mx-auto my-10 max-w-[300px]" />
        <div className="flex justify-center">
          <GradientButton text="무료 상담 신청하기" />
        </div>
      </div>
    </section>
  );
};

// 메인 ConsultationCTA 컴포넌트
const ConsultationCTA: FC = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileConsultationCTA /> : <PcConsultationCTA />;
};

export default ConsultationCTA;
