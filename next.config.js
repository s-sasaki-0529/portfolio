module.exports = {
  i18n: {
    locales: ['ja'],
    defaultLocale: 'ja'
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/'
      }
    ]
  }
}
