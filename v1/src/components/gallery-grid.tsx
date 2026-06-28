import { BlurFade } from "@/components/ui/blur-fade"

interface GalleryImage {
  src: string
  alt: string
}

interface GalleryGridProps {
  images: GalleryImage[]
}

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="columns-2 gap-4 sm:columns-3">
      {images.map((image, index) => (
        <BlurFade
          key={image.src}
          className="mb-4 break-inside-avoid"
          delay={0.25 + index * 0.05}
          inView
          inViewMargin="-10%"
        >
          <img
            className="size-full rounded-lg border border-border bg-canvas object-contain transition-transform duration-400 hover:scale-[1.02]"
            src={image.src}
            alt={image.alt}
          />
        </BlurFade>
      ))}
    </div>
  )
}
