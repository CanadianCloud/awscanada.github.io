export interface ArtworkCrop {
  x: number
  y: number
  width: number
  height: number
  sourceWidth: number
  sourceHeight: number
}

// Frame the artwork without changing or stretching the original logo file.
export default function LogoArtwork({ src, alt, crop }: { src: string; alt: string; crop?: ArtworkCrop }) {
  if (!crop) return <img src={src} alt={alt} loading="lazy" />

  return (
    <svg className="logo-artwork" role="img" aria-label={alt}
      viewBox={`${crop.x} ${crop.y} ${crop.width} ${crop.height}`}>
      <image href={src} width={crop.sourceWidth} height={crop.sourceHeight} />
    </svg>
  )
}
