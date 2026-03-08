import SiteLayout from "../components/site-layout"
import Image from "next/image"

export default function ContactPage() {
  return (
    <SiteLayout>
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="mb-4 text-4xl font-bold">Contact Afyafab Technologies</h1>
          <p className="mb-8 max-w-3xl text-slate-200">
            Ready to reduce medical equipment downtime and accelerate healthcare innovation? Partner with us to design, print, and deliver practical medical manufacturing solutions.
          </p>

          <div className="mb-8 overflow-hidden rounded-2xl border border-[#17D492]/25 bg-[#062436]/60 p-2">
            <Image
              src="/images/contact-healthcare-network.svg"
              alt="Connected healthcare partner network illustration"
              width={900}
              height={640}
              className="h-auto w-full rounded-xl"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-[#17D492]/20 bg-[#062436]/70 p-5">
              <p className="mb-1 text-sm uppercase tracking-wide text-[#17D492]">Email</p>
              <p className="text-slate-100">hello@afyafab.com</p>
            </div>
            <div className="rounded-xl border border-[#17D492]/20 bg-[#062436]/70 p-5">
              <p className="mb-1 text-sm uppercase tracking-wide text-[#17D492]">Phone</p>
              <p className="text-slate-100">+000 000 000 000</p>
            </div>
            <div className="rounded-xl border border-[#17D492]/20 bg-[#062436]/70 p-5">
              <p className="mb-1 text-sm uppercase tracking-wide text-[#17D492]">Location</p>
              <p className="text-slate-100">City, Country</p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
