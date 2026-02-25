// app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";

// SEO Metadata
export const metadata = {
    title: "Language and Cognition Research Lab",
    description: "Discover research in linguistics, cognition, and experimental methods.",
    keywords: [
        "linguistics",
        "cognition",
        "language research",
        "experimental linguistics",
        "cross-linguistic studies",
        "eye tracking",
        "psycholinguistics",
        "Indian languages",
        "IIT Madras"
    ],
    openGraph: {
        title: "Language and Cognition Research Lab",
        description: "Discover research in linguistics, cognition, and experimental methods.",
        type: "website",
        url: "https://home.iitm.ac.in/anindita/lclab/",
    },
    robots: { index: true, follow: true },
    alternates: {
        canonical: 'https://home.iitm.ac.in/anindita/lclab',
    },
};

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <HeroSection />
            <AboutSection />
        </div>
    );
}
