import React from 'react';
import { clubInfo } from '../data/clubData';
import { IconInstagram, IconArrowLeft, IconAward, IconCamera, IconMic } from './Icons';

export const Hero = () => {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Top Affiliation Badge */}
        <div className="hero-eyebrow">
          <span className="live-pulse"></span>
          <span className="eyebrow-text">
            {clubInfo.university} • {clubInfo.faculty}
          </span>
        </div>

        {/* Hero Title & Identity */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-brand font-latin">EchOverse</span>
            <span className="hero-tagline">النادي الإعلامي لكلية العلوم والتكنولوجيا</span>
          </h1>

          <p className="hero-motto">
            {clubInfo.slogan}
          </p>

          <p className="hero-lead">
            المساحة الطلابية الأولى للتوثيق المرئي، المقابلات الأكاديمية، صناعة المحتوى، وإخراج الفعاليات الكبرى برؤية شبابية واحترافية.
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <a
              href="#about"
              onClick={(e) => handleScrollTo(e, '#about')}
              className="btn btn-primary hero-btn-main"
            >
              <span>اكتشف النادي</span>
              <IconArrowLeft size={18} />
            </a>

            <a
              href={clubInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-instagram hero-btn-insta"
              aria-label="الانتقال إلى حساب نادي EchOverse على إنستغرام"
            >
              <IconInstagram size={20} />
              <span>تابعنا على إنستغرام</span>
            </a>
          </div>

          {/* Key Quick Badges Bar */}
          <div className="hero-highlights">
            <div className="hero-highlight-item highlight-award">
              <div className="highlight-icon-wrap gold">
                <IconAward size={20} />
              </div>
              <div className="highlight-text-wrap">
                <strong className="highlight-strong">أفضل نادي</strong>
                <span className="highlight-sub">بكلية العلوم والتكنولوجيا</span>
              </div>
            </div>

            <div className="hero-highlight-item">
              <div className="highlight-icon-wrap cyan">
                <IconCamera size={20} />
              </div>
              <div className="highlight-text-wrap">
                <strong className="highlight-strong">تغطيات فورية</strong>
                <span className="highlight-sub">صورة وفيديو احترافي</span>
              </div>
            </div>

            <div className="hero-highlight-item">
              <div className="highlight-icon-wrap blue">
                <IconMic size={20} />
              </div>
              <div className="highlight-text-wrap">
                <strong className="highlight-strong">حوارات ومقابلات</strong>
                <span className="highlight-sub">صوت الطالب والأستاذ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ambient Visual Media Accent */}
        <div className="hero-media-ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>MEDIA COVERAGE • INTERVIEWS • CONTENT CREATION • EVENTS • BEST CLUB 2024 • BISKRA UNIVERSITY • </span>
            <span>MEDIA COVERAGE • INTERVIEWS • CONTENT CREATION • EVENTS • BEST CLUB 2024 • BISKRA UNIVERSITY • </span>
          </div>
        </div>
      </div>
    </section>
  );
};
