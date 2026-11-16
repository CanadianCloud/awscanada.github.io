import { lazy, Suspense, useState } from 'react';
import Photo from '../Photo';
const GalleryLightbox = lazy(() => import('../GalleryLightbox'));


export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    { name: 'AWSDay24-110' as const },
    { name: 'AWSDay24-092' as const },
    { name: 'AWSDay24-123' as const },
    { name: 'AWSDay24-050' as const },
    { name: 'AWSDay24-119' as const },
    { name: 'AWSDay24-376' as const },
    { name: 'AWSDay24-322' as const },
    { name: 'AWSDay24-400' as const },
  ];


  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  return (
    <section className="community-gallery" aria-label="Photos from our community">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* Masonry Grid Layout - fills all space */}
        <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px] gap-3 sm:gap-4">
          {/* Large feature image - spans 2 cols on mobile, 4 cols on desktop × 2 rows */}
          <button
            aria-label="Open community photo 1" onClick={() => openLightbox(0)}
            className="relative col-span-2 md:col-span-4 md:row-span-2 overflow-hidden rounded-lg cursor-pointer bg-gray-200 active:scale-[0.98]"
          >
            <Photo
              sizes="(max-width: 767px) 100vw, 65vw"
              name={images[0].name}
              loading="lazy" alt="Gallery image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0" />
          </button>

          {/* Right side - 2 images stacked on desktop, side-by-side on mobile */}
          <button
            aria-label="Open community photo 2" onClick={() => openLightbox(1)}
            className="relative col-span-1 md:col-span-2 md:row-span-1 overflow-hidden rounded-lg cursor-pointer bg-gray-200 active:scale-[0.98]"
          >
            <Photo
              sizes="(max-width: 767px) 50vw, 33vw"
              name={images[1].name}
              loading="lazy" alt="Gallery image 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0" />
          </button>

          <button
            aria-label="Open community photo 3" onClick={() => openLightbox(2)}
            className="relative col-span-1 md:col-span-2 md:row-span-1 overflow-hidden rounded-lg cursor-pointer bg-gray-200 active:scale-[0.98]"
          >
            <Photo
              sizes="(max-width: 767px) 50vw, 33vw"
              name={images[2].name}
              loading="lazy" alt="Gallery image 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0" />
          </button>

          {/* Bottom row - 3 images of 2 cols each on desktop, grid on mobile */}
          <button
            aria-label="Open community photo 4" onClick={() => openLightbox(3)}
            className="relative col-span-1 md:col-span-2 md:row-span-1 overflow-hidden rounded-lg cursor-pointer bg-gray-200 active:scale-[0.98]"
          >
            <Photo
              sizes="(max-width: 767px) 50vw, 33vw"
              name={images[3].name}
              loading="lazy" alt="Gallery image 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0" />
          </button>

          <button
            aria-label="Open community photo 5" onClick={() => openLightbox(4)}
            className="relative col-span-1 md:col-span-2 md:row-span-1 overflow-hidden rounded-lg cursor-pointer bg-gray-200 active:scale-[0.98]"
          >
            <Photo
              sizes="(max-width: 767px) 50vw, 33vw"
              name={images[4].name}
              loading="lazy" alt="Gallery image 5"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0" />
          </button>

          <button
            aria-label="Open community photo 6" onClick={() => openLightbox(5)}
            className="relative col-span-2 md:col-span-2 md:row-span-1 overflow-hidden rounded-lg cursor-pointer bg-gray-200 active:scale-[0.98]"
          >
            <Photo
              sizes="(max-width: 767px) 100vw, 33vw"
              name={images[5].name}
              loading="lazy" alt="Gallery image 6"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0" />
          </button>

          {/* Extra row */}
          <button
            aria-label="Open community photo 7" onClick={() => openLightbox(6)}
            className="relative col-span-1 md:col-span-3 md:row-span-1 overflow-hidden rounded-lg cursor-pointer bg-gray-200 active:scale-[0.98]"
          >
            <Photo
              sizes="(max-width: 767px) 50vw, 50vw"
              name={images[6].name}
              loading="lazy" alt="Gallery image 7"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0" />
          </button>

          <button
            aria-label="Open community photo 8" onClick={() => openLightbox(7)}
            className="relative col-span-1 md:col-span-3 md:row-span-1 overflow-hidden rounded-lg cursor-pointer bg-gray-200 active:scale-[0.98]"
          >
            <Photo
              sizes="(max-width: 767px) 50vw, 50vw"
              name={images[7].name}
              loading="lazy" alt="Gallery image 8"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0" />
          </button>
        </div>

        <Suspense fallback={null}>{open && <GalleryLightbox
          open={open}
          close={() => setOpen(false)}
          index={photoIndex}
          on={{
            view: ({ index }) => setPhotoIndex(index),
          }}
        />}</Suspense>
      </div>
    </section>
  );
}




