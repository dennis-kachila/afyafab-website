import SiteLayout from "../components/site-layout"
import Image from "next/image"

export default function ManufacturingPage() {
  return (
    <SiteLayout>
      <section className="border-b border-[#17D492]/20 py-16">
        <div className="container mx-auto px-6">
          <h1 className="mb-5 text-4xl font-bold">Medical Device Spare Parts Manufacturing</h1>
          <p className="mb-4 max-w-4xl text-slate-200">
            AfyaFab harnesses 3D printing technology to manufacture spare parts for medical devices, addressing the urgent need for fast and affordable repairs in healthcare facilities.
          </p>
          <p className="mb-4 max-w-4xl text-slate-200">
            Many hospitals face long delays and high costs when equipment breaks down because replacement components often need to be imported. AfyaFab addresses this challenge by producing replacement parts locally using additive manufacturing.
          </p>
          <p className="max-w-4xl text-slate-200">
            Through this model, healthcare providers can maintain and restore critical medical devices quickly and efficiently.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-[#17D492]/25 bg-[#062436]/60 p-2">
            <Image
              src="/images/manufacturing-parts.svg"
              alt="Illustration of locally manufactured spare parts"
              width={900}
              height={640}
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-bold">Impact in Healthcare Facilities</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Reduces reliance on imported components",
              "Lowers maintenance and repair costs",
              "Shortens equipment downtime",
              "Improves access to essential medical equipment"
            ].map((point) => (
              <div key={point} className="rounded-xl border border-[#17D492]/20 bg-[#062436]/70 p-5">
                <p className="text-slate-100">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
