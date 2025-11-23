import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-white text-xl font-bold mb-2">정책비서</h3>
            <p className="text-sm">
              © {new Date().getFullYear()} 정책비서. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">문의하기</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
