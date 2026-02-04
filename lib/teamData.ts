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
    image: "/anindita/peopleImages/drAninditaSahoo_Sm.webp",
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
        image: "/anindita/peopleImages/azizaSaidHussein_Sm.webp",
    },
    {
        name: "Snigdha Medhi",
        isActive: true,
        role: "PhD in Progress",
        research: "Patterns of Ergativity in Assamese, and Its Varieties",
        image: "/anindita/peopleImages/snigdhaMedhi_Sm.webp",
    },
    {
        name: "Krishna Raj SR",
        isActive: false,
        role: "IDRP Scholar (Graduated in 2026) – Co-guided with Prof. Srinivasa Chakravarthy",
        research: "From pixels to prepositions: Linking Vision and Spatial Prepositions",
        image: "/anindita/peopleImages/krishnaRajSr_Sm.webp",
    },
    {
        name: "Scherezade Dastur",
        isActive: false,
        role: "Graduated in 2025",
        research: "Code Alternation in Parsi Gujarati and English: An Interactional Linguistics Approach",
        image: "/anindita/peopleImages/scherezadeDastur_Sm.webp",
    },
    {
        name: "Gunti Prem Sagar",
        isActive: false,
        role: "Graduated in 2025",
        research: "Syntactic Patterns of Non-Verbal Predication in Select Dravidian Languages",
        image: "/anindita/peopleImages/guntiPremSagar_Sm.webp",
    },
    {
        name: "Pratiti Palit",
        isActive: false,
        role: "Graduated in 2023",
        research: "On the Interaction of Honorification, Copula and Definiteness: A Variationist Approach",
        image: "/anindita/peopleImages/pratitiPalit_Sm.webp",
    },
    {
        name: "G L Vijayavani",
        isActive: false,
        role: "IDRP Scholar (PhD in progress) - Co-guiding with Prof. Preeti Aghalayam",
        research:
            "Identifying Gender Bias in Indian Academic Institutional Communication: A Dual Approach Using Text Analysis and Stakeholder Perception",
        image: "/anindita/peopleImages/gLVijayavani_Sm.webp",
    },
    {
        name: "Ruby George",
        isActive: false,
        role: "Graduated in 2019, Co-guided by Prof. Umakant Dash",
        research:
            "Persuasion in Public Service Advertising: Creating Changes Through Creative Strategies in the Print Media",
        image: "/anindita/peopleImages/rubyGeorge_Sm.webp",
    },
    {
        name: "Nayana Rajan",
        isActive: true,
        role: "PhD in Progress",
        image: "/anindita/peopleImages/nayanaRajan_Sm.webp",
    },
]

// Research
export const researchStaff: TeamMember[] = [
    {
        name: "Nayana Rajan",
        isActive: false,
        role: "Field Investigator",
        image: "/anindita/peopleImages/nayanaRajan_Sm.webp",
    },
    {
        name: "Suchitra Chakrabarty",
        isActive: false,
        role: "Field Investigator",
        image: "/anindita/peopleImages/suchitraChakrabarty_Sm.webp",
    },
    {
        name: "Suguna SG",
        isActive: true,
        role: "Research Associate",
        image: "/anindita/peopleImages/sugunaSg_Sm.webp",
    }
]

// Interns
export const interns: TeamMember[] = [
    {
        name: "Gadarla Ritesh Reddy",
        isActive: false,
        role: "Project Intern",
        image: "/anindita/peopleImages/gadarlaRiteshReddy_Sm.webp",
    },
    {
        name: "Saravanan Sathishkumar",
        isActive: false,
        role: "Technical Intern",
        image: "/anindita/peopleImages/saravananSathishkumar_Sm.webp"
    },
    {
        name: "Dinesh S",
        isActive: false,
        role: "Technical Intern",
        image: "/anindita/peopleImages/dineshS_Sm.webp"
    },
    {
        name: "Harshita Verma",
        isActive: false,
        role: "Technical Intern",
        image: "/anindita/peopleImages/harshitaVerma_Sm.webp"
    },
]


// Friends
export const friends: TeamMember[] = [
    {
        name: "Madhav Mittal",
        isActive: true,
        contribution: "Co-scripted the nomenclature",
        image: "/anindita/peopleImages/madhavMittal_Sm.webp",
    },
    {
        name: "Shobhith Vadlamudi",
        isActive: true,
        contribution: "Co-conducted the first laboratory experiment",
        image: "/anindita/peopleImages/shobhithVadlamudi_Sm.webp",
    },
    {
        name: "Gadarla Rohit Reddy",
        isActive: true,
        contribution: "Co-designed the website",
        image: "/anindita/peopleImages/gadarlaRohitReddy_Sm.webp",
    },
]
