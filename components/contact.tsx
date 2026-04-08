import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-muted/50 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
          Contact
        </p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          <span className="text-balance">
            {"Let's discuss your next project"}
          </span>
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Whether you are exploring AI, modernizing your digital platform, or
          need strategic technology guidance, our team is ready to help.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12">
          <a
            href="mailto:adityatechconsulting@gmail.com"
            className="flex items-center gap-3 transition-colors hover:text-primary"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">Email</p>
              <p className="text-sm text-muted-foreground">
                adityatechconsulting@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+14377847523"
            className="flex items-center gap-3 transition-colors hover:text-primary"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">Phone</p>
              <p className="text-sm text-muted-foreground">+1 (437) 784-7523</p>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">Office</p>
              <p className="text-sm text-muted-foreground">Toronto, Canada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
