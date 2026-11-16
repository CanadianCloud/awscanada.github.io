import type { ImgHTMLAttributes } from 'react'
import { photos } from '../assets/optimized/photos'

export default function Photo({ name, sizes, ...props }: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & { name: keyof typeof photos; sizes: string }) {
  return <img {...photos[name]} sizes={sizes} decoding="async" {...props} />
}
