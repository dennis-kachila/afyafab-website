import { Button } from "@/components/ui/button"
import { Clock, DollarSign, Activity, Cog, Truck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Core Business", href: "#core-business" },
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Mission & Vision", href: "#mission-vision" },
  { label: "Contact", href: "#contact" }
]

const benefits = [
  {
    icon: Clock,
    title: "Faster Repairs",
    description: "Reduce equipment downtime through local on-demand spare parts manufacturing."
  },
  {
    icon: DollarSign,
    title: "Lower Costs",
    description: "Minimize import expenses and maintenance costs for hospitals and clinics."
  },
  {
    icon: Activity,
    title: "Reliable Access",
    description: "Keep essential medical devices operational with rapid, accurate replacement parts."
  }
]

const services = [
  {
    title: "Medical Device Spare Parts Manufacturing",
    description:
      "Local production of replacement components for medical equipment using 3D printing to support faster and more affordable repairs."
  },
  {
    title: "Patient-Specific Anatomical Models",
    description:
      "Creation of 3D printed models from CT or MRI scans to support surgical planning, medical training, and patient education."
  },
  {
    title: "Orthopaedic Surgical Guides",
    description:
      "Design and fabrication of custom orthopaedic guides that improve accuracy and consistency during procedures."
  },
  {
    title: "Medical Device Prototyping",
    description:
      "Rapid prototyping services for healthcare technologies to accelerate design validation and product development."
  },
  {
    title: "Prosthetics and Assistive Devices",
    description:
      "Design and production of custom prosthetic components and assistive technologies tailored to individual needs."
  },
  {
    title: "Biomedical Design and Training",
    description:
      "Practical training for healthcare professionals and researchers in medical 3D printing, CAD, and additive manufacturing."
  }
]

const capabilities = [
  "3D Printing (Additive Manufacturing)",
  "Medical Imaging Processing (CT and MRI Data)",
  "Computer-Aided Design (CAD)",
  "Rapid Prototyping",
  "Biomedical Engineering Solutions"
]

const processSteps = [
  { step: 1, title: "Receive Request", description: "We assess your spare part or clinical model requirement." },
  { step: 2, title: "Design and Validate", description: "Our team develops a precise digital model and confirms fit." },
  { step: 3, title: "Manufacture", description: "We produce the component or model using medical-focused additive methods." },
  { step: 4, title: "Deliver and Support", description: "You receive the final output with guidance for immediate use." }
]

