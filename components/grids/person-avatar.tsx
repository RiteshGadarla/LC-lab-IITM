type PersonAvatarProps = {
    name: string
    image?: string
    /** size + extra classes, e.g. "w-32 h-32" */
    className?: string
    textClassName?: string
}

/** Round photo, or the person's initials on a neutral circle when there is no photo. */
export default function PersonAvatar({
                                         name,
                                         image,
                                         className = "w-16 h-16",
                                         textClassName = "text-lg",
                                     }: PersonAvatarProps) {
    if (image) {
        return <img src={image} alt={name} className={`${className} rounded-full object-cover`}/>
    }

    const initials = name
        .replace(/^(Prof\.|Dr\.)\s*/, "")
        .split(" ")
        .filter(Boolean)
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()

    return (
        <div
            role="img"
            aria-label={name}
            className={`${className} rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-[#152550] ${textClassName}`}
        >
            {initials}
        </div>
    )
}
