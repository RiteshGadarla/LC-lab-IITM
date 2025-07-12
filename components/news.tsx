import { newsItems, NewsItem } from "@/lib/newsData";

export function NewsSection() {
    return (
        <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16">
            <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-8 border-b-4 border-[#000080] inline-block w-full pb-4">
                Latest News
            </h1>
            <div className="space-y-6">
                {newsItems.map((item: NewsItem, index: number) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden "
                    >
                        <div className="flex flex-col md:flex-row items-start">
                            {item.imageUrl && (
                                <div className="md:w-1/3 flex-shrink-0 p-2">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-auto max-h-96 object-contain"
                                    />
                                </div>
                            )}
                            <div className={item.imageUrl ? "p-4 md:w-2/3" : "p-4 w-full"}>
                                <h2 className="text-3xl font-semibold mb-2">{item.title}</h2>
                                <p className="text-gray-500 text-sm mb-2">
                                    {item.date.toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                                <p className="text-lg text-gray-700">{item.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}