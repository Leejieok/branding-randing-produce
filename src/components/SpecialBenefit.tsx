import { type FC } from 'react';
import { motion } from 'framer-motion';

// 이미지 import
import special01 from '../assets/icons/special01.png';
import special02 from '../assets/icons/special02.png';
import special03 from '../assets/icons/special03.png';
import special04 from '../assets/icons/special04.png';

interface SpecialBenefitProps {
    delay?: number;
}

const SpecialBenefit: FC<SpecialBenefitProps> = ({
    delay = 0.2
}) => {
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
            icon: '💰',
            title: '무방문 접수',
            subtitle: ['모든 절차를 온라인으로', '진행이 가능한 시스템'],
            description: ''
        },
        {
            icon: '💰',
            title: '서류 발급 대행',
            subtitle: ['수많은 경험을 갖춘', '승인 최적화된\n사업계획서 작성과 철저한 서류 준비'],
            description: ''
        },
        {
            icon: '💰',
            title: '실시간 추적 시스템',
            subtitle: ['모든 진행상황을', '실시간으로 투명하게\n 공유 및 확인가능'],
            description: ''
        },

    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className="relative mt-8 -mx-4"
        >
            {/* Horizontal Scroll Container with 2 Rows */}
            <div className="overflow-x-auto scrollbar-hide px-4">
                <div className="grid grid-rows-2 grid-flow-col gap-3 pb-4" style={{ gridAutoColumns: '280px', gridAutoRows: '110px' }}>
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: delay + 0.05 * (index + 1) }}
                            className="rounded-lg p-4 border border-gray-700 flex flex-col justify-between"
                            style={{ backgroundColor: '#3D3F43' }}
                        >
                            {/* Title */}
                            <h3 className="text-xl font-bold text-white leading-tight">
                                {Array.isArray(benefit.title) ? benefit.title.join(' ') : benefit.title}
                            </h3>

                            {/* Icon + Subtitle (가로 배치) */}
                            <div className="flex flex-row items-end justify-between gap-2">
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                                    {typeof benefit.icon === 'string' && !benefit.icon.startsWith('/') && !benefit.icon.includes('.') ? (
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
                </div>
            </div>
        </motion.div>
    );
};

export default SpecialBenefit;
