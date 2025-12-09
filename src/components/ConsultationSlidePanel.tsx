import type { FC } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConsultationSlidePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationSlidePanel: FC<ConsultationSlidePanelProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    businessType: '',
    name: '',
    phone: '',
    desiredAmount: '',
    message: '',
    quickSubmit: false,
    privacyAgreed: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacyAgreed) {
      alert('개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }

    setIsSubmitting(true);

    // 실제 API 호출은 여기에 구현
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // 3초 후 패널 닫기
    setTimeout(() => {
      setSubmitSuccess(false);
      onClose();
      setFormData({
        companyName: '',
        businessType: '',
        name: '',
        phone: '',
        desiredAmount: '',
        message: '',
        quickSubmit: false,
        privacyAgreed: false,
      });
    }, 3000);
  };

  const businessTypes = [
    '제조업',
    '도소매업',
    '서비스업',
    'IT/소프트웨어',
    '건설업',
    '음식점업',
    '운수업',
    '기타',
  ];

  const desiredAmounts = [
    '1000만 원 이하',
    '1000만 원 이상',
    '3000만 원 이상',
    '1억 원 이상',
    '3억 원 이상',
    '5억 원 이상',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 오버레이 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* 슬라이드 패널 */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-gradient-to-b from-[#1a1a2e] to-[#16213e] z-[101] overflow-y-auto"
            style={{
              boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* 헤더 */}
            <div className="sticky top-0 bg-gradient-to-r from-[#5B4E7E] to-[#3d3566] px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-xl font-bold text-white">상담 예약</h2>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="닫기"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* 컨텐츠 */}
            <div className="p-6">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mb-6"
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">상담 예약 완료!</h3>
                  <p className="text-white/70 leading-relaxed">
                    빠른 시일 내에 전문 상담사가<br />
                    연락 드리겠습니다.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* 안내 문구 */}
                  <div className="bg-gradient-to-r from-[#A5FECB]/10 to-[#6B89FF]/10 rounded-xl p-4 border border-white/10">
                    <p className="text-white/80 text-sm leading-relaxed">
                      <span className="text-[#A5FECB] font-semibold">유형·조건·상황</span>에 맞춤
                      <br />접수부터 승인까지
                      <br />끝까지 책임지겠습니다.
                    </p>
                  </div>

                  {/* 업체명 */}
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-medium flex items-center gap-1">
                      업체명
                      <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="업체명을 입력해 주세요"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#A5FECB]/50 focus:bg-white/10 transition-all"
                    />
                  </div>

                  {/* 업종 */}
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-medium flex items-center gap-1">
                      업종
                      <span className="text-pink-400">*</span>
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#A5FECB]/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 12px center',
                      }}
                    >
                      <option value="" disabled className="bg-[#1a1a2e]">업종을 선택해 주세요</option>
                      {businessTypes.map(type => (
                        <option key={type} value={type} className="bg-[#1a1a2e]">{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* 담당자명 */}
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-medium flex items-center gap-1">
                      담당자명
                      <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="성함을 입력해 주세요"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#A5FECB]/50 focus:bg-white/10 transition-all"
                    />
                  </div>

                  {/* 연락처 */}
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-medium flex items-center gap-1">
                      연락처
                      <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="010-0000-0000"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#A5FECB]/50 focus:bg-white/10 transition-all"
                    />
                  </div>

                  {/* 희망 자금 */}
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-medium">희망 자금 규모</label>
                    <select
                      name="desiredAmount"
                      value={formData.desiredAmount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#A5FECB]/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 12px center',
                      }}
                    >
                      <option value="" className="bg-[#1a1a2e]">선택 안함</option>
                      {desiredAmounts.map(amount => (
                        <option key={amount} value={amount} className="bg-[#1a1a2e]">{amount}</option>
                      ))}
                    </select>
                  </div>

                  {/* 문의 내용 */}
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-medium">문의 내용</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="추가 문의 사항이 있으시면 입력해 주세요"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#A5FECB]/50 focus:bg-white/10 transition-all resize-none"
                    />
                  </div>

                  {/* 빠른접수 (선택) */}
                  <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-xl p-4 border border-orange-400/20">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <div className="relative mt-0.5">
                        <input
                          type="checkbox"
                          name="quickSubmit"
                          checked={formData.quickSubmit}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <motion.div
                          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${formData.quickSubmit
                            ? 'bg-gradient-to-r from-orange-400 to-yellow-400 border-transparent'
                            : 'border-white/30 bg-transparent'
                            }`}
                          whileTap={{ scale: 0.9 }}
                        >
                          {formData.quickSubmit && (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 13L9 17L19 7" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </motion.div>
                      </div>
                      <span className="text-white/70 text-sm leading-relaxed">
                        <span className="text-orange-400 font-medium">⚡ 빠른접수</span>
                        <span className="text-white/50 ml-1">(선택)</span>
                        <br />
                        <span className="text-white/50 text-xs">체크 시 우선 상담 대상으로 빠르게 연락 드립니다</span>
                      </span>
                    </label>
                  </div>

                  {/* 개인정보 동의 */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <div className="relative mt-0.5">
                        <input
                          type="checkbox"
                          name="privacyAgreed"
                          checked={formData.privacyAgreed}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <motion.div
                          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${formData.privacyAgreed
                            ? 'bg-gradient-to-r from-[#A5FECB] to-[#6B89FF] border-transparent'
                            : 'border-white/30 bg-transparent'
                            }`}
                          whileTap={{ scale: 0.9 }}
                        >
                          {formData.privacyAgreed && (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 13L9 17L19 7" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </motion.div>
                      </div>
                      <span className="text-white/70 text-sm leading-relaxed">
                        <span className="text-white font-medium">[필수]</span> 개인정보 수집 및 이용에 동의합니다.
                        <br />
                        <span className="text-white/50 text-xs">수집항목: 업체명, 담당자명, 연락처 / 보유기간: 상담 완료 후 1년</span>
                      </span>
                    </label>
                  </div>

                  {/* 제출 버튼 */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl font-bold text-lg relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, #A5FECB 0%, #6B89FF 50%, #9361FF 100%)',
                    }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        처리 중...
                      </span>
                    ) : (
                      <span className="text-[#1a1a2e]">무료 상담 신청하기</span>
                    )}
                  </motion.button>

                  {/* 추가 안내 */}
                  <div className="text-center pt-2">
                    <p className="text-white/50 text-xs">
                      영업일 기준 24시간 이내 연락 드립니다
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ConsultationSlidePanel;
