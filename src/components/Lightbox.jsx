import React, { useEffect, useRef } from 'react';
import { IconClose, IconArrowLeft, IconArrowRight } from './Icons';

export const Lightbox = ({
  isOpen,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  photos = [],
}) => {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Prevent body scroll when lightbox is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        // In RTL or general: ArrowLeft navigates
        onNext();
      } else if (e.key === 'ArrowRight') {
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !photos.length) return null;

  const currentPhoto = photos[currentIndex] || photos[0];

  // Touch Swipe Handlers for mobile smartphones
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (diff > minSwipeDistance) {
      // Swiped left
      onNext();
    } else if (diff < -minSwipeDistance) {
      // Swiped right
      onPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="lightbox-overlay"
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="عارض الصور المكبرة"
    >
      {/* Lightbox Top Control Bar */}
      <div className="lightbox-top-bar">
        <div className="lightbox-counter font-latin">
          <span>{currentIndex + 1}</span> / <span>{photos.length}</span>
        </div>

        <button
          type="button"
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="إغلاق عارض الصور"
        >
          <IconClose size={26} />
        </button>
      </div>

      {/* Main Content Area */}
      <div
        className="lightbox-stage"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Arrow: Previous */}
        <button
          type="button"
          className="lightbox-nav-btn btn-prev"
          onClick={onPrev}
          aria-label="الصورة السابقة"
        >
          <IconArrowRight size={28} />
        </button>

        {/* Displayed Image */}
        <div className="lightbox-image-wrap">
          <picture>
            <source srcSet={currentPhoto.webp} type="image/webp" />
            <img
              src={currentPhoto.jpg}
              alt={currentPhoto.title || "صورة من أرشيف نادي EchOverse"}
              className="lightbox-img"
              loading="eager"
            />
          </picture>
        </div>

        {/* Navigation Arrow: Next */}
        <button
          type="button"
          className="lightbox-nav-btn btn-next"
          onClick={onNext}
          aria-label="الصورة التالية"
        >
          <IconArrowLeft size={28} />
        </button>
      </div>

      {/* Bottom Info Bar: Title & Caption */}
      <div className="lightbox-bottom-bar">
        <div className="lightbox-caption-box">
          <h4 className="lightbox-title">{currentPhoto.title}</h4>
          <p className="lightbox-caption">{currentPhoto.caption}</p>
        </div>
      </div>
    </div>
  );
};
