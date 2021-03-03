const withImages = require('next-images')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withPlugins = require("next-compose-plugins")

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins(
  [
    withImages,
    withCSS, 
    withSass,
    withBundleAnalyzer
  ], 
  {
    esModule: true,
    images: {
      domains: ['161.35.184.199']
    }
  }
)