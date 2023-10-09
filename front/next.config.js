/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        generateBuildId: async() => 'constant-build-id',
        domains: [
            "lh3.googleusercontent.com",
            "res.cloudinary.com"
        ]
    },
}

module.exports = nextConfig;