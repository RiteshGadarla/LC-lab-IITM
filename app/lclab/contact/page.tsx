import {ContactSection} from "@/components/contact-section";

// SEO Metadata
export const metadata = {
    title: "Contact | Language & Cognition Lab IIT Madras",
    description: "Contact the Language and Cognition Lab at IIT Madras. Reach us via email, phone, or visit our department for research collaborations and inquiries.",

    openGraph: {
        title: "Contact | Language & Cognition Lab IIT Madras",
        description: "Contact us for research queries, collaboration, and project information.",
        url: "https://home.iitm.ac.in/anindita/lclab/contact",
        type: "website",
    },
    // Twitter Card Example:
    twitter: {
        card: "summary_large_image",
        title: "Contact | Language & Cognition Lab IIT Madras",
        description: "Contact us for research queries, collaboration, and project information."
    },
    canonical: "https://home.iitm.ac.in/anindita/lclab/contact",
    robots: {
        index: true,
        follow: true,
    },
    keywords: [
        "IIT Madras contact",
        "Language Lab contact",
        "Cognitive Science Lab contact",
        "Language research Chennai",
        "Science collaborations India"
    ],
};

// Structured data JSON-LD (for enhanced SEO rich snippets)
const jsonLD = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    "name": "Language & Cognition Lab, IIT Madras",
    "url": "https://home.iitm.ac.in/anindita/lclab/contact/",
    "contactPoint": {
        "@type": "ContactPoint",
        "email": "principal@iitm.ac.in",
        "telephone": "+91-44-2257-xxxx",
        "contactType": "Research Enquiries",
        "areaServed": "IN"
    },
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "HSB332B, Humanities and Sciences Block",
        "addressLocality": "IIT Madras",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600036",
        "addressCountry": "IN"
    }
};

export default function ContactPage() {
    return (
        <>
            {/* JSON-LD structured data for search engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLD)}}
            />
            <div className="min-h-screen bg-white">
                <ContactSection/>
            </div>
        </>
    );
}
