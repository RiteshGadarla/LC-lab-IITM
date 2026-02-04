export interface Event {
    id: string;
    heading: string;
    tag: string;
    description: string[];
    date: string;
    venue: string;
    imagesBG: string[];
    imagesSM: string[];
}

export const eventsData: Event[] = [
    {
        id: "ai-powered-tamil-language-proficiency-assessment-2026",
        heading: "AI-Powered Unified Tamil Language Proficiency Assessment Platform",
        tag: "Institute Open House",
        description: [
            "An AI-powered unified Tamil language proficiency assessment platform presented by the Language and Cognition Laboratory, IIT Madras, " +
            "as part of the Institute Open House 2026. The platform demonstrates the use of responsible AI technologies to evaluate Tamil language skills, " +
            "bringing together language research, cognition, and artificial intelligence under one unified assessment framework."
        ],
        date: "January 2-4, 2026",
        venue: "LC Lab, HSB Ground Floor, Behind CLT, IIT Madras",
        imagesBG: ["/anindita/eventImages/aipoweredtamillanguageproficiencyassessment2026_1_Bg.webp", "/anindita/eventImages/aipoweredtamillanguageproficiencyassessment2026_2_Bg.webp", "/anindita/eventImages/aipoweredtamillanguageproficiencyassessment2026_3_Bg.webp", "/anindita/eventImages/aipoweredtamillanguageproficiencyassessment2026_4_Bg.webp"],
        imagesSM: ["/anindita/eventImages/aipoweredtamillanguageproficiencyassessment2026_1_Sm.webp", "/anindita/eventImages/aipoweredtamillanguageproficiencyassessment2026_2_Sm.webp", "/anindita/eventImages/aipoweredtamillanguageproficiencyassessment2026_3_Sm.webp", "/anindita/eventImages/aipoweredtamillanguageproficiencyassessment2026_4_Sm.webp"],
    },
    {
        id: "language-cognition-lab-inauguration-2025",
        heading: "Inauguration of the Language & Cognition Laboratory",
        tag: "One-Day Symposium",
        description: [
            "A one-day symposium organized by the Department of Humanities and Social Sciences, IIT Madras, in collaboration with LC-Lab and CeRAI. " +
            "The event marked the formal inauguration of the Language & Cognition Laboratory and featured a panel discussion titled “Language for Thought: Exploring Interdisciplinary Dimensions,” bringing together experts from linguistics, psychology, public service, and interdisciplinary research."
        ],
        date: "November 10, 2025",
        venue: "LCL Lab and IC & SR Hall 3, IIT Madras, Chennai",
        imagesBG: ["/anindita/eventImages/languagecognitionlabinauguration2025_1_Bg.webp", "/anindita/eventImages/languagecognitionlabinauguration2025_2_Bg.webp", "/anindita/eventImages/languagecognitionlabinauguration2025_3_Bg.webp", "/anindita/eventImages/languagecognitionlabinauguration2025_4_Bg.webp", "/anindita/eventImages/languagecognitionlabinauguration2025_5_Bg.webp", "/anindita/eventImages/languagecognitionlabinauguration2025_6_Bg.webp"],
        imagesSM: ["/anindita/eventImages/languagecognitionlabinauguration2025_1_Sm.webp", "/anindita/eventImages/languagecognitionlabinauguration2025_2_Sm.webp", "/anindita/eventImages/languagecognitionlabinauguration2025_3_Sm.webp", "/anindita/eventImages/languagecognitionlabinauguration2025_4_Sm.webp", "/anindita/eventImages/languagecognitionlabinauguration2025_5_Sm.webp", "/anindita/eventImages/languagecognitionlabinauguration2025_6_Sm.webp"],
    },
    {
        id: "generative-grammar-2025",
        heading: "Essentials of Generative Grammar",
        tag: "4-day Mini Summer Course",
        description: [
            "A four-day intensive course organized by the Department of Humanities and Social Sciences, IIT Madras, in collaboration with the Central Institute of Indian Languages, Mysuru. " +
            "The course offered a deep dive into the principles of generative grammar, exploring its theoretical foundations and applications in linguistic research."
        ],
        date: "June 11–14, 2025",
        venue: "IC & SR Building, IIT Madras, Chennai",
        imagesBG: ["/anindita/eventImages/generativegrammar2025_1_Bg.webp", "/anindita/eventImages/generativegrammar2025_2_Bg.webp", "/anindita/eventImages/generativegrammar2025_3_Bg.webp", "/anindita/eventImages/generativegrammar2025_4_Bg.webp", "/anindita/eventImages/generativegrammar2025_5_Bg.webp"],
        imagesSM: ["/anindita/eventImages/generativegrammar2025_1_Sm.webp", "/anindita/eventImages/generativegrammar2025_2_Sm.webp", "/anindita/eventImages/generativegrammar2025_3_Sm.webp", "/anindita/eventImages/generativegrammar2025_4_Sm.webp", "/anindita/eventImages/generativegrammar2025_5_Sm.webp"],
    },
    {
        id: "voice-category-copula-2024",
        heading: "Voice, Category and Copula",
        tag: "Symposium and Open Round Table",
        description: [
            "A two-day symposium that examined voice, copula, and ergativity in Indian languages through the lens of morphosyntax and category theory. The event featured talks and discussions on mixed categories, predication, and case alignment. Renowned linguists presented research on cross-linguistic patterns and structural variation."

        ],
        date: "September 16-17 2024",
        venue: "Department of Humanities and Social Sciences, IIT Madras, Chennai",
        imagesBG: ["/anindita/eventImages/voicecategorycopula2024_1_Bg.webp", "/anindita/eventImages/voicecategorycopula2024_2_Bg.webp", "/anindita/eventImages/voicecategorycopula2024_3_Bg.webp", "/anindita/eventImages/voicecategorycopula2024_4_Bg.webp"],
        imagesSM: ["/anindita/eventImages/voicecategorycopula2024_1_Sm.webp", "/anindita/eventImages/voicecategorycopula2024_2_Sm.webp", "/anindita/eventImages/voicecategorycopula2024_3_Sm.webp", "/anindita/eventImages/voicecategorycopula2024_4_Sm.webp"],
    },
    {
        id: "voice-seminar-2023",
        heading: "All About 'Voice': A Crosslinguistic Perspective",
        tag: "2-day Seminar",
        description: [
            "The two-day seminar that explored various aspects of voice constructions, drawing from theoretical frameworks, typological comparisons, and perspectives on language acquisition. The event featured insightful talks delivered by eminent linguists and included a series of scholarly paper presentations, academic discussions and cross-linguistic insights."
        ],
        date: "April 14-15, 2023",
        venue: "IC & SR Building, IIT Madras, Chennai",
        imagesBG: ["/anindita/eventImages/voiceseminar2023_1_Bg.webp", "/anindita/eventImages/voiceseminar2023_2_Bg.webp"],
        imagesSM: ["/anindita/eventImages/voiceseminar2023_1_Sm.webp", "/anindita/eventImages/voiceseminar2023_2_Sm.webp"],
    }
];