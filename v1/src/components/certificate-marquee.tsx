import { Marquee } from "@/components/ui/marquee"

interface CertificateMarqueeItem {
  title: string
  issuer: string
  href?: string
  imageSrc: string
}

interface CertificateMarqueeProps {
  certificates: CertificateMarqueeItem[]
}

function splitCertificates(certificates: CertificateMarqueeItem[]) {
  const midpoint = Math.ceil(certificates.length / 2)

  return {
    firstRow: certificates.slice(0, midpoint),
    secondRow: certificates.slice(midpoint),
  }
}

function CertificateCard({
  title,
  href,
  imageSrc,
}: CertificateMarqueeItem) {
  const content = (
    <figure className="group/certificate relative h-60 w-[25rem] overflow-hidden border border-border">
      <img
        src={imageSrc}
        alt={`${title} certificate preview`}
        className="size-full object-cover transition-transform duration-500 group-hover/certificate:scale-[1.02]"
      />
    </figure>
  )

  if (!href) {
    return content
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
      aria-label={`View ${title} certificate`}
    >
      {content}
    </a>
  )
}

export function CertificateMarquee({
  certificates,
}: CertificateMarqueeProps) {
  const { firstRow, secondRow } = splitCertificates(certificates)

  return (
    <div className="relative flex w-full flex-col gap-4 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
      <Marquee pauseOnHover className="[--duration:28s]">
        {firstRow.map((certificate) => (
          <CertificateCard
            key={`${certificate.title}-${certificate.issuer}`}
            {...certificate}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:32s]">
        {secondRow.map((certificate) => (
          <CertificateCard
            key={`${certificate.title}-${certificate.issuer}`}
            {...certificate}
          />
        ))}
      </Marquee>
    </div>
  )
}
