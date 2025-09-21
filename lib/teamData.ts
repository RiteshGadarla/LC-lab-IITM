// Team data interfaces
export interface TeamMember {
    name: string
    role?: string
    research?: string
    image: string
    email?: string
}

export interface PrincipalInvestigator extends TeamMember {
    title: string
    interests: string
    phone: string
    linkedInLink: string
    iitmprofile: string
    cerai: string
}

// Principal Investigator
export const principalInvestigator: PrincipalInvestigator = {
    name: "Dr. Anindita Sahoo",
    role: "Principal Investigator",
    title: "Assistant Professor, Department of Humanities and Social Sciences, IIT Madras | Faculty PI at CeRAI, IIT Madras",
    interests: "Linguistic Typology, Syntax, Pragmatics, Language Processing, Eye-tracking, Cognition Studies",
    image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1749377865/ani_llz6al.jpg",
    email: "aslinguistics.iitm@gmail.com",
    phone: "+91 44 2257 4534",
    linkedInLink: "https://www.linkedin.com/in/anindita-sahoo-3b971515/",
    iitmprofile: "https://hss.iitm.ac.in/anindita-sahoo/#",
    cerai: "https://cerai.iitm.ac.in/faculty/",
}

// Team members
export const teamMembers: TeamMember[] = [
    {
        name: "Aziza Said Hussain",
        role: "PhD in Progress",
        research: "Copula in Swahili: Pragmatic Functions and Grammaticalization Process",
        image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1749993811/aziza_abph42.png",
    },
    {
        name: "Snigdha Medhi",
        role: "PhD in Progress",
        research: "Patterns of Ergativity in Assamese, and Its Varieties",
        image: "https://res.cloudinary.com/dt8amwctw/image/upload/c_crop,ar_1:1/v1749980338/snigdha_l7hcie.png",
    },
    {
        name: "Krishna Raj SR",
        role: "IDRP Scholar (PhD in progress) - Co-guiding with Prof. Srinivasa Chakravarthy",
        research: "From pixels to prepositions: Linking Vision and Spatial Prepositions",
        image:
            "https://res.cloudinary.com/dgzbrujvx/image/upload/v1756733304/krishna_peb5xz.jpg",
    },
    {
        name: "Scherezade Dastur",
        role: "PhD in Progress",
        research: "Code Alternation in Parsi Gujarati and English: An Interactional Linguistics Approach",
        image: "https://res.cloudinary.com/dt8amwctw/image/upload/c_crop,ar_1:1/v1749980337/scheri_x6vo2x.png",
    },
    {
        name: "Gunti Prem Sagar",
        role: "Graduated in 2025",
        research: "Syntactic Patterns of Non-Verbal Predication in Select Dravidian Languages",
        image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1749980336/prem_bzpanw.png",
    },
    {
        name: "Pratiti Palit",
        role: "Graduated in 2023",
        research: "On the Interaction of Honorification, Copula and Definiteness: A Variationist Approach",
        image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1749980336/pratiti_amhwlv.jpg",
    },
]

export const othersMembers: TeamMember[] = [
    {
        name: "G L Vijayavani",
        role: "IDRP Scholar (PhD in progress) - Co-guiding with Prof. Preeti Aghalayam",
        research:
            "Identifying Gender Bias in Indian Academic Institutional Communication: A Dual Approach Using Text Analysis and Stakeholder Perception",
        image: "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751857873/c53beb33-0e76-4fae-8965-0ce9c23a5278.png",
    },
    {
        name: "Ruby George",
        role: "Graduated in 2019, Co-guided by Prof. Umakant Dash",
        research:
            "Persuasion in Public Service Advertising: Creating Changes Through Creative Strategies in the Print Media",
        image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1749980336/ruby_l2mqos.jpg",
    },

]

export const researchStaff: TeamMember[] = [
    {
        name: "Nayana Rajan",
        role: "Field Investigator",
        research: "",
        image: "https://res.cloudinary.com/dgzbrujvx/image/upload/c_fill,ar_1:1,g_auto/v1752163215/7237bd64-7d34-4596-922c-47fe8e1b63ec.png",
    },
    {
        name: "Suchitra Chakrabarty",
        role: "Field Investigator",
        research: "",
        image: "https://res.cloudinary.com/dgzbrujvx/image/upload/c_fill,ar_1:1,g_auto/v1751802299/df1d1d61-e3a7-4c65-9cb5-7917afacfdbf.png",
    },
    {
        name: "Suguna SG",
        role: "Research Assistant",
        research: "",
        image: "/anindita/People/sugunaSG.png",
    },
    {
        name: "Gadarla Ritesh Reddy",
        role: "Intern",
        image: "https://res.cloudinary.com/dgzbrujvx/image/upload/v1751803202/f426fb16-54ff-49fb-a50d-ee4652e4117b.png",
    },
]

// Collaborators
export const internationalCollaborators = [
    {
        name: "Prof. Dagmar Divjak",
        institution: "University of Birmingham",
        country: "United Kingdom",
        image: "https://res.cloudinary.com/dgzbrujvx/image/upload/c_fill,ar_1:1,g_auto/v1751822838/52d15f43-2902-4d98-9b5a-c589043b100f.png",
    },
    {
        name: "Prof. Foong Ha Yap",
        institution: "Chinese University of Hong Kong, Shenzhen",
        country: "China",
        image: "https://i1.rgstatic.net/ii/profile.image/272694683893781-1442026887536_Q512/Foong-Ha-Yap.jpg",
    },
    {
        name: "Prof. Marcel den Dikken",
        institution: "Hungarian Research Centre for Linguistics",
        country: "Hungary",
        image: "https://res.cloudinary.com/dgzbrujvx/image/upload/c_fill,ar_1:1,g_auto/v1751822661/4d802908-4c29-4cce-9cec-67b912fae821.png",
    },
    {
        name: "Prof. Seppo Kittilä",
        institution: "University of Helsinki",
        country: "Finland",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYJ4pS9ktse5Q8p8zx832IXTBEQppXm7TnnHrRTyqbnYHNSwN9a_wJsQ8&s=10",
    },

]

export const IndianCollaborators = [
    {
        name: "Prof. Mitesh M. Khapra",
        institution: "Indian Institute of Technology Madras",
        country: "India",
        image: "https://res.cloudinary.com/dgzbrujvx/image/upload/v1753027304/a319b64a-2fdd-40cb-914f-444f804fc9f4.png",
    },
    {
        name: "Prof. Preeti Aghalayam",
        institution: "Indian Institute of Technology Madras",
        country: "Tanzania",
        image: "https://www.iitmz.ac.in/_next/image?url=%2Fpreeti.jpg&w=256&q=75",
    },
    {
        name: "Prof. Srinivasa Chakravarthy",
        institution: "Indian Institute of Technology Madras",
        country: "India",
        image: "https://biotech.iitm.ac.in/img/outerfaculty/Srinivasa%20chakravarthy.png",
    },
]

// Friends data (legacy compatibility)
export const friends = [
    {
        name: "Madhav Mittal",
        contribution: "Co-scripted the nomenclature",
        image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1750746877/madhav_stlidj.jpg",
    },
    {
        name: "Shobhith Vadlamudi",
        contribution: "Co-Conducted the first experiment in the lab",
        image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1750746877/shobhit_e8zraw.jpg",
    },
    {
        name: "Gadarla Rohit Reddy",
        contribution: "Co-designed the website",
        image: "https://res.cloudinary.com/dt8amwctw/image/upload/v1750746876/rohit_o1zjut.jpg",
    },
]

