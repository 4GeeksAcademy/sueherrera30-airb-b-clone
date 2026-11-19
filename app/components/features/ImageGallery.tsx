'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % images.length);
  };

  const imageFallback = 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=85';

  return (
    <div className="grid h-[300px] grid-cols-1 gap-2 overflow-hidden sm:h-[420px] sm:grid-cols-4 sm:grid-rows-2">
      <div className="relative overflow-hidden sm:col-span-2 sm:row-span-2">
        <Image
          src={images[activeIndex]}
          alt={`${title}, foto ${activeIndex + 1}`}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover"
          onError={(event) => { event.currentTarget.src = imageFallback; }}
        />
        <button type="button" onClick={showPrevious} aria-label="Foto anterior" className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-gray-900 shadow hover:bg-white">
          <span aria-hidden="true">‹</span>
        </button>
        <button type="button" onClick={showNext} aria-label="Foto siguiente" className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-gray-900 shadow hover:bg-white">
          <span aria-hidden="true">›</span>
        </button>
        <span className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs text-white">
          {activeIndex + 1} / {images.length}
        </span>
      </div>
      {images.map((image, index) => index !== activeIndex && (
        <button key={`${title}-${index}`} type="button" onClick={() => setActiveIndex(index)} aria-label={`Ver foto ${index + 1}`} className="relative hidden overflow-hidden sm:block">
          <Image src={image} alt={`${title}, foto ${index + 1}`} fill sizes="25vw" className="object-cover transition-transform hover:scale-105" />
        </button>
      ))}
    </div>
  );
};

export default ImageGallery;