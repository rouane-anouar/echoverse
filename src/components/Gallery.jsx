import React, { useState } from 'react';
import { galleryPhotos } from '../data/clubData';
import { IconMaximize, IconAward, IconCamera } from './Icons';

export const Gallery = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterCategories = [
    { id: 'all', label: 'جميع اللقطات' },
    { id: 'awards', label: 'التكريمات والإنجازات' },
    { id: 'events', label: 'الفعاليات والتغطيات' },
    { id: 'behind', label: 'الكواليس والمعدات' },
  ];

  const filteredPhotos =
    activeFilter === 'all'
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === activeFilter);

  return (
    <section id="gallery" className="section-wrapper gallery-section">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="section-header text-center">
          <span className="section-badge">معرض الصور • Visual Journal</span>
          <h2 className="section-title">من قلب EchOverse</h2>
          <p className="section-subtitle">
            لقطات أصيلة توثق حضورنا الميداني، اعتراف الكلية بجهودنا، وشغف الفريق المستمر في نقل نبض الجامعة.
          </p>

          {/* Filter Tabs */}
          <div className="gallery-filter-bar" role="tablist" aria-label="تصفية معرض الصور">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === cat.id}
                className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Magazine-style Editorial Photo Grid */}
        <div className="gallery-editorial-grid">
          {filteredPhotos.map((photo) => {
            // Find global index in galleryPhotos so lightbox opens the correct photo
            const globalIndex = galleryPhotos.findIndex((p) => p.id === photo.id);

            return (
              <figure
                key={photo.id}
                className={`gallery-card card-${photo.aspect} ${photo.featured ? 'card-featured' : ''}`}
                onClick={() => onOpenLightbox(globalIndex)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenLightbox(globalIndex);
                  }
                }}
                aria-label={`عرض ${photo.title}`}
              >
                <div className="gallery-card-inner">
                  <picture>
                    <source srcSet={photo.webp} type="image/webp" />
                    <img
                      src={photo.jpg}
                      alt={photo.caption}
                      className="gallery-img"
                      loading="lazy"
                    />
                  </picture>

                  {/* Gradient Overlay & Meta Info */}
                  <div className="gallery-card-overlay">
                    <div className="gallery-card-meta">
                      <span className="gallery-category-badge">
                        {photo.category === 'awards' ? (
                          <IconAward size={13} />
                        ) : (
                          <IconCamera size={13} />
                        )}
                        <span>{photo.categoryLabel}</span>
                      </span>

                      <div className="gallery-expand-icon" aria-hidden="true">
                        <IconMaximize size={18} />
                      </div>
                    </div>

                    <div className="gallery-card-info">
                      <h3 className="gallery-item-title">{photo.title}</h3>
                      <p className="gallery-item-caption">{photo.caption}</p>
                    </div>
                  </div>
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};
