import type { FC } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';

// 타사 데이터
const competitorItems = [
  { title: '정책자금 5천만 원', description: '신용보증재단' }
];

// 한비즈 데이터
const ourItems = [
  { title: '정책자금 3억 원', description: 'IP담보 + 중소기업진흥공단 + 기술보증기금' },
  { title: '기업인증 확보', description: '벤처인증 + HACCP인증' },
  { title: '재무제표 컨설팅', description: '현직 세무사가 직접 분석' }
];

// 테이블 아이템 컴포넌트
interface TableItemProps {
  title: string;
  description: string;
  itemColor: string;
  itemBorder: string;
  itemBg: string;
  isMobile?: boolean;
}

const TableItem: FC<TableItemProps> = ({ title, description, itemColor, itemBorder, itemBg, isMobile }) => (
  <div
    className={`flex flex-col ${isMobile ? 'p-3' : 'p-4'} rounded-lg`}
    style={{ border: itemBorder, backgroundColor: itemBg }}
  >
    <span className={`font-bold ${isMobile ? 'text-sm' : 'text-base'}`} style={{ color: itemColor }}>
      {title}
    </span>
    <span className={`${isMobile ? 'text-xs' : 'text-sm'} mt-1 text-gray-600`}>
      {description}
    </span>
  </div>
);

// 테이블 컨테이너 컴포넌트
interface TableContainerProps {
  title: string;
  items: { title: string; description: string }[];
  titleColor: string;
  containerBg: string;
  itemColor: string;
  itemBorder: string;
  itemBg: string;
  isMobile?: boolean;
}

const TableContainer: FC<TableContainerProps> = ({
  title,
  items,
  titleColor,
  containerBg,
  itemColor,
  itemBorder,
  itemBg,
  isMobile
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`rounded-2xl shadow-lg overflow-hidden ${isMobile ? 'flex-1' : 'flex-1'}`}
  >
    {/* Header */}
    <div
      className={`${isMobile ? 'py-3 px-4' : 'py-4 px-6'}`}
      style={{ backgroundColor: containerBg }}
    >
      <h3
        className={`font-bold ${isMobile ? 'text-lg' : 'text-xl'} text-center`}
        style={{ color: titleColor }}
      >
        {title}
      </h3>
    </div>

    {/* Items */}
    <div className={`bg-white ${isMobile ? 'p-3 space-y-2' : 'p-4 space-y-3'}`}>
      {items.map((item, index) => (
        <TableItem
          key={index}
          title={item.title}
          description={item.description}
          itemColor={itemColor}
          itemBorder={itemBorder}
          itemBg={itemBg}
          isMobile={isMobile}
        />
      ))}
    </div>
  </motion.div>
);

// 모바일 ComparisonSection 컴포넌트
const MobileComparisonSection: FC = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
            <span className="text-blue-600">어떻게 "더"</span>
            <br />
            받을 수 있냐구요?
          </h1>
          <h2 className="text-sm text-gray-600 leading-relaxed">
            같은 조건의 업체여도, 각 기관을 잘 파악하고
            <br />
            전략에 따라 받을 수 있는 금액이 달라집니다.
          </h2>
        </motion.div>

        {/* Comparison Tables */}
        <div className="flex flex-col gap-4">
          {/* 타사 */}
          <TableContainer
            title="타사"
            items={competitorItems}
            titleColor="#666"
            containerBg="#F0F0F0"
            itemColor="#808080"
            itemBorder="1px solid #EBEBEB"
            itemBg="#F9FAFB"
            isMobile={true}
          />

          {/* 정책비서 */}
          <TableContainer
            title="정책비서"
            items={ourItems}
            titleColor="#FFF"
            containerBg="#006BF9"
            itemColor="#006BF9"
            itemBorder="1px solid #006BF9"
            itemBg="#F5FAFF"
            isMobile={true}
          />
        </div>
      </div>
    </section>
  );
};

// PC ComparisonSection 컴포넌트
const PcComparisonSection: FC = () => {
  return (
    <section className="py-20 px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-blue-600">어떻게 "더"</span>
            <br />
            받을 수 있냐구요?
          </h1>
          <h2 className="text-lg text-gray-600 leading-relaxed">
            같은 조건의 업체여도, 각 기관을 잘 파악하고
            <br />
            전략에 따라 받을 수 있는 금액이 달라집니다.
          </h2>
        </motion.div>

        {/* Comparison Tables */}
        <div className="flex flex-row gap-8">
          {/* 타사 */}
          <TableContainer
            title="타사"
            items={competitorItems}
            titleColor="#666"
            containerBg="#F0F0F0"
            itemColor="#808080"
            itemBorder="1px solid #EBEBEB"
            itemBg="#F9FAFB"
            isMobile={false}
          />

          {/* 정책비서 */}
          <TableContainer
            title="정책비서"
            items={ourItems}
            titleColor="#FFF"
            containerBg="#006BF9"
            itemColor="#006BF9"
            itemBorder="1px solid #006BF9"
            itemBg="#F5FAFF"
            isMobile={false}
          />
        </div>
      </div>
    </section>
  );
};

// 메인 ComparisonSection 컴포넌트
const ComparisonSection: FC = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileComparisonSection /> : <PcComparisonSection />;
};

export default ComparisonSection;
