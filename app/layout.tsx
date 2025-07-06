import type React from "react"
import type { Metadata, Viewport } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
    title: "Language & Cognition Lab - IIT Madras",
    description:
        "A premier research lab at IIT Madras exploring the intersection of language, cognition, and communication through cutting-edge experimental and computational methods.",
    keywords: "linguistics, cognition, language processing, eye-tracking, IIT Madras, research lab, psycholinguistics",
    authors: [{ name: "Language & Cognition Lab, IIT Madras" }],
    openGraph: {
        title: "Language & Cognition Lab - IIT Madras",
        description: "Premier research lab exploring language, cognition, and communication",
        type: "website",
    },
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
        <head>
            <link rel="icon" href="/darkLogo.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
                rel="stylesheet"
            />
            <meta name="theme-color" content="#1e293b" />
        </head>
        <body className="antialiased min-h-screen bg-white">
        <Navigation />
        {children}
        <Footer />
        </body>
        </html>
    )
}