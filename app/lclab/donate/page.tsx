import { Metadata } from 'next'
import {FundUsSection} from "@/components/fund-us";
import { OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Support Our Research",
    description: "Support research in theoretical, applied, experimental, and cognitive linguistics at the Language & Cognition Lab, IIT Madras. Learn how your contribution advances language science.",
    keywords: [
        "donate IIT Madras",
        "fund linguistics research",
        "support cognitive science",
        "language research funding",
        "IIT Madras research donation"
    ],
    openGraph: {
        title: "Support Our Research | Language & Cognition Lab, IIT Madras",
        description: "Your support drives research in theoretical, applied, experimental, and cognitive linguistics at IIT Madras.",
        url: "https://home.iitm.ac.in/anindita/lclab/donate/",
        type: "website",
        images: [OG_IMAGE],
    },
    twitter: {
        card: "summary_large_image",
        title: "Support Our Research | Language & Cognition Lab, IIT Madras",
        description: "Support research in language, cognition, and communication at IIT Madras.",
        images: [OG_IMAGE.url],
    },
    alternates: {
        canonical: "https://home.iitm.ac.in/anindita/lclab/donate/",
    },
    robots: { index: true, follow: true },
};

const jsonLD = {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    "name": "Support the Language & Cognition Lab, IIT Madras",
    "description": "Contributions support research in theoretical, applied, experimental, and cognitive linguistics at IIT Madras.",
    "recipient": {
        "@type": "Organization",
        "name": "Language & Cognition Lab, IIT Madras",
        "parentOrganization": {
            "@type": "EducationalOrganization",
            "name": "Indian Institute of Technology Madras"
        }
    }
};

export default function FundUsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLD)}}
            />
            <div className="min-h-screen bg-white">
                <FundUsSection/>
            </div>
        </>
    )
}
