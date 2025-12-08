import type { FC } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';

interface ApprovalGaugeProps {
  percentage?: number;
  label?: string;
}

// 공통 SVG Gauge 컴포넌트
const GaugeSVG: FC<{ percentage: number; percentageDecimal: number }> = ({ percentage, percentageDecimal }) => {
  const radius = 75;
  const cx = 100;
  const cy = 100;

  return (
    <svg
      viewBox="0 70 200 35"
      className="w-full h-auto overflow-visible"
    >
      <defs>
        <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>

        <filter id="knobShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.2)" />
        </filter>
      </defs>

      {/* Background Track */}
      <path
        d="M 25 100 A 75 75 0 0 1 175 100"
        fill="none"
        stroke="#E5E7EB"
        strokeWidth="15"
        strokeLinecap="round"
      />

      {/* Progress Track */}
      <motion.path
        d="M 25 100 A 75 75 0 0 1 175 100"
        fill="none"
        stroke="url(#gaugeGradient)"
        strokeWidth="15"
        strokeLinecap="round"
        strokeDasharray={`${Math.PI * 75 * percentageDecimal} ${Math.PI * 75}`}
        initial={{ strokeDasharray: `0 ${Math.PI * 75}` }}
        animate={{
          strokeDasharray: `${Math.PI * 75 * percentageDecimal} ${Math.PI * 75}`,
        }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
      />

      {/* Knob */}
      {(() => {
        const knobX = cx + radius * Math.cos(Math.PI + Math.PI * percentageDecimal);
        const knobY = cy + radius * Math.sin(Math.PI + Math.PI * percentageDecimal);

        return (
          <motion.circle
            cx={knobX}
            cy={knobY}
            r="6"
            fill="white"
            filter="url(#knobShadow)"
            initial={{ cx: 25, cy: 100 }}
            animate={{ cx: knobX, cy: knobY }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
          />
        );
      })()}
    </svg>
  );
};

// 모바일 ApprovalGauge 컴포넌트
const MobileApprovalGauge: FC<ApprovalGaugeProps> = ({
  percentage = 94.65,
  label = '승인률',
}) => {
  const percentageDecimal = percentage / 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative flex flex-col items-center justify-center w-fit mx-auto"
    >
      <div className="relative inline-block w-32">
        <GaugeSVG percentage={percentage} percentageDecimal={percentageDecimal} />

        {/* Background Circle */}
        <div
          className="absolute left-1/2 top-[90%] -translate-x-1/2 -translate-y-1/2 z-5"
          style={{ width: '60%', aspectRatio: '1/1' }}
        >
          <div
            className="w-full h-full rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            style={{ background: 'linear-gradient(45deg, #5F5F5F 0%, #C5C5C5 100%)' }}
          ></div>
        </div>

        {/* Front Circle */}
        <div
          className="absolute left-1/2 top-[90%] -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ width: '50%', aspectRatio: '1/1' }}
        >
          <div
            className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center"
            style={{ boxShadow: '4px 3px 4px rgba(0, 0, 0, 0.25), -3px -3px 4px rgba(255, 255, 255, 0.39)' }}
          >
            <p className="text-[10px] text-gray-500 font-bold mb-0 leading-none">
              {label}
            </p>
            <div className="flex items-baseline justify-center font-bold text-gray-900 leading-none mt-0.5">
              <span className="text-lg tracking-tighter">
                {Math.floor(percentage)}
              </span>
              <span className="text-[10px] text-gray-800 ml-0.5">
                .{(percentage % 1).toFixed(2).slice(2)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// PC ApprovalGauge 컴포넌트
const PcApprovalGauge: FC<ApprovalGaugeProps> = ({
  percentage = 94.65,
  label = '승인률',
}) => {
  const percentageDecimal = percentage / 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative flex flex-col items-center justify-center w-fit ml-auto"
    >
      <div className="relative inline-block w-72">
        <GaugeSVG percentage={percentage} percentageDecimal={percentageDecimal} />

        {/* Background Circle */}
        <div
          className="absolute left-1/2 top-[90%] -translate-x-1/2 -translate-y-1/2 z-5"
          style={{ width: '60%', aspectRatio: '1/1' }}
        >
          <div
            className="w-full h-full rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            style={{ background: 'linear-gradient(45deg, #5F5F5F 0%, #C5C5C5 100%)' }}
          ></div>
        </div>

        {/* Front Circle */}
        <div
          className="absolute left-1/2 top-[90%] -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ width: '50%', aspectRatio: '1/1' }}
        >
          <div
            className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center"
            style={{ boxShadow: '4px 3px 4px rgba(0, 0, 0, 0.25), -3px -3px 4px rgba(255, 255, 255, 0.39)' }}
          >
            <p className="text-base text-gray-500 font-bold mb-0 leading-none">
              {label}
            </p>
            <div className="flex items-baseline justify-center font-bold text-gray-900 leading-none mt-1">
              <span className="text-4xl tracking-tighter">
                {Math.floor(percentage)}
              </span>
              <span className="text-base text-gray-800 ml-0.5">
                .{(percentage % 1).toFixed(2).slice(2)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// 메인 ApprovalGauge 컴포넌트
const ApprovalGauge: FC<ApprovalGaugeProps> = (props) => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileApprovalGauge {...props} /> : <PcApprovalGauge {...props} />;
};

export default ApprovalGauge;