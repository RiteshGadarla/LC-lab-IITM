"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { principalInvestigator, teamMembers, othersMembers, researchStaff, type TeamMember } from "@/lib/data"

export function TeamSection() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
    const router = useRouter()

    return (
        <section id="team" className="pt-32 py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#254D70] text-center mb-8 border-b-4 border-[#954C2E] inline-block w-full pb-4">Our Team</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Meet the dedicated researchers advancing our understanding of language and cognition.
                    </p>
                </div>

                {/* Principal Investigator */}
                <div className="mb-16">
                    <h3 className="text-4xl font-semibold text-slate-900 mb-8 text-center">Principal Investigator</h3>
                    <Card className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-8">
                            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
                                <div className="relative flex-shrink-0">
                                    <img
                                        src={principalInvestigator.image || "/placeholder.svg"}
                                        alt={principalInvestigator.name}
                                        className="w-48 h-full rounded-2xl object-cover shadow-lg"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                                </div>
                                <div className="flex-1 text-center lg:text-left flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-3xl font-bold text-slate-900 mb-2">{principalInvestigator.name}</h4>
                                        <p className="text-lg text-slate-600 mb-4">{principalInvestigator.title}</p>
                                        <p className="text-slate-700 mb-6 leading-relaxed">
                                            <strong>Research Interests:</strong> {principalInvestigator.interests}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-center lg:justify-start gap-4">
                                        <a
                                            href={principalInvestigator.linkedInLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 hover:underline"
                                        >
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                                                alt="LinkedIn"
                                                className="w-5 h-5"
                                            />
                                            LinkedIn
                                        </a>
                                        <a
                                            href="https://hss.iitm.ac.in/anindita-sahoo/#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 hover:underline"
                                        >
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png"
                                                alt="IITM"
                                                className="w-5 h-5 object-contain"
                                            />
                                            IITM Profile
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* PhD Scholars */}
                <div className="mb-16">
                    <h3 className="text-4xl font-semibold text-slate-900 mb-8 text-center">PhD Scholars</h3>
                    <div className={`flex flex-wrap justify-center gap-6 ${teamMembers.length >= 3 ? 'md:grid md:grid-cols-2 lg:grid-cols-3' : ''}`}>
                        {teamMembers.map((member, index) => (
                            <Card
                                key={index}
                                className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer w-full max-w-sm ${index >= 6 && teamMembers.length === 7 ? 'lg:col-start-2' : ''}`}
                                onClick={() => setSelectedMember(member)}
                            >
                                <CardContent className="p-6 text-center">
                                    <img
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-md"
                                    />
                                    <h4 className="text-lg font-semibold text-slate-900 mb-3">{member.name}</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{member.research}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Other Members */}
                <div className="mb-16">
                    <div className={`flex flex-wrap justify-center gap-6 ${othersMembers.length >= 3 ? 'md:grid md:grid-cols-2 lg:grid-cols-3' : ''}`}>
                        {othersMembers.map((member, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer w-full max-w-sm"
                                onClick={() => setSelectedMember(member)}
                            >
                                <CardContent className="p-6 text-center">
                                    <img
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-md"
                                    />
                                    <h4 className="text-lg font-semibold text-slate-900 mb-1">{member.name}</h4>
                                    <p className="text-sm text-slate-500 mb-3">{member.role}</p>
                                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{member.research}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Research Staff */}
                <div className="mb-16">
                    <h3 className="text-4xl font-semibold text-slate-900 mb-8 text-center">Research Staff</h3>
                    <div className={`flex flex-wrap justify-center gap-6 ${researchStaff.length >= 3 ? 'md:grid md:grid-cols-2 lg:grid-cols-3' : ''}`}>
                        {researchStaff.map((member, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer w-full max-w-sm"
                                onClick={() => setSelectedMember(member)}
                            >
                                <CardContent className="p-6 text-center">
                                    <img
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-md"
                                    />
                                    <h4 className="text-lg font-semibold text-slate-900 mb-3">{member.name}</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{member.research}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Open Position */}
                <div className="mt-12 text-center">
                    <Card className="max-w-md mx-auto border-dashed border-2 border-slate-300 hover:border-blue-400 transition-colors">
                        <CardContent className="p-4">
                            <h4 className="text-md font-semibold text-slate-900 mb-2">Join Our Team</h4>
                            <p className="text-xs text-slate-600 mb-2">
                                We're always looking for passionate researchers to join our lab.
                            </p>
                            <button
                                onClick={() => router.push("/contact")}
                                className="text-blue-600 hover:text-blue-700 font-medium text-xs"
                            >
                                Get in touch
                            </button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}