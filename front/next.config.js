/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "res.cloudinary.com"
        ]
    },
    generateBuildId: async () => {
        return '4n0tCv8jfjnYFKb0jLd2P'
    },
}

module.exports = nextConfig;