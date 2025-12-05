"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { eventsData } from "@/lib/eventData"

const EventImageSlideshow = ({ images, title }: { images: string[], title: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const nextImage = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }, [images.length])

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        resetTimer()
    }

    const manualNext = () => {
        nextImage()
        resetTimer()
    }

    const resetTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current)
        if (!isHovered) {
            timerRef.current = setInterval(nextImage, 5000)
        }
    }

    useEffect(() => {
        if (!isHovered) {
            timerRef.current = setInterval(nextImage, 5000)
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [isHovered, nextImage])

    return (
        <div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            {images.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                >
                    <img
                        src={src}
                        alt={`${title} - image ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                    {/* Your original gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
            ))}

            {/* Navigation Buttons (Original Styling) */}
            <button
                onClick={prevImage}
                className="absolute z-20 left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            >
                <ChevronLeft size={15} />
            </button>
            <button
                onClick={manualNext}
                className="absolute z-20 right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            >
                <ChevronRight size={15} />
            </button>
        </div>
    )
}

export function EventsSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} id="events" className="py-20 bg-white">
            <div className="pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
                    {/* Header - Exact Original UI */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-8 border-b-4 border-[#000080] inline-block w-full pb-4">
                            Events
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            We have been hosting exciting events that advanced the study of language and cognition through collaboration and innovation.
                        </p>
                    </div>

                    {/* Dynamic Event Rendering - Exact Original Layout */}
                    {eventsData.map((event) => (
                        <div key={event.id} className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                            {/* Text content - Always on left */}
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

                            {/* Image carousel - Always on right (Using the new logic component) */}
                            <div className="relative">
                                <EventImageSlideshow
                                    images={event.images}
                                    title={event.heading}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}