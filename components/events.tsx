"use client"

import { useEffect, useState, useRef } from "react"
import { Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { eventsData } from "@/lib/eventData"
import EventImageSlideshow from "./Slideshow"

export function EventsSection() {
    const [isVisible, setIsVisible] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

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
        <section ref={sectionRef} id="events" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div
                    className={`transition-all duration-1000 ${
                        isVisible ? "animate-fade-in" : "opacity-0"
                    }`}
                >
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 mt-8">
                            Events
                        </h2>
                        <div className="w-24 h-1 bg-[#000080] mx-auto rounded-full mb-8" />
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                            We have been hosting exciting events that advanced the study of language and cognition
                            through collaboration and innovation.
                        </p>
                    </div>

                    {/* Events List */}
                    <div className="space-y-16">
                        {eventsData.map((event, index) => (
                            <div
                                key={event.id}
                                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                                }`}
                            >
                                {/* Text Content */}
                                <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                                    <div className="space-y-4">
                                        <Badge
                                            variant="outline"
                                            className="border-[#000080] text-[#000080] bg-blue-50/50 rounded-full px-4 py-1.5 text-sm font-medium w-fit"
                                        >
                                            {event.tag}
                                        </Badge>

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
