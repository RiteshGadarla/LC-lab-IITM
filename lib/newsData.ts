export interface NewsItem {
    title: string;
    date: Date;
    content: string;
    imageUrl?: string;
}

export const newsItems: NewsItem[] = [
    {
        title: 'Congratulations to Gunti Prem Sagar',
        date: new Date('2025-07-11'),
        content:
            'We are delighted to share that Gunti Prem Sagar has successfully graduated as a PhD scholar. He was awarded the degree at the convocation ceremony held on 11 July 2025. We extend our warm congratulations and best wishes for his career ahead.',
        imageUrl: "/anindita/newsImages/guntiPrem.png",
    },
];