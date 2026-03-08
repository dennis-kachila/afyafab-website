import { Button } from "@/components/ui/button"
import { Clock, DollarSign, Activity, Cog, Truck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#01141d] text-white">
      <header className="w-full py-4 px-6 bg-[#01141d] border-b border-[#17D492]/20">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/site%20Icon-qBpjR9CFTmOA9ZCGlmSp6UVHw9fLux.png"
              alt="AfyaFab Logo"
              width={40}
              height={40}
              className="text-[#17D492]"
            />
            <span className="text-2xl font-bold text-white">Afyafab</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#benefits" className="text-white hover:text-[#17D492]">Benefits</Link>
            <Link href="#features" className="text-white hover:text-[#17D492]">Features</Link>
            <Link href="#how-it-works" className="text-white hover:text-[#17D492]">How It Works</Link>
            <Link href="#contact" className="text-white hover:text-[#17D492]">Contact</Link>
          </nav>
          <Button className="bg-[#17D492] text-[#01141d] hover:bg-[#17D492]/90">Get Started</Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Revolutionizing Medical Equipment Repairs</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Afyafab leverages 3D printing technology to produce spare parts for medical equipment, ensuring timely and cost-effective repairs in the healthcare sector.
            </p>
            <Button className="bg-[#17D492] text-[#01141d] hover:bg-[#17D492]/90 text-lg py-2 px-6">Learn More</Button>
          </div>
        </section>

        <section id="benefits" className="py-20 bg-[#01141d]/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose AfyaFab?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Clock, title: "Faster Repairs", description: "Reduce downtime with quick, on-demand part production" },
                { icon: DollarSign, title: "Cost-Effective", description: "Cut costs by eliminating import fees and reducing inventory" },
                { icon: Activity, title: "Improved Availability", description: "Ensure critical equipment stays operational with readily available parts" }
              ].map((benefit, index) => (
                <div key={index} className="bg-[#01141d]/80 p-6 rounded-lg border border-[#17D492]/20 text-center">
                  <benefit.icon className="h-12 w-12 text-[#17D492] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Cog, title: "Advanced 3D Printing", description: "State-of-the-art 3D printing technology for precise and durable parts" },
                { icon: Cog, title: "Custom Part Design", description: "Tailored solutions for a wide range of medical equipment" },
                { icon: Activity, title: "Quality Assurance", description: "Rigorous testing to ensure parts meet or exceed OEM standards" },
                { icon: Truck, title: "Local Production", description: "Reduce dependence on imports with locally manufactured parts" }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <feature.icon className="h-8 w-8 text-[#17D492] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-[#01141d]/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
              {[
                { step: 1, title: "Request", description: "Submit your spare part request" },
                { step: 2, title: "Design", description: "Our team designs or sources the 3D model" },
                { step: 3, title: "Print", description: "We 3D print the part using quality materials" },
                { step: 4, title: "Deliver", description: "Receive your part and get back to saving lives" }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#17D492] text-[#01141d] flex items-center justify-center text-2xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-center">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-[#17D492]/10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Medical Equipment Repairs?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the revolution in healthcare maintenance. Let's work together to keep your equipment running smoothly and efficiently.
            </p>
            <Button className="bg-[#17D492] text-[#01141d] hover:bg-[#17D492]/90 text-lg py-2 px-6">Contact Us Today</Button>
          </div>
        </section>
      </main>

      <footer className="bg-[#01141d]/80 text-white py-8 border-t border-[#17D492]/20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/site%20Icon-qBpjR9CFTmOA9ZCGlmSp6UVHw9fLux.png"
              alt="AfyaFab Logo"
              width={32}
              height={32}
              className="text-[#17D492]"
            />
            <span className="text-2xl font-bold">AfyaFab</span>
          </div>
          <nav className="flex flex-wrap justify-center space-x-6">
            <Link href="#" className="hover:text-[#17D492]">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#17D492]">Terms of Service</Link>
            <Link href="#" className="hover:text-[#17D492]">Contact</Link>
          </nav>
          <div className="mt-4 md:mt-0">
            <p>&copy; 2025 Afyafab Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}