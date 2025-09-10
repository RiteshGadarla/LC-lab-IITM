// app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";

// SEO Metadata (recommended for App Router)
export const metadata = {
    title: "Language and Cognition Research Lab | Exploring Linguistics",
    description: "Discover research in linguistics, cognition, and experimental methods.",
    keywords: [
        "linguistics",
        "cognition",
        "language research",
        "experimental linguistics",
        "cross-linguistic studies",
        "eye tracking",
        "psycholinguistics",
        "Indian languages"
    ],
    openGraph: {
        title: "Language and Cognition Research Lab | Exploring Linguistics",
        description: "Discover research in linguistics, cognition, and experimental methods.",
        type: "website",
        url: "https://home.iitm.ac.in/anindita/lclab/", // Uncomment & update when you have a domain
        // images: ["https://yourdomain.com/og-image.jpg"], // Add your OG image when ready
    },
    robots: { index: true, follow: true },
    // canonical: "https://yourdomain.com", // Uncomment & update when you go live
};

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <HeroSection />
            <AboutSection />
        </div>
    );
}
