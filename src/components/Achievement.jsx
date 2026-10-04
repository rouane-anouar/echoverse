import React from 'react';
import { clubInfo } from '../data/clubData';
import { IconTrophy, IconAward, IconCheck, IconMaximize } from './Icons';

export const Achievement = ({ onOpenLightbox }) => {
  return (
    <section id="achievement" className="section-wrapper achievement-section">
      <div className="container">
        <div className="achievement-card">
          <div className="achievement-grid">
            {/* Left/Text Content Column */}
            <div className="achievement-info">
              <div className="achievement-badge-pill">
                <IconTrophy size={18} />
                <span>إنجاز نفخر به • Official Honor</span>
              </div>

              <h2 className="achievement-main-title">
                <span className="award-title-highlight">{clubInfo.awardTitle}</span>
                <span className="award-subtitle font-latin">{clubInfo.awardSubtitle}</span>
              </h2>

              <div className="achievement-university-label">
                <span>{clubInfo.university}</span>
              </div>

              <p className="achievement-body-text">
                {clubInfo.awardDescription}
              </p>

              <div className="achievement-highlights-list">
                <div className="achieve-point">
                  <span className="point-icon"><IconCheck size={16} /></span>
                  <span>اعتراف رسمي من عمادة الكلية بجهود التغطيات والتوثيق</span>
                </div>
                <div className="achieve-point">
                  <span className="point-icon"><IconCheck size={16} /></span>
                  <span>تسليم درع التميز بحضور قيادات الجامعة والأساتذة</span>
                </div>
                <div className="achieve-point">
                  <span className="point-icon"><IconCheck size={16} /></span>
                  <span>دافع مستمر لصناعة أثر طلابي وإعلامي متجدد</span>
                </div>
              </div>
            </div>

            {/* Right/Visual Column: Authentic Award Photos */}
            <div className="achievement-visuals">
              <div className="award-photos-pair">
                {/* Photo 1: Faculty Ceremony with Dean */}
                <div
                  className="award-photo-wrapper main-award-photo"
                  onClick={() => onOpenLightbox(1)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onOpenLightbox(1);
                    }
                  }}
                  aria-label="عرض صورة تكريم النادي مع عميد الكلية في قاعة عمر عساسي"
                >
                  <picture>
                    <source srcSet="./images/award-faculty.webp" type="image/webp" />
                    <img
                      src="./images/award-faculty.jpg"
                      alt="أعضاء نادي EchOverse يتسلمون درع التميز وجائزة أفضل نادي رفقة عميد كلية العلوم والتكنولوجيا"
                      className="award-img"
                      loading="lazy"
                      width="1280"
                      height="853"
                    />
                  </picture>
                  <div className="award-photo-caption">
                    <span>درع التميز رفقة عميد الكلية والأساتذة</span>
                    <IconMaximize size={15} />
                  </div>
                </div>

                {/* Photo 2: Ceremony with University Rector */}
                <div
                  className="award-photo-wrapper sub-award-photo"
                  onClick={() => onOpenLightbox(2)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onOpenLightbox(2);
                    }
                  }}
                  aria-label="عرض صورة تكريم النادي مع مدير جامعة محمد خيضر بسكرة"
                >
                  <picture>
                    <source srcSet="./images/award-rector.webp" type="image/webp" />
                    <img
                      src="./images/award-rector.jpg"
                      alt="أعضاء النادي برفقة السيد مدير جامعة محمد خيضر بسكرة بدرع التميز"
                      className="award-img"
                      loading="lazy"
                      width="1280"
                      height="853"
                    />
                  </picture>
                  <div className="award-photo-caption">
                    <span>التكريم رفقة السيد مدير الجامعة</span>
                    <IconMaximize size={15} />
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Crest / Stamp */}
              <div className="award-stamp-badge">
                <IconAward size={22} />
                <div className="stamp-text font-latin">BEST CLUB AWARD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
