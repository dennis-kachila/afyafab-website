import { Activity, Clock, Cog, DollarSign, Truck } from "lucide-react"

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Services", href: "/services" },
  { label: "Technology", href: "/technology" },
  { label: "Mission & Vision", href: "/mission-vision" },
  { label: "Contact", href: "/contact" }
]

export const benefits = [
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

export const services = [
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
      "Design and fabrication of custom orthopaedic guides that help improve accuracy during orthopaedic procedures."
  },
  {
    title: "Medical Device Prototyping",
    description:
      "Rapid prototyping services for medical technologies and healthcare innovations to accelerate development."
  },
  {
    title: "Prosthetics and Assistive Devices",
    description:
      "Design and production of custom prosthetic components and assistive technologies tailored to patient needs."
  },
  {
    title: "Biomedical Design and Training",
    description:
      "Training for healthcare professionals and researchers in medical 3D printing, CAD, and additive manufacturing."
  }
]

export const capabilities = [
  "3D Printing (Additive Manufacturing)",
  "Medical Imaging Processing (CT and MRI Data)",
  "Computer-Aided Design (CAD)",
  "Rapid Prototyping",
  "Biomedical Engineering Solutions"
]

export const processSteps = [
  { step: 1, title: "Receive Request", description: "We assess your spare part or clinical model requirement." },
  { step: 2, title: "Design and Validate", description: "Our team develops a precise digital model and confirms fit." },
  { step: 3, title: "Manufacture", description: "We produce the component or model using medical-focused additive methods." },
  { step: 4, title: "Deliver and Support", description: "You receive the final output with guidance for immediate use." }
]

export const highlightCards = [
  {
    icon: Cog,
    title: "Engineering-Led Design",
    description: "We translate technical needs into manufacturable parts and clinical tools with precision."
  },
  {
    icon: Activity,
    title: "Clinical Relevance",
    description: "Our outputs are built for healthcare settings where speed, fit, and reliability matter."
  },
  {
    icon: Truck,
    title: "Local Delivery",
    description: "Local additive manufacturing shortens turnaround time and strengthens healthcare resilience."
  }
]
