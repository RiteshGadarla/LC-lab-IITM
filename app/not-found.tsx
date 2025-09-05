"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        // Redirect to /home after 2 seconds
        const timer = setTimeout(() => {
            router.push("/anindita")
        }, 2000)

        return () => clearTimeout(timer)
    }, [router])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-6">Page Not Found. Redirecting to Home...</p>
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-800"></div>
        </div>
    )
}
