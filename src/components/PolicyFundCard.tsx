import { type FC } from 'react';
import { motion } from 'framer-motion';

interface PolicyFundCardProps {
    delay?: number;
}

const PolicyFundCard: FC<PolicyFundCardProps> = ({
    delay = 0.2
}) => {
    const items = [
        { icon: '/src/assets/icons/bank.svg', text: '경영 운영 지원자금' },
        { icon: '/src/assets/icons/idea.svg', text: '창업 벤처자금' },
        { icon: '/src/assets/icons/money.svg', text: 'R&D 기술 자금' }
    ];

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
            <div className="relative p-6">
                {/* Left Content */}
                <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-sm font-bold text-gray-800 mb-4">
                        정책자금 종류
                    </h3>

                    {/* Items List */}
                    <div className="space-y-3">
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
                                <span className="text-xs text-gray-700 font-medium whitespace-nowrap">
                                    {item.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Image - Overlapping */}
                <motion.div
                    className="absolute bottom-1 right-0 z-0"
                >
                    <img
                        src="/src/assets/images/bear.png"
                        alt="Bear"
                        className="object-contain"
                        style={{ width: '200px', height: '200px' }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PolicyFundCard;
