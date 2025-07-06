"use client"

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card"
import { Globe, MapPin } from "lucide-react"
import { collaborators } from "@/lib/data"

export function CollaborationsSection() {
  const router = useRouter()
  return (
      <section id="collaborations" className="pt-32 py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#254D70] text-center mb-8 border-b-4 border-[#954C2E] inline-block w-full pb-4">Collaborations</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building bridges to advance language and cognition research through international partnerships.
            </p>
          </div>

          {/* Stats */}
          {/*<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">*/}
          {/*  <div className="text-center">*/}
          {/*    <div className="text-3xl font-bold text-blue-600 mb-2">6</div>*/}
          {/*    <div className="text-slate-600">Countries</div>*/}
          {/*  </div>*/}
          {/*  <div className="text-center">*/}
          {/*    <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>*/}
          {/*    <div className="text-slate-600">Institutions</div>*/}
          {/*  </div>*/}
          {/*  <div className="text-center">*/}
          {/*    <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>*/}
          {/*    <div className="text-slate-600">Joint Publications</div>*/}
          {/*  </div>*/}
          {/*  <div className="text-center">*/}
          {/*    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>*/}
          {/*    <div className="text-slate-600">Exchange Programs</div>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/* Collaborators Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborators.map((collaborator, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <img
                          src={collaborator.image || "/placeholder.svg"}
                          alt={collaborator.name}
                          className="w-16 h-16 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform"
                      />
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-900 mb-1">{collaborator.name}</h4>
                        <p className="text-slate-600 text-sm mb-2 leading-relaxed">{collaborator.institution}</p>
                        {collaborator.country && (
                            <div className="flex items-center gap-1">
                              <MapPin size={12} className="text-slate-400" />
                              <span className="text-xs text-slate-500">{collaborator.country}</span>
                            </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Interested in Collaboration?</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  We welcome partnerships with researchers and institutions worldwide. Let's explore how we can work
                  together to advance language and cognition research.
                </p>
                <button
                    onClick={() => router.push("/contact")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}
