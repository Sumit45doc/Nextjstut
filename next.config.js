
module.exports = {
  reactStrictMode: true,
  images: {
    deviceSizes: [320,375,425,640, 768, 828, 1080, 1200, 1920, 2048, 3840],
  },
  redirects: async () => {
    return [
      {
        source: '/users',
        destination: '/gallery',
        permanent: false,
      },
      {
        source: '/news/:postId',
        destination: '/posts/:postId',
        permanent: false,
      },
    ]
  } 
}
