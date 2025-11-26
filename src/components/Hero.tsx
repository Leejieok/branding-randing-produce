import type { FC } from 'react';
import { motion } from 'framer-motion';

// Import components
import PolicyFundCard from './PolicyFundCard';

const Hero: FC = () => {
  return (
    <section className="bg-background pt-16">
      {/* Background Effects */}

      <div className="font-paperozi mx-auto px-4 py-4 lg:py-12 relative z-10">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-start lg:text-center mb-12 relative"
        >
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary via-tertiary to-secondary">
            <span className="block">한 사람을 위한</span>
            <span className="block">한 사람에 의한</span>
            <span className="block text-white inline-flex flex-col items-start lg:items-center">
              나만의 맞춤 설계
              <span
                style={{
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #C6F1F7 0%, #F983E9 33%, #B877FF 66%, #C2E9CD 100%)',
                  borderRadius: '2px',
                  marginTop: '0.2px'
                }}
              />
            </span>
          </h1>
        </motion.div>

        {/* Policy Fund Type Card */}
        <PolicyFundCard delay={0.2} />
      </div>
    </section>
  );
};

export default Hero;
