import type { FC } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

// 반원 게이지 프로그레스 컴포넌트
const SemiCircleGauge: FC<{ percentage: number; totalAmount: string }> = ({ percentage, totalAmount }) => {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedPercentage(percentage);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isInView, percentage]);

  // 반원 경로 계산
  const radius = 120;
  const strokeWidth = 20;
  const centerX = 150;
  const centerY = 140;
  const circumference = Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * animatedPercentage) / 100;

  return (
    <div className="gauge-container">
      <div className="gauge-header">
        <span className="gauge-label">승인 정책자금</span>
        <span className="gauge-amount">
          <strong>{totalAmount}</strong>원
        </span>
      </div>
      <div className="gauge-wrapper">
        <svg
          ref={ref}
          width="320"
          height="180"
          viewBox="0 0 300 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gaugeGradient" x1="10" y1="87" x2="290" y2="87" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2F9185" />
              <stop offset="30%" stopColor="#6E91B2" />
              <stop offset="60%" stopColor="#A0A0CD" />
              <stop offset="100%" stopColor="#A5FECB" />
            </linearGradient>
            <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 배경 트랙 */}
          <path
            d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
            stroke="#333333"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
          />

          {/* 진행 바 */}
          <motion.path
            d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
            stroke="url(#gaugeGradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: isInView ? strokeDashoffset : circumference }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
            filter="url(#glowFilter)"
          />

          {/* 끝점 원형 인디케이터 */}
          {isInView && (
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <circle
                cx={centerX + radius * Math.cos(Math.PI - (Math.PI * animatedPercentage) / 100)}
                cy={centerY - radius * Math.sin(Math.PI * animatedPercentage / 100)}
                r="15"
                fill="rgba(165, 254, 203, 0.3)"
                filter="url(#glowFilter)"
              />
              <circle
                cx={centerX + radius * Math.cos(Math.PI - (Math.PI * animatedPercentage) / 100)}
                cy={centerY - radius * Math.sin(Math.PI * animatedPercentage / 100)}
                r="8"
                fill="#A5FECB"
              />
            </motion.g>
          )}
        </svg>

        {/* 중앙 텍스트 */}
        <div className="gauge-center-text">
          <span className="gauge-center-label">승인률</span>
          <motion.div
            className="gauge-center-value"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <strong>{animatedPercentage}</strong>%
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// 차트 컴포넌트
const AnimatedChart: FC = () => {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div className="chart-container">
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="300"
        viewBox="7 -20 692 336"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="chartFillGradient" x1="7" y1="72" x2="7" y2="372" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2F9185" />
            <stop offset="0.3" stopColor="#6E91B2" stopOpacity="0.7" />
            <stop offset="0.55" stopColor="#A0A0CD" stopOpacity="0.45" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="chartLineGradient" x1="466" y1="234" x2="571" y2="268" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A5FECB" />
            <stop offset="1" stopColor="#639879" stopOpacity="0.1" />
          </linearGradient>
          <filter id="chartGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 영역 채우기 */}
        <motion.path
          d="M7 294V56C180.523 58.3662 301.949 153.093 403 209C521.311 274.456 637 270 637 270V294H7Z"
          fill="url(#chartFillGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 0.6 : 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* 라인 */}
        <motion.path
          d="M7 57C287.068 64.1084 329.461 240.175 637 278.087"
          stroke="url(#chartLineGradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#chartGlow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
        />

        {/* 시작점 라벨 */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <text x="50" y="40" fill="white" fontSize="14" opacity="0.8">
            3년 전 원금
          </text>
          <text x="50" y="60" fill="white" fontSize="12" opacity="0.6">
            3억 9,993만원 대출
          </text>
        </motion.g>

        {/* 끝점 마커 */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <circle cx="637" cy="278" r="12" fill="#29FF58" opacity="0.8" filter="url(#chartGlow)" />
          <circle cx="637" cy="278" r="6" fill="white" />
        </motion.g>

        {/* 끝점 라벨 */}
        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          <text x="520" y="265" fill="white" fontSize="14" opacity="0.8">
            현재 총 채무액
          </text>
          <text x="520" y="285" fill="#A5FECB" fontSize="12">
            3천 9백만원
          </text>
        </motion.g>

        {/* DOWN 뱃지 */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <rect x="290" y="80" rx="20" ry="20" width="82" height="40" fill="#63FFA6" />
          <text x="331" y="106" fill="black" fontSize="16" fontWeight="bold" textAnchor="middle">
            DOWN
          </text>
          <polygon points="331,120 321,128 341,128" fill="#63FFA6" />
        </motion.g>

        {/* 90% 표시 */}
        <motion.text
          x="320"
          y="60"
          fill="#A5FECB"
          fontSize="24"
          fontWeight="bold"
          textAnchor="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          filter="url(#chartGlow)"
        >
          90.%
        </motion.text>

        {/* 금액 라벨 */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <text x="450" y="200" fill="white" fontSize="12" opacity="0.8">
            3억 9,993만원 탕감
          </text>
        </motion.g>
      </svg>
    </div>
  );
};

// 체크 아이콘 컴포넌트
const CheckIcon: FC<{ color: string; isVisible: boolean; delay: number }> = ({ color, isVisible, delay }) => (
  <motion.svg
    className="check-icon"
    width="28"
    height="28"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ scale: 0 }}
    animate={{ scale: isVisible ? 1 : 0 }}
    transition={{ duration: 0.4, delay }}
  >
    <motion.circle
      cx="15.5"
      cy="15.5"
      r="15"
      fill={color}
      fillOpacity="0.4"
      initial={{ scale: 0 }}
      animate={{ scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3, delay }}
    />
    <motion.path
      d="M9.5 15.5L13.5 20L21.5 11"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, delay: delay + 0.2 }}
    />
  </motion.svg>
);

