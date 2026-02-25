import { Metadata } from 'next'
import { ResearchSection } from "@/components/research-section"

// SEO Metadata
export const metadata: Metadata = {
    title: "Research Portfolio | Language and Cognition Research Lab",
    description: "Explore our comprehensive research portfolio including ongoing projects, peer-reviewed publications, and conference presentations in linguistics, cognition, and experimental language studies.",
    keywords: [
        "linguistics research",
        "cognition studies",
        "language research projects",
        "experimental linguistics",
        "psycholinguistics publications",
        "language conferences",
        "cross-linguistic research",
        "eye tracking studies",
        "Indian languages research",
        "computational linguistics"
    ],
    openGraph: {
        title: "Research Portfolio | Language and Cognition Research Lab",
        description: "Explore our comprehensive research portfolio including ongoing projects, peer-reviewed publications, and conference presentations in linguistics and cognition.",
        url: "https://home.iitm.ac.in/anindita/lclab/research/",
        siteName: "Language and Cognition Research Lab",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Research Portfolio | Language and Cognition Research Lab",
        description: "Explore our comprehensive research portfolio in linguistics, cognition, and experimental language studies.",
    },
    robots: "index, follow",
};

export default function ResearchPage() {
    return (
        <div className="min-h-screen bg-white">
            <ResearchSection />
        </div>
    )
}
