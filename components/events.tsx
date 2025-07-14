"use client"

import { SetStateAction, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { eventsData } from "@/lib/eventData"

export function EventsSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    const intervalRefs = useRef<(NodeJS.Timeout | null)[]>(eventsData.map(() => null))

    // Dynamic state for each event's current image index
    const [currentImageIndices, setCurrentImageIndices] = useState<number[]>(
        eventsData.map(() => 0)
    )

    // Track next image index for smooth transitions
    const [nextImageIndices, setNextImageIndices] = useState<number[]>(
        eventsData.map(() => 0)
    )

    // Track which images are transitioning (for slideshow only)
    const [transitioning, setTransitioning] = useState<boolean[]>(
        eventsData.map(() => false)
    )

    // Track if individual carousels are paused
    const [isPaused, setIsPaused] = useState<boolean[]>(
        eventsData.map(() => false)
    )

    const nextImage = (eventIndex: number, isAutomatic = false) => {
        if (isAutomatic) {
            // Smooth transition for slideshow
            if (transitioning[eventIndex]) return

            // Set up next image
            setNextImageIndices(prev => {
                const newIndices = [...prev]
                newIndices[eventIndex] = (currentImageIndices[eventIndex] + 1) % eventsData[eventIndex].images.length
                return newIndices
            })

            // Start transition
            setTransitioning(prev => {
                const newTransitioning = [...prev]
                newTransitioning[eventIndex] = true
                return newTransitioning
            })

            // Complete transition after fade
            setTimeout(() => {
                setCurrentImageIndices(prev => {
                    const newIndices = [...prev]
                    newIndices[eventIndex] = (newIndices[eventIndex] + 1) % eventsData[eventIndex].images.length
                    return newIndices
                })

                setTransitioning(prev => {
                    const newTransitioning = [...prev]
                    newTransitioning[eventIndex] = false
                    return newTransitioning
                })
            }, 800)
        } else {
            // Instant change for manual navigation
            setCurrentImageIndices(prev => {
                const newIndices = [...prev]
                newIndices[eventIndex] = (newIndices[eventIndex] + 1) % eventsData[eventIndex].images.length
                return newIndices
            })
            resetTimer(eventIndex)
        }
    }

    const prevImage = (eventIndex: number) => {
        // Always instant for manual navigation
        setCurrentImageIndices(prev => {
            const newIndices = [...prev]
            newIndices[eventIndex] = (newIndices[eventIndex] - 1 + eventsData[eventIndex].images.length) % eventsData[eventIndex].images.length
            return newIndices
        })
        resetTimer(eventIndex)
    }

    const startTimer = (eventIndex: number) => {
        if (intervalRefs.current[eventIndex]) {
            clearInterval(intervalRefs.current[eventIndex]!)
        }

        intervalRefs.current[eventIndex] = setInterval(() => {
            if (!isPaused[eventIndex]) {
                nextImage(eventIndex, true)
            }
        }, 5000)
    }

    const resetTimer = (eventIndex: number) => {
        if (intervalRefs.current[eventIndex]) {
            clearInterval(intervalRefs.current[eventIndex]!)
        }
        if (isVisible && !isPaused[eventIndex]) {
            startTimer(eventIndex)
        }
    }

    const pauseTimer = (eventIndex: number) => {
        setIsPaused(prev => {
            const newPaused = [...prev]
            newPaused[eventIndex] = true
            return newPaused
        })
    }

    const resumeTimer = (eventIndex: number) => {
        setIsPaused(prev => {
            const newPaused = [...prev]
            newPaused[eventIndex] = false
            return newPaused
        })
    }

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

    useEffect(() => {
        if (isVisible) {
            // Start timers for non-paused carousels when section is visible
            eventsData.forEach((_, index) => {
                if (!isPaused[index]) {
                    startTimer(index)
                }
            })
        } else {
            // Clear all timers when section is not visible
            intervalRefs.current.forEach((interval, index) => {
                if (interval) {
                    clearInterval(interval)
                    intervalRefs.current[index] = null
                }
            })
        }

        return () => {
            // Clean up all timers on unmount
            intervalRefs.current.forEach((interval, index) => {
                if (interval) {
                    clearInterval(interval)
                    intervalRefs.current[index] = null
                }
            })
        }
    }, [isVisible])

    // Update timers when pause state changes
    useEffect(() => {
        if (isVisible) {
            eventsData.forEach((_, index) => {
                if (isPaused[index]) {
                    if (intervalRefs.current[index]) {
                        clearInterval(intervalRefs.current[index]!)
                        intervalRefs.current[index] = null
                    }
                } else {
                    startTimer(index)
                }
            })
        }
    }, [isPaused, isVisible])

    return (
        <section ref={sectionRef} id="events" className="py-20 bg-white">
            <div className="pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-8 border-b-4 border-[#000080] inline-block w-full pb-4">
                            Events
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            We have been hosting exciting events that advanced the study of language and cognition through collaboration and innovation.
                        </p>
                    </div>

                    {/* Dynamic Event Rendering */}
                    {eventsData.map((event, eventIndex) => (
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

                            {/* Image carousel - Always on right */}
                            <div
                                className="relative"
                                onMouseEnter={() => pauseTimer(eventIndex)}
                                onMouseLeave={() => resumeTimer(eventIndex)}
                            >
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                    {/* Current image */}
                                    <img
                                        src={event.images[currentImageIndices[eventIndex]] || "/placeholder.svg"}
                                        alt={`${event.heading} Image ${currentImageIndices[eventIndex] + 1}`}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Next image for smooth transition */}
                                    {transitioning[eventIndex] && (
                                        <img
                                            src={event.images[nextImageIndices[eventIndex]] || "/placeholder.svg"}
                                            alt={`${event.heading} Next Image`}
                                            className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                                        />
                                    )}

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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}