import React from 'react';
import { IconMaximize, IconAward } from './Icons';

export const DeanFeature = ({ onOpenLightbox }) => {
  return (
    <section id="featured-photo" className="section-wrapper dean-feature-section">
      <div className="container">
        {/* Editorial Header */}
        <div className="section-header text-center">
          <span className="section-badge">فريق واحد، رؤية مشتركة • United Team</span>
          <h2 className="section-title">
            بين شغف الطلبة ودعم القيادة الأكاديمية
          </h2>
          <p className="section-subtitle">
            يمثل نادي EchOverse همزة الوصل الإعلامية في كلية العلوم والتكنولوجيا، مدعومًا بثقة عمادة الكلية وإدارتها في قيادة المشهد الإعلامي الطلابي.
          </p>
        </div>

        {/* Featured Large Photographic Showcase */}
        <div className="dean-showcase-frame">
          <div
            className="dean-image-container"
            onClick={() => onOpenLightbox(0)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpenLightbox(0);
              }
            }}
            aria-label="عرض صورة فريق EchOverse رفقة عميد الكلية بالحجم الكامل"
          >
            <picture>
              <source srcSet="./images/team-dean.webp" type="image/webp" />
              <img
                src="./images/team-dean.jpg"
                alt="فريق EchOverse رفقة عميد كلية العلوم والتكنولوجيا بجامعة محمد خيضر بسكرة"
                className="dean-image"
                loading="eager"
                width="2560"
                height="1707"
              />
            </picture>

            <div className="dean-overlay-tag">
              <span className="dean-tag-pill">
                <IconAward size={15} />
                <span>اللقاء الرسمي مع عمادة الكلية</span>
              </span>
              <button
                type="button"
                className="btn-expand-hint"
                aria-label="تكبير الصورة"
                tabIndex={-1}
              >
                <IconMaximize size={18} />
                <span>تكبير الصورة</span>
              </button>
            </div>
          </div>

          {/* Tasteful Editorial Caption */}
          <figcaption className="dean-caption-bar">
            <div className="caption-text-block">
              <h3 className="caption-headline">فريق EchOverse رفقة عميد كلية العلوم والتكنولوجيا</h3>
              <p className="caption-description">
                صورة تذكارية رسمية تجمع أعضاء وفريق عمل نادي EchOverse مع السيد عميد كلية العلوم والتكنولوجيا بجامعة محمد خيضر بسكرة، تتويجًا للتعاون المستمر وثقة الإدارة في الإشراف على التغطيات والأنشطة الطلابية.
              </p>
            </div>
            <div className="caption-meta">
              <span className="meta-badge">جامعة محمد خيضر بسكرة</span>
              <span className="meta-badge">اللجنة الإعلامية والتنظيمية</span>
            </div>
          </figcaption>
        </div>
      </div>
    </section>
  );
};