// 혜택 아이템 컴포넌트
interface BenefitItemProps {
  text: string;
  keyword: string;
  color: string;
  isVisible: boolean;
  index: number;
}

const BenefitItem: FC<BenefitItemProps> = ({ text, keyword, color, isVisible, index }) => {
  const delay = index * 0.2;

  return (
    <motion.div
      className="benefit-row-item"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="benefit-box" style={{ borderColor: color, backgroundColor: `${color}20` }}>
        <span style={{ color }}>{keyword}</span>
        <CheckIcon color={color} isVisible={isVisible} delay={delay + 0.3} />
      </div>
      <span className="benefit-text">{text}</span>
    </motion.div>
  );
};

// 태그 컴포넌트
interface TagProps {
  name: string;
  color: string;
  filled: boolean;
  isVisible: boolean;
  index: number;
}

const Tag: FC<TagProps> = ({ name, color, filled, isVisible, index }) => {
  const delay = index * 0.1;

  return (
    <motion.div
      className={`tag-box ${filled ? 'filled' : 'bordered'}`}
      style={{
        backgroundColor: filled ? color : 'transparent',
        borderColor: color,
        color: filled ? '#000' : color,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.4, delay }}
    >
      {name}
    </motion.div>
  );
};

// 메인 BenefitSection 컴포넌트
const BenefitSection: FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const benefitItems = [
    { keyword: '매출', text: '이 적고,', color: '#00FFC1' },
    { keyword: '신용회복', text: '중인 고객님', color: '#00B7FF' },
    { keyword: '저금리 정책자금', text: '진행해 드릴게요.', color: '#9361FF' },
  ];

  const tags = [
    { name: '저매출', color: '#00F2FF', filled: true },
    { name: '기대출', color: '#E59B9B', filled: false },
    { name: '낮은신용등급', color: '#6B89FF', filled: true },
    { name: '폐업이력', color: '#6B89FF', filled: false },
    { name: '대환', color: '#C7FF65', filled: true },
    { name: '대출이력', color: '#ED6EBD', filled: false },
  ];

  return (
    <section
      ref={sectionRef}
      className="benefit-section"
      id="Gift_Info"
      style={{
        padding: isMobile ? '60px 20px' : '100px 40px',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      }}
    >
      {/* 헤더 */}
      <motion.div
        className="benefit-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: isMobile ? '40px' : '60px', textAlign: isMobile ? 'left' : 'center' }}
      >
        <span style={{ color: '#A5FECB', fontSize: isMobile ? '14px' : '16px', marginBottom: '12px', display: 'block' }}>
          정책비서에서는
        </span>
        <h2 style={{ color: 'white', fontSize: isMobile ? '28px' : '40px', fontWeight: 'bold', lineHeight: 1.3 }}>
          수많은 <strong style={{ color: '#A5FECB' }}>자금 유형</strong>
        </h2>
        <h2 style={{ color: 'white', fontSize: isMobile ? '28px' : '40px', fontWeight: 'bold', lineHeight: 1.3 }}>
          수많은 <strong style={{ color: '#A5FECB' }}>특수 조건</strong>
        </h2>
        <h2 style={{ color: 'white', fontSize: isMobile ? '28px' : '40px', fontWeight: 'bold', lineHeight: 1.3 }}>
          수많은 <strong style={{ color: '#A5FECB' }}>별별 상황</strong>
        </h2>
      </motion.div>

      {/* 설명 */}
      <motion.div
        className="benefit-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ marginBottom: isMobile ? '40px' : '60px', textAlign: isMobile ? 'left' : 'center' }}
      >
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: isMobile ? '14px' : '16px', lineHeight: 1.6 }}>
          각양각색의 케이스를 <br />
          승인까지 이끌어 냈습니다.
        </span>
      </motion.div>

      {/* 프로그레스 섹션 */}
      <div
        className="progress-chart-wrapper"
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '40px' : '60px',
          maxWidth: '1200px',
          margin: '0 auto 60px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ flex: isMobile ? 'none' : 1, width: isMobile ? '100%' : 'auto' }}
        >
          <SemiCircleGauge percentage={94.65} totalAmount="241,000,000" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ flex: isMobile ? 'none' : 1.5, width: '100%' }}
        >
          <AnimatedChart />
        </motion.div>
      </div>

      {/* CTA 버튼 */}
      <motion.div
        style={{ textAlign: 'center', marginBottom: isMobile ? '60px' : '80px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >

      </motion.div>

      {/* 두 번째 아티클 - 맞춤형 전략 */}
      <motion.div
        className="benefit-article"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          maxWidth: '600px',
          margin: '0 auto 60px',
          textAlign: 'center',
        }}
      >
        <div style={{ marginBottom: '30px' }}>
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: isMobile ? '14px' : '16px', lineHeight: 1.6 }}>
            복잡하고 어려운 상황에도,<br />
            최적의 진행 방식을 설계해 드려요
          </span>
        </div>

        <div className="benefit-items" style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          {benefitItems.map((item, index) => (
            <BenefitItem
              key={index}
              keyword={item.keyword}
              text={item.text}
              color={item.color}
              isVisible={isInView}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      {/* 세 번째 아티클 - 탕감 요소 태그 */}
      <motion.div
        className="benefit-article"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
        transition={{ duration: 0.6, delay: 1 }}
        style={{
          maxWidth: '500px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <div style={{ marginBottom: '30px' }}>
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: isMobile ? '14px' : '16px', lineHeight: 1.6 }}>
            놓치기 쉬운 조건까지<br />
            꼼꼼히 확인해 드려요
          </span>
        </div>

        <div className="tags-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
          {tags.map((tag, index) => (
            <Tag
              key={index}
              name={tag.name}
              color={tag.color}
              filled={tag.filled}
              isVisible={isInView}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      <style>{`
        .benefit-section {
          overflow: hidden;
        }

        .gauge-container {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 24px;
          backdrop-filter: blur(10px);
        }

        .gauge-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 16px;
        }

        .gauge-label {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
        }

        .gauge-amount {
          color: white;
          font-size: 24px;
        }

        .gauge-amount strong {
          color: #A5FECB;
          font-weight: bold;
        }

        .gauge-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .gauge-center-text {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
        }

        .gauge-center-label {
          display: block;
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          margin-bottom: 4px;
        }

        .gauge-center-value {
          color: white;
          font-size: 36px;
        }

        .gauge-center-value strong {
          color: #A5FECB;
          font-weight: bold;
        }

        .chart-container {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 24px;
          backdrop-filter: blur(10px);
          overflow: hidden;
        }

        .benefit-row-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .benefit-box {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 30px;
          border: 2px solid;
          font-weight: 600;
          font-size: 15px;
        }

        .benefit-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 15px;
        }

        .tag-box {
          padding: 10px 20px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 500;
          border: 1px solid;
          transition: all 0.3s ease;
        }

        .tag-box.filled {
          border: none;
        }

        .tag-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .cta-button-outline:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

// 메인 ComparisonSection 컴포넌트
const ComparisonSection: FC = () => {
  const isMobile = useIsMobile();

  return <BenefitSection isMobile={isMobile} />;
};

export default ComparisonSection;
