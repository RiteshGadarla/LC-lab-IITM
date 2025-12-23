"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Menu, X, Type, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useFont } from "@/app/FontContext"

// Defined outside component to prevent re-creation on every render
const NAV_ITEMS = [
    { label: "Home", href: "/lclab" },
    { label: "Research", href: "/lclab/research" },
    { label: "Team", href: "/lclab/team" },
    { label: "Facilities", href: "/lclab/facilities" },
    { label: "Events", href: "/lclab/events" },
    { label: "Collaborations", href: "/lclab/collaborations" },
    { label: "Contact", href: "/lclab/contact" },
    { label: "Fund Us", href: "/lclab/donate" },
]

export function Navigation() {
    const router = useRouter()
    const pathname = usePathname()

    // Handle trailing slashes gracefully
    const isHomePage = pathname === "/lclab" || pathname === "/lclab/"

    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(!isHomePage)
    const [showOverflow, setShowOverflow] = useState(false)
    const [overflowItems, setOverflowItems] = useState<typeof NAV_ITEMS>([])
    const [showDyslexicTip, setShowDyslexicTip] = useState(false)
    const navRef = useRef<HTMLDivElement>(null)

    const { isDyslexic, toggleDyslexic } = useFont()

    const handleScroll = useCallback(() => {
        if (isHomePage) {
            setIsScrolled(window.scrollY > 50)
        } else {
            setIsScrolled(true)
        }
    }, [isHomePage])

    useEffect(() => {
        handleScroll()
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [handleScroll])

    // Handle Tooltip Visibility
    useEffect(() => {
        let timer: NodeJS.Timeout

        if (isHomePage) {
            // Wait 5.5 seconds before showing the tip
            timer = setTimeout(() => {
                setShowDyslexicTip(true)
            }, 5500)
        } else {
            setShowDyslexicTip(false)
        }

        // Cleanup timer if user leaves page before 4.5s
        return () => clearTimeout(timer)
    }, [isHomePage])

    const closeTooltip = (e: React.MouseEvent) => {
        e.stopPropagation()
        setShowDyslexicTip(false)
    }

    // Check for overflow in dyslexia mode
    useEffect(() => {
        if (!isDyslexic) {
            setOverflowItems([])
            return
        }

        const checkOverflow = () => {
            if (navRef.current) {
                const containerWidth = navRef.current.offsetWidth
                const minSpaceNeeded = 900
                if (containerWidth < minSpaceNeeded) {
                    setOverflowItems(NAV_ITEMS.slice(-3))
                } else {
                    setOverflowItems([])
                }
            }
        }

        checkOverflow()
        window.addEventListener("resize", checkOverflow)
        return () => window.removeEventListener("resize", checkOverflow)
    }, [isDyslexic])

    const visibleItems = isDyslexic && overflowItems.length > 0
        ? NAV_ITEMS.slice(0, -3)
        : NAV_ITEMS

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.currentTarget
        target.onerror = null
        target.src = "/placeholder.svg"
    }

    // Tooltip Component
    const DyslexiaTooltip = () => (
        <div className={`
            absolute top-14 right-0 z-50 animate-in fade-in slide-in-from-top-2 duration-500
            ${!showDyslexicTip ? 'hidden' : 'block'}
        `}>
            <div className="relative bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 whitespace-nowrap">
                {/* Arrow pointing up */}
                <div className="absolute -top-1.5 right-3 w-3 h-3 bg-red-500 rotate-45 transform" />

                <span>Try Dyslexia Font</span>

                <button
                    onClick={closeTooltip}
                    className="ml-1 hover:bg-red-600 rounded-full p-0.5 transition-colors"
                >
                    <X size={12} strokeWidth={3} />
                </button>
            </div>
        </div>
    )

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* --- Logo Section --- */}
                    <div className="flex items-center space-x-3 md:space-x-6 flex-shrink-0">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png"
                            alt="IIT Madras Logo"
                            onClick={() => window.open("https://www.iitm.ac.in", "_blank")}
                            className="h-10 md:h-11 w-auto cursor-pointer flex-shrink-0"
                            onError={handleImageError}
                        />

                        <img
                            src={isScrolled ? "/anindita/darkLogo.png" : "/anindita/lightLogo.png"}
                            alt="LC Lab Logo"
                            onClick={() => router.push("/lclab")}
                            className="h-9 md:h-10 w-auto transition-all duration-300 cursor-pointer flex-shrink-0"
                            onError={(e) => {
                                const target = e.currentTarget;
                                target.onerror = null;
                                target.src = "/anindita/placeholder.svg"
                            }}
                        />
                        <div className="hidden sm:block whitespace-nowrap">
                            <h1 className={`text-base md:text-lg font-semibold leading-tight ${isScrolled ? "text-slate-900" : "text-white"}`}>
                                Language and Cognition Laboratory
                            </h1>
                            <p className={`text-xs ${isScrolled ? "text-slate-600" : "text-slate-200"}`}>IIT Madras</p>
                        </div>
                    </div>

                    {/* --- Desktop Navigation --- */}
                    <div className={`hidden lg:flex items-center gap-4 xl:gap-6 ${
                        isDyslexic ? "flex-shrink-0" : ""
                    }`} ref={navRef}>
                        {visibleItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-colors whitespace-nowrap hover:text-blue-600 ${
                                    pathname === item.href
                                        ? "text-blue-600"
                                        : isScrolled
                                            ? "text-slate-700"
                                            : "text-white hover:text-blue-200"
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Overflow Menu (Desktop Dyslexia) */}
                        {isDyslexic && overflowItems.length > 0 && (
                            <div className="relative">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowOverflow(!showOverflow)
                                    }}
                                    className={`p-2 rounded-full transition-all duration-300 ${
                                        isScrolled
                                            ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                            : "bg-white/10 text-white hover:bg-white/20"
                                    }`}
                                >
                                    <MoreVertical size={18} />
                                </button>

                                {showOverflow && (
                                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50">
                                        {overflowItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setShowOverflow(false)}
                                                className={`block px-4 py-2 text-sm transition-colors ${
                                                    pathname === item.href
                                                        ? "bg-blue-50 text-blue-600 font-medium"
                                                        : "text-slate-700 hover:bg-slate-50"
                                                }`}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* --- Desktop Accessibility Font Toggle --- */}
                        <div className="relative">
                            <button
                                onClick={toggleDyslexic}
                                title="Toggle Dyslexia-Friendly Font"
                                className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center border ${
                                    isDyslexic
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : isScrolled
                                            ? "bg-slate-100 text-slate-700 border-slate-200 hover:bg-blue-50"
                                            : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                                }`}
                            >
                                <Type size={18} strokeWidth={2.5} />
                                <span className="sr-only">Toggle Dyslexic Font</span>
                            </button>
                            {/* Desktop Tooltip */}
                            <DyslexiaTooltip />
                        </div>
                    </div>

                    {/* --- Mobile Menu Button --- */}
                    <div className="flex items-center gap-2 lg:hidden">
                        {/* Mobile Font Toggle */}
                        <div className="relative">
                            <button
                                onClick={toggleDyslexic}
                                className={`p-2 rounded-full transition-colors ${
                                    isDyslexic ? "bg-blue-600 text-white" : isScrolled ? "text-slate-900 bg-slate-100" : "text-white bg-white/10"
                                }`}
                            >
                                <Type size={18} />
                            </button>
                            {/* Mobile Tooltip */}
                            <DyslexiaTooltip />
                        </div>

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${isScrolled ? "text-slate-900" : "text-white"}`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>

                {/* --- Mobile Dropdown --- */}
                {isOpen && (
                    <div className="lg:hidden absolute top-16 left-0 right-0 z-40 animate-in slide-in-from-top-5 fade-in duration-200">
                        <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-2xl p-4 border-b">
                            <div className="space-y-2">
                                {NAV_ITEMS.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`
                                                group flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200
                                                ${isActive
                                                ? "bg-blue-50 text-blue-700 shadow-sm border-l-4 border-blue-600 pl-3"
                                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:pl-5 pl-4"
                                            }
                                            `}
                                        >
                                            <span>{item.label}</span>
                                            <span className={`opacity-0 transition-opacity duration-200 ${isActive ? "opacity-100" : "group-hover:opacity-50"}`}>
                                                →
                                            </span>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div
                            className="h-screen bg-black/20 backdrop-blur-sm"
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
                )}
            </div>

            {/* Click outside to close overflow menu */}
            {showOverflow && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowOverflow(false)}
                />
            )}
        </nav>
    )
}