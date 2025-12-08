import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import MainContent from './components/MainContent';
import ServiceFeatures from './components/ServiceFeatures';
// import ContentSection from './components/ContentSection';
import NewSection from './components/NewSection';
import Footer from './components/Footer';
import ConsultationCTA from './components/ConsultationCTA';
import ComparisonSection from './components/ComparisonSection';

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <ServiceFeatures />
      <NewSection />
      {/* <MainContent /> */}

      {/* 
      <ContentSection
        title="감당하기 힘든 빚, 혼자 고민하지 마세요"
        description="개인회생, 개인파산, 신용회복... 복잡하고 어려운 채무 조정 절차, 정책비서가 든든한 버팀목이 되어드리겠습니다."
        features={[
          "1:1 비공개 무료 상담",
          "기각 시 100% 환불 보장",
          "전국 어디서나 비대면 진행 가능"
        ]}
        imageSrc="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000"
      />

      <ContentSection
        title="나에게 맞는 채무 조정 제도는?"
        description="개인회생부터 파산까지, 신청 자격과 절차를 꼼꼼하게 분석하여 최적의 솔루션을 제공합니다."
        features={[
          "개인회생: 이자는 100%, 원금은 최대 90% 탕감",
          "개인파산: 모든 채무 전액 탕감 및 면책",
          "신용회복: 이자율 조정 및 상환 기간 연장"
        ]}
        reversed={true}
        imageSrc="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1000"
      />

      <ContentSection
        title="정책비서와 함께하는 새로운 시작"
        description="수많은 성공 사례가 증명합니다. 지금 바로 무료 상담을 신청하고 빚 없는 삶을 되찾으세요."
        features={[
          "24시간 상담 접수 가능",
          "수임료 분납 가능",
          "철저한 비밀 보장"
        ]}
        imageSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
      />
      */}

      <ConsultationCTA />

      <ComparisonSection />

      <Footer />
    </Layout>
  );
}

export default App;
