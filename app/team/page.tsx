import { TeamSection } from "@/components/team-section";

export const metadata = {
    title: "Our Team | Language & Cognition Lab, IIT Madras",
    description: "Meet the expert faculty, researchers, PhD scholars, and collaborators driving cutting-edge research at the Language & Cognition Lab, IIT Madras.",
    // canonical: "https://yourdomain.com/team", // Uncomment and add your domain when ready
    keywords: [
        "Language and Cognition Lab team",
        "faculty",
        "PhD scholars",
        "research staff",
        "language research India",
        "IIT Madras"
    ],
    openGraph: {
        title: "Our Team | Language & Cognition Lab, IIT Madras",
        description: "Meet the faculty, researchers, and scholars of the Language Lab, IIT Madras.",
        type: "website",
        // url: "https://yourdomain.com/team", // fill when live
        // images: [{ url: "https://yourdomain.com/og-team.jpg" }] // fill when live
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Team | Language & Cognition Lab, IIT Madras",
        description: "Faculty, scholars, and staff of IIT Madras’ Language & Cognition Lab.",
        // images: ["https://yourdomain.com/og-team.jpg"] // fill when live
    },
    robots: { index: true, follow: true },
};

const jsonLD = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    "name": "Language & Cognition Lab Team, IIT Madras",
    "description": "Meet the expert faculty, researchers, PhD scholars, and staff at the Language & Cognition Lab, Department of Humanities and Social Sciences at IIT Madras.",
    // "url": "https://yourdomain.com/team",
    "provider": {
        "@type": "Organization",
        "name": "Language & Cognition Lab, IIT Madras",
        "parentOrganization": {
            "@type": "EducationalOrganization",
            "name": "Indian Institute of Technology Madras"
        }
    },
    "employee": [
        // You could map names here as well:
        // { "@type": "Person", "name": "Name" } for each person—but this is optional for general team page.
    ]
};

export default function TeamPage() {
    return (
        <>
            {/* SEO structured data for search engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
            />
            <div className="min-h-screen bg-white">
                <TeamSection />
            </div>
        </>
    );
}
