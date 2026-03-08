import { Activity, Target } from "lucide-react"
import SiteLayout from "../components/site-layout"

export default function MissionVisionPage() {
  return (
    <SiteLayout>
      <section className="py-16">
        <div className="container mx-auto grid gap-6 px-6 md:grid-cols-2">
          <article className="rounded-2xl border border-[#17D492]/20 bg-[#062436]/70 p-7">
            <h1 className="mb-4 flex items-center gap-3 text-3xl font-bold">
              <Activity className="h-6 w-6 text-[#17D492]" />
              Mission
            </h1>
            <p className="text-slate-200">
              To improve healthcare accessibility and innovation by using digital manufacturing technologies to develop reliable and affordable medical solutions.
            </p>
          </article>

          <article className="rounded-2xl border border-[#17D492]/20 bg-[#062436]/70 p-7">
            <h2 className="mb-4 flex items-center gap-3 text-3xl font-bold">
              <Target className="h-6 w-6 text-[#17D492]" />
              Vision
            </h2>
            <p className="text-slate-200">
              To become a leading provider of medical 3D printing and healthcare manufacturing solutions in Africa, supporting hospitals, researchers, and innovators.
            </p>
          </article>
        </div>
      </section>
    </SiteLayout>
  )
}
