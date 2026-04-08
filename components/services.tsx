"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Brain, Globe, Lightbulb } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI Services",
    description:
      "From conversational AI and predictive analytics to custom machine learning models, we help your organization harness the full potential of artificial intelligence to drive efficiency, insights, and innovation.",
    features: [
      "Custom ML Model Development",
      "Natural Language Processing",
      "Predictive Analytics & Forecasting",
      "AI Strategy & Roadmapping",
    ],
    image: "/images/ai-services.jpg",
    href: "#contact",
  },
  {
    icon: Globe,
    title: "AEM Web Development",
    description:
      "Our certified Adobe Experience Manager experts build enterprise-grade digital experiences that scale. From component architecture to cloud migration, we deliver AEM solutions that empower your content teams.",
    features: [
      "AEM Sites & Assets Implementation",
      "Custom Component Development",
      "AEM Cloud Service Migration",
      "Headless CMS Architecture",
    ],
    image: "/images/aem-development.jpg",
    href: "#contact",
  },
  {
    icon: Lightbulb,
    title: "Tech Consulting",
    description:
      "We partner with leadership teams to define technology strategy, modernize legacy systems, and architect solutions that align with your business objectives. Our consultants bring deep expertise across the enterprise technology landscape.",
    features: [
      "Digital Transformation Strategy",
      "Architecture & Systems Design",
      "Technology Due Diligence",
      "Cloud & Infrastructure Advisory",
    ],
    image: "/images/tech-consulting.jpg",
    href: "#contact",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            What We Do
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            <span className="text-balance">
              Our services span every stage of the digital transformation journey
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Explore how we help businesses transform through technology.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col items-center gap-10 lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[hsl(214,27%,20%)]/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      </span>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
