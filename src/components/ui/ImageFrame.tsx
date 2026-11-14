import PixelIcon from './PixelIcon'
import './ImageFrame.css'

type Props = {
  image?: string
  alt: string
  fallback: string
  loading?: 'deferred' | 'immediate'
}

export default function ImageFrame({ image, alt, fallback, loading = 'deferred' }: Props) {
  return (
    <div className="image-frame">
      {image ? (
        <img
          className="image-frame-photo"
          src={image}
          alt={alt}
          width={800}
          height={500}
          loading={loading === 'immediate' ? 'eager' : 'lazy'}
          fetchPriority={loading === 'immediate' ? 'high' : 'auto'}
          decoding="async"
        />
      ) : (
        <span className="image-frame-fallback">
          <PixelIcon image={fallback} size={48} />
        </span>
      )}
    </div>
  )
}
