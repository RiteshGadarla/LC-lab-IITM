// Team data interfaces
export interface TeamMember {
    name: string
    isActive: boolean
    role?: string
    research?: string
    image?: string
    contribution?: string
}


export interface PrincipalInvestigator extends TeamMember {
    title: string
    interests: string
    linkedInLink: string
    iitmprofile: string
    cerai: string
}

// Principal Investigator
export const principalInvestigator: PrincipalInvestigator = {
    name: "Dr. Anindita Sahoo",
    role: "Principal Investigator",
    isActive: true,
    title: "Assistant Professor, Department of Humanities and Social Sciences, IIT Madras | Faculty PI at CeRAI, IIT Madras",
    interests: "Linguistic Typology, Syntax, Pragmatics, Language Processing, Eye-tracking, Cognition Studies",
    image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1749377865/ani_llz6al.jpg",
    linkedInLink: "https://www.linkedin.com/in/anindita-sahoo-3b971515/",
    iitmprofile: "https://hss.iitm.ac.in/anindita-sahoo/#",
    cerai: "https://cerai.iitm.ac.in/people/anindita-sahoo/"
}

// Team members
export const teamMembers: TeamMember[] = [
    {
        name: "Aziza Said Hussein",
        isActive: true,
        role: "PhD in Progress",
        research: "Copula in Swahili: Pragmatic Functions and Grammaticalization Process",
        image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1749993811/aziza_abph42.png",
    },
    {
        name: "Snigdha Medhi",
        isActive: true,
        role: "PhD in Progress",
        research: "Patterns of Ergativity in Assamese, and Its Varieties",
        image: "https://res.cloudinary.com/dt8amwctw/image/upload/c_crop,ar_1:1/v1749980338/snigdha_l7hcie.png",
    },
    {
        name: "Krishna Raj SR",
        isActive: false,
        role: "IDRP Scholar (Graduated in 2026) – Co-guided with Prof. Srinivasa Chakravarthy",
        research: "From pixels to prepositions: Linking Vision and Spatial Prepositions",
        image:
            "https://res.cloudinary.com/dgzbrujvx/image/upload/c_crop,ar_1:1/v1756733304/krishna_peb5xz.jpg",
    },
    {
        name: "Scherezade Dastur",
        isActive: false,
        role: "Graduated in 2025",
        research: "Code Alternation in Parsi Gujarati and English: An Interactional Linguistics Approach",
        image: "https://res.cloudinary.com/dt8amwctw/image/upload/c_crop,ar_1:1/v1749980337/scheri_x6vo2x.png",
    },
    {
        name: "Gunti Prem Sagar",
        isActive: false,
        role: "Graduated in 2025",
        research: "Syntactic Patterns of Non-Verbal Predication in Select Dravidian Languages",
        image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1749980336/prem_bzpanw.png",
    },
    {
        name: "Pratiti Palit",
        isActive: false,
        role: "Graduated in 2023",
        research: "On the Interaction of Honorification, Copula and Definiteness: A Variationist Approach",
        image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1749980336/pratiti_amhwlv.jpg",
    },
    {
        name: "G L Vijayavani",
        isActive: false,
        role: "IDRP Scholar (PhD in progress) - Co-guiding with Prof. Preeti Aghalayam",
        research:
            "Identifying Gender Bias in Indian Academic Institutional Communication: A Dual Approach Using Text Analysis and Stakeholder Perception",
        image: "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751857873/c53beb33-0e76-4fae-8965-0ce9c23a5278.png",
    },
    {
        name: "Ruby George",
        isActive: false,
        role: "Graduated in 2019, Co-guided by Prof. Umakant Dash",
        research:
            "Persuasion in Public Service Advertising: Creating Changes Through Creative Strategies in the Print Media",
        image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1749980336/ruby_l2mqos.jpg",
    },
    {
        name: "Nayana Rajan",
        isActive: true,
        role: "PhD in Progress",
        image: "https://res.cloudinary.com/dgzbrujvx/image/upload/c_fill,ar_1:1,g_auto/v1752163215/7237bd64-7d34-4596-922c-47fe8e1b63ec.png",
    },
]

// Research
export const researchStaff: TeamMember[] = [
    {
        name: "Nayana Rajan",
        isActive: false,
        role: "Field Investigator",
        image: "https://res.cloudinary.com/dgzbrujvx/image/upload/c_fill,ar_1:1,g_auto/v1752163215/7237bd64-7d34-4596-922c-47fe8e1b63ec.png",
    },
    {
        name: "Suchitra Chakrabarty",
        isActive: false,
        role: "Field Investigator",
        image: "https://res.cloudinary.com/dgzbrujvx/image/upload/c_fill,ar_1:1,g_auto/v1751802299/df1d1d61-e3a7-4c65-9cb5-7917afacfdbf.png",
    },
    {
        name: "Suguna SG",
        isActive: true,
        role: "Research Associate",
        image: "https://res.cloudinary.com/dgzbrujvx/image/upload/c_fill,ar_1:1,g_auto/v1766503319/564d45a5-7b22-46b7-b9ff-f352d921746c.png",
    }
]

// Interns
export const interns: TeamMember[] = [
    {
        name: "Gadarla Ritesh Reddy",
        isActive: false,
        role: "Project Intern",
        image: "https://res.cloudinary.com/dgzbrujvx/image/upload/c_crop,w_1100,h_1100,ar_1:1/v1766503935/e8ae7184-a3df-4c19-bb8e-8020c312a88a.png",
    },
    {
        name: "Saravanan Sathishkumar",
        isActive: false,
        role: "Technical Intern",
        image: "https://res.cloudinary.com/dgzbrujvx/image/upload/c_crop,w_600,h_600,ar_1:1/v1769346238/671da02e-86fa-4cc6-9e83-4076391054db.png"
    },
    {
        name: "Dinesh S",
        isActive: false,
        role: "Technical Intern",
        image: "https://res.cloudinary.com/dgzbrujvx/image/upload/c_fill,ar_1:1,g_auto/v1769346344/17da8dfc-dda6-4cb0-819e-93a226ae82ee.png"
    },
    {
        name: "Harshita Verma",
        isActive: false,
        role: "Technical Intern",
        image: "https://res.cloudinary.com/dgzbrujvx/image/upload/c_fill,ar_1:1,g_auto/v1769347705/c1e4b816-a1ac-4e0c-b2e5-b44d00ef8359.png"
    },
]


// Friends
export const friends: TeamMember[] = [
    {
        name: "Madhav Mittal",
        isActive: true,
        contribution: "Co-scripted the nomenclature",
        image: "https://res.cloudinary.com/dt8amwctw/image/upload/c_fill,ar_1:1,g_auto/v1750746877/madhav_stlidj.jpg",
    },
    {
        name: "Shobhith Vadlamudi",
        isActive: true,
        contribution: "Co-conducted the first laboratory experiment",
        image: "https://res.cloudinary.com/dt8amwctw/image/upload/c_fill,ar_1:1,g_auto/v1750746877/shobhit_e8zraw.jpg",
    },
    {
        name: "Gadarla Rohit Reddy",
        isActive: true,
        contribution: "Co-designed the website",
        image: "https://res.cloudinary.com/dt8amwctw/image/upload/c_fill,ar_1:1,g_auto/v1750746876/rohit_o1zjut.jpg",
    },
]
