import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../common';
import { Button } from '../common';
import { Input } from '../common';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-warm-cream border-t border-sage/20">
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-deep-brown font-semibold text-xl">
              <Icons.Home size={24} className="text-terracotta" />
              <span>Cozy Haven</span>
            </Link>
            <p 
              className="leading-relaxed"
              style={{
                fontSize: '0.875rem',
                color: '#4A4543',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              Premium bedding essentials crafted for your perfect sleep experience. Quality materials, timeless design.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal hover:text-terracotta transition-colors duration-200"
                aria-label="Instagram"
              >
                <Icons.Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal hover:text-terracotta transition-colors duration-200"
                aria-label="Facebook"
              >
                <Icons.Facebook size={20} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal hover:text-terracotta transition-colors duration-200"
                aria-label="Pinterest"
              >
                <Icons.Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h4 className="text-h4 font-semibold text-deep-brown mb-4">Shop</h4>
            <ul className="space-y-3">
              {['Sheets', 'Duvets', 'Pillows', 'Mattress Toppers', 'Blankets', 'Curtains'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/category/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-body-sm text-charcoal hover:text-terracotta transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h4 className="text-h4 font-semibold text-deep-brown mb-4">Customer Service</h4>
            <ul className="space-y-3">
              {[
                { label: 'Returns & Exchanges', path: '/returns' },
                { label: 'Shipping Information', path: '/shipping' },
                { label: 'Size Guide', path: '/size-guide' },
                { label: 'FAQ', path: '/faq' },
                { label: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-body-sm text-charcoal hover:text-terracotta transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: About & Newsletter */}
          <div>
            <h4 className="text-h4 font-semibold text-deep-brown mb-4">About</h4>
            <ul className="space-y-3 mb-6">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Sustainability', path: '/sustainability' },
                { label: 'Materials', path: '/materials' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-body-sm text-charcoal hover:text-terracotta transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-6 pt-6 border-t border-sage/20">
              <h4 className="text-body font-semibold text-deep-brown mb-2">
                Get 10% Off Your First Order
              </h4>
              <p className="text-body-sm text-charcoal mb-4">
                Subscribe for sleep tips & exclusive offers
              </p>
              {!subscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    required
                  />
                  <Button variant="primary" size="medium" fullWidth type="submit">
                    Subscribe
                  </Button>
                </form>
              ) : (
                <div className="flex items-center space-x-2 text-sage">
                  <Icons.Check size={20} />
                  <span className="text-body-sm font-medium">Thanks for subscribing!</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-sage/20">
          {/* Payment Methods */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-body-sm text-charcoal">We Accept:</span>
            <div className="flex items-center gap-3 text-charcoal">
              <Icons.CreditCard size={32} className="opacity-60" />
              <Icons.CreditCard size={32} className="opacity-60" />
              <Icons.CreditCard size={32} className="opacity-60" />
              <Icons.Package size={32} className="opacity-60" />
              <Icons.Smartphone size={32} className="opacity-60" />
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-body-sm text-charcoal">
            <p>© {new Date().getFullYear()} Cozy Haven. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link to="/privacy" className="hover:text-terracotta transition-colors duration-200">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-terracotta transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
