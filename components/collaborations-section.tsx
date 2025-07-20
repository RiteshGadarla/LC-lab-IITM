"use client"

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card"
import { Globe, MapPin } from "lucide-react"
import { internationalCollaborators, IndianCollaborators } from "@/lib/teamData"
import Image from "next/image"

export function CollaborationsSection() {
  const router = useRouter()

  return (
      <section
          id="collaborations"
          className="pt-32 py-20 bg-slate-50"
          aria-label="Research Collaborations"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-8 border-b-4 border-[#000080] inline-block w-full pb-4">
              Research Collaborators
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building bridges across institutions to advance language and cognition research through diverse global partnerships.
            </p>
          </header>

          {/* IIT Madras Collaborators */}
          <section className="mb-16" aria-labelledby="iit-collaborators-heading">
            <h2
                id="iit-collaborators-heading"
                className="text-4xl font-semibold text-slate-900 mb-8 text-center"
            >
              IIT Madras Collaborators
            </h2>
            <div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                role="list"
                aria-label="IIT Madras research collaborators"
            >
              {IndianCollaborators.map((collaborator, index) => (
                  <Card
                      key={`iit-${index}`}
                      className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                      role="listitem"
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="h-full flex-shrink-0">
                          <Image
                              src={collaborator.image || "/placeholder.svg"}
                              alt={`Portrait of ${collaborator.name}`}
                              width={80}
                              height={80}
                              className="h-20 w-20 object-cover rounded-md shadow-md group-hover:scale-105 transition-transform"
                              loading="lazy"
                          />
                        </div>
                        <div className="flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-1">
                              {collaborator.name}
                            </h3>
                            <p className="text-slate-600 text-sm mb-2 leading-relaxed">
                              {collaborator.institution}
                            </p>
                          </div>
                          {collaborator.country && (
                              <div className="flex items-center gap-1">
                                <MapPin size={12} className="text-slate-400" aria-hidden="true" />
                                <span className="text-xs text-slate-500">
                            {collaborator.country}
                          </span>
                              </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </section>

          {/* International Collaborators */}
          <section className="py-8 mb-16" aria-labelledby="international-collaborators-heading">
            <h2
                id="international-collaborators-heading"
                className="text-4xl font-semibold text-slate-900 mb-8 text-center"
            >
              International Collaborators
            </h2>
            <div
                className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
                role="list"
                aria-label="International research collaborators"
            >
              {internationalCollaborators.map((collaborator, index) => (
                  <Card
                      key={`intl-${index}`}
                      className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                      role="listitem"
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="h-full flex-shrink-0">
                          <Image
                              src={collaborator.image || "/placeholder.svg"}
                              alt={`Portrait of ${collaborator.name}`}
                              width={80}
                              height={80}
                              className="h-20 w-20 object-cover rounded-md shadow-md group-hover:scale-105 transition-transform"
                              loading="lazy"
                          />
                        </div>
                        <div className="flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-1">
                              {collaborator.name}
                            </h3>
                            <p className="text-slate-600 text-sm mb-2 leading-relaxed">
                              {collaborator.institution}
                            </p>
                          </div>
                          {collaborator.country && (
                              <div className="flex items-center gap-1">
                                <MapPin size={12} className="text-slate-400" aria-hidden="true" />
                                <span className="text-xs text-slate-500">
                            {collaborator.country}
                          </span>
                              </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="mt-16 text-center" aria-labelledby="cta-heading">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <Globe
                    className="w-12 h-12 text-blue-600 mx-auto mb-4"
                    aria-hidden="true"
                />
                <h2
                    id="cta-heading"
                    className="text-2xl font-semibold text-slate-900 mb-4"
                >
                  Interested in Collaboration?
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  We welcome partnerships with researchers and institutions worldwide. Let's explore how we can work
                  together to advance language and cognition research.
                </p>
                <button
                    onClick={() => router.push("/contact")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="Navigate to contact page to start collaboration"
                >
                  Contact Us
                </button>
              </CardContent>
            </Card>
          </section>
        </div>
      </section>
  )
}
