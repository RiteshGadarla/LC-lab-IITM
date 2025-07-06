"use client"

import {Card, CardContent} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Eye, Monitor, Cpu, Database} from "lucide-react"


const equipment = [
    {
        icon: Eye,
        name: "EyeLink Portable Duo",
        description: "High-precision eye-tracking system for real-time gaze analysis",
        specs: "1000Hz sampling rate, 0.25° accuracy",
    },
    {
        icon: Monitor,
        name: "Experimental Stations",
        description: "Dedicated workstations for psycholinguistic experiments",
        specs: "High-resolution displays, audio recording",
    },
]

export function FacilitiesSection() {
    return (
        <section id="facilities" className="pt-32 py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#254D70] text-center mb-8 border-b-4 border-[#954C2E] inline-block w-full pb-4">Research Facilities</h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        State-of-the-art equipment and infrastructure supporting cutting-edge language and cognition
                        research.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    {/* Image */}
                    <div className="relative">
                        <img
                            src="https://res.cloudinary.com/dt8amwctw/image/upload/v1749485687/image-removebg-preview_1_qar2n7.png"
                            alt="EyeLink Portable Duo System"
                            className="max-w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">EyeLink Portable Duo System</h3>
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                Our lab is equipped with the industry-leading EyeLink Portable Duo eye-tracking system
                                from SR Research.
                                This high-precision device captures eye movement data with millisecond accuracy,
                                enabling us to study
                                real-time language processing, reading comprehension, and visual attention patterns.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                The system's portability and flexibility allow us to conduct experiments across diverse
                                participant
                                populations and experimental paradigms, supporting our research in cognitive
                                linguistics,
                                psycholinguistics, and cross-cultural language studies.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="bg-slate-50 p-4 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600">1000Hz</div>
                                <div className="text-sm text-slate-600">Sampling Rate</div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600">0.25°</div>
                                <div className="text-sm text-slate-600">Accuracy</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Equipment Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {equipment.map((item, index) => (
                        <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <CardContent className="p-6">
                                <div className="flex items-stretch gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="bg-blue-100 rounded-lg flex items-center justify-center p-4 h-full min-h-[80px]">
                                            <item.icon className="text-blue-600" size={32}/>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-semibold text-slate-900 mb-2">{item.name}</h4>
                                        <p className="text-slate-600 text-sm mb-3 leading-relaxed">{item.description}</p>
                                        <p className="text-xs text-slate-500">{item.specs}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}