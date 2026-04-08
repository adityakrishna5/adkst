import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  Services: [
    { label: "AI Services", href: "#services" },
    { label: "AEM Web Development", href: "#services" },
    { label: "Tech Consulting", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "#contact" },
  ],
  Connect: [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "GitHub", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <Image
              src="/images/adkst-logo.png"
              alt="adkst Inc."
              width={260}
              height={78}
              className="h-16 w-auto md:h-20"
            />
            <span className="mt-1 block text-[11px] font-medium tracking-[0.1em] text-muted-foreground md:text-xs">
              Advanced Knowledge Systems Inc.
            </span>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Empowering enterprises with intelligent technology solutions that
              drive transformation and measurable results.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <p className="mb-4 text-sm font-semibold text-foreground">
                  {category}
                </p>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {"© 2026 adkst Inc. All Rights Reserved."}
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
