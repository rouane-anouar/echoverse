/**
 * EchOverse Club — Editorial Platform JavaScript
 * Pure vanilla JavaScript — Zero dependencies, 100% offline & local file:/// compatible
 */

(function () {
  'use strict';

  var archivePhotos = [
    {
      webp: "images/event-outdoor.webp",
      jpg: "images/event-outdoor.jpg",
      caption: "تغطية الفعاليات والأنشطة الميدانية أمام مبنى الكلية."
    },
    {
      webp: "images/media-equipment.webp",
      jpg: "images/media-equipment.jpg",
      caption: "عتاد التصوير والمعدات الصوتية الميدانية الخاصة بالنادي."
    },
    {
      webp: "images/showcase-presentation.webp",
      jpg: "images/showcase-presentation.jpg",
      caption: "استعراض الإنتاج والمحتوى الإعلامي أمام قيادة الجامعة والكلية."
    },
    {
      webp: "images/award-rector.webp",
      jpg: "images/award-rector.jpg",
      caption: "تكريم النادي بدرع التميز رفقة السيد مدير جامعة محمد خيضر بسكرة."
    },
    {
      webp: "images/award-faculty.webp",
      jpg: "images/award-faculty.jpg",
      caption: "تسلم درع التميز وجائزة أفضل نادي بحضور عميد الكلية والأساتذة."
    },
    {
      webp: "images/team-dean.webp",
      jpg: "images/team-dean.jpg",
      caption: "فريق EchOverse رفقة عميد كلية العلوم والتكنولوجيا."
    }
  ];

  var currentIndex = 0;
  var touchStartX = null;
  var touchEndX = null;

  document.addEventListener('DOMContentLoaded', function () {
    // 1. Mobile Menu
    var toggleBtn = document.querySelector('.nav-mobile-toggle');
    var mobileOverlay = document.querySelector('.mobile-nav-overlay');
    var closeBtn = document.querySelector('.mobile-close-btn');
    var mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    function openMenu() {
      if (mobileOverlay) {
        mobileOverlay.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeMenu() {
      if (mobileOverlay) {
        mobileOverlay.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    }

    if (toggleBtn) toggleBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    mobileLinks.forEach(function (l) {
      l.addEventListener('click', closeMenu);
    });

    // 2. Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href && href.length > 1) {
          var target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // 3. Dynamic Footer Year
    var yearEl = document.getElementById('footer-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    // 4. Copy Email Button
    var copyBtn = document.getElementById('copy-email-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        var email = 'echoverse_club@univ-biskra.dz';
        var self = this;
        var originalText = self.textContent;

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(showSuccess, fallbackCopy);
        } else {
          fallbackCopy();
        }

        function fallbackCopy() {
          var ta = document.createElement('textarea');
          ta.value = email;
          document.body.appendChild(ta);
          ta.select();
          try {
            document.execCommand('copy');
            showSuccess();
          } catch (e) {
            console.error('Copy failed', e);
          }
          document.body.removeChild(ta);
        }

        function showSuccess() {
          self.textContent = 'تم النسخ';
          self.classList.add('copied-success');
          setTimeout(function () {
            self.textContent = originalText;
            self.classList.remove('copied-success');
          }, 2000);
        }
      });
    }

    // 5. Lightbox
    var modal = document.getElementById('editorial-lightbox');
    var modalImg = document.getElementById('lightbox-img');
    var modalWebp = document.getElementById('lightbox-webp');
    var modalCaption = document.getElementById('lightbox-caption');
    var modalCounter = document.getElementById('lightbox-counter');
    var modalClose = document.querySelector('.lightbox-close');
    var prevBtn = document.querySelector('.lightbox-arrow.arrow-prev');
    var nextBtn = document.querySelector('.lightbox-arrow.arrow-next');
    var stage = document.querySelector('.lightbox-body');

    function updateLightbox(idx) {
      if (idx < 0) idx = archivePhotos.length - 1;
      if (idx >= archivePhotos.length) idx = 0;
      currentIndex = idx;

      var photo = archivePhotos[currentIndex];
      if (!photo) return;

      if (modalWebp) modalWebp.srcset = photo.webp;
      if (modalImg) {
        modalImg.src = photo.jpg;
        modalImg.alt = photo.caption;
      }
      if (modalCaption) modalCaption.textContent = photo.caption;
      if (modalCounter) {
        modalCounter.textContent = (currentIndex + 1) + ' / ' + archivePhotos.length;
      }
    }

    function openLightbox(idx) {
      updateLightbox(idx);
      if (modal) {
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeLightbox() {
      if (modal) {
        modal.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    }

    document.querySelectorAll('[data-lightbox-index]').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-lightbox-index'), 10);
        if (!isNaN(idx)) openLightbox(idx);
      });
      trigger.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          var idx = parseInt(this.getAttribute('data-lightbox-index'), 10);
          if (!isNaN(idx)) openLightbox(idx);
        }
      });
    });

    if (modalClose) modalClose.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', function () { updateLightbox(currentIndex - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { updateLightbox(currentIndex + 1); });

    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) closeLightbox();
      });
    }

    window.addEventListener('keydown', function (e) {
      if (!modal || !modal.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') updateLightbox(currentIndex - 1);
      if (e.key === 'ArrowLeft') updateLightbox(currentIndex + 1);
    });

    if (stage) {
      stage.addEventListener('touchstart', function (e) {
        touchStartX = e.targetTouches[0].clientX;
      }, { passive: true });
      stage.addEventListener('touchmove', function (e) {
        touchEndX = e.targetTouches[0].clientX;
      }, { passive: true });
      stage.addEventListener('touchend', function () {
        if (touchStartX === null || touchEndX === null) return;
        var diff = touchStartX - touchEndX;
        if (diff > 45) updateLightbox(currentIndex + 1);
        if (diff < -45) updateLightbox(currentIndex - 1);
        touchStartX = null;
        touchEndX = null;
      });
    }
  });
})();
