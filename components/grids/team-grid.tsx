"use client"

import {Card, CardContent} from "@/components/ui/card"
import type {TeamMember} from "@/lib/teamData"

type TeamGridProps = {
    title: string
    members: TeamMember[]
    isActive: boolean
    onSelect?: (member: TeamMember) => void
}

export default function TeamGrid({
                                     title,
                                     members,
                                     isActive,
                                     onSelect,
                                 }: TeamGridProps) {

    const filteredMembers = members.filter(
        (member) => member.isActive === isActive
    )

    if (filteredMembers.length === 0) {
        return null
    }

    return (
        <section className="mb-24">
            <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                {title}
            </h3>

            <div className="flex flex-wrap justify-center gap-8">
                {filteredMembers.map((member, index) => (
                    <Card
                        key={index}
                        onClick={() => onSelect?.(member)}
                        className="group cursor-pointer hover:shadow-md border border-slate-200 rounded-xl transition-all duration-300 bg-white w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-sm"
                    >
                        <CardContent className="p-8 flex flex-col items-center text-center h-full">
                            {member.image && (
                                <div className="mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            )}

                            <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#000080] transition-colors">
                                {member.name}
                            </h4>

                            {member.role && (
                                <p className="text-sm font-medium text-slate-500 mb-3 uppercase tracking-wide">
                                    {member.role}
                                </p>
                            )}

                            {member.research && (
                                <p className="text-sm text-slate-600 leading-relaxed line-clamp-4">
                                    {member.research}
                                </p>
                            )}

                            {member.contribution && (
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {member.contribution}
                                </p>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
