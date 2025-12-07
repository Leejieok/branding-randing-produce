import type { FC } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface GradientButtonProps extends HTMLMotionProps<"button"> {
  text: string;
}

const GradientButton: FC<GradientButtonProps> = ({ text, className = '', ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative box-border flex items-center
        w-[238px] h-[48px]
        rounded-[10px]
        text-white
        shadow-lg hover:shadow-xl transition-shadow
        overflow-hidden
        border-[2px] border-transparent
        ${className}
      `}
      style={{
        background: `
          linear-gradient(90deg, #2E23CE 0%, #822AFD 100%) padding-box,
          linear-gradient(90deg, #7970FF 0%, #AE76FF 100%) border-box
        `
      }}
      {...props}
    >
      {/* 왼쪽 로고 아이콘 */}
      <div className="absolute left-[20px] flex items-center justify-center w-[29px]">
        <img
          src="/src/assets/images/logo.png"
          alt="logo"
          className="w-full object-contain filter brightness-0 invert" // 흰색으로 변경 시도 (안되면 원본)
          style={{ height: '14px' }}
        />
      </div>

      {/* 텍스트 */}
      <span
        className="absolute left-[58px] w-[145px] text-center font-['Pretendard'] font-extrabold text-[15px] leading-[18px] tracking-[-0.04em]"
      >
        {text}
      </span>

      {/* 오른쪽 화살표 아이콘 */}
      <div className="absolute right-[18px]">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 13L7 7L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </motion.button>
  );
};

export default GradientButton;
