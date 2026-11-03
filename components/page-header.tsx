interface PageHeaderProps {
    eyebrow: string
    title: string
    description: string
    headingId?: string
}

export function PageHeader({ eyebrow, title, description, headingId }: PageHeaderProps) {
    return (
        <div className="text-center mb-16 pt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#000080] mb-4">
                {eyebrow}
            </p>
            <h1 id={headingId} className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
                {title}
            </h1>
            <div className="w-24 h-1 bg-[#000080] mx-auto rounded-full mb-8" />
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                {description}
            </p>
        </div>
    )
}
