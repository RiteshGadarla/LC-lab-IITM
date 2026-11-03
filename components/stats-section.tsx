import { publications, researchProjects } from "@/lib/researchData"
import { teamMembers, researchStaff } from "@/lib/teamData"
import { internationalCollaborators } from "@/lib/collaboratorsData"

const STATS = [
    { value: publications.length, label: "Publications" },
    { value: researchProjects.length, label: "Research Projects" },
    { value: [...teamMembers, ...researchStaff].filter((m) => m.isActive).length, label: "Active Researchers" },
    { value: internationalCollaborators.length, label: "Global Collaborators" },
]

export function StatsSection() {
    return (
        <section aria-label="Lab at a glance" className="pt-16">
            <div className="max-w-5xl mx-auto">
                <dl className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4">
                    {STATS.map((stat) => (
                        <div key={stat.label} className="text-center lg:border-l lg:first:border-l-0 border-slate-200">
                            <dd className="text-4xl md:text-5xl font-bold text-[#152550] tracking-tight">{stat.value}</dd>
                            <dt className="mt-2 text-xs md:text-sm uppercase tracking-widest text-slate-500 font-medium">
                                {stat.label}
                            </dt>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}
