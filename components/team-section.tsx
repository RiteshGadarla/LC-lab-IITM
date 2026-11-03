"use client"

import {useEffect, useState} from "react"
import {useRouter} from "next/navigation"
import {
    principalInvestigator,
    teamMembers,
    researchStaff,
    friends,
    collaborationMembers,
    interns,
    type TeamMember
} from "@/lib/teamData"
import TeamGrid from "@/components/grids/team-grid";
import InternGrid from "@/components/grids/intern-grid"
import PrincipalInvestigatorCard from "@/components/grids/PrincipalInvestigatorCard";
import { PageHeader } from "@/components/page-header"


export function TeamSection() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
    const router = useRouter()

    // Scroll to a person when the URL has a hash like #gadarlariteshreddy; ignore unknown hashes.
    // Wait until images have loaded (they shift the layout), do one smooth scroll, then a quick
    // instant correction in case the layout still moved. Stops if the user scrolls themselves.
    useEffect(() => {
        let userScrolled = false
        const timers: ReturnType<typeof setTimeout>[] = []
        const stop = () => { userScrolled = true }

        const targetTop = (el: HTMLElement) => {
            const rect = el.getBoundingClientRect()
            // Desktop/tablet: centre the card. Phones: sit just under the navbar.
            const top = window.innerWidth >= 768
                ? rect.top + window.scrollY - (window.innerHeight - rect.height) / 2
                : rect.top + window.scrollY - 81
            return Math.max(0, top)
        }

        const align = (behavior: ScrollBehavior) => {
            if (userScrolled) return
            const id = decodeURIComponent(window.location.hash.slice(1))
            const el = id ? document.getElementById(id) : null
            if (!el) return
            window.scrollTo({top: targetTop(el), behavior})
        }

        const run = () => {
            userScrolled = false
            align("smooth")
            // correct any drift once the smooth scroll has finished
            timers.push(setTimeout(() => align("instant"), 1200))
        }

        const start = () => timers.push(setTimeout(run, 250))
        if (document.readyState === "complete") start()
        else window.addEventListener("load", start, {once: true})

        window.addEventListener("wheel", stop, {passive: true})
        window.addEventListener("touchmove", stop, {passive: true})
        window.addEventListener("hashchange", run)
        return () => {
            timers.forEach(clearTimeout)
            window.removeEventListener("load", start)
            window.removeEventListener("wheel", stop)
            window.removeEventListener("touchmove", stop)
            window.removeEventListener("hashchange", run)
        }
    }, [])

    return (
        <section id="team" className="relative overflow-hidden pt-24 pb-16 bg-slate-50">
            <div className="absolute -top-24 left-0 w-[32rem] h-[32rem] bg-blue-100/60 rounded-full blur-[110px] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                <PageHeader
                    eyebrow="Who we are"
                    title="Our Team"
                    description="Meet the dedicated researchers advancing our understanding of language and cognition."
                />

                {/* Principal Investigator Card */}
                <PrincipalInvestigatorCard investigator={principalInvestigator}/>

                <div className="text-center mb-10 mt-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mb-6">
                        Current Researchers
                    </h2>
                </div>

                <TeamGrid
                    title="PhD Scholars"
                    members={teamMembers}
                    onSelect={setSelectedMember}
                    isActive={true}
                />

                <TeamGrid
                    title="Research Project Staff"
                    members={researchStaff}
                    onSelect={setSelectedMember}
                    isActive={true}
                />

                <InternGrid
                    interns={interns}
                    isActive={true}
                />

                <TeamGrid
                    title="Collaboration"
                    members={collaborationMembers}
                    onSelect={setSelectedMember}
                    isActive={true}
                />

                <div className="text-center mb-10 mt-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mb-6">
                        Alumni
                    </h2>
                </div>

                <TeamGrid
                    title="PhD Scholars"
                    members={teamMembers}
                    onSelect={setSelectedMember}
                    isActive={false}
                />

                <TeamGrid
                    title="Research Project Staff"
                    members={researchStaff}
                    onSelect={setSelectedMember}
                    isActive={false}
                />

                <InternGrid
                    interns={interns}
                    isActive={false}
                />

                <TeamGrid
                    title="Friends of LC Lab"
                    members={friends}
                    onSelect={setSelectedMember}
                    isActive={true}
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