import type { FC } from 'react';
import { motion } from 'framer-motion';

interface ContentSectionProps {
  title: string;
  description: string;
  features?: string[];
  reversed?: boolean;
  imageSrc?: string;
}

const ContentSection: FC<ContentSectionProps> = ({
  title,
  description,
  features = [],
  reversed = false,
  imageSrc
}) => {
  return (
    <section className={`py-20 md:py-32 ${reversed ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${reversed ? 'md:flex-row-reverse' : ''}`}>

          {/* Text Content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {description}
            </p>

            {features.length > 0 && (
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
              {/* Placeholder for image if not provided */}
              {imageSrc ? (
                <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                  <span className="text-lg">Image Placeholder</span>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContentSection;
