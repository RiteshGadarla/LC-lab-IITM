"use client"

import { useEffect, useState, useRef } from "react"
import { Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { eventsData } from "@/lib/eventData"
import EventImageSlideshow from "./Slideshow"
import { PageHeader } from "@/components/page-header"
import { nameToSlug } from "@/lib/utils"

export function EventsSection() {
    const [isVisible, setIsVisible] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [upcomingEventIds, setUpcomingEventIds] = useState<Set<string>>(new Set())
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const checkUpcomingEvents = () => {
            const istDateString = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
            const nowIST = new Date(istDateString)
            nowIST.setHours(0, 0, 0, 0) // Start of today in IST

            const upcomingIds = new Set<string>()
            eventsData.forEach(event => {
                const match = event.date.match(/([a-zA-Z]+)\s+(\d+)(?:[-–](\d+))?,?\s+(\d{4})/)
                if (match) {
                    const month = match[1]
                    const endDay = match[3] || match[2]
                    const year = match[4]
                    
                    const eventEndDate = new Date(`${month} ${endDay}, ${year}`)
                    if (eventEndDate >= nowIST) {
                        upcomingIds.add(event.id)
                    }
                }
            })
            setUpcomingEventIds(upcomingIds)
        }
        checkUpcomingEvents()
    }, [])

    // Scroll to an event when the URL hash is its heading in lowercase alphanumerics
    // (e.g. #essentialsofgenerativegrammar). Unknown hashes are ignored.
    useEffect(() => {
        let userScrolled = false
        const timers: ReturnType<typeof setTimeout>[] = []
        const stop = () => { userScrolled = true }

        const align = (behavior: ScrollBehavior) => {
            if (userScrolled) return
            const id = decodeURIComponent(window.location.hash.slice(1))
            const el = id ? document.getElementById(id) : null
            if (!el) return
            // Phones: put the top of the event (its badges) just under the ~73px navbar.
            const top = el.getBoundingClientRect().top + window.scrollY - (window.innerWidth < 768 ? 80 : 96)
            window.scrollTo({ top: Math.max(0, top), behavior })
        }
        const run = () => {
            userScrolled = false
            align("smooth")
            timers.push(setTimeout(() => align("instant"), 1200))
        }
        const start = () => timers.push(setTimeout(run, 250))
        if (document.readyState === "complete") start()
        else window.addEventListener("load", start, { once: true })

        window.addEventListener("wheel", stop, { passive: true })
        window.addEventListener("touchmove", stop, { passive: true })
        window.addEventListener("hashchange", run)
        return () => {
            timers.forEach(clearTimeout)
            window.removeEventListener("load", start)
            window.removeEventListener("wheel", stop)
            window.removeEventListener("touchmove", stop)
            window.removeEventListener("hashchange", run)
        }
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} id="events" className="relative overflow-hidden py-20 bg-white">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-blue-50 rounded-full blur-[120px] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                <div
                    className={`transition-all duration-1000 ${
                        isVisible ? "animate-fade-in" : "opacity-0"
                    }`}
                >
                    <PageHeader
                        eyebrow="What's happening"
                        title="Events"
                        description="We have been hosting exciting events that advanced the study of language and cognition through collaboration and innovation."
                    />

                    {/* Events List */}
                    <div className="space-y-16">
                        {eventsData.map((event, index) => (
                            <div
                                key={event.id}
                                id={nameToSlug(event.heading)}
                                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                                }`}
                            >
                                {/* Text Content */}
                                <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {upcomingEventIds.has(event.id) && (
                                                <Badge
                                                    className="bg-[#000080] hover:bg-[#000080]/90 text-white border-transparent rounded-full px-4 py-1.5 text-sm font-medium w-fit shadow-sm uppercase tracking-wider text-xs"
                                                >
                                                    Upcoming
                                                </Badge>
                                            )}
                                            <Badge
                                                variant="outline"
                                                className="border-[#000080] text-[#000080] bg-blue-50/50 rounded-full px-4 py-1.5 text-sm font-medium w-fit"
                                            >
                                                {event.tag}
                                            </Badge>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                            {event.heading}
                                        </h3>
                                    </div>

                                    <div className="bg-slate-50 border-l-4 border-[#000080] p-6 rounded-r-lg space-y-3">
                                        <div className="flex items-start gap-4">
                                            <Calendar className="text-[#000080] mt-1" size={20} />
                                            <div>
                                                <span className="block text-sm font-semibold text-slate-500 uppercase">
                                                    Date
                                                </span>
                                                <span className="text-lg text-slate-900 font-medium">
                                                    {event.date}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <MapPin className="text-[#000080] mt-1" size={20} />
                                            <div>
                                                <span className="block text-sm font-semibold text-slate-500 uppercase">
                                                    Venue
                                                </span>
                                                <span className="text-lg text-slate-900 font-medium">
                                                    {event.venue}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {event.description.map((desc, idx) => (
                                            <p
                                                key={idx}
                                                className="text-lg text-slate-700 leading-relaxed font-light"
                                            >
                                                {desc}
                                            </p>
                                        ))}
                                        {event.notes && event.notes.length > 0 && (
                                            <div className="border-l-4 border-[#000080] pl-5 py-3 bg-slate-50 rounded-r-md mt-6 space-y-2">
                                                {event.notes.map((note, idx) => (
                                                    <p
                                                        key={idx}
                                                        className="text-slate-700 text-base font-medium"
                                                    >
                                                        {note}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Slideshow */}
                                <div
                                    className={`relative lg:mt-14 ${
                                        index % 2 === 1 ? "lg:col-start-1" : ""
                                    }`}
                                >
                                    <EventImageSlideshow
                                        images={isMobile ? event.imagesSM : event.imagesBG}
                                        title={event.heading}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
