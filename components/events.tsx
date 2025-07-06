"use client"

import { SetStateAction, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { eventsData } from "@/lib/eventData"

export function EventsSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    // Dynamic state for each event's current image index
    const [currentImageIndices, setCurrentImageIndices] = useState<number[]>(
        eventsData.map(() => 0)
    )

    const nextImage = (eventIndex: number) => {
        setCurrentImageIndices(prev => {
            const newIndices = [...prev]
            newIndices[eventIndex] = (newIndices[eventIndex] + 1) % eventsData[eventIndex].images.length
            return newIndices
        })
    }

    const prevImage = (eventIndex: number) => {
        setCurrentImageIndices(prev => {
            const newIndices = [...prev]
            newIndices[eventIndex] = (newIndices[eventIndex] - 1 + eventsData[eventIndex].images.length) % eventsData[eventIndex].images.length
            return newIndices
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 },
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            eventsData.forEach((_, index) => {
                nextImage(index)
            })
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section ref={sectionRef} id="events" className="py-20 bg-white">
            <div className="pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#254D70] text-center mb-8 border-b-4 border-[#954C2E] inline-block w-full pb-4">
                            Events Conducted
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            We have been hosting exciting events that advanced the study of language and cognition through collaboration and innovation.
                        </p>
                    </div>

                    {/* Dynamic Event Rendering */}
                    {eventsData.map((event, eventIndex) => (
                        <div key={event.id} className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                            {/* Content order alternates: even index = text first, odd index = image first */}
                            {eventIndex % 2 === 0 ? (
                                <>
                                    {/* Text content */}
                                    <div className="space-y-6">
                                        <h3 className="text-4xl font-semibold text-slate-900 leading-tight">
                                            {event.heading}
                                        </h3>
                                        <Badge variant="outline" className="border-black text-black bg-white rounded-full px-4 py-1 text-sm">
                                            {event.tag}
                                        </Badge>
                                        {event.description.map((desc, index) => (
                                            <p key={index} className="text-lg text-slate-700 leading-relaxed">
                                                {desc}
                                            </p>
                                        ))}
                                        <p className="text-lg text-slate-700 leading-relaxed">
                                            <strong>Date:</strong> {event.date}<br />
                                            <strong>Venue:</strong> {event.venue}
                                        </p>
                                    </div>

                                    {/* Image carousel */}
                                    <div className="relative">
                                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                            <img
                                                src={event.images[currentImageIndices[eventIndex]] || "/placeholder.svg"}
                                                alt={`${event.heading} Image ${currentImageIndices[eventIndex] + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                        </div>

                                        {/* Navigation buttons */}
                                        <button
                                            onClick={() => prevImage(eventIndex)}
                                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                                        >
                                            <ChevronLeft size={15} />
                                        </button>
                                        <button
                                            onClick={() => nextImage(eventIndex)}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                                        >
                                            <ChevronRight size={15} />
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Image carousel */}
                                    <div className="relative">
                                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                            <img
                                                src={event.images[currentImageIndices[eventIndex]] || "/placeholder.svg"}
                                                alt={`${event.heading} Image ${currentImageIndices[eventIndex] + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                        </div>

                                        {/* Navigation buttons */}
                                        <button
                                            onClick={() => prevImage(eventIndex)}
                                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                                        >
                                            <ChevronLeft size={15} />
                                        </button>
                                        <button
                                            onClick={() => nextImage(eventIndex)}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                                        >
                                            <ChevronRight size={15} />
                                        </button>
                                    </div>

                                    {/* Text content */}
                                    <div className="space-y-6">
                                        <h3 className="text-4xl font-semibold text-slate-900 leading-tight">
                                            {event.heading}
                                        </h3>
                                        <Badge variant="outline" className="border-black text-black bg-white rounded-full px-4 py-1 text-sm">
                                            {event.tag}
                                        </Badge>
                                        {event.description.map((desc, index) => (
                                            <p key={index} className="text-lg text-slate-700 leading-relaxed">
                                                {desc}
                                            </p>
                                        ))}
                                        <p className="text-lg text-slate-700 leading-relaxed">
                                            <strong>Date:</strong> {event.date}<br />
                                            <strong>Venue:</strong> {event.venue}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}