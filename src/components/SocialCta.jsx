import React, { useState } from 'react';
import { clubInfo } from '../data/clubData';
import {
  IconInstagram,
  IconFacebook,
  IconMail,
  IconCopy,
  IconCheck,
  IconExternalLink,
} from './Icons';

export const SocialCta = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(clubInfo.social.email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2400);
      });
    }
  };

  return (
    <section id="contact" className="section-wrapper social-cta-section">
      <div className="container container-narrow">
        {/* Main Box Header */}
        <div className="social-cta-box">
          <div className="section-header text-center mb-0">
            <span className="section-badge">تواصل معنا • Connect With Us</span>
            <h2 className="section-title">ابقَ قريبًا من EchOverse</h2>
            <p className="section-subtitle">
              تابع تغطياتنا الميدانية، مقابلاتنا الحصرية، وأحدث فعاليات كلية العلوم والتكنولوجيا عبر منصاتنا الرقمية الرسمية.
            </p>
          </div>

          {/* 3 Prominent Action Cards */}
          <div className="social-cards-grid">
            {/* 1. Instagram */}
            <div className="social-channel-card card-instagram">
              <div className="channel-icon-wrap insta-bg">
                <IconInstagram size={28} />
              </div>

              <div className="channel-details">
                <span className="channel-platform font-latin">Instagram</span>
                <span className="channel-handle font-latin">{clubInfo.social.instagramHandle}</span>
                <p className="channel-desc">
                  النافذة الأسرع لمتابعة القصص اليومية، التغطيات الحية، وريلز الفعاليات.
                </p>
              </div>

              <a
                href={clubInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-instagram w-full"
                aria-label="متابعة نادي EchOverse على إنستغرام"
              >
                <span>متابعة على إنستغرام</span>
                <IconExternalLink size={16} />
              </a>
            </div>

            {/* 2. Facebook */}
            <div className="social-channel-card card-facebook">
              <div className="channel-icon-wrap fb-bg">
                <IconFacebook size={28} />
              </div>

              <div className="channel-details">
                <span className="channel-platform font-latin">Facebook</span>
                <span className="channel-handle font-latin">EchOverse Club</span>
                <p className="channel-desc">
                  الصفحة الرسمية للألبومات الكاملة، البيانات، ومواعيد الأنشطة الجامعية.
                </p>
              </div>

              <a
                href={clubInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-facebook w-full"
                aria-label="زيارة صفحة نادي EchOverse على فيسبوك"
              >
                <span>زيارة صفحتنا على فيسبوك</span>
                <IconExternalLink size={16} />
              </a>
            </div>

            {/* 3. Official Email */}
            <div className="social-channel-card card-email">
              <div className="channel-icon-wrap mail-bg">
                <IconMail size={28} />
              </div>

              <div className="channel-details">
                <span className="channel-platform">البريد الإلكتروني الرسمي</span>
                <span className="channel-handle email-address font-latin">
                  {clubInfo.social.email}
                </span>
                <p className="channel-desc">
                  للتنسيق الإعلامي، تغطية الفعاليات، ومقترحات الشراكة الطلابية.
                </p>
              </div>

              <div className="email-actions-group">
                <a
                  href={`mailto:${clubInfo.social.email}`}
                  className="btn btn-primary email-main-btn"
                  aria-label="إرسال بريد إلكتروني إلى نادي EchOverse"
                >
                  <IconMail size={17} />
                  <span>راسلنا الآن</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`btn btn-secondary email-copy-btn ${copied ? 'copied-active' : ''}`}
                  aria-label="نسخ عنوان البريد الإلكتروني"
                  title="نسخ البريد الإلكتروني"
                >
                  {copied ? (
                    <>
                      <IconCheck size={16} />
                      <span>تم النسخ!</span>
                    </>
                  ) : (
                    <>
                      <IconCopy size={16} />
                      <span>نسخ</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
