const steps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description:
      "We start by deeply understanding your business objectives, technology landscape, and stakeholder needs through structured workshops and technical audits.",
  },
  {
    number: "02",
    title: "Strategy & Architecture",
    description:
      "Our team designs a tailored solution blueprint, selecting the optimal technology stack and architecture to achieve your goals with maximum efficiency.",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description:
      "Using agile methodologies, we develop and integrate solutions iteratively, ensuring continuous alignment with your evolving requirements and quality standards.",
  },
  {
    number: "04",
    title: "Deploy & Evolve",
    description:
      "We ensure a smooth go-live with comprehensive support, ongoing optimization, and knowledge transfer to set your teams up for long-term success.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Our Process
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            <span className="text-balance">
              A proven approach to delivering results
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Every engagement follows a structured methodology refined over
            hundreds of successful projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="group relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-6 bg-border/50 lg:block" style={{ right: "-1.5rem" }} />
              )}
              <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30">
                <span className="font-display text-4xl font-bold text-primary/20">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
