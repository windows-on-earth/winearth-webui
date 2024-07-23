/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/movies',
        permanent: false,
      },
    ]
  },
  images: {
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