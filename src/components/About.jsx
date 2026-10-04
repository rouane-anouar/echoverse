import React from 'react';
import { clubInfo } from '../data/clubData';

export const About = () => {
  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        <div className="about-grid">
          {/* Main Editorial Text */}
          <div className="about-editorial">
            <span className="section-badge">من نحن • Our Story</span>
            <h2 className="section-title">
              صوت طلابي يُلهم، وعدسة توثق نبض كلية العلوم والتكنولوجيا
            </h2>
            <p className="about-lead">
              {clubInfo.description}
            </p>
            <p className="about-secondary">
              تأسس النادي ليكون الواجهة الإعلامية وصانع التجارب لطلبة الكلية، حيث نوظف الإمكانيات والمهارات الشابة في التصوير، التقديم، الإخراج، وصناعة المحتوى الرقمي، لنرتقي بالمشهد الطلابي ونبرز مكانة جامعة محمد خيضر بسكرة كصرح علمي متألق.
            </p>
          </div>

          {/* Core Values / Editorial Pillars */}
          <div className="about-pillars">
            <div className="pillar-item">
              <div className="pillar-index font-latin">01</div>
              <div className="pillar-content">
                <h3 className="pillar-title">توثيق احترافي بروح طلابية</h3>
                <p className="pillar-text">
                  نواكب كافة المحافل والندوات والمعارض العلمية، موفرين تغطية بصرية شاملة تحافظ على أرشيف الكلية وتبرز إنجازاتها.
                </p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-index font-latin">02</div>
              <div className="pillar-content">
                <h3 className="pillar-title">منبر للحوار وتبادل الأفكار</h3>
                <p className="pillar-text">
                  نصنع لقاءات ومقابلات تفاعلية تقرب المسافات بين الطلبة والأساتذة وإدارة الكلية، وتتيح للجميع مشاركة تجاربهم ومشاريعهم.
                </p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-index font-latin">03</div>
              <div className="pillar-content">
                <h3 className="pillar-title">صناعة الحدث والتجارب</h3>
                <p className="pillar-text">
                  لا نكتفي بالنقل والمشاهدة؛ بل نبتكر فعاليات طلابية نوعية، ورشات تكوينية، ومبادرات تنبض بالطاقة والإيجابية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
