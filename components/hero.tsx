import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(214,27%,20%)] via-[hsl(214,27%,28%)] to-[hsl(214,22%,35%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-40">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="text-xs font-medium text-white/70">
              Where deep tech meets human ambition
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            <span className="text-balance">Intelligent Solutions for the</span>{" "}
            <span className="text-white/80">Modern Enterprise</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl">
            We architect and deliver AI services, Adobe Experience Manager solutions,
            and strategic technology consulting that drive measurable business
            transformation.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2 bg-white text-[hsl(214,27%,24%)] hover:bg-white/90">
              <Link href="#contact">
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <Link href="#services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
