import { type FC } from 'react';
import { motion } from 'framer-motion';

interface PolicyFundCardProps {
    delay?: number;
}

const PolicyFundCard: FC<PolicyFundCardProps> = ({ delay = 0.2 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-8 shadow-xl"
        >
            <div className="flex items-start justify-between mb-4">
                <div>
                    <p className="text-sm text-secondary mb-1">채무 발생 경위</p>
                    <p className="text-xs text-white/60">생활비, 대환대출, 낮은 소득</p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-secondary mb-1">정책자금 종류</p>
                    <div className="flex flex-wrap gap-1 justify-end">
                        <span className="text-xs bg-primary/50 px-2 py-1 rounded-full border border-secondary/30">경영·운영</span>
                        <span className="text-xs bg-primary/50 px-2 py-1 rounded-full border border-secondary/30">창업·벤처</span>
                        <span className="text-xs bg-primary/50 px-2 py-1 rounded-full border border-secondary/30">R&D·기술</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default PolicyFundCard;
