import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { DeanFeature } from './components/DeanFeature';
import { Activities } from './components/Activities';
import { Achievement } from './components/Achievement';
import { Gallery } from './components/Gallery';
import { Lightbox } from './components/Lightbox';
import { SocialCta } from './components/SocialCta';
import { Footer } from './components/Footer';
import { galleryPhotos } from './data/clubData';

export function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleOpenLightbox = (index) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev === 0 ? galleryPhotos.length - 1 : prev - 1));
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev === galleryPhotos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="echoverse-app">
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <DeanFeature onOpenLightbox={handleOpenLightbox} />
        <Activities />
        <Achievement onOpenLightbox={handleOpenLightbox} />
        <Gallery onOpenLightbox={handleOpenLightbox} />
        <SocialCta />
      </main>

      <Footer />

      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={currentPhotoIndex}
        onClose={handleCloseLightbox}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
        photos={galleryPhotos}
      />
    </div>
  );
}

export default App;
