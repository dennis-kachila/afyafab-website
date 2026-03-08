import Link from "next/link"
import Image from "next/image"
import { highlightCards, processSteps } from "./site-content"
import SiteLayout from "./components/site-layout"

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-[#17D492]/20 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(23,212,146,0.17),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(23,212,146,0.12),transparent_40%)]" />
        <div className="container relative mx-auto px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#17D492]">Healthcare x Advanced Manufacturing</p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Digital Manufacturing Solutions for Better Healthcare Delivery
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-slate-200 md:text-xl">
            Afyafab Technologies develops patient-specific medical solutions through 3D printing, biomedical engineering, and computer-aided design.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-[#17D492] px-7 py-2 text-sm font-semibold text-[#031924] transition-colors hover:bg-[#17D492]/90">
              Talk to Us
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center rounded-md border border-[#17D492] px-7 py-2 text-sm font-semibold text-[#17D492] transition-colors hover:bg-[#17D492]/10">
              Explore Services
            </Link>
          </div>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-[#17D492]/25 bg-[#062436]/60 p-2">
            <Image
              src="/images/hero-medical-manufacturing.svg"
              alt="Digital medical manufacturing dashboard illustration"
              width={1200}
              height={800}
              className="h-auto w-full rounded-xl"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">Visit Each Section as a Dedicated Page</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "About", href: "/about", text: "Learn about our healthcare innovation focus and orthopaedic emphasis." },
              { title: "Manufacturing", href: "/manufacturing", text: "See how local spare parts production reduces cost and downtime." },
              { title: "Services", href: "/services", text: "Review all six clinical and engineering service lines." },
              { title: "Technology", href: "/technology", text: "Explore tools and digital capabilities used in our workflows." },
              { title: "Mission & Vision", href: "/mission-vision", text: "Read our long-term purpose and direction." },
              { title: "Contact", href: "/contact", text: "Connect with our team for project support and collaboration." }
            ].map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl border border-[#17D492]/20 bg-[#062436]/70 p-5 transition-colors hover:bg-[#083049]">
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-slate-300">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#17D492]/20 bg-[#02141f] py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">How We Work</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.step} className="rounded-2xl border border-[#17D492]/20 bg-[#062436]/65 p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#17D492] text-xl font-bold text-[#031924]">
                  {step.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-slate-300">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-center text-3xl font-bold">A Practical Model for Healthcare Impact</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {highlightCards.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#17D492]/20 bg-[#062436]/70 p-6">
                <item.icon className="mb-3 h-9 w-9 text-[#17D492]" />
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
