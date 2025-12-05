import { type FC } from 'react';
import { motion } from 'framer-motion';

interface SpecialBenefitProps {
    delay?: number;
}

const SpecialBenefit: FC<SpecialBenefitProps> = ({
    delay = 0.2
}) => {
    const benefits = [
        {
            icon: '📊',
            title: '초고속승인',
            subtitle: '압계좌 속도로 승인,',
            description: '접수부터 승인까지 초고속 처리'
        },
        {
            icon: '💰',
            title: '자금의',
            subtitle: '운용이 막힌',
            description: ''
        },
        {
            icon: '📋',
            title: '전문 관리팀 배정',
            subtitle: '업종별 특화된 맞춤형',
            description: '자금 솔루션을 제안하고 최적의 조건을 제안'
        },
        {
            icon: '📋',
            title: '전문 관리팀 배정',
            subtitle: '업종별 특화된 맞춤형',
            description: '자금 솔루션을 제안하고 최적의 조건을 제안'
        },
        {
            icon: '👤',
            title: '사후 관리 시스템',
            subtitle: '승인 후에도 계속',
            description: '관리팀이 사업 성패를 책임'
        },
        {
            icon: '💼',
            title: '업종별 특화된',
            subtitle: '전문가 상담',
            description: ''
        },
        {
            icon: '📋',
            title: '전문 관리팀 배정',
            subtitle: '업종별 특화된 맞춤형',
            description: '자금 솔루션을 제안하고 최적의 조건을 제안'
        },
        {
            icon: '📋',
            title: '전문 관리팀 배정',
            subtitle: '업종별 특화된 맞춤형',
            description: '자금 솔루션을 제안하고 최적의 조건을 제안'
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className="relative mt-8 -mx-4"
        >
            {/* Horizontal Scroll Container */}
            <div className="overflow-x-auto scrollbar-hide px-4">
                <div className="flex gap-3 pb-4">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: delay + 0.05 * (index + 1) }}
                            className="flex-shrink-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 border border-gray-700 min-w-[160px] max-w-[160px]"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-2xl mb-3">
                                {benefit.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-sm font-bold text-white mb-2 leading-tight">
                                {benefit.title}
                            </h3>

                            {/* Subtitle */}
                            {benefit.subtitle && (
                                <p className="text-xs text-cyan-400 mb-1 leading-tight">
                                    {benefit.subtitle}
                                </p>
                            )}

                            {/* Description */}
                            {benefit.description && (
                                <p className="text-xs text-gray-400 leading-tight">
                                    {benefit.description}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default SpecialBenefit;
