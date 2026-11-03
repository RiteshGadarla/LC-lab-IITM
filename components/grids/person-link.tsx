import type {ReactNode} from "react"

/** Makes a person's card clickable when they have a link; otherwise renders children untouched. */
export default function PersonLink({
                                       link,
                                       name,
                                       children,
                                   }: {
    link?: string
    name: string
    children: ReactNode
}) {
    if (!link) return <>{children}</>

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} (opens in a new tab)`}
            className="block h-full rounded-2xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000080]"
        >
            {children}
        </a>
    )
}
