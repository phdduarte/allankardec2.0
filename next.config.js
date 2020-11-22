const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
})

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})

// next.config.js

// next.config.js
const withLess = require('@zeit/next-less')
module.exports = withLess({
  /* config options here */
})

// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  /* config options here */
})

// next.config.js
const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')

module.exports = withCss(withPurgeCss())
