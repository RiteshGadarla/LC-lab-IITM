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
        imageUrl: 'https://res.cloudinary.com/dgzbrujvx/image/upload/c_crop,ar_3:4/v1752322946/c471b25b-2013-4109-a6d7-0a747ab6a0d0.png',
    },
];