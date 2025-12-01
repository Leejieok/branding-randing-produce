import { type FC } from 'react';
import { motion } from 'framer-motion';

interface PolicyFundCardProps {
    width?: number;
    height?: number;
    delay?: number;
}

const PolicyFundCard: FC<PolicyFundCardProps> = ({
    width = 252,
    height = 162,
    delay = 0.2
}) => {
    // Calculate inner card dimensions based on original ratio
    // Original: outer 125x162, inner 97x99
    const innerWidth = width * 0.776; // 97/125 = 0.776
    const innerHeight = height * 0.611; // 99/162 = 0.611


    // Calculate bottom spacing proportionally (original: 10px for 162px height)
    const bottomSpacing = height * 0.062; // 10/162 = 0.062

    // Calculate border radius proportionally
    const innerBorderRadius = innerWidth * 0.093; // 9/97 = 0.093

    return (
        <div style={{ position: 'relative', width: `${width}px`, height: `${height}px` }}>
            {/* Duck Image - Left side */}
            <motion.img
                src="/src/assets/images/duck.png"
                alt="Duck"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay }}
                style={{
                    position: 'absolute',
                    width: 'calc(50% - 2px)',
                    height: `${innerHeight * 1.5}px`,
                    objectFit: 'contain',
                    zIndex: 2,
                    left: '2px',
                    bottom: `${-(innerHeight * 1.5) / 3}px`
                }}
            />

            {/* Top Card - Higher z-index */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay }}
                style={{
                    position: 'absolute',
                    width: 'calc(50% - 2px)',
                    height: `${innerHeight}px`,
                    background: 'linear-gradient(289.66deg, #E6E6E6 1.41%, #D5D5D5 95.2%)',
                    boxShadow: '3px 4px 5.2px rgba(0, 0, 0, 0.29), -4px -3px 8.5px rgba(255, 255, 255, 0.75)',
                    borderRadius: `${innerBorderRadius}px`,
                    zIndex: 2,
                    right: '2px',
                    bottom: `${bottomSpacing}px`,
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '8px'
                }}
            >
                {/* Item 1 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <img src="/src/assets/icons/check.png" alt="check" style={{ width: '16px', height: '16px' }} />
                    <span style={{ fontSize: '12px', color: '#333', fontWeight: '500' }}>경영 운영 지원자금</span>
                </div>

                {/* Item 2 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <img src="/src/assets/icons/check.png" alt="check" style={{ width: '16px', height: '16px' }} />
                    <span style={{ fontSize: '12px', color: '#333', fontWeight: '500' }}>창업 벤처자금</span>
                </div>

                {/* Item 3 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <img src="/src/assets/icons/check.png" alt="check" style={{ width: '16px', height: '16px' }} />
                    <span style={{ fontSize: '12px', color: '#333', fontWeight: '500' }}>R&D 기술 자금</span>
                </div>
            </motion.div>

            {/* Bottom Card - Lower z-index */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: delay + 0.1 }}
                style={{
                    position: 'absolute',
                    left: '2px',
                    right: '2px',
                    height: `${height}px`,
                    background: 'linear-gradient(321.5deg, #FFFFFF -11.34%, #CFCFCF 103.54%)',
                    borderRadius: '15px',
                    zIndex: 1,
                    padding: '16px'
                }}
            >
                <div style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#333',
                    textAlign: 'left'
                }}>
                    정책자금 종류 A to Z
                </div>
            </motion.div>
        </div>
    );
};

export default PolicyFundCard;
