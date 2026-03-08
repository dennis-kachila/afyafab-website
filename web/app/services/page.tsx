import SiteLayout from "../components/site-layout"
import { services } from "../site-content"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <SiteLayout>
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="mb-4 text-4xl font-bold">What We Do</h1>
          <p className="mb-10 max-w-3xl text-slate-200">
            We provide healthcare manufacturing services that combine biomedical engineering, practical clinical use, and additive manufacturing speed.
          </p>

          <div className="mb-10 overflow-hidden rounded-2xl border border-[#17D492]/25 bg-[#062436]/60 p-2">
            <Image
              src="/images/hero-medical-manufacturing.svg"
              alt="Medical service and manufacturing workflow illustration"
              width={1200}
              height={800}
              className="h-auto w-full rounded-xl"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="rounded-2xl border border-[#17D492]/20 bg-[#062436]/70 p-6">
                <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#17D492] text-sm font-bold text-[#031924]">
                  {index + 1}
                </div>
                <h2 className="mb-3 text-xl font-semibold">{service.title}</h2>
                <p className="text-slate-300">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
