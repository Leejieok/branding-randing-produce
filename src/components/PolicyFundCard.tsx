import { type FC } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';

interface PolicyFundCardProps {
    delay?: number;
}

const items = [
    { icon: '/src/assets/icons/bank.svg', text: '경영 운영 지원자금' },
    { icon: '/src/assets/icons/idea.svg', text: '창업 벤처자금' },
    { icon: '/src/assets/icons/money.svg', text: 'R&D 기술 자금' }
];

// 모바일 PolicyFundCard 컴포넌트
const MobilePolicyFundCard: FC<PolicyFundCardProps> = ({
    delay = 0.2
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className="relative mx-1 mt-16 shadow-lg"
            style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
                borderRadius: '5px',
            }}
        >
            <div className="relative px-3 py-3">
                {/* Left Content */}
                <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-sm font-bold text-gray-800 mb-3 tracking-tight leading-tight">
                        정책자금 종류
                    </h3>

                    {/* Items List */}
                    <div className="space-y-2">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: delay + 0.1 * (index + 1) }}
                                className="flex items-center gap-2"
                            >
                                <div className="w-4 h-4 flex-shrink-0">
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-xs text-gray-700 font-medium whitespace-nowrap tracking-tight leading-tight">
                                    {item.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Image - Overlapping */}
            <motion.div
                className="absolute bottom-0 right-0 z-0"
            >
                <img
                    src="/src/assets/images/bear.png"
                    alt="Bear"
                    className="object-contain"
                    style={{ height: '180px' }}
                />
            </motion.div>
        </motion.div>
    );
};

// PC PolicyFundCard 컴포넌트
const PcPolicyFundCard: FC<PolicyFundCardProps> = ({
    delay = 0.2
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className="relative mx-4 mt-20 shadow-xl max-w-2xl"
            style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
                borderRadius: '10px',
            }}
        >
            <div className="relative px-8 py-6">
                {/* Left Content */}
                <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-6 tracking-tight leading-tight">
                        정책자금 종류
                    </h3>

                    {/* Items List */}
                    <div className="space-y-4">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: delay + 0.1 * (index + 1) }}
                                className="flex items-center gap-4"
                            >
                                <div className="w-8 h-8 flex-shrink-0">
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-lg text-gray-700 font-medium whitespace-nowrap tracking-tight leading-tight">
                                    {item.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Image - Overlapping */}
            <motion.div
                className="absolute bottom-0 right-0 z-0"
            >
                <img
                    src="/src/assets/images/bear.png"
                    alt="Bear"
                    className="object-contain"
                    style={{ height: '280px' }}
                />
            </motion.div>
        </motion.div>
    );
};

// 메인 PolicyFundCard 컴포넌트
const PolicyFundCard: FC<PolicyFundCardProps> = (props) => {
    const isMobile = useIsMobile();

    return isMobile ? <MobilePolicyFundCard {...props} /> : <PcPolicyFundCard {...props} />;
};

export default PolicyFundCard;
