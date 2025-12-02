import { type FC } from 'react';
import { motion } from 'framer-motion';

interface PolicyFundCardProps {
    delay?: number;
}

const PolicyFundCard: FC<PolicyFundCardProps> = ({
    delay = 0.2
}) => {
    return (
        <div style={{
            position: 'relative',
            width: 'auto',
            margin: '0 10px 35px 10px',
            aspectRatio: '252 / 132'
        }}>
            {/* Duck Image - Left side */}
            <motion.img
                src="/src/assets/images/duck.png"
                alt="Duck"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay }}
                style={{
                    position: 'absolute',
                    width: '48%', // Approx 50% - gap
                    height: '92%', // 0.611 * 1.5 = 0.9165
                    objectFit: 'contain',
                    zIndex: 2,
                    left: '-3%',
                    bottom: '-25%' // -(0.611 * 1.5) / 3 = -0.305. Wait, original math: -(innerHeight * 1.5) / 3. innerHeight is 0.611*H. So -(0.611*H * 1.5)/3 = -0.3055*H. So -30%.
                }}
            />

            {/* Top Card - Higher z-index */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay }}
                style={{
                    position: 'absolute',
                    width: '48%',
                    height: '61%',
                    background: 'linear-gradient(289.66deg, #E6E6E6 1.41%, #D5D5D5 95.2%)',
                    boxShadow: '3px 4px 5.2px rgba(0, 0, 0, 0.29), -4px -3px 8.5px rgba(255, 255, 255, 0.75)',
                    borderRadius: '12px',
                    zIndex: 2,
                    right: '5%',
                    bottom: '6%',
                    padding: '4%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '4%'
                }}
            >
                {/* Item 1 */}
                <div className="flex items-center gap-1.5">
                    <img src="/src/assets/icons/check.png" alt="check" className="w-4 h-4" />
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-medium whitespace-nowrap">경영 운영 지원자금</span>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-1.5">
                    <img src="/src/assets/icons/check.png" alt="check" className="w-4 h-4" />
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-medium whitespace-nowrap">창업 벤처자금</span>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-1.5">
                    <img src="/src/assets/icons/check.png" alt="check" className="w-4 h-4" />
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 font-medium whitespace-nowrap">R&D 기술 자금</span>
                </div>
            </motion.div>

            {/* Bottom Card - Lower z-index */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: delay + 0.1 }}
                style={{
                    position: 'absolute',
                    left: '1%',
                    right: '1%',
                    height: '100%',
                    background: 'linear-gradient(321.5deg, #FFFFFF -11.34%, #CFCFCF 103.54%)',
                    borderRadius: '15px',
                    zIndex: 1,
                    padding: '6%'
                }}
            >
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 text-left">
                    정책자금 종류 A to Z
                </div>
            </motion.div>
        </div>
    );
};

export default PolicyFundCard;
