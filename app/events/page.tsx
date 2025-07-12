"use client"

import {EventsSection} from "@/components/events";
import {NewsSection} from "@/components/news";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <EventsSection />
            <NewsSection/>
        </div>
    )
}