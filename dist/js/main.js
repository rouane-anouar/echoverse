/**
 * EchOverse Club — Official Website JavaScript
 * Pure vanilla JavaScript — Zero dependencies, 100% offline & local file:/// compatible
 */

(function () {
  'use strict';

  // Photo Archive Data
  var galleryPhotos = [
    {
      id: "team-dean",
      webp: "images/team-dean.webp",
      jpg: "images/team-dean.jpg",
      title: "فريق EchOverse رفقة عميد الكلية",
      caption: "صورة رسمية تجمع أعضاء نادي EchOverse رفقة عميد كلية العلوم والتكنولوجيا بجامعة محمد خيضر بسكرة.",
      category: "events",
      categoryLabel: "الفعاليات والتغطيات"
    },
    {
      id: "award-faculty",
      webp: "images/award-faculty.webp",
      jpg: "images/award-faculty.jpg",
      title: "درع التميز وجائزة أفضل نادي",
      caption: "أعضاء النادي يتسلمون درع التميز وشهادة التقدير رفقة عميد الكلية والأساتذة في قاعة المحاضرات عمر عساسي.",
      category: "awards",
      categoryLabel: "التكريمات والإنجازات"
    },
    {
      id: "award-rector",
      webp: "images/award-rector.webp",
      jpg: "images/award-rector.jpg",
      title: "تكريم النادي مع مدير الجامعة",
      caption: "لحظة فخر تجمع أعضاء النادي مع السيد مدير جامعة محمد خيضر بسكرة بدرع التميز الطلابي.",
      category: "awards",
      categoryLabel: "التكريمات والإنجازات"
    },
    {
      id: "showcase-presentation",
      webp: "images/showcase-presentation.webp",
      jpg: "images/showcase-presentation.jpg",
      title: "استعراض الإنتاج الإعلامي للقيادة الجامعية",
      caption: "عضو النادي يستعرض المشاريع والإنتاجات الرقمية أمام مدير الجامعة وعميد كلية العلوم والتكنولوجيا.",
      category: "behind",
      categoryLabel: "الكواليس والإنتاج"
    },
    {
      id: "media-equipment",
      webp: "images/media-equipment.webp",
      jpg: "images/media-equipment.jpg",
      title: "عتاد التصوير والمعدات الصوتية الميدانية",
      caption: "استعراض كاميرات التصوير الاحترافية والميكروفونات وأجهزة البث الميداني المستخدمة في التغطيات الحية.",
      category: "behind",
      categoryLabel: "الكواليس والإنتاج"
    },
    {
      id: "event-outdoor",
      webp: "images/event-outdoor.webp",
      jpg: "images/event-outdoor.jpg",
      title: "تغطية الفعاليات الميدانية للكلية",
      caption: "أعضاء النادي بالبطاقات التنظيمية برفقة عميد الكلية ورؤساء الأقسام والأساتذة في الساحة الأكاديمية.",
      category: "events",
      categoryLabel: "الفعاليات والتغطيات"
    }
  ];

  // Current Lightbox State
  var currentLightboxIndex = 0;
  var touchStartX = null;
  var touchEndX = null;

  document.addEventListener('DOMContentLoaded', function () {
    // 1. Navbar Scroll Effect
    var navbarHeader = document.querySelector('.navbar-header');
    if (navbarHeader) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
          navbarHeader.classList.add('is-scrolled');
        } else {
          navbarHeader.classList.remove('is-scrolled');
        }
      }, { passive: true });
    }

    // 2. Mobile Menu Drawer
    var mobileToggleBtn = document.querySelector('.mobile-toggle-btn');
    var mobileDrawerBackdrop = document.querySelector('.mobile-drawer-backdrop');
    var closeDrawerBtn = document.querySelector('.close-drawer-btn');
    var mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    function openMobileMenu() {
      if (mobileDrawerBackdrop) {
        mobileDrawerBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeMobileMenu() {
      if (mobileDrawerBackdrop) {
        mobileDrawerBackdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    }

    if (mobileToggleBtn) {
      mobileToggleBtn.addEventListener('click', function () {
        if (mobileDrawerBackdrop && mobileDrawerBackdrop.classList.contains('active')) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });
    }

    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', closeMobileMenu);
    }

    if (mobileDrawerBackdrop) {
      mobileDrawerBackdrop.addEventListener('click', function (e) {
        if (e.target === mobileDrawerBackdrop) {
          closeMobileMenu();
        }
      });
    }

    mobileNavLinks.forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });

    // 3. Smooth scrolling for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href && href.length > 1) {
          var targetElem = document.querySelector(href);
          if (targetElem) {
            e.preventDefault();
            targetElem.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // 4. Dynamic Year in Footer
    var yearElem = document.getElementById('current-year');
    if (yearElem) {
      yearElem.textContent = new Date().getFullYear();
    }

    // 5. Back to Top Button
    var backToTopBtn = document.querySelector('.footer-back-to-top');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // 6. Copy Email Button with visual feedback
    var copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', function () {
        var email = 'echoverse_club@univ-biskra.dz';
        var self = this;
        var originalHTML = self.innerHTML;

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(showCopied, fallbackCopy);
        } else {
          fallbackCopy();
        }

        function fallbackCopy() {
          var textArea = document.createElement('textarea');
          textArea.value = email;
          document.body.appendChild(textArea);
          textArea.select();
          try {
            document.execCommand('copy');
            showCopied();
          } catch (err) {
            console.error('Fallback copy failed', err);
          }
          document.body.removeChild(textArea);
        }

        function showCopied() {
          self.classList.add('copied-active');
          self.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> <span>تم النسخ!</span>';
          setTimeout(function () {
            self.classList.remove('copied-active');
            self.innerHTML = originalHTML;
          }, 2400);
        }
      });
    }

    // 7. Gallery Category Filtering
    var filterBtns = document.querySelectorAll('.gallery-filter-bar .filter-btn');
    var galleryCards = document.querySelectorAll('.gallery-editorial-grid .gallery-card');

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');

        var filter = this.getAttribute('data-filter');
        galleryCards.forEach(function (card) {
          var cardCategory = card.getAttribute('data-category');
          if (filter === 'all' || cardCategory === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // 8. Lightbox Elements
    var lightboxOverlay = document.getElementById('lightbox-modal');
    var lightboxImg = document.getElementById('lightbox-img');
    var lightboxWebpSource = document.getElementById('lightbox-webp-source');
    var lightboxTitle = document.getElementById('lightbox-title');
    var lightboxCaption = document.getElementById('lightbox-caption');
    var lightboxCounter = document.getElementById('lightbox-counter');
    var lightboxCloseBtn = document.querySelector('.lightbox-close-btn');
    var lightboxPrevBtn = document.querySelector('.lightbox-nav-btn.btn-prev');
    var lightboxNextBtn = document.querySelector('.lightbox-nav-btn.btn-next');
    var lightboxStage = document.querySelector('.lightbox-stage');

    function updateLightbox(index) {
      if (index < 0) index = galleryPhotos.length - 1;
      if (index >= galleryPhotos.length) index = 0;
      currentLightboxIndex = index;

      var photo = galleryPhotos[currentLightboxIndex];
      if (!photo) return;

      if (lightboxWebpSource) lightboxWebpSource.srcset = photo.webp;
      if (lightboxImg) {
        lightboxImg.src = photo.jpg;
        lightboxImg.alt = photo.title;
      }
      if (lightboxTitle) lightboxTitle.textContent = photo.title;
      if (lightboxCaption) lightboxCaption.textContent = photo.caption;
      if (lightboxCounter) {
        lightboxCounter.innerHTML = '<span>' + (currentLightboxIndex + 1) + '</span> / <span>' + galleryPhotos.length + '</span>';
      }
    }

    function openLightbox(index) {
      updateLightbox(index);
      if (lightboxOverlay) {
        lightboxOverlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeLightbox() {
      if (lightboxOverlay) {
        lightboxOverlay.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    }

    function prevPhoto() {
      updateLightbox(currentLightboxIndex - 1);
    }

    function nextPhoto() {
      updateLightbox(currentLightboxIndex + 1);
    }

    // Attach Click Handlers to all expandable photo triggers
    document.querySelectorAll('[data-lightbox-index]').forEach(function (elem) {
      elem.addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-lightbox-index'), 10);
        if (!isNaN(idx)) {
          openLightbox(idx);
        }
      });
      elem.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          var idx = parseInt(this.getAttribute('data-lightbox-index'), 10);
          if (!isNaN(idx)) {
            openLightbox(idx);
          }
        }
      });
    });

    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
    if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', prevPhoto);
    if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', nextPhoto);

    if (lightboxOverlay) {
      lightboxOverlay.addEventListener('click', function (e) {
        if (e.target === lightboxOverlay) {
          closeLightbox();
        }
      });
    }

    // Keyboard support for Lightbox
    window.addEventListener('keydown', function (e) {
      if (!lightboxOverlay || !lightboxOverlay.classList.contains('is-open')) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        // In Arabic RTL: ArrowRight navigates to previous or next photo
        prevPhoto();
      } else if (e.key === 'ArrowLeft') {
        nextPhoto();
      }
    });

    // Touch Swipe gestures for smartphones
    if (lightboxStage) {
      lightboxStage.addEventListener('touchstart', function (e) {
        touchStartX = e.targetTouches[0].clientX;
      }, { passive: true });

      lightboxStage.addEventListener('touchmove', function (e) {
        touchEndX = e.targetTouches[0].clientX;
      }, { passive: true });

      lightboxStage.addEventListener('touchend', function () {
        if (touchStartX === null || touchEndX === null) return;
        var diff = touchStartX - touchEndX;
        if (diff > 45) {
          nextPhoto();
        } else if (diff < -45) {
          prevPhoto();
        }
        touchStartX = null;
        touchEndX = null;
      });
    }
  });
})();
