import React, { useState, useEffect } from 'react';
import { clubInfo } from '../data/clubData';
import { IconInstagram, IconMenu, IconClose } from './Icons';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'من نحن', href: '#about' },
    { label: 'لقاء العميد', href: '#featured-photo' },
    { label: 'أنشطتنا', href: '#activities' },
    { label: 'إنجازنا', href: '#achievement' },
    { label: 'المعرض', href: '#gallery' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo / Wordmark */}
        <a href="#hero" className="nav-brand" onClick={(e) => handleLinkClick(e, '#hero')}>
          <div className="brand-symbol">
            <span className="brand-dot"></span>
            <span className="brand-ring"></span>
          </div>
          <div className="brand-text-group">
            <span className="brand-name font-latin">EchOverse</span>
            <span className="brand-badge">النادي الإعلامي</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="التنقل الرئيسي">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Quick Instagram CTA */}
        <div className="nav-actions">
          <a
            href={clubInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-instagram nav-insta-btn"
            aria-label="متابعة نادي EchOverse على إنستغرام"
          >
            <IconInstagram size={17} />
            <span className="font-latin">Instagram</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {mobileMenuOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="قائمة التنقل للهواتف"
          >
            <div className="mobile-drawer-header">
              <div className="brand-text-group">
                <span className="brand-name font-latin">EchOverse</span>
                <span className="brand-badge">النادي الإعلامي</span>
              </div>
              <button
                type="button"
                className="close-drawer-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="إغلاق القائمة"
              >
                <IconClose size={22} />
              </button>
            </div>

            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer">
              <a
                href={clubInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-instagram w-full"
              >
                <IconInstagram size={19} />
                <span>متابعتنا على إنستغرام</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
