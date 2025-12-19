import { type FC } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';

// 이미지 import
import bankIcon from '../assets/icons/bank.svg';
import ideaIcon from '../assets/icons/idea.svg';
import moneyIcon from '../assets/icons/money.svg';
import bearImage from '../assets/images/bear.png';

interface PolicyFundCardProps {
    delay?: number;
}

const items = [
    { icon: bankIcon, text: '경영 운영 지원자금' },
    { icon: ideaIcon, text: '창업 벤처자금' },
    { icon: moneyIcon, text: 'R&D 기술 자금' }
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
                    src={bearImage}
                    alt="Bear"
                    className="object-contain"
                    style={{ height: '180px' }}
                />
            </motion.div>
        </motion.div>
    );
};

// PC PolicyFundCard 컴포넌트 (2배 크기)
const PcPolicyFundCard: FC<PolicyFundCardProps> = ({
    delay = 0.2
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className="relative shadow-xl max-w-4xl w-full"
            style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
                borderRadius: '20px',
            }}
        >
            <div className="relative px-16 py-12">
                {/* Left Content */}
                <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-4xl font-bold text-gray-800 mb-12 tracking-tight leading-tight">
                        정책자금 종류
                    </h3>

                    {/* Items List */}
                    <div className="space-y-8">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: delay + 0.1 * (index + 1) }}
                                className="flex items-center gap-8"
                            >
                                <div className="w-16 h-16 flex-shrink-0">
                                    <img
                                        src={item.icon}
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-3xl text-gray-700 font-medium whitespace-nowrap tracking-tight leading-tight">
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
                    src={bearImage}
                    alt="Bear"
                    className="object-contain"
                    style={{ height: '560px' }}
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
