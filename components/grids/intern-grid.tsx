"use client"

import {Card, CardContent} from "@/components/ui/card"
import type {TeamMember} from "@/lib/teamData"

type InternGridProps = {
    title?: string
    interns: TeamMember[]
    isActive: boolean
}

export default function InternGrid({
                                       title = "Interns",
                                       interns,
                                       isActive,
                                   }: InternGridProps) {

    const filteredInterns = interns.filter(
        (intern) => intern.isActive === isActive
    )

    if (filteredInterns.length === 0) {
        return null
    }

    return (
        <section className="mb-24">
            <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                {title}
            </h3>

            <div className="flex flex-wrap justify-center gap-6">
                {filteredInterns.map((intern, index) => (
                    <Card
                        key={index}
                        className="
                            border border-slate-200 rounded-xl bg-white
                            hover:shadow-md transition-shadow duration-300
                            w-[calc(50%-1.5rem)]
                            md:w-[calc(33.333%-1.5rem)]
                            lg:w-[calc(25%-1.5rem)]
                            max-w-xs
                        "
                    >
                        <CardContent className="p-4">
                            <div className="flex flex-col md:flex-row items-center gap-2">
                                <img
                                    src={intern.image || "/anindita/placeholder.svg"}
                                    alt={intern.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />

                                <div className="text-center md:text-left">
                                    <h4 className="text-base font-bold text-slate-900 leading-snug">
                                        {intern.name}
                                    </h4>
                                    {intern.role && (
                                        <p className="text-sm font-medium text-slate-500 mt-1 leading-relaxed">
                                            {intern.role}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
