import type { FC } from 'react';
import { motion } from 'framer-motion';

interface ApprovalGaugeProps {
  percentage?: number;
  label?: string;
}

const ApprovalGauge: FC<ApprovalGaugeProps> = ({
  percentage = 94,
  label = '승인률'
}) => {
  const percentageDecimal = percentage / 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      style={{
        backgroundColor: 'rgba(60, 50, 70, 0.6)',
        margin: '0 10px 40px 10px',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.15)'
      }}
      className="rounded-xl flex items-center justify-center pb-16"
    >
      <div className="text-center">
        <div className="relative inline-block">
          {/* Semi-circle Gauge */}
          <svg
            viewBox="0 0 320 180"
            className="w-full h-auto overflow-visible"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Gradient for the progress arc */}
              <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#86efac" />
              </linearGradient>

              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Shadow for inner circle */}
              <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="2" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.5" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background Track - Gray Semi-circle */}
            <path
              d="M 40 160 A 120 120 0 0 1 280 160"
              fill="none"
              stroke="rgba(100, 100, 120, 0.3)"
              strokeWidth="24"
              strokeLinecap="round"
            />

            {/* Progress Track - Green Semi-circle */}
            <motion.path
              d="M 40 160 A 120 120 0 0 1 280 160"
              fill="none"
              stroke="url(#gaugeGradient)"
              strokeWidth="24"
              strokeLinecap="round"
              strokeDasharray={`${Math.PI * 120 * percentageDecimal} ${Math.PI * 120}`}
              filter="url(#glow)"
              initial={{ strokeDasharray: `0 ${Math.PI * 120}` }}
              animate={{ strokeDasharray: `${Math.PI * 120 * percentageDecimal} ${Math.PI * 120}` }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />

            {/* Knob at the end of progress */}
            {(() => {
              const angle = Math.PI * percentageDecimal;
              const radius = 120;
              const cx = 160;
              const cy = 160;
              const knobX = cx - radius * Math.cos(angle);
              const knobY = cy - radius * Math.sin(angle);

              return (
                <motion.circle
                  cx={knobX}
                  cy={knobY}
                  r="12"
                  fill="white"
                  filter="url(#glow)"
                  initial={{ cx: 40, cy: 160 }}
                  animate={{ cx: knobX, cy: knobY }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                />
              );
            })()}

            {/* Center Circle - Outer ring */}
            <circle
              cx="160"
              cy="160"
              r="85"
              fill="none"
              stroke="rgba(120, 120, 140, 0.4)"
              strokeWidth="2"
            />

            {/* Center Circle - Middle ring */}
            <circle
              cx="160"
              cy="160"
              r="75"
              fill="rgba(200, 200, 210, 0.15)"
              filter="url(#innerShadow)"
            />

            {/* Center Circle - Inner white circle */}
            <circle
              cx="160"
              cy="160"
              r="60"
              fill="rgba(240, 240, 245, 0.95)"
              filter="url(#innerShadow)"
            />
          </svg>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ top: '88.9%', transform: 'translateY(-50%)' }}>
            <div className="text-center">
              <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800 mb-1">{label}</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {Math.floor(percentage)}
                <span className="text-lg sm:text-xl md:text-2xl">.{(percentage % 1).toFixed(2).slice(2)}%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ApprovalGauge;
