"use client"

import { useEffect, useRef, useState } from "react"
import { Brain, ChevronLeft, ChevronRight, Eye, Globe, Microscope } from "lucide-react"
import { facilityImages } from "@/lib/imagesData"

const features = [
  {
    icon: Brain,
    title: "Language and Cognition Research",
    description: "Understanding how the human mind processes and comprehends language structures.",
  },
  {
    icon: Eye,
    title: "Eye tracking analysis",
    description: "Advanced eye-tracking technology to study real-time language processing.",
  },
  {
    icon: Globe,
    title: "Cross-linguistic Studies",
    description: "Comparative analysis across language families.",
  },
  {
    icon: Microscope,
    title: "Experimental Methods",
    description: "Rigorous experimental design and computational analysis of linguistic data.",
  },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % facilityImages.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isVisible) {
      interval = setInterval(nextImage, 6000);
      return () => clearInterval(interval); // Return nothing else, this is correct!
    }
  }, [isVisible]);

  return (
      <section
          ref={sectionRef}
          id="about"
          className="py-20 bg-slate-50"
          aria-label="About our linguistics research lab"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <header className="text-center mb-16">
            {/* Main page section header: Use H1 unless it's not the top-level header */}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Exploring Linguistics
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our lab investigates a wide range of linguistic phenomena through theoretical, typological, and experimental approaches.
            </p>
          </header>

          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            {/* Main content grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Text content */}
              <article className="space-y-6" aria-label="Our Research Philosophy">
                <h2 className="text-2xl font-semibold text-slate-900">Our Research Philosophy</h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  We believe that understanding language requires a multidisciplinary approach.
                  Through state-of-the-art experimental facilities and partnerships with leading national and international institutions,
                  we investigate how linguistic structures interact with cognitive processes, cultural contexts, and technological
                  applications, focusing especially on Indian languages.
                </p>
              </article>

              {/* Image carousel */}
              <figure className="relative" aria-label="Laboratory Facilities Gallery">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  {/* If using Next.js, swap for <Image /> for optimization */}
                  <img
                      src={facilityImages[currentImage] || "/placeholder.svg"}
                      alt={`Our laboratory facility - image ${currentImage + 1} of ${facilityImages.length}`}
                      className="w-full h-full object-cover"
                      loading={currentImage === 0 ? "eager" : "lazy"}
                      width={640}
                      height={480}
                  />
                  <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  />
                </div>
                {/* Navigation */}
                <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    aria-label="Previous image"
                >
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    aria-label="Next image"
                >
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
                {/* Pagination dots */}
                <nav
                    className="flex justify-center mt-4 space-x-2"
                    aria-label="Facility image gallery pagination"
                >
                  {facilityImages.map((_, index) => (
                      <button
                          key={index}
                          onClick={() => setCurrentImage(index)}
                          aria-label={`Go to image ${index + 1}`}
                          className={`w-2 h-2 rounded-full transition-all
                      ${index === currentImage ? "bg-blue-600" : "bg-slate-300"}`}
                      />
                  ))}
                </nav>
                <figcaption className="sr-only">
                  Photos of our linguistics research facilities.
                </figcaption>
              </figure>
            </div>

            {/* Features grid */}
            <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" aria-label="Lab features and research areas">
              {features.map((feature, index) => (
                  <article
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                      aria-label={feature.title}
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="text-blue-600" size={24} aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                  </article>
              ))}
            </section>

          </div>
        </div>
      </section>
  )
}
