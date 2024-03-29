/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiURL: process.env.API_URL
  }
}

module.exports = nextConfig
