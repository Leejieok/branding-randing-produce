import { type FC } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';

// 이미지 import
import special01 from '../assets/icons/special01.png';
import special02 from '../assets/icons/special02.png';
import special03 from '../assets/icons/special03.png';
import special04 from '../assets/icons/special04.png';
import receiptIcon from '../assets/icons/receipt.png';
import dockIcon from '../assets/icons/dock.png';
import trackingIcon from '../assets/icons/tracking.png';

interface SpecialBenefitProps {
    delay?: number;
}

const benefits = [
    {
        icon: special01,
        title: '초고속 승인',
        subtitle: ['업계 최고 속도로 상담,', '접수부터 승인까지 초고속 처리'],
        description: ''
    },
    {
        icon: special02,
        title: '사후 관리 시스템',
        subtitle: ['승인 후에도 계속', '관리되며 상담 서비스를 제공'],
        description: ''
    },
    {
        icon: special03,
        title: ['자금의', '유형에 맞춰'],
        subtitle: '',
        description: ''
    },
    {
        icon: special04,
        title: ['업종별 특화된', '전문가 상담'],
        subtitle: '',
        description: ''
    },
    {
        icon: receiptIcon,
        title: '무방문 접수',
        subtitle: ['모든 절차를 온라인으로', '진행이 가능한 시스템'],
        description: ''
    },
    {
        icon: dockIcon,
        title: '서류 발급 대행',
        subtitle: ['수많은 경험을 갖춘', '승인 최적화된\n사업계획서 작성과 철저한 서류 준비'],
        description: ''
    },
    {
        icon: trackingIcon,
        title: '실시간 추적 시스템',
        subtitle: ['모든 진행상황을', '실시간으로 투명하게\n 공유 및 확인가능'],
        description: ''
    },
];

// 카드를 두 배로 복제하여 무한 슬라이드 효과 구현
const duplicatedBenefits = [...benefits, ...benefits];

// 모바일 SpecialBenefit 컴포넌트
const MobileSpecialBenefit: FC<SpecialBenefitProps> = ({ delay = 0.2 }) => {
    // 카드 너비 + gap (2행 그리드이므로 열 개수 기준으로 계산)
    const cardWidth = 280;
    const gap = 12;
    const columns = Math.ceil(benefits.length / 2); // 7개 카드 → 4개 열
    const totalWidth = columns * (cardWidth + gap);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className="relative mt-8 -mx-4 overflow-hidden"
        >
            {/* 자동 슬라이드 컨테이너 */}
            <div className="overflow-hidden">
                <motion.div
                    className="grid grid-rows-2 grid-flow-col gap-3 pb-4"
                    style={{ gridAutoColumns: `${cardWidth}px`, gridAutoRows: '110px' }}
                    animate={{
                        x: [0, -totalWidth],
                    }}
                    transition={{
                        x: {
                            duration: 25,
                            repeat: Infinity,
                            ease: 'linear',
                        },
                    }}
                >
                    {duplicatedBenefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: delay + 0.05 * (index % benefits.length + 1) }}
                            className="rounded-lg p-4 border border-cyan-500/50 flex flex-col justify-between"
                            style={{
                                backgroundColor: '#3D3F43',
                                boxShadow: '0 0 10px rgba(6, 182, 212, 0.3), 0 0 20px rgba(6, 182, 212, 0.15), inset 0 0 10px rgba(6, 182, 212, 0.05)'
                            }}
                        >
                            {/* Title */}
                            <h3 className="text-xl font-bold text-white leading-tight">
                                {Array.isArray(benefit.title) ? benefit.title.join(' ') : benefit.title}
                            </h3>

                            {/* Icon + Subtitle (가로 배치) */}
                            <div className="flex flex-row items-end justify-between gap-2">
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                                    {typeof benefit.icon === 'string' && benefit.icon.length <= 4 ? (
                                        benefit.icon
                                    ) : (
                                        <img src={benefit.icon} alt="" className="w-12 h-12 object-contain" />
                                    )}
                                </div>

                                {/* Subtitle */}
                                {benefit.subtitle && (
                                    <div className="text-end text-xs text-cyan-400 leading-tight">
                                        {Array.isArray(benefit.subtitle)
                                            ? benefit.subtitle.map((line, i) => (
                                                <div key={i}>
                                                    {line.split('\n').map((subline, j) => (
                                                        <div key={j}>{subline}</div>
                                                    ))}
                                                </div>
                                            ))
                                            : benefit.subtitle.split('\n').map((line, i) => (
                                                <div key={i}>{line}</div>
                                            ))
                                        }
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

// PC SpecialBenefit 컴포넌트 (2배 크기)
const PcSpecialBenefit: FC<SpecialBenefitProps> = ({ delay = 0.2 }) => {
    // 카드 너비 + gap (2행 그리드이므로 열 개수 기준으로 계산)
    const cardWidth = 560;
    const gap = 24;
    const columns = Math.ceil(benefits.length / 2); // 7개 카드 → 4개 열
    const totalWidth = columns * (cardWidth + gap);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className="relative mt-16 overflow-hidden"
        >
            {/* 자동 슬라이드 컨테이너 */}
            <div className="overflow-hidden">
                <motion.div
                    className="grid grid-rows-2 grid-flow-col gap-6 pb-8"
                    style={{ gridAutoColumns: `${cardWidth}px`, gridAutoRows: '220px' }}
                    animate={{
                        x: [0, -totalWidth],
                    }}
                    transition={{
                        x: {
                            duration: 30,
                            repeat: Infinity,
                            ease: 'linear',
                        },
                    }}
                >
                    {duplicatedBenefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: delay + 0.05 * (index % benefits.length + 1) }}
                            className="rounded-2xl p-8 border border-cyan-500/50 flex flex-col justify-between"
                            style={{
                                backgroundColor: '#3D3F43',
                                boxShadow: '0 0 15px rgba(6, 182, 212, 0.3), 0 0 30px rgba(6, 182, 212, 0.15), inset 0 0 15px rgba(6, 182, 212, 0.05)'
                            }}
                        >
                            {/* Title */}
                            <h3 className="text-4xl font-bold text-white leading-tight">
                                {Array.isArray(benefit.title) ? benefit.title.join(' ') : benefit.title}
                            </h3>

                            {/* Icon + Subtitle (가로 배치) */}
                            <div className="flex flex-row items-end justify-between gap-4">
                                {/* Icon */}
                                <div className="w-32 h-32 rounded-xl flex items-center justify-center text-6xl flex-shrink-0">
                                    {typeof benefit.icon === 'string' && benefit.icon.length <= 4 ? (
                                        benefit.icon
                                    ) : (
                                        <img src={benefit.icon} alt="" className="w-24 h-24 object-contain" />
                                    )}
                                </div>

                                {/* Subtitle */}
                                {benefit.subtitle && (
                                    <div className="text-end text-xl text-cyan-400 leading-tight">
                                        {Array.isArray(benefit.subtitle)
                                            ? benefit.subtitle.map((line, i) => (
                                                <div key={i}>
                                                    {line.split('\n').map((subline, j) => (
                                                        <div key={j}>{subline}</div>
                                                    ))}
                                                </div>
                                            ))
                                            : benefit.subtitle.split('\n').map((line, i) => (
                                                <div key={i}>{line}</div>
                                            ))
                                        }
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

// 메인 SpecialBenefit 컴포넌트
const SpecialBenefit: FC<SpecialBenefitProps> = (props) => {
    const isMobile = useIsMobile();

    return isMobile ? <MobileSpecialBenefit {...props} /> : <PcSpecialBenefit {...props} />;
};

export default SpecialBenefit;
