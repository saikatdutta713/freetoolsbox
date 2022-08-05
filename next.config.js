/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        "fs": false,
        "path": false,
        "os": false,
        "child_process": false,
        "stream": false,
        "events": false,
        "util": false,
        "assert": false,

      },
    }
    return config
  },
}

module.exports = nextConfig
