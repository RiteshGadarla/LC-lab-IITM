"use client"
import { nameToSlug } from "@/lib/utils"
import PersonAvatar from "./person-avatar"
import PersonLink from "./person-link"

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
                        id={nameToSlug(intern.name)}
                        className="
                            border border-slate-200 rounded-2xl bg-white
                            hover:shadow-md transition-shadow duration-300
                            w-[calc(50%-1.5rem)]
                            md:w-[calc(33.333%-1.5rem)]
                            lg:w-[calc(25%-1.5rem)]
                            max-w-xs
                        "
                    >
                        <PersonLink link={intern.link} name={intern.name}>
                            <CardContent className="p-4">
                                <div className="flex flex-col md:flex-row items-center gap-2">
                                    <PersonAvatar name={intern.name} image={intern.image} className="w-16 h-16"/>
    
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
                        </PersonLink>
                    </Card>
                ))}
            </div>
        </section>
    )
}