export default function LandingPage() {
  const year = new Date().getFullYear()

  return (
    <div className="min-h-screen scroll-smooth bg-[#031924] text-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#17D492] focus:px-4 focus:py-2 focus:text-[#031924]">
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 border-b border-[#17D492]/20 bg-[#031924]/95 px-6 py-4 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/site%20Icon.png"
              alt="Afyafab Technologies logo"
              width={40}
              height={40}
              className="rounded-sm"
            />
            <span className="text-xl font-bold text-white md:text-2xl">Afyafab Technologies</span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/90 transition-colors hover:text-[#17D492]">
                {link.label}
              </Link>
            ))}
          </nav>

          <Button asChild className="bg-[#17D492] text-[#031924] hover:bg-[#17D492]/90">
            <Link href="#contact">Start a Project</Link>
          </Button>
        </div>
      </header>

      <main id="main-content" className="flex-grow">
        <section className="relative overflow-hidden border-b border-[#17D492]/20 py-20 md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(23,212,146,0.17),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(23,212,146,0.12),transparent_40%)]" />
          <div className="container relative mx-auto px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#17D492]">Healthcare x Advanced Manufacturing</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Digital Manufacturing Solutions for Better Healthcare Delivery
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-slate-200 md:text-xl">
              Afyafab Technologies transforms digital medical data into accurate physical models, tools, and components through 3D printing, biomedical engineering, and CAD.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild className="bg-[#17D492] px-7 text-[#031924] hover:bg-[#17D492]/90">
                <Link href="#contact">Talk to Us</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#17D492] bg-transparent text-[#17D492] hover:bg-[#17D492]/10 hover:text-[#17D492]">
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-2">
            <div>
              <h2 className="mb-5 text-3xl font-bold md:text-4xl">About Afyafab Technologies</h2>
              <p className="mb-4 text-slate-200">
                Afyafab Technologies is a healthcare innovation company focused on digital manufacturing solutions for the medical sector.
              </p>
              <p className="mb-4 text-slate-200">
                Working at the intersection of healthcare and advanced manufacturing, we convert digital medical data into accurate physical outputs that support clinicians, researchers, and medical institutions.
              </p>
              <p className="text-slate-200">
                We place strong emphasis on orthopaedic applications, surgical planning tools, and rapid prototyping that improve clinical precision.
              </p>
            </div>
            <div className="rounded-2xl border border-[#17D492]/30 bg-[#062436] p-7">
              <h3 className="mb-4 text-2xl font-semibold">Why Healthcare Teams Choose Us</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="rounded-xl border border-[#17D492]/20 bg-[#031924]/60 p-4 text-center">
                    <benefit.icon className="mx-auto mb-3 h-10 w-10 text-[#17D492]" />
                    <p className="mb-2 text-base font-semibold">{benefit.title}</p>
                    <p className="text-sm text-slate-300">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="core-business" className="border-y border-[#17D492]/20 bg-[#02141f] py-20">
          <div className="container mx-auto px-6">
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">Core Business</h2>
            <p className="mb-5 max-w-4xl text-lg text-slate-200">
              AfyaFab harnesses 3D printing technology to manufacture spare parts for medical devices, helping healthcare facilities repair critical equipment quickly and affordably.
            </p>
            <p className="mb-8 max-w-4xl text-slate-200">
              Instead of waiting on expensive imported components, hospitals can access local, additive-manufactured replacements that reduce operational delays and support continuity of care.
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Reduced reliance on imported components",
                "Lower maintenance and repair costs",
                "Shorter equipment downtime",
                "Improved access to essential medical equipment"
              ].map((point) => (
                <div key={point} className="rounded-xl border border-[#17D492]/20 bg-[#031924] p-5">
                  <p className="text-slate-100">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">What We Do</h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-slate-300">
              We deliver healthcare manufacturing services that combine engineering precision, clinical relevance, and production speed.
            </p>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <article key={service.title} className="rounded-2xl border border-[#17D492]/20 bg-[#062436]/70 p-6">
                  <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#17D492] text-sm font-bold text-[#031924]">
                    {index + 1}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                  <p className="text-slate-300">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="technology" className="border-y border-[#17D492]/20 bg-[#02141f] py-20">
          <div className="container mx-auto px-6">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Technology and Capabilities</h2>
            <p className="mb-8 max-w-3xl text-slate-200">
              Our work integrates advanced digital tools to deliver accurate, cost-effective, and patient-specific healthcare solutions.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {capabilities.map((capability) => (
                <div key={capability} className="flex items-start gap-3 rounded-xl border border-[#17D492]/20 bg-[#031924] p-5">
                  <Cog className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#17D492]" />
                  <div>
                    <h3 className="text-lg font-semibold">{capability}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">How We Work</h2>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.step} className="rounded-2xl border border-[#17D492]/20 bg-[#062436]/65 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#17D492] text-xl font-bold text-[#031924]">
                    {step.step}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                  <p className="text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="mission-vision" className="border-y border-[#17D492]/20 bg-[#02141f] py-20">
          <div className="container mx-auto grid gap-6 px-6 md:grid-cols-2">
            <article className="rounded-2xl border border-[#17D492]/20 bg-[#031924] p-7">
              <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                <Activity className="h-6 w-6 text-[#17D492]" />
                Mission
              </h2>
              <p className="text-slate-200">
                To improve healthcare accessibility and innovation by using digital manufacturing technologies to develop reliable and affordable medical solutions.
              </p>
            </article>
            <article className="rounded-2xl border border-[#17D492]/20 bg-[#031924] p-7">
              <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold">
                <Truck className="h-6 w-6 text-[#17D492]" />
                Vision
              </h2>
              <p className="text-slate-200">
                To become a leading provider of medical 3D printing and healthcare manufacturing solutions in Africa, supporting hospitals, researchers, and innovators.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-[#17D492]/30 bg-[#062436] p-8 md:p-10">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Contact Afyafab Technologies</h2>
              <p className="mb-8 max-w-3xl text-slate-200">
                Ready to reduce medical equipment downtime and accelerate healthcare innovation? Partner with us to design, print, and deliver practical medical manufacturing solutions.
              </p>

              <div className="mb-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-[#17D492]/20 bg-[#031924]/70 p-4">
                  <p className="mb-1 text-sm uppercase tracking-wide text-[#17D492]">Email</p>
                  <p className="text-slate-100">hello@afyafab.com</p>
                </div>
                <div className="rounded-xl border border-[#17D492]/20 bg-[#031924]/70 p-4">
                  <p className="mb-1 text-sm uppercase tracking-wide text-[#17D492]">Phone</p>
                  <p className="text-slate-100">+000 000 000 000</p>
                </div>
                <div className="rounded-xl border border-[#17D492]/20 bg-[#031924]/70 p-4">
                  <p className="mb-1 text-sm uppercase tracking-wide text-[#17D492]">Location</p>
                  <p className="text-slate-100">City, Country</p>
                </div>
              </div>

              <Button asChild className="bg-[#17D492] px-7 text-[#031924] hover:bg-[#17D492]/90">
                <Link href="mailto:hello@afyafab.com">Request a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-t border-[#17D492]/20 bg-[#02141f] py-16">
          <div className="container mx-auto px-6">
            <h2 className="mb-8 text-center text-3xl font-bold">A Practical Model for Healthcare Impact</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Cog,
                  title: "Engineering-Led Design",
                  description: "We translate technical needs into manufacturable parts and clinical tools with precision."
                },
                {
                  icon: Activity,
                  title: "Clinical Relevance",
                  description: "Our outputs are built for real healthcare settings where speed, fit, and reliability matter."
                },
                {
                  icon: Truck,
                  title: "Local Delivery",
                  description: "Local additive manufacturing shortens turnaround time and strengthens healthcare resilience."
                }
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#17D492]/20 bg-[#031924] p-6">
                  <item.icon className="mb-3 h-9 w-9 text-[#17D492]" />
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#17D492]/20 bg-[#031924] py-8 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex items-center space-x-2">
            <Image src="/site%20Icon.png" alt="Afyafab Technologies logo" width={32} height={32} className="rounded-sm" />
            <span className="text-lg font-bold">Afyafab Technologies</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-5" aria-label="Footer navigation">
            {navLinks.slice(0, 4).map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/90 transition-colors hover:text-[#17D492]">
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-slate-300">&copy; {year} Afyafab Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}