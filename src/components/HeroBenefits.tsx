import type { FC } from 'react';
import { motion } from 'framer-motion';

// Import icons
import fastApprovalIcon from '../assets/icons/fast_approval.png';
import managementSystemIcon from '../assets/icons/management_system.png';
import fundingIcon from '../assets/icons/funding.png';
import consultationIcon from '../assets/icons/consultation.png';
import onlineIcon from '../assets/icons/online.png';
import documentIcon from '../assets/icons/document.png';

const HeroBenefits: FC = () => {
    return (
        <section className="relative w-full bg-background text-white overflow-hidden">
            <div className="container mx-auto px-4 py-8 relative z-10">
                {/* Special Benefits */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-8"
                >
                    <h2 className="text-2xl font-bold text-center mb-6 text-white">특별 혜택</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {/* Fast Approval */}
                        <div
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.2)'
                            }}
                            className="rounded-xl p-6 hover:border-secondary/50 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <img
                                        src={fastApprovalIcon}
                                        alt="초고속 승인"
                                        className="w-10 h-10"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">초고속 승인</h3>
                                    <p className="text-sm text-white/70">업계 최고 속도로 상담, 접수부터 승인까지 초고속 처리</p>
                                </div>
                            </div>
                        </div>

                        {/* Management System */}
                        <div
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.2)'
                            }}
                            className="rounded-xl p-6 hover:border-tertiary/50 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-tertiary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <img
                                        src={managementSystemIcon}
                                        alt="사후 관리 시스템"
                                        className="w-10 h-10"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">사후 관리 시스템</h3>
                                    <p className="text-sm text-white/70">승인 후에도 계속 관리되며 상담 서비스를 제공</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="grid grid-cols-2 gap-4"
                >
                    {/* Customized Funding */}
                    <div
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                        className="rounded-xl p-4 hover:border-secondary/50 transition-all duration-300"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-3 shadow-lg">
                            <img
                                src={fundingIcon}
                                alt="자금 유형"
                                className="w-8 h-8"
                            />
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1">자금의 유형에 맞춰</h4>
                        <p className="text-xs text-white/60">업종별 특화된 전문가 상담</p>
                    </div>

                    {/* Expert Consultation */}
                    <div
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                        className="rounded-xl p-4 hover:border-tertiary/50 transition-all duration-300"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary to-tertiary rounded-lg flex items-center justify-center mb-3 shadow-lg">
                            <img
                                src={consultationIcon}
                                alt="전문가 상담"
                                className="w-8 h-8"
                            />
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1">전문 관리팀 배정</h4>
                        <p className="text-xs text-white/60">맞춤형 자금 솔루션 제안</p>
                    </div>

                    {/* Online Application */}
                    <div
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                        className="rounded-xl p-4 hover:border-secondary/50 transition-all duration-300"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-3 shadow-lg">
                            <img
                                src={onlineIcon}
                                alt="무방문 접수"
                                className="w-8 h-8"
                            />
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1">무방문 접수</h4>
                        <p className="text-xs text-white/60">모든 절차를 온라인으로 진행</p>
                    </div>

                    {/* Document Service */}
                    <div
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                        className="rounded-xl p-4 hover:border-tertiary/50 transition-all duration-300"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-tertiary to-secondary rounded-lg flex items-center justify-center mb-3 shadow-lg">
                            <img
                                src={documentIcon}
                                alt="서류 발급"
                                className="w-8 h-8"
                            />
                        </div>
                        <h4 className="text-sm font-bold text-white mb-1">서류 발급 대행</h4>
                        <p className="text-xs text-white/60">승인 최적화된 사업계획서 작성</p>
                    </div>
                </motion.div>

                {/* Real-time Tracking - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-4"
                >
                    <div
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                        }}
                        className="rounded-xl p-6 hover:border-tertiary/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-secondary to-tertiary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-bold text-white mb-1">실시간 추적 시스템</h4>
                                <p className="text-sm text-white/70">모든 진행 상황을 실시간으로 투명하게 공유 및 확인 가능</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mt-12 text-center"
                >
                    <button className="w-full max-w-md px-8 py-5 bg-gradient-to-r from-secondary via-primary to-tertiary text-white rounded-2xl font-bold text-lg shadow-2xl shadow-secondary/50 hover:shadow-tertiary/50 transition-all duration-300 hover:scale-105">
                        무료 상담 신청하기
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroBenefits;
