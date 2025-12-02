import type { FC } from 'react';
import { motion } from 'framer-motion';

const ServiceFeatures: FC = () => {
  const features = [
    {
      icon: '📚',
      title: '자금의',
      subtitle: '유형에 맞춰',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '📋',
      title: '업종별 특화된',
      subtitle: '전문가 상담',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '📚',
      title: '자금의',
      subtitle: '유형에 맞춰',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '📋',
      title: '업종별 특화된',
      subtitle: '전문가 상담',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold lg:mb-4">
            <span className="text-white">업계 최고 속도로</span>
            {/* <div className="w-32 h-1 bg-gradient-to-r from-[#C6F1F7] via-[#FFADF4] via-[#CB9BFF] to-[#C2E9CD] mt-2 mb-4"></div> */}
          </h2>
          <p className="text-2xl md:text-xl mb-2">
            상담, 접수부터 승인까지
          </p>
          <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#C6F1F7] via-[#FFADF4] via-[#CB9BFF] to-[#C2E9CD] bg-clip-text text-transparent">
            초고속 처리
          </p>
          <p className="text-base md:text-lg mt-4 text-gray-300">
            승인 후에도 계속 관리되며
            <br />
            상담 서비스를 제공!
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                style={{
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-3xl shadow-lg transform -rotate-6`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xs lg:text-xl font-bold text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs lg:text-xl font-semibold bg-gradient-to-r from-[#C6F1F7] via-[#FFADF4] via-[#CB9BFF] to-[#C2E9CD] bg-clip-text text-transparent">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
