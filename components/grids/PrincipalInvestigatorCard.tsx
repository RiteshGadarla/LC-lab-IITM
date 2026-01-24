"use client"

import {Card, CardContent} from "@/components/ui/card"
import type {PrincipalInvestigator} from "@/lib/teamData"

type PrincipalInvestigatorCardProps = {
    investigator: PrincipalInvestigator
}

export default function PrincipalInvestigatorCard({
                                                      investigator,
                                                  }: PrincipalInvestigatorCardProps) {
    return (
        <section className="mb-24">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                Principal Investigator
            </h3>

            <Card
                className="
                    max-w-5xl mx-auto bg-white border border-slate-200
                    rounded-2xl overflow-hidden shadow-sm
                    transition-all duration-300
                    hover:shadow-md hover:-translate-y-0.5
                "
            >
                <CardContent className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-10 items-start">
                        {/* Image */}
                        <div className="flex justify-center md:justify-start flex-shrink-0 w-full md:w-auto">
                        <img
                                src={investigator.image || "/placeholder.svg"}
                                alt={investigator.name}
                                className="
                                    w-56 h-64 object-cover rounded-xl shadow-sm
                                    grayscale-[10%] transition-all duration-500
                                    group-hover:grayscale-0
                                "
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left space-y-6">
                            <div>
                                <h4 className="text-3xl font-bold text-slate-900 mb-2">
                                    {investigator.name}
                                </h4>
                                <p className="text-lg text-[#000080] font-medium mb-4">
                                    {investigator.title}
                                </p>
                                <p className="text-slate-700 leading-relaxed text-lg">
                                    <span className="font-semibold text-slate-900">
                                        Research Interests:
                                    </span>{" "}
                                    {investigator.interests}
                                </p>
                            </div>

                            {/* Links */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                                <a
                                    href={investigator.linkedInLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-sm font-medium"
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                                        alt="LinkedIn"
                                        className="w-4 h-4"
                                    />
                                    LinkedIn
                                </a>

                                <a
                                    href={investigator.iitmprofile}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-sm font-medium"
                                >
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png"
                                        alt="IIT Madras"
                                        className="w-4 h-4 object-contain"
                                    />
                                    IIT Madras
                                </a>

                                <a
                                    href={investigator.cerai}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-sm font-medium"
                                >
                                    <img
                                        src="https://res.cloudinary.com/dgzbrujvx/image/upload/e_background_removal/f_png/v1752322335/0a251fb5-6fba-4a47-90f7-e88790143a00.png"
                                        alt="CeRAI"
                                        className="w-4 h-4 object-contain"
                                    />
                                    CeRAI
                                </a>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
