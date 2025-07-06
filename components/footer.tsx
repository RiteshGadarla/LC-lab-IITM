import Link from "next/link";
import { principalInvestigator } from "@/lib/data"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Lab Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://res.cloudinary.com/dt8amwctw/image/upload/v1749980465/lcl2-removebg-preview_g6aof2.png"
                alt="LC Lab"
                className="h-8 w-auto"
              />
              <div>
                <h3 className="font-semibold">Language & Cognition Lab</h3>
                <p className="text-sm text-slate-400">IIT Madras</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Advancing our understanding of language, cognition, and communication through innovative research and
              international collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/research" className="text-slate-400 hover:text-white transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="/team" className="text-slate-400 hover:text-white transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="/facilities" className="text-slate-400 hover:text-white transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="/collaborations" className="text-slate-400 hover:text-white transition-colors">
                  Collaborations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <Link href="/contact">
              <h3 className="font-semibold mb-4 cursor-pointer hover:underline">
                Contact
              </h3>
            </Link>
            <div className="space-y-2 text-sm text-slate-400">
              <p>{principalInvestigator.email}</p>
              <p>{principalInvestigator.phone}</p>
              <p>
                HSB332B, Humanities and Sciences Block
                <br />
                IIT Madras, Chennai - 600036
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">© 2025 Language & Cognition Lab, IIT Madras. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
