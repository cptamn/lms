/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
      // {
      //   protocol: "https",
      //   hostname: "m.media-amazon.com",
      //   pathname: "/**",
      // },
    ],
  },
};

module.exports = nextConfig;
