import React from 'react';
import { activitiesData } from '../data/clubData';
import { IconCamera, IconMic, IconClapperboard, IconCalendarStar } from './Icons';

export const Activities = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'camera':
        return <IconCamera size={26} />;
      case 'mic':
        return <IconMic size={26} />;
      case 'clapperboard':
        return <IconClapperboard size={26} />;
      case 'calendar-star':
        return <IconCalendarStar size={26} />;
      default:
        return <IconCamera size={26} />;
    }
  };

  return (
    <section id="activities" className="section-wrapper activities-section">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="section-header">
          <span className="section-badge">ماذا نصنع؟ • What We Do</span>
          <h2 className="section-title">
            محاور نشاطنا الإعلامي في الحرم الجامعي
          </h2>
          <p className="section-subtitle">
            نجمع بين العتاد الاحترافي والشغف الطلابي لتقديم منظومة إعلامية متكاملة تليق بكلية العلوم والتكنولوجيا وجامعة بسكرة.
          </p>
        </div>

        {/* 4 Editorial Activity Cards Grid */}
        <div className="activities-grid">
          {activitiesData.map((activity, idx) => (
            <article key={activity.id} className="activity-card">
              <div className="activity-top-row">
                <div className="activity-icon-box">
                  {getIcon(activity.icon)}
                </div>
                <span className="activity-number font-latin">0{idx + 1}</span>
              </div>

              <div className="activity-body">
                <div className="activity-heading-wrap">
                  <h3 className="activity-title">{activity.title}</h3>
                  <span className="activity-title-en font-latin">{activity.titleEn}</span>
                </div>

                <p className="activity-description">
                  {activity.description}
                </p>

                <div className="activity-tags-wrap">
                  {activity.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="activity-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
