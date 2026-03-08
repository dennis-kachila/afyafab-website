import { benefits } from "../site-content"
import SiteLayout from "../components/site-layout"
import Image from "next/image"

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="border-b border-[#17D492]/20 py-16">
        <div className="container mx-auto px-6">
          <h1 className="mb-5 text-4xl font-bold">About Afyafab Technologies</h1>
          <p className="mb-4 max-w-4xl text-slate-200">
            Afyafab Technologies is a healthcare innovation company focused on developing digital manufacturing solutions for the medical sector.
          </p>
          <p className="mb-4 max-w-4xl text-slate-200">
            By combining 3D printing, biomedical engineering, and computer-aided design, we develop patient-specific medical solutions and support healthcare facilities with rapid and cost-effective manufacturing.
          </p>
          <p className="max-w-4xl text-slate-200">
            We work at the intersection of healthcare and advanced manufacturing, transforming digital medical data into accurate physical models, tools, and components that support clinicians, researchers, and medical institutions.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-[#17D492]/25 bg-[#062436]/60 p-2">
            <Image
              src="/images/about-biomedical-design.svg"
              alt="Biomedical design and planning illustration"
              width={900}
              height={640}
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-3xl font-bold">Why Teams Choose Afyafab</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-xl border border-[#17D492]/20 bg-[#062436]/70 p-6 text-center">
                <benefit.icon className="mx-auto mb-3 h-10 w-10 text-[#17D492]" />
                <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
