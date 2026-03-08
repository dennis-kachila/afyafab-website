import Image from "next/image"
import Link from "next/link"
import { navLinks } from "../site-content"

type SiteLayoutProps = {
  children: React.ReactNode
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const year = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-[#031924] text-white">
      <header className="sticky top-0 z-40 border-b border-[#17D492]/20 bg-[#031924]/95 px-6 py-4 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/site%20Icon.png" alt="Afyafab Technologies logo" width={40} height={40} className="rounded-sm" />
            <span className="text-lg font-bold md:text-xl">Afyafab Technologies</span>
          </Link>

          <nav className="hidden items-center gap-4 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/90 transition-colors hover:text-[#17D492]">
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#17D492] px-4 py-2 text-sm font-semibold text-[#031924] transition-colors hover:bg-[#17D492]/90"
          >
            Contact Us
          </Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-[#17D492]/20 bg-[#031924] py-8 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/site%20Icon.png" alt="Afyafab Technologies logo" width={32} height={32} className="rounded-sm" />
            <span className="text-base font-semibold">Afyafab Technologies</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-4" aria-label="Footer navigation">
            {navLinks.map((link) => (
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
