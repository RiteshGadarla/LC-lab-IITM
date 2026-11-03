import {useEffect, useState, useRef, useCallback} from "react"
import { createPortal } from "react-dom"
import {ChevronLeft, ChevronRight, X, ZoomIn} from "lucide-react"

const EventImageSlideshow = ({images, title}: { images: string[], title: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const [aspectClass, setAspectClass] = useState("aspect-[4/3]")

    useEffect(() => {
        if (images.length > 0) {
            const img = new window.Image()
            img.onload = () => {
                if (img.height > img.width) {
                    setAspectClass("aspect-[3/4]")
                } else {
                    setAspectClass("aspect-[4/3]")
                }
            }
            img.src = images[0]
        }
    }, [images])

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

    const [isZoomed, setIsZoomed] = useState(false)

    useEffect(() => {
        if (!isHovered && !isZoomed) {
            timerRef.current = setInterval(nextImage, 5000)
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [isHovered, isZoomed, nextImage])

    return (
        <>
        <div
            className={`relative ${aspectClass} rounded-2xl overflow-hidden shadow-md border border-slate-100 cursor-pointer group`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsZoomed(true)}
        >
            <div className="absolute top-4 right-4 z-30 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <ZoomIn className="text-white" size={20} />
            </div>
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
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute z-20 left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all border border-slate-200"
                    >
                        <ChevronLeft size={16} className="text-slate-700"/>
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); manualNext(); }}
                        className="absolute z-20 right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all border border-slate-200"
                    >
                        <ChevronRight size={16} className="text-slate-700"/>
                    </button>
                </>
            )}
        </div>

        {/* Zoom Overlay */}
        {isZoomed && typeof document !== 'undefined' && createPortal(
            <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 md:p-12" style={{ position: 'fixed' }}>
                <button
                    onClick={() => setIsZoomed(false)}
                    className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all z-[110]"
                >
                    <X size={32} />
                </button>
                <div className="relative w-full h-full flex items-center justify-center" onClick={() => setIsZoomed(false)}>
                    <img
                        src={images[currentIndex]}
                        alt={`${title} - zoomed`}
                        className="max-w-full max-h-full object-contain cursor-default"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            </div>,
            document.body
        )}
        </>
    )
}

export default EventImageSlideshow;
