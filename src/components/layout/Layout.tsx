import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  cartItemCount?: number;
  onSearchClick?: () => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  cartItemCount = 0,
  onSearchClick
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-warm-cream">
      {/* Header */}
      <Header cartItemCount={cartItemCount} onSearchClick={onSearchClick} />

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
