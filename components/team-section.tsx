"use client"

import {useState} from "react"
import {useRouter} from "next/navigation"
import {
    principalInvestigator,
    teamMembers,
    researchStaff,
    friends,
    type TeamMember
} from "@/lib/teamData"
import TeamGrid from "@/components/grids/team-grid";
import InternGrid from "@/components/grids/intern-grid"
import {interns} from "@/lib/teamData"
import PrincipalInvestigatorCard from "@/components/grids/PrincipalInvestigatorCard";


export function TeamSection() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
    const router = useRouter()

    return (
        <section id="team" className="pt-24 pb-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10 mt-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-6">
                        Our Team
                    </h2>
                    <div className="w-24 h-1 bg-[#000080] mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Meet the dedicated researchers advancing our understanding of language and cognition.
                    </p>
                </div>

                {/* Principal Inverstigator Card */}
                <PrincipalInvestigatorCard investigator={principalInvestigator}/>


                {/* PhD Scholars */}
                <TeamGrid
                    title="PhD Scholars"
                    members={teamMembers}
                    onSelect={setSelectedMember}
                />

                {/* Research Project Staff */}
                <TeamGrid
                    title="Research Project Staff"
                    members={researchStaff}
                    onSelect={setSelectedMember}
                />

                {/* Interns */}
                <InternGrid interns={interns}/>

                {/* Friends */}
                <TeamGrid
                    title="Friends of LC Lab"
                    members={friends}
                    onSelect={setSelectedMember}
                />

                {/* Open Position */}
                <div className="mt-16 text-center">
                    <div
                        className="inline-block p-8 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 hover:bg-white hover:border-[#000080] transition-all duration-300 max-w-lg w-full">
                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                            Join Our Team
                        </h4>
                        <p className="text-slate-600 mb-4">
                            We're always looking for passionate researchers to join our lab.
                        </p>
                        <button
                            onClick={() => router.push("/lclab/contact")}
                            className="text-[#000080] font-semibold hover:underline"
                        >
                            Get in touch →
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}