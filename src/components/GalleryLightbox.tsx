import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import img1 from '../assets/gallery/AWSDay24-110.jpg'
import img2 from '../assets/gallery/AWSDay24-092.jpg'
import img3 from '../assets/gallery/AWSDay24-123.jpg'
import img4 from '../assets/gallery/AWSDay24-050.jpg'
import img5 from '../assets/gallery/AWSDay24-119.jpg'
import img6 from '../assets/gallery/AWSDay24-376.jpg'
import img7 from '../assets/gallery/AWSDay24-322.jpg'
import img8 from '../assets/gallery/AWSDay24-400.jpg'
const slides = [{ src: img1 }, { src: img2 }, { src: img3 }, { src: img4 }, { src: img5 }, { src: img6 }, { src: img7 }, { src: img8 }]
export default function GalleryLightbox(props: Omit<Parameters<typeof Lightbox>[0], 'slides'>) {
  return <Lightbox {...props} slides={slides} />
}
