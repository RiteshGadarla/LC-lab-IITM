"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react"
import { principalInvestigator } from "@/lib/data"

export function ContactSection() {
  return (
      <section id="contact" className="pt-32 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Fund Us Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Fund Us</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We are actively seeking funding to advance our research initiatives. Your support can help us drive innovation and make a lasting impact.
            </p>
          </div>

          {/* Contact Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to collaborate, join our team, or learn more about our research? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column: Contact Form and Quick Links */}
            <div className="space-y-8">
              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">Send Us a Message</h3>
                <Card className="hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                          Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50"
                            placeholder="Your name"
                            required
                        />
                      </div>
                      <div>
                        <label htmlFor="contact" className="block text-sm font-medium text-slate-700">
                          Email or Phone
                        </label>
                        <input
                            type="text"
                            id="contact"
                            name="contact"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50"
                            placeholder="Your email or phone number"
                            required
                        />
                      </div>
                      <div>
                        <label htmlFor="query" className="block text-sm font-medium text-slate-700">
                          Query
                        </label>
                        <textarea
                            id="query"
                            name="query"
                            rows={4}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50"
                            placeholder="Your message or query"
                            required
                        ></textarea>
                      </div>
                      <button
                          type="submit"
                          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Submit
                      </button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a
                      href="https://www.iitm.ac.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    IIT Madras <ExternalLink size={14} />
                  </a>
                  <a
                      href="https://hss.iitm.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
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
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <Card className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="text-blue-600" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                          <a
                              href={`mailto:${principalInvestigator.email}`}
                              className="text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            {principalInvestigator.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="text-blue-600" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                          <p className="text-slate-600">{principalInvestigator.phone}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="text-blue-600" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Address</h4>
                          <p className="text-slate-600 leading-relaxed">
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
              <Card className="h-96 bg-slate-100 flex items-center justify-center">
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