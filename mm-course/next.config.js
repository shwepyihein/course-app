const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "strapi",
      "stg-api.hunterdox.com",
      "edemy-bucket-konyan.s3.us-east-2.amazonaws.com",
    ],
  },
  i18n: {
    locales: ["en-US", "mm"],
    defaultLocale: "en-US",
  },
  env: {
    IMAGE_PATH: process.env.IMAGE_PATH,
  },
}

module.exports = nextConfig
