import {useEffect, useState, useRef, useCallback} from "react"
import {ChevronLeft, ChevronRight} from "lucide-react"

const EventImageSlideshow = ({images, title}: { images: string[], title: string }) => {
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
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-100"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                >
                    <img
                        src={src}
                        alt={`${title} - image ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"/>
                </div>
            ))}

            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        className="absolute z-20 left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all border border-slate-200"
                    >
                        <ChevronLeft size={16} className="text-slate-700"/>
                    </button>
                    <button
                        onClick={manualNext}
                        className="absolute z-20 right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all border border-slate-200"
                    >
                        <ChevronRight size={16} className="text-slate-700"/>
                    </button>
                </>
            )}
        </div>
    )
}

export default EventImageSlideshow;
