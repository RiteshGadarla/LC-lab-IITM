"use client"

import {useRouter} from "next/navigation";
import {Card, CardContent} from "@/components/ui/card"
import {Globe, MapPin} from "lucide-react"
import {internationalCollaborators, IndianCollaborators} from "@/lib/teamData"
import Image from "next/image"
import {PartnerData, partnersData} from "@/lib/cerai";

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
                        Building bridges across institutions to advance language and cognition research through diverse
                        partnerships.
                    </p>
                </header>

                {/* Partners */}
                <section className="mb-16" aria-labelledby="partners-heading">
                    <h2 id="partners-heading" className="text-4xl font-semibold text-slate-900 mb-2 text-center">
                        Partners
                    </h2>
                    <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"/>

                    {/* Added flex-col and gap-8 for spacing between multiple cards */}
                    <div className="max-w-6xl mx-auto flex flex-col gap-8">
                        {partnersData.map((partner, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-2xl transition-all duration-500 border-2 border-slate-200 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50"
                            >
                                <CardContent className="p-0">
                                    <div className="flex flex-col md:flex-row items-stretch">
                                        <div
                                            className="md:w-2/5 lg:w-1/3 bg-white p-8 md:p-10 border-b md:border-b-0 md:border-r-2 border-slate-100 flex items-center justify-center">
                                            <div className="w-full max-w-xs">
                                                {partner.logo ? (
                                                    <div className="relative group">
                                                        <div
                                                            className="absolute inset-0 rounded-2xl blur-xl transition-all duration-500"></div>
                                                        <a href={partner.link} target="_blank"
                                                           rel="noopener noreferrer">
                                                            <Image
                                                                src={partner.logo}
                                                                alt={`${partner.name} logo`}
                                                                width={320}
                                                                height={320}
                                                                className="relative w-full h-auto max-h-80 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                                                                loading="lazy"
                                                            />
                                                        </a>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="w-full aspect-square max-h-80 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center shadow-inner">
                                                        <span className="text-slate-400 text-lg font-medium">Partner Logo</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div
                                            className="md:w-3/5 lg:w-2/3 px-6 md:px-10 py-8 md:py-10 flex flex-col justify-center">
                                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent text-center md:text-left">
                                                {partner.name}
                                            </h3>
                                            <p className="text-slate-700 leading-relaxed text-base md:text-lg text-center md:text-left">
                                                {partner.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>


                {/* IIT Madras Collaborators */}
                {/*<section className="mb-16" aria-labelledby="iit-collaborators-heading">*/}
                {/*  <h2*/}
                {/*      id="iit-collaborators-heading"*/}
                {/*      className="text-4xl font-semibold text-slate-900 mb-8 text-center"*/}
                {/*  >*/}
                {/*    IIT Madras Collaborators*/}
                {/*  </h2>*/}
                {/*  <div*/}
                {/*      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"*/}
                {/*      role="list"*/}
                {/*      aria-label="IIT Madras research collaborators"*/}
                {/*  >*/}
                {/*    {IndianCollaborators.map((collaborator, index) => (*/}
                {/*        <Card*/}
                {/*            key={`iit-${index}`}*/}
                {/*            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"*/}
                {/*            role="listitem"*/}
                {/*        >*/}
                {/*          <CardContent className="p-6">*/}
                {/*            <div className="flex gap-4">*/}
                {/*              <div className="h-full flex-shrink-0">*/}
                {/*                <Image*/}
                {/*                    src={collaborator.image || "/placeholder.svg"}*/}
                {/*                    alt={`Portrait of ${collaborator.name}`}*/}
                {/*                    width={80}*/}
                {/*                    height={80}*/}
                {/*                    className="h-20 w-20 object-cover rounded-md shadow-md group-hover:scale-105 transition-transform"*/}
                {/*                    loading="lazy"*/}
                {/*                />*/}
                {/*              </div>*/}
                {/*              <div className="flex flex-col justify-between">*/}
                {/*                <div>*/}
                {/*                  <h3 className="text-lg font-semibold text-slate-900 mb-1">*/}
                {/*                    {collaborator.name}*/}
                {/*                  </h3>*/}
                {/*                  <p className="text-slate-600 text-sm mb-2 leading-relaxed">*/}
                {/*                    {collaborator.institution}*/}
                {/*                  </p>*/}
                {/*                </div>*/}
                {/*                {collaborator.country && (*/}
                {/*                    <div className="flex items-center gap-1">*/}
                {/*                      <MapPin size={12} className="text-slate-400" aria-hidden="true" />*/}
                {/*                      <span className="text-xs text-slate-500">*/}
                {/*                  {collaborator.country}*/}
                {/*                </span>*/}
                {/*                    </div>*/}
                {/*                )}*/}
                {/*              </div>*/}
                {/*            </div>*/}
                {/*          </CardContent>*/}
                {/*        </Card>*/}
                {/*    ))}*/}
                {/*  </div>*/}
                {/*</section>*/}

                {/* International Collaborators */}
                <section className="py-16 bg-slate-50/50" aria-labelledby="international-collaborators-heading">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2
                                id="international-collaborators-heading"
                                className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight"
                            >
                                International Collaborators
                            </h2>
                            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"/>
                        </div>

                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
                            role="list"
                            aria-label="International research collaborators"
                        >
                            {internationalCollaborators.map((collaborator, index) => (
                                <Card
                                    key={`intl-${index}`}
                                    className="group relative overflow-hidden border border-slate-200 bg-white hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                    role="listitem"
                                >
                                    {/* Decorative top gradient line on hover */}
                                    <div
                                        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"/>

                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-5">
                                            {/* Image Container */}
                                            <div className="relative flex-shrink-0">
                                                <div
                                                    className="relative h-20 w-20 rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-100 group-hover:ring-blue-100 transition-all">
                                                    <Image
                                                        src={collaborator.image || "/placeholder.svg"}
                                                        alt={`Portrait of ${collaborator.name}`}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                        sizes="(max-width: 768px) 80px, 80px"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>

                                            {/* Text Content */}
                                            <div className="flex-1 min-w-0 flex flex-col h-full justify-center">
                                                <div>
                                                    <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1 group-hover:text-blue-700 transition-colors truncate">
                                                        {collaborator.name}
                                                    </h3>
                                                    <p className="text-sm font-medium text-slate-600 leading-snug line-clamp-2 mb-3">
                                                        {collaborator.institution}
                                                    </p>
                                                </div>

                                                {/* Location Badge */}
                                                {collaborator.country && (
                                                    <div
                                                        className="mt-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 w-fit group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                                                        <MapPin
                                                            size={12}
                                                            className="text-slate-400 group-hover:text-blue-500"
                                                            aria-hidden="true"
                                                        />
                                                        <span
                                                            className="text-xs font-semibold text-slate-500 group-hover:text-blue-600 uppercase tracking-wide">
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
                                We welcome partnerships with researchers and institutions worldwide. Let's explore how
                                we can work
                                together to advance language and cognition research.
                            </p>
                            <button
                                onClick={() => router.push("/lclab/contact")}
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
