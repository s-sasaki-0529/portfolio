module.exports = {
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
