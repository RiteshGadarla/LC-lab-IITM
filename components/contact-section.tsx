"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react"
import { principalInvestigator } from "@/lib/teamData"
import { useRouter } from "next/navigation";

export function ContactSection() {
  const router = useRouter()
  return (
      <section id="contact" className="pt-32 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-8 border-b-4 border-[#000080] inline-block w-full pb-4">Get In Touch</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              We’d love to hear from you! If you’re a student interested in our research, a collaborator from academia or industry, or simply curious about our work, feel free to reach out.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column: Google Form and Quick Links */}
            <div className="space-y-8">
              {/* Google Form */}
              <div>
                <h3 className="text-2xl font-semibold text-black mb-6">Send Us a Message</h3>
                <Card className="hover:shadow-md transition-all duration-300 rounded-2xl border border-black">
                  <CardContent className="p-6">
                    <div className="w-full h-[600px]">
                      <iframe
                          src="https://forms.gle/nP7Vkm8vkyPSbA1KA"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          title="Contact Form"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a
                      href="https://www.iitm.ac.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black hover:text-gray-700 transition-colors"
                  >
                    IIT Madras <ExternalLink size={14} />
                  </a>
                  <a
                      href="https://hss.iitm.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black hover:text-gray-700 transition-colors"
                  >
                    Department of HSS <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Information and Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-semibold text-black mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <Card className="hover:shadow-lg transition-all duration-300 rounded-2xl bg-white border border-black">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Mail className="text-black" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Email</h4>
                          <a
                              href={`mailto:${principalInvestigator.email}`}
                              className="text-black hover:text-gray-700 transition-colors"
                          >
                            {principalInvestigator.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 rounded-2xl bg-white border border-black">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Phone className="text-black" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Phone</h4>
                          <p className="text-black">{principalInvestigator.phone}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 rounded-2xl bg-white border border-black">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="text-black" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">Address</h4>
                          <p className="text-black leading-relaxed">
                            HSB332B, Humanities and Sciences Block
                            <br />
                            Indian Institute of Technology Madras
                            <br />
                            Chennai - 600036, Tamil Nadu, India
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Map */}
              <Card className="h-96 bg-white border border-black flex items-center justify-center">
                <div className="w-full h-full">
                  <iframe
                      title="IIT Madras Precise Location"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps?q=12.989725,80.232165&z=18&output=embed&layer=s"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
  )
}