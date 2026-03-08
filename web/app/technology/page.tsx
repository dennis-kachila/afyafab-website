import { Cog } from "lucide-react"
import SiteLayout from "../components/site-layout"
import { capabilities } from "../site-content"
import Image from "next/image"

export default function TechnologyPage() {
  return (
    <SiteLayout>
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="mb-4 text-4xl font-bold">Technology and Capabilities</h1>
          <p className="mb-10 max-w-3xl text-slate-200">
            Afyafab Technologies integrates advanced digital tools to develop accurate, cost-effective, and patient-specific healthcare solutions.
          </p>

          <div className="mb-10 overflow-hidden rounded-2xl border border-[#17D492]/25 bg-[#062436]/60 p-2">
            <Image
              src="/images/technology-capabilities.svg"
              alt="Technology capabilities network illustration"
              width={900}
              height={640}
              className="h-auto w-full rounded-xl"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map((capability) => (
              <article key={capability} className="flex items-start gap-3 rounded-xl border border-[#17D492]/20 bg-[#062436]/70 p-5">
                <Cog className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#17D492]" />
                <h2 className="text-lg font-semibold">{capability}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
