const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
})

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})
