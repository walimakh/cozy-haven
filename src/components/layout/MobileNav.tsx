import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../common';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ label: string; path: string }>;
  activeLink: string;
  onLinkClick: (path: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navLinks,
  activeLink,
  onLinkClick,
}) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleLinkClick = (path: string) => {
    onLinkClick(path);
    onClose();
  };

  return (
    <>
      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Navigation Drawer */}
      <div
        className={`
          fixed top-0 left-0 bottom-0 w-[280px] bg-white shadow-dropdown z-50
          transform transition-transform duration-300 ease-in-out
          md:hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-cream">
          <div className="flex items-center space-x-2">
            <Icons.Home size={24} className="text-terracotta" />
            <span className="font-semibold text-lg text-deep-brown">
              Cozy Haven
            </span>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="touch-target text-charcoal hover:text-terracotta transition-colors"
            aria-label="Close menu"
          >
            <Icons.Close size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="py-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`
                    flex items-center px-6 min-h-touch
                    font-medium text-base transition-colors duration-200
                    touch-feedback-subtle
                    ${
                      activeLink === link.path
                        ? 'text-terracotta bg-cream/50 border-l-4 border-terracotta'
                        : 'text-charcoal hover:bg-cream/30'
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div className="border-t border-cream my-4" />

        {/* Secondary Links */}
        <div className="px-6 space-y-4">
          <Link
            to="/account"
            onClick={onClose}
            className="flex items-center space-x-3 text-charcoal hover:text-terracotta transition-colors min-h-touch touch-feedback-subtle"
          >
            <Icons.User size={20} />
            <span className="font-medium">My Account</span>
          </Link>

          <Link
            to="/wishlist"
            onClick={onClose}
            className="flex items-center space-x-3 text-charcoal hover:text-terracotta transition-colors min-h-touch touch-feedback-subtle"
          >
            <Icons.Heart size={20} />
            <span className="font-medium">Wishlist</span>
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-cream my-4" />

        {/* Contact Info */}
        <div className="px-6 space-y-3 text-sm">
          <a
            href="tel:+1234567890"
            className="flex items-center space-x-2 text-charcoal hover:text-terracotta transition-colors"
          >
            <Icons.Phone size={16} />
            <span>+1 (234) 567-890</span>
          </a>
          <a
            href="mailto:hello@cozyhaven.com"
            className="flex items-center space-x-2 text-charcoal hover:text-terracotta transition-colors"
          >
            <Icons.Mail size={16} />
            <span>hello@cozyhaven.com</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="px-6 mt-6">
          <p className="text-xs font-semibold text-charcoal mb-3 uppercase tracking-wide">
            Follow Us
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal hover:text-terracotta transition-colors touch-target"
              aria-label="X (Twitter)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal hover:text-terracotta transition-colors touch-target"
              aria-label="Facebook"
            >
              <Icons.Facebook size={20} />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal hover:text-terracotta transition-colors touch-target"
              aria-label="WhatsApp"
            >
              <Icons.MessageCircle size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal hover:text-terracotta transition-colors touch-target"
              aria-label="Instagram"
            >
              <Icons.Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
