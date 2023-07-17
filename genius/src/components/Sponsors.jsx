import Image from 'next/future/image'

import { Container } from '@/components/Container'
import logoBroadwayInfosys from '@/images/logos/broadway-infosys.svg'
import logoWrapsy from '@/images/logos/wrapsy.svg'
import logoSingapore from '@/images/logos/singapore.png'
import logoWorldLink from '@/images/logos/worldlink.svg'

const sponsors = [
  { name: 'Broadway Infosys', logo: logoBroadwayInfosys },
  { name: 'Wrapsy', logo: logoWrapsy },
  { name: 'WorldLink', logo: logoWorldLink },
  { name: 'Singapore', logo: logoSingapore },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Current sponsorships for our workshops and speakers.
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-4 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
