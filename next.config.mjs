/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // отключаем серверную оптимизацию
    },
};

export default nextConfig;
