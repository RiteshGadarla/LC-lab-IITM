"use client"

import { useEffect, useRef, useState } from "react"
import {Brain, ChevronLeft, ChevronRight, Eye, Globe, Microscope} from "lucide-react"
import {facilityImages} from "@/lib/imagesData";

const features = [
  {
    icon: Brain,
    title: "Cognitive Processing",
    description: "Understanding how the human mind processes and comprehends language structures",
  },
  {
    icon: Eye,
    title: "Eye-tracking research",
    description: "Advanced eye-tracking technology to study real-time language processing",
  },
  {
    icon: Globe,
    title: "Cross-linguistic Studies",
    description: "Comparative analysis across Indian and international language families",
  },
  {
    icon: Microscope,
    title: "Experimental Methods",
    description: "Rigorous experimental design and computational analysis techniques",
  },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % facilityImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)
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
    }, 6000)

    return () => clearInterval(interval)
  }, [])
  return (
    <section ref={sectionRef} id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Advancing Language Science</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our lab investigates the fundamental mechanisms of human language processing, combining experimental
              psychology, computational linguistics, and cognitive neuroscience to understand how we comprehend,
              produce, and learn language.
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Text content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">Our Research Philosophy</h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                We believe that understanding language requires a multidisciplinary approach. Our research spans
                theoretical linguistics, experimental psychology, and computational modeling, with a particular focus on
                the rich linguistic diversity of South Asian languages.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Through state-of-the-art experimental facilities and collaborative partnerships with leading
                institutions worldwide, we investigate how linguistic structures interact with cognitive processes,
                cultural contexts, and technological applications.
              </p>
              {/*<div className="pt-4">*/}
              {/*  <div className="grid grid-cols-2 gap-4 text-center">*/}
              {/*    <div className="bg-white p-4 rounded-lg shadow-sm">*/}
              {/*      <div className="text-2xl font-bold text-blue-600">15+</div>*/}
              {/*      <div className="text-sm text-slate-600">Active Projects</div>*/}
              {/*    </div>*/}
              {/*    <div className="bg-white p-4 rounded-lg shadow-sm">*/}
              {/*      <div className="text-2xl font-bold text-blue-600">8</div>*/}
              {/*      <div className="text-sm text-slate-600">Languages Studied</div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                    src={facilityImages[currentImage] || "/placeholder.svg"}
                    alt={`Facility ${currentImage + 1}`}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Navigation */}
              <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              >
                <ChevronRight size={20} />
              </button>

              {/* Dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {facilityImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImage ? "bg-blue-600" : "bg-slate-300"
                        }`}
                    />
                ))}
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-blue-600" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
