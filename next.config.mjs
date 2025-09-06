/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
    basePath: "/anindita", // change this to your desired subdirectory
    assetPrefix: "/anindita/", // ensures static assets are resolved correctly
    trailingSlash: true, // often useful for static hosting
}

export default nextConfig
