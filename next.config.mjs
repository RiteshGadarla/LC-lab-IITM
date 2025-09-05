/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',

    basePath: '/anindita',
    assetPrefix: '/anindita',

    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
}

export default nextConfig
