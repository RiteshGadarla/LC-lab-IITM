import { Metadata } from 'next'
import { CollaborationsSection } from "@/components/collaborations-section";

export const metadata: Metadata = {
    title: 'Research Collaborations | Language & Cognition Lab - IIT Madras',
    description: 'Discover our international and domestic research partnerships at the Language & Cognition Lab, IIT Madras. Working with leading institutions worldwide to advance language and cognition research.',
    keywords: [
        'language research collaboration',
        'cognition research partners',
        'IIT Madras collaborations',
        'international research partnerships',
        'academic collaboration',
        'language science network',
        'research consortium',
        'cognitive science partnerships'
    ],
    authors: [{ name: 'Language & Cognition Lab, IIT Madras' }],
    creator: 'Language & Cognition Lab, IIT Madras',
    publisher: 'IIT Madras',
    openGraph: {
        title: 'Research Collaborations | Language & Cognition Lab',
        description: 'Explore our global network of research partnerships advancing language and cognition science.',
        // url: 'https://yoursite.com/collaborations',
        siteName: 'Language & Cognition Lab',
        // images: [
        //     {
        //         url: 'https://yoursite.com/og-collaborations.jpg',
        //         width: 1200,
        //         height: 630,
        //         alt: 'Language & Cognition Lab Research Collaborations',
        //     },
        // ],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        // canonical: 'https://yoursite.com/collaborations',
    },
}

// JSON-LD structured data
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Research Collaborations",
    "description": "International and domestic research partnerships of the Language & Cognition Lab at IIT Madras",
    // "url": "https://yoursite.com/collaborations",
    "mainEntity": {
        "@type": "ResearchProject",
        "name": "Language & Cognition Research Collaborations",
        "description": "Global network of academic partnerships advancing language and cognition research",
        "provider": {
            "@type": "Organization",
            "name": "Language & Cognition Lab",
            // "url": "https://yoursite.com",
            "parentOrganization": {
                "@type": "EducationalOrganization",
                "name": "Indian Institute of Technology Madras",
                "url": "https://www.iitm.ac.in"
            }
        },
        "collaborator": [
            {
                "@type": "Organization",
                "name": "International Research Partners",
                "description": "Leading institutions worldwide collaborating on language and cognition research"
            },
            {
                "@type": "Organization",
                "name": "IIT Madras Research Network",
                "description": "Internal collaborations within IIT Madras community"
            }
        ]
    },
    "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Collaborations",
            }
        ]
    }
}

export default function CollaborationsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="min-h-screen bg-white">
                <CollaborationsSection />
            </div>
        </>
    )
}
