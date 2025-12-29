import type { FC } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

// 원형 프로그레스 컴포넌트 (새 디자인)
const CircularProgress: FC<{ percentage: number; totalAmount: string; isMobile: boolean }> = ({ percentage, totalAmount, isMobile }) => {
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

  const size = isMobile ? 200 : 280;
  const strokeWidth = isMobile ? 12 : 18;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * animatedPercentage) / 100;

  return (
    <motion.div
      className="circular-progress-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
      transition={{ duration: 0.6 }}
    >
      <div className="progress-label">승인 정책자금</div>
      <div className="progress-amount">
        <span className="highlight">{totalAmount}</span>원
      </div>

      <div className="progress-ring-wrapper">
        <svg
          ref={ref}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 배경 링 */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={strokeWidth}
          />

          {/* 프로그레스 링 */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: isInView ? strokeDashoffset : circumference }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
            style={{
              transformOrigin: 'center',
              transform: 'rotate(-90deg)',
              filter: 'url(#glow)'
            }}
          />
        </svg>

        {/* 중앙 텍스트 */}
        <div className="progress-center">
          <span className="progress-center-label">승인률</span>
          <motion.div
            className="progress-center-value"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {animatedPercentage.toFixed(1)}<span className="percent">%</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// 스탯 바 차트 컴포넌트 (새 디자인)
const StatBarChart: FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const stats = [
    { label: '3년 전 원금', value: '3억 9,993만원', percentage: 100, color: '#FF6B6B' },
    { label: '탕감 금액', value: '3억 5,994만원', percentage: 90, color: '#A5FECB' },
    { label: '현재 총 채무액', value: '3천 9백만원', percentage: 10, color: '#06B6D4' },
  ];

  return (
    <motion.div
      ref={ref}
      className="stat-chart-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="stat-header">
        <span className="stat-badge">90% DOWN</span>
        <span className="stat-title">채무 감소 현황</span>
      </div>

      <div className="stat-bars">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-bar-item"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
          >
            <div className="stat-bar-header">
              <span className="stat-bar-label">{stat.label}</span>
              <span className="stat-bar-value" style={{ color: stat.color }}>{stat.value}</span>
            </div>
            <div className="stat-bar-track">
              <motion.div
                className="stat-bar-fill"
                style={{ backgroundColor: stat.color }}
                initial={{ width: 0 }}
                animate={{ width: isInView ? `${stat.percentage}%` : 0 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.2, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="stat-summary">
        <span>3억 9,993만원 탕감 달성</span>
      </div>
    </motion.div>
  );
};

// 혜택 카드 컴포넌트 (새 디자인)
interface BenefitCardProps {
  keyword: string;
  text: string;
  color: string;
  isVisible: boolean;
  index: number;
}

const BenefitCard: FC<BenefitCardProps> = ({ keyword, text, color, isVisible, index }) => {
  return (
    <motion.div
      className="benefit-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{
        '--accent-color': color,
      } as React.CSSProperties}
    >
      <div className="benefit-card-icon">
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          initial={{ scale: 0 }}
          animate={{ scale: isVisible ? 1 : 0 }}
          transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
        >
          <circle cx="12" cy="12" r="10" fill={color} fillOpacity="0.2" />
          <motion.path
            d="M8 12L11 15L16 9"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isVisible ? 1 : 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
          />
        </motion.svg>
      </div>
      <div className="benefit-card-content">
        <span className="benefit-keyword" style={{ color }}>{keyword}</span>
        <span className="benefit-text">{text}</span>
      </div>
    </motion.div>
  );
};

// 조건 그리드 카드 컴포넌트 (새 디자인)
interface ConditionCardProps {
  name: string;
  color: string;
  filled: boolean;
  isVisible: boolean;
  index: number;
}

