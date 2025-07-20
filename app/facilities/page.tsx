// app/facilities/page.tsx
import { FacilitiesSection } from "@/components/facilities-section";

export const metadata = {
    title: "Research Facilities | Language & Cognition Lab IIT Madras",
    description: "Explore state-of-the-art research infrastructure, including the EyeLink Portable Duo system and advanced experimental stations at the Language & Cognition Lab, IIT Madras.",
    keywords: [
        "eye tracking",
        "language research",
        "cognitive science facilities",
        "IIT Madras lab",
        "research infrastructure",
        "EyeLink Portable Duo",
        "psycholinguistics lab"
    ],
    openGraph: {
        title: "Research Facilities | Language & Cognition Lab IIT Madras",
        description: "Cutting-edge equipment for experimental linguistics, cognition, and language research.",
        type: "website",
        // url: "https://yourdomain.com/facilities",
        // images: [{ url: "https://yourdomain.com/og-facilities.jpg", width: 1200, height: 630, alt: "Research Facilities" }]
    },
    twitter: {
        card: "summary_large_image",
        title: "Research Facilities | Language & Cognition Lab IIT Madras",
        description: "Explore lab equipment and infrastructure supporting advanced research at IIT Madras.",
        // images: ["https://yourdomain.com/twitter-facilities.jpg"]
    },
    // canonical: "https://yourdomain.com/facilities",
    robots: { index: true, follow: true }
};

// Add structured data for search engines (comment URL for now)
const jsonLD = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    "name": "Language & Cognition Lab Research Facilities",
    "description": "Detailed overview of research infrastructure at the Language & Cognition Lab, IIT Madras.",
    // "url": "https://yourdomain.com/facilities",
    "provider": {
        "@type": "Organization",
        "name": "Language & Cognition Lab, IIT Madras",
        "parentOrganization": {
            "@type": "EducationalOrganization",
            "name": "Indian Institute of Technology Madras"
        }
    },
    "hasPart": [
        {
            "@type": "Product",
            "name": "EyeLink Portable Duo",
            "description": "High-precision eye-tracking system for real-time gaze analysis.",
            "brand": { "@type": "Brand", "name": "SR Research" }
        },
        {
            "@type": "Product",
            "name": "Experimental Stations",
            "description": "Workstations for psycholinguistic experiments with audio and visual capabilities."
        }
    ]
};

export default function FacilitiesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
            />
            <div className="min-h-screen bg-white">
                <FacilitiesSection />
            </div>
        </>
    );
}
