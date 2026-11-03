// app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { OG_IMAGE } from "@/lib/seo";

// SEO Metadata
export const metadata = {
    title: {
        absolute: "Language and Cognition Laboratory - IIT Madras",
    },
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
        title: "Language and Cognition Laboratory - IIT Madras",
        description: "Discover research in linguistics, cognition, and experimental methods.",
        type: "website",
        url: "https://home.iitm.ac.in/anindita/lclab/",
        images: [OG_IMAGE],
    },
    twitter: {
        card: "summary_large_image",
        title: "Language and Cognition Laboratory - IIT Madras",
        description: "Discover research in linguistics, cognition, and experimental methods.",
        images: [OG_IMAGE.url],
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
