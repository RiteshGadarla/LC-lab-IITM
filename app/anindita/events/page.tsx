// app/events/page.tsx (or wherever this is rendered!)
import { EventsSection } from "@/components/events";
import { NewsSection } from "@/components/news";

export const metadata = {
    title: "Events | Language & Cognition Lab",
    description: "Workshops and events advancing the study of language and cognition at IIT Madras.",
    // canonical: "https://yourdomain.com/events", // Uncomment and use your domain on launch
    keywords: [
        "linguistics events",
        "language workshops",
        "cognition lab events",
        "IIT Madras language research",
        "academic events Chennai"
    ],
    openGraph: {
        title: "Events | Language & Cognition Lab",
        description: "See recent and past linguistics/cognition events at IIT Madras.",
        type: "website",
        // url: "https://yourdomain.com/events", // Uncomment when you have a domain
        // images: [{ url: "https://yourdomain.com/og-events.jpg" }], // Add OG image upon launch
    },
    robots: { index: true, follow: true },
};

const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Language & Cognition Lab Events",
    "description": "Academic events, seminars, and workshops related to language and cognition at IIT Madras.",
    // "url": "https://yourdomain.com/events", // Fill in later
    "location": {
        "@type": "Place",
        "name": "IIT Madras",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600036",
            "addressCountry": "IN"
        }
    },
    "organizer": {
        "@type": "Organization",
        "name": "Language & Cognition Lab",
        "parentOrganization": {
            "@type": "EducationalOrganization",
            "name": "Indian Institute of Technology Madras"
        }
    }
};

export default function EventsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
            />
            <div className="min-h-screen bg-white">
                <EventsSection />
                <NewsSection />
            </div>
        </>
    );
}
