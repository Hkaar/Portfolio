/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '/**',
            }
        ],
        dangerouslyAllowSVG: true
    }
};

export default nextConfig;