const ConditionCard: FC<ConditionCardProps> = ({ name, color, filled, isVisible, index }) => {
  return (
    <motion.div
      className={`condition-card ${filled ? 'filled' : ''}`}
      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        rotateY: isVisible ? 0 : -15
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        '--card-color': color,
        borderColor: filled ? 'transparent' : color,
        background: filled
          ? `linear-gradient(135deg, ${color}20, ${color}40)`
          : 'rgba(255,255,255,0.03)',
      } as React.CSSProperties}
    >
      <div className="condition-icon">
        {filled ? '✓' : '○'}
      </div>
      <span className="condition-name" style={{ color: filled ? color : 'rgba(255,255,255,0.8)' }}>
        {name}
      </span>
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

  const conditions = [
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
      className="comparison-section"
      id="Gift_Info"
    >
      {/* 배경 장식 */}
      <div className="bg-decoration">
        <div className="bg-orb orb-1" />
        <div className="bg-orb orb-2" />
        <div className="bg-orb orb-3" />
      </div>

      {/* 헤더 */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-subtitle">정책비서에서는</span>
        <h2 className="section-title">
          수많은 <span className="gradient-text">자금 유형</span>
        </h2>
        <h2 className="section-title">
          수많은 <span className="gradient-text">특수 조건</span>
        </h2>
        <h2 className="section-title">
          수많은 <span className="gradient-text">별별 상황</span>
        </h2>
        <p className="section-description">
          각양각색의 케이스를<br />
          승인까지 이끌어 냈습니다.
        </p>
      </motion.div>

      {/* 통계 카드 영역 */}
      <div className="stats-grid">
        <CircularProgress
          percentage={94.65}
          totalAmount="241,000,000"
          isMobile={isMobile}
        />
        <StatBarChart isMobile={isMobile} />
      </div>

      {/* 혜택 섹션 */}
      <motion.div
        className="benefits-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="benefits-intro">
          복잡하고 어려운 상황에도,<br />
          최적의 진행 방식을 설계해 드려요
        </p>
        <div className="benefits-list">
          {benefitItems.map((item, index) => (
            <BenefitCard
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

      {/* 조건 그리드 */}
      <motion.div
        className="conditions-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p className="conditions-intro">
          놓치기 쉬운 조건까지<br />
          꼼꼼히 확인해 드려요
        </p>
        <div className="conditions-grid">
          {conditions.map((condition, index) => (
            <ConditionCard
              key={index}
              name={condition.name}
              color={condition.color}
              filled={condition.filled}
              isVisible={isInView}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      <style>{`
        .comparison-section {
          position: relative;
          padding: ${isMobile ? '60px 20px' : '100px 40px'};
          background: linear-gradient(180deg, #0a0a0a 0%, #0f172a 50%, #1e1b4b 100%);
          overflow: hidden;
        }

        /* 배경 장식 */
        .bg-decoration {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: #06B6D4;
          top: -100px;
          right: -100px;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: #8B5CF6;
          bottom: 20%;
          left: -100px;
        }

        .orb-3 {
          width: 250px;
          height: 250px;
          background: #EC4899;
          bottom: -50px;
          right: 20%;
        }

        /* 헤더 */
        .section-header {
          text-align: center;
          margin-bottom: ${isMobile ? '40px' : '60px'};
          position: relative;
          z-index: 1;
        }

        .section-subtitle {
          display: block;
          color: #06B6D4;
          font-size: ${isMobile ? '16px' : '18px'};
          margin-bottom: 16px;
          font-weight: 500;
        }

        .section-title {
          color: white;
          font-size: ${isMobile ? '28px' : '42px'};
          font-weight: 700;
          line-height: 1.3;
          margin: 0;
        }

        .gradient-text {
          background: linear-gradient(90deg, #06B6D4, #8B5CF6, #EC4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-description {
          color: rgba(255,255,255,0.6);
          font-size: ${isMobile ? '16px' : '18px'};
          line-height: 1.6;
          margin-top: 24px;
        }

        /* 통계 그리드 */
        .stats-grid {
          display: grid;
          grid-template-columns: ${isMobile ? '1fr' : '1fr 1.5fr'};
          gap: ${isMobile ? '24px' : '40px'};
          max-width: 1000px;
          margin: 0 auto ${isMobile ? '50px' : '80px'};
          position: relative;
          z-index: 1;
        }

        /* 원형 프로그레스 카드 */
        .circular-progress-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: ${isMobile ? '24px' : '32px'};
          border: 1px solid rgba(255,255,255,0.1);
          text-align: center;
        }

        .progress-label {
          color: rgba(255,255,255,0.6);
          font-size: ${isMobile ? '16px' : '18px'};
          margin-bottom: 8px;
        }

        .progress-amount {
          color: white;
          font-size: ${isMobile ? '20px' : '24px'};
          margin-bottom: 20px;
        }

        .progress-amount .highlight {
          color: #06B6D4;
          font-weight: 700;
        }

        .progress-ring-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .progress-ring-wrapper svg {
          transform: rotate(-90deg);
        }

        .progress-center {
          position: absolute;
          text-align: center;
        }

        .progress-center-label {
          display: block;
          color: rgba(255,255,255,0.6);
          font-size: ${isMobile ? '16px' : '18px'};
          margin-bottom: 4px;
        }

        .progress-center-value {
          color: white;
          font-size: ${isMobile ? '32px' : '42px'};
          font-weight: 700;
        }

        .progress-center-value .percent {
          font-size: ${isMobile ? '18px' : '24px'};
          color: rgba(255,255,255,0.6);
        }

        /* 통계 바 차트 카드 */
        .stat-chart-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: ${isMobile ? '24px' : '32px'};
          border: 1px solid rgba(255,255,255,0.1);
        }

        .stat-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .stat-badge {
          background: linear-gradient(135deg, #A5FECB, #06B6D4);
          color: #000;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: ${isMobile ? '14px' : '16px'};
          font-weight: 700;
        }

        .stat-title {
          color: white;
          font-size: ${isMobile ? '18px' : '22px'};
          font-weight: 600;
        }

        .stat-bars {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .stat-bar-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .stat-bar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stat-bar-label {
          color: rgba(255,255,255,0.7);
          font-size: ${isMobile ? '15px' : '17px'};
        }

        .stat-bar-value {
          font-size: ${isMobile ? '15px' : '17px'};
          font-weight: 600;
        }

        .stat-bar-track {
          height: 8px;
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .stat-bar-fill {
          height: 100%;
          border-radius: 4px;
          box-shadow: 0 0 10px currentColor;
        }

        .stat-summary {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.1);
          text-align: center;
          color: #A5FECB;
          font-size: ${isMobile ? '16px' : '18px'};
          font-weight: 500;
        }

        /* 혜택 섹션 */
        .benefits-section {
          max-width: 600px;
          margin: 0 auto ${isMobile ? '50px' : '80px'};
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .benefits-intro {
          color: rgba(255,255,255,0.7);
          font-size: ${isMobile ? '16px' : '18px'};
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .benefits-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .benefit-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 16px 20px;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateX(8px);
          border-color: var(--accent-color);
          box-shadow: 0 0 20px rgba(var(--accent-color), 0.2);
        }

        .benefit-card-icon {
          flex-shrink: 0;
        }

        .benefit-card-content {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .benefit-keyword {
          font-weight: 700;
          font-size: ${isMobile ? '18px' : '22px'};
        }

        .benefit-text {
          color: rgba(255,255,255,0.8);
          font-size: ${isMobile ? '16px' : '18px'};
        }

        /* 조건 섹션 */
        .conditions-section {
          max-width: 500px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .conditions-intro {
          color: rgba(255,255,255,0.7);
          font-size: ${isMobile ? '16px' : '18px'};
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .conditions-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .condition-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid;
          border-radius: 16px;
          padding: ${isMobile ? '16px 12px' : '20px 16px'};
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          cursor: default;
        }

        .condition-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
        }

        .condition-card.filled {
          border-color: transparent;
        }

        .condition-icon {
          font-size: ${isMobile ? '20px' : '24px'};
          color: var(--card-color);
        }

        .condition-name {
          font-size: ${isMobile ? '14px' : '16px'};
          font-weight: 500;
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
