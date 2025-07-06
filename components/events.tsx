"use client"

import { useEffect, useRef, useState } from "react"
import { BookOpen, ChevronLeft, ChevronRight, Calendar, MapPin, Users } from "lucide-react"
import { eventImages } from "@/lib/imagesData"

const events = [
    {
        icon: BookOpen,
        title: "Interactive Lectures",
        description: "Engaging sessions by experts in generative grammar and linguistics",
    },
    {
        icon: Users,
        title: "Collaborative Workshops",
        description: "Hands-on workshops to explore practical applications of linguistic theories",
    },
    {
        icon: Calendar,
        title: "Networking Events",
        description: "Opportunities to connect with researchers and professionals in the field",
    },
    {
        icon: MapPin,
        title: "On-Campus Experience",
        description: "Immerse yourself in the vibrant academic environment at IIT Madras",
    },
]

export function EventsSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    const [currentImage, setCurrentImage] = useState(0)

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % eventImages.length)
    }

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + eventImages.length) % eventImages.length)
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
            nextImage()
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section ref={sectionRef} id="events" className="py-20 bg-white">
            <div className="pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#254D70] text-center mb-8 border-b-4 border-[#954C2E] inline-block w-full pb-4">Events Conducted</h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            We hosted exciting events that advanced the study of language and cognition through collaboration and innovation.
                        </p>
                    </div>

                    {/* Main content grid */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                        {/* Text content */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-slate-900">Mini Summer Course on Essentials of Generative Grammar</h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                A four-day intensive course organized by the Department of Humanities and Social Sciences, IIT Madras, in collaboration with the Central Institute of Indian Languages, Mysuru. This course offers a deep dive into the principles of generative grammar, exploring its theoretical foundations and applications in linguistic research.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                <strong>Date:</strong> June 11-14, 2025<br />
                                <strong>Venue:</strong> IC & SR, Indian Institute of Technology Madras, Chennai
                            </p>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={eventImages[currentImage] || "/placeholder.svg"}
                                    alt={`Event Image ${currentImage + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>

                            {/* Navigation */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                            >
                                <ChevronLeft size={15} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                            >
                                <ChevronRight size={15} />
                            </button>
                        </div>
                    </div>

                    {/* Features grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <event.icon className="text-blue-600" size={24} />
                                </div>
                                <h4 className="text-lg font-semibold text-slate-900 mb-2">{event.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{event.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}