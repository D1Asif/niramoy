/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'example.com'
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co'
            },
        ],
    },
};

export default nextConfig;
