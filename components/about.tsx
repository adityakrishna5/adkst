import Image from "next/image"
import { Shield, Zap, Users, Target } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Innovation First",
    description:
      "We stay at the cutting edge, continuously adopting emerging technologies to deliver forward-thinking solutions.",
  },
  {
    icon: Shield,
    title: "Enterprise Reliability",
    description:
      "Our solutions are built for scale and resilience, meeting the demanding standards of enterprise environments.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We embed with your teams, aligning our expertise with your vision to ensure lasting success beyond delivery.",
  },
  {
    icon: Target,
    title: "Measurable Impact",
    description:
      "Every engagement is anchored in clear KPIs and business outcomes, not just technical deliverables.",
  },
]

export function About() {
  return (
    <section id="about" className="border-t border-border bg-muted/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:w-1/2">
            <Image
              src="/images/about-team.jpg"
              alt="Advanced Knowledge Systems team at work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[hsl(214,27%,20%)]/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="rounded-xl border border-white/20 bg-[hsl(214,27%,20%)]/80 px-5 py-4 backdrop-blur-sm">
                <p className="font-display text-sm font-semibold text-white">
                  Join Us
                </p>
                <p className="mt-1 text-xs text-white/70">
                  We are the technology experts helping organizations succeed in
                  their most critical digital transformations.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Who We Are
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">
                A collective of experts driven by deep technology and a
                human-centric approach
              </span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Advanced Knowledge Systems Inc. is a technology services firm
              founded on the belief that the most powerful solutions emerge at the
              intersection of deep technical expertise and genuine understanding of
              business needs. For over a decade, we have helped enterprises across
              industries unlock growth through AI, world-class web experiences, and
              strategic technology guidance.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/30"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <value.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
