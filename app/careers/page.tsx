import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Briefcase, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Careers | adkst Inc. - Advanced Knowledge Systems",
  description:
    "Explore career opportunities at adkst Inc. Join our team of innovators in AI, AEM development, and technology consulting.",
}

export default function CareersPage() {
  return (
    <main>
      <Navbar />

      {/* Hero banner */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(214,27%,20%)] via-[hsl(214,27%,28%)] to-[hsl(214,22%,35%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Careers
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
            Build the future of technology with us. We are always looking for
            talented individuals who share our passion for innovation.
          </p>
        </div>
      </section>

      {/* No jobs section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-muted/50">
            <Briefcase className="h-10 w-10 text-muted-foreground" />
          </div>

          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            No Open Positions Right Now
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            We don&apos;t have any open positions at the moment, but we&apos;re
            always interested in connecting with talented people. Check back
            soon or reach out to us directly.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/#contact">
                <Bell className="h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>

          {/* Why join us */}
          <div className="mt-20 grid gap-6 text-left sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-display text-sm font-semibold text-foreground">
                Cutting-Edge Work
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Work on AI, AEM, and enterprise tech projects that make a real
                impact for Fortune 500 clients.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-display text-sm font-semibold text-foreground">
                Growth-Focused Culture
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We invest in continuous learning, certifications, and career
                development for every team member.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-display text-sm font-semibold text-foreground">
                Flexible & Collaborative
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Remote-friendly work, flexible schedules, and a collaborative
                environment that values every voice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
