const withImages = require('next-images')
module.exports = withImages({
  esModule: true,
})

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})

// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  /* config options here */
})

const withSass = require('@zeit/next-sass')
module.exports = withSass({
  /* config options here */
})
