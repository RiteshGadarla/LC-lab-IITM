import { ContactSection } from "@/components/contact-section";

// SEO Metadata (for Next.js App Router)
// If you’re on Next.js 13+, you can use metadata export.
// All URLs are commented out for you to fill in once you have a domain.

export const metadata = {
    title: "Contact | Language & Cognition Lab IIT Madras",
    description: "Contact the Language and Cognition Lab at IIT Madras. Reach us via email, phone, or visit our department for research collaborations and inquiries.",
    // Open Graph example:
    openGraph: {
        title: "Contact | Language & Cognition Lab IIT Madras",
        description: "Contact us for research queries, collaboration, and project information.",
        // url: "https://yourdomain.com/contact",
        // images: [ { url: "https://yourdomain.com/og-contact.jpg", width: 1200, height: 630, alt: "Contact Language Lab" } ],
        type: "website",
    },
    // Twitter Card Example:
    twitter: {
        card: "summary_large_image",
        title: "Contact | Language & Cognition Lab IIT Madras",
        description: "Contact us for research queries, collaboration, and project information.",
        // images: [ "https://yourdomain.com/twitter-contact.jpg" ],
    },
    // canonical: "https://yourdomain.com/contact",
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
    "url": "#", // "https://yourdomain.com/contact",
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
            />
            <div className="min-h-screen bg-white">
                <ContactSection />
            </div>
        </>
    );
}
