// Collaborators
const collaborators = [
    {
        name: "Prof. Dagmar Divjak",
        institution: "University of Birmingham",
        country: "United Kingdom",
        image: "/anindita/collaboratorImages/dagmardivjak.webp",
    },
    {
        name: "Prof. Foong Ha Yap",
        institution: "Chinese University of Hong Kong, Shenzhen",
        country: "China",
        image: "/anindita/collaboratorImages/foonghayap.webp",
    },
    {
        name: "Prof. Marcel den Dikken",
        institution: "Hungarian Research Centre for Linguistics",
        country: "Hungary",
        image: "/anindita/collaboratorImages/marceldendikken.webp",
    },
    {
        name: "Prof. Seppo Kittilä",
        institution: "University of Helsinki",
        country: "Finland",
        image: "/anindita/collaboratorImages/seppoKittila.webp",
    },
    {
        name: "Dr. Nivedita Mani",
        institution: "Georg-August University of Göttingen",
        country: "Germany",
        image: "/anindita/collaboratorImages/niveditaMani.webp",
    }
]

// Alphabetical by first name, ignoring the "Prof." / "Dr." title
const sortKey = (name: string) => name.replace(/^(Prof\.|Dr\.)\s*/, "")

export const internationalCollaborators = [...collaborators].sort((a, b) =>
    sortKey(a.name).localeCompare(sortKey(b.name))
)
