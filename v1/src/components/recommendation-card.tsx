import { TextAnimate } from "@/components/ui/text-animate"

interface RecommendationCardProps {
  testimonial: string
  name: string
  company: string
  imageSrc?: string
}

export function RecommendationCard({
  testimonial,
  name,
  company,
  imageSrc,
}: RecommendationCardProps) {
  return (
    <article className="recommendation-card">
      <blockquote className="recommendation-quote">
        <TextAnimate
          as="p"
          by="word"
          animation="fadeIn"
          duration={0.7}
          once
          startOnView
        >
          {testimonial}
        </TextAnimate>
      </blockquote>
      <div className="recommendation-author">
        {imageSrc && (
          <div className="recommendation-avatar">
            <img src={imageSrc} alt={`${name} profile photo`} />
          </div>
        )}
        <div className="recommendation-details">
          <span className="recommendation-name">{name}</span>
          <span className="recommendation-title">{company}</span>
        </div>
      </div>
    </article>
  )
}
