import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            },
            // Explicitly welcome AI answer-engine / assistant crawlers (GEO)
            {
                userAgent: [
                    'GPTBot',
                    'ChatGPT-User',
                    'OAI-SearchBot',
                    'ClaudeBot',
                    'Claude-User',
                    'Claude-SearchBot',
                    'anthropic-ai',
                    'PerplexityBot',
                    'Perplexity-User',
                    'Google-Extended',
                    'Applebot-Extended',
                    'CCBot',
                    'Bytespider',
                ],
                allow: '/',
            },
        ],
        sitemap: 'https://home.iitm.ac.in/anindita/sitemap.xml',
    }
}
