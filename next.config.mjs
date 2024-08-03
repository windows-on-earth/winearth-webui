/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Set to true when using static exports
    domains: [
      'windows-on-earth.sdsc.osn.xsede.org'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'windows-on-earth.sdsc.osn.xsede.org',
        port: '',
        pathname: '/movies/**',
      }
    ]
  }
};

export default nextConfig;