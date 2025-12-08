import type { FC } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

// 모바일 Footer 컴포넌트
const MobileFooter: FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <h3 className="text-white text-lg font-bold mb-2">정책비서</h3>
            <p className="text-xs">
              © {new Date().getFullYear()} 정책비서. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4 text-xs">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">문의하기</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// PC Footer 컴포넌트
const PcFooter: FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-8">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h3 className="text-white text-2xl font-bold mb-3">정책비서</h3>
            <p className="text-sm">
              © {new Date().getFullYear()} 정책비서. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">문의하기</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// 메인 Footer 컴포넌트
const Footer: FC = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileFooter /> : <PcFooter />;
};

export default Footer;
