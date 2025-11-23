
import Layout from './components/Layout';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Hero />

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

      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            모든 채무를 정리! 지금 바로 상담하세요
          </h2>
          <button className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-lg font-semibold text-lg shadow-lg shadow-blue-500/30 transition-all duration-300">
            무료 상담 신청하기
          </button>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}

export default App;
