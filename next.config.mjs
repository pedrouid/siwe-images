/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kj7oti2mtsbjgl8p.public.blob.vercel-storage.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
