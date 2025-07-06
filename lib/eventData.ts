export interface Event {
    id: string;
    heading: string;
    tag: string;
    description: string[];
    date: string;
    venue: string;
    images: string[];
}

export const eventsData: Event[] = [
    {
        id: "generative-grammar-2025",
        heading: "Essentials of Generative Grammar",
        tag: "4-day Mini Summer Course",
        description: [
            "A four-day intensive course organized by the Department of Humanities and Social Sciences, IIT Madras, in collaboration with the Central Institute of Indian Languages, Mysuru. This course offers a deep dive into the principles of generative grammar, exploring its theoretical foundations and applications in linguistic research."
        ],
        date: "June 11–14, 2025",
        venue: "IC & SR Building, Indian Institute of Technology Madras, Chennai",
        images: [
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751630995/image4_wzyuto.jpg",
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751630996/image11_f4jh96.jpg",
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751630998/image10_srzi3c.jpg",
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751630995/image5_jdwjwd.jpg",
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751630996/image7_lrlytk.jpg",
        ],
    },
    {
        id: "voice-seminar-2023",
        heading: "All About 'Voice': A Crosslinguistic Perspective",
        tag: "2-day Seminar",
        description: [
            "A two-day seminar exploring voice constructions through theoretical, typological, and acquisition-centric perspectives, featuring talks by eminent linguists and paper presentations."
        ],
        date: "April 14-15, 2023",
        venue: "IC & SR Building, Indian Institute of Technology Madras, Chennai",
        images: [
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751816056/voice1_bfidwm.jpg",
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751816058/voice2_s8dqr6.jpg",
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751816063/voice3_zvtgj0.jpg",
        ]
    }
];
