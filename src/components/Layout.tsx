import type { FC, ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-main selection:bg-accent selection:text-white overflow-x-hidden">
      <main className=" mx-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
