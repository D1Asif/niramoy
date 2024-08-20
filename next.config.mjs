/** @type {import('next').NextConfig} */
const nextConfig = {
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
