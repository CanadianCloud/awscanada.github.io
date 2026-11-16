import { useEffect, useRef, useState } from 'react'

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
  const artwork = useRef<SVGSVGElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const element = artwork.current
    if (!element || !('IntersectionObserver' in window)) { setVisible(true); return }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { setVisible(true); observer.disconnect() }
    }, { rootMargin: '600px' })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])
  if (!crop) return <img src={src} alt={alt} loading="lazy" />

  return (
    <svg ref={artwork} className="logo-artwork" role="img" aria-label={alt}
      viewBox={`${crop.x} ${crop.y} ${crop.width} ${crop.height}`}>
      <image href={visible ? src : undefined} width={crop.sourceWidth} height={crop.sourceHeight} />
    </svg>
  )
}
