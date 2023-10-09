/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        generateBuildId: async() => '4n0tCv8jfjnYFKb0jLd2P',
        domains: [
            "lh3.googleusercontent.com",
            "res.cloudinary.com"
        ]
    },
}

module.exports = nextConfig;