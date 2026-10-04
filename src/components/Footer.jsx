import React from 'react';
import { clubInfo } from '../data/clubData';
import { IconInstagram, IconFacebook, IconMail, IconArrowLeft } from './Icons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top-row">
          {/* Brand & Identity Column */}
          <div className="footer-brand-column">
            <div className="footer-brand-group">
              <span className="footer-brand-title font-latin">EchOverse</span>
              <span className="footer-brand-subtitle">{clubInfo.arabicName}</span>
            </div>
            <p className="footer-affiliation-text">
              {clubInfo.faculty} • {clubInfo.university}
            </p>
            <p className="footer-motto-quote">
              «{clubInfo.slogan}»
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-nav-column">
            <h4 className="footer-col-heading">روابط سريعة</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">الرئيسية</a></li>
              <li><a href="#about">من نحن</a></li>
              <li><a href="#featured-photo">لقاء العميد</a></li>
              <li><a href="#activities">أنشطتنا</a></li>
              <li><a href="#achievement">إنجازنا التكريمي</a></li>
              <li><a href="#gallery">معرض الصور</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="footer-social-column">
            <h4 className="footer-col-heading">قنواتنا الرقمية</h4>
            <div className="footer-social-icons">
              <a
                href={clubInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon insta-hover"
                aria-label="إنستغرام نادي EchOverse"
              >
                <IconInstagram size={20} />
              </a>
              <a
                href={clubInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon fb-hover"
                aria-label="فيسبوك نادي EchOverse"
              >
                <IconFacebook size={20} />
              </a>
              <a
                href={`mailto:${clubInfo.social.email}`}
                className="footer-social-icon mail-hover"
                aria-label="مراسلة نادي EchOverse"
              >
                <IconMail size={20} />
              </a>
            </div>
            <div className="footer-contact-item">
              <span className="font-latin">{clubInfo.social.email}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="footer-bottom-row">
          <p className="footer-copyright font-latin">
            © {currentYear} EchOverse Club. All rights reserved.
          </p>

          <p className="footer-tagline-ar">
            الهوية الرقمية الرسمية لنادي EchOverse الإعلامي — جامعة بسكرة
          </p>

          <button
            type="button"
            onClick={handleScrollToTop}
            className="footer-back-to-top"
            aria-label="العودة إلى أعلى الصفحة"
          >
            <span>إلى الأعلى</span>
            <span className="back-arrow-icon"><IconArrowLeft size={16} /></span>
          </button>
        </div>
      </div>
    </footer>
  );
};
