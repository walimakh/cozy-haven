import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../common';

interface HeaderProps {
  cartItemCount?: number;
  onSearchClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount = 0, onSearchClick }) => {
  const [activeLink, setActiveLink] = useState<string>('/');

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/collections' },
    { label: 'Materials', path: '/materials' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-warm-cream shadow-sm">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 font-semibold hover:text-terracotta transition-colors duration-200"
            style={{
              fontSize: '1.25rem',
              color: '#3D3935',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
            onClick={() => setActiveLink('/')}
          >
            <Icons.Home size={28} className="text-terracotta" />
            <span>Cozy Haven</span>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setActiveLink(link.path)}
                className="font-medium transition-all duration-200 relative pb-1 group"
                style={{
                  fontSize: '0.875rem',
                  color: activeLink === link.path ? '#D4A59A' : '#4A4543',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
              >
                {link.label}
                <span
                  className={`
                    absolute bottom-0 left-0 w-full h-0.5 bg-terracotta
                    transform transition-transform duration-200 origin-left
                    ${
                      activeLink === link.path
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }
                  `}
                />
              </Link>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <button
              onClick={onSearchClick}
              className="text-charcoal hover:text-terracotta transition-colors duration-200"
              aria-label="Search"
            >
              <Icons.Search size={22} />
            </button>

            {/* User Account */}
            <Link
              to="/account"
              className="text-charcoal hover:text-terracotta transition-colors duration-200"
              aria-label="User account"
            >
              <Icons.User size={22} />
            </Link>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="text-charcoal hover:text-terracotta transition-colors duration-200"
              aria-label="Wishlist"
            >
              <Icons.Heart size={22} />
            </Link>

            {/* Shopping Cart with Badge */}
            <Link
              to="/cart"
              className="relative text-charcoal hover:text-terracotta transition-colors duration-200"
              aria-label={`Shopping cart with ${cartItemCount} items`}
            >
              <Icons.ShoppingCart size={22} />
              {cartItemCount > 0 && (
                <span 
                  className="absolute -top-2 -right-2 bg-terracotta text-white font-semibold rounded-full w-5 h-5 flex items-center justify-center"
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  {cartItemCount > 9 ? '9+' : cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
