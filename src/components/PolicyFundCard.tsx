import { type FC } from 'react';
import { motion } from 'framer-motion';

interface PolicyFundCardProps {
    width?: number;
    height?: number;
    delay?: number;
}

const PolicyFundCard: FC<PolicyFundCardProps> = ({
    width = 125,
    height = 162,
    delay = 0.2
}) => {
    // Calculate inner card dimensions based on original ratio
    // Original: outer 125x162, inner 97x99
    const innerWidth = width * 0.776; // 97/125 = 0.776
    const innerHeight = height * 0.611; // 99/162 = 0.611

    // Calculate horizontal centering
    const leftOffset = (width - innerWidth) / 2;

    // Calculate bottom spacing proportionally (original: 10px for 162px height)
    const bottomSpacing = height * 0.062; // 10/162 = 0.062

    // Calculate border radius proportionally
    const outerBorderRadius = width * 0.12; // 15/125 = 0.12
    const innerBorderRadius = innerWidth * 0.093; // 9/97 = 0.093

    return (
        <div style={{ position: 'relative', width: `${width}px`, height: `${height}px` }}>
            {/* Top Card - Higher z-index */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay }}
                style={{
                    position: 'absolute',
                    width: `${innerWidth}px`,
                    height: `${innerHeight}px`,
                    background: 'linear-gradient(289.66deg, #E6E6E6 1.41%, #D5D5D5 95.2%)',
                    boxShadow: '3px 4px 5.2px rgba(0, 0, 0, 0.29), -4px -3px 8.5px rgba(255, 255, 255, 0.75)',
                    borderRadius: `${innerBorderRadius}px`,
                    zIndex: 2,
                    left: `${leftOffset}px`,
                    bottom: `${bottomSpacing}px`
                }}
            />

            {/* Bottom Card - Lower z-index */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: delay + 0.1 }}
                style={{
                    position: 'absolute',
                    width: `${width}px`,
                    height: `${height}px`,
                    background: 'linear-gradient(321.5deg, #FFFFFF -11.34%, #CFCFCF 103.54%)',
                    borderRadius: `${outerBorderRadius}px`,
                    zIndex: 1
                }}
            >
                <div className="flex items-start justify-between mb-4">

                </div>
            </motion.div>
        </div>
    );
};

export default PolicyFundCard;
