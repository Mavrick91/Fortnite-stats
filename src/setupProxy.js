const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/v1', {
      changeOrigin: true,
      target: 'https://api.fortnitetracker.com'
    })
  )
  app.use(
    proxy('/api', {
      changeOrigin: true,
      target: 'https://fortnitetracker.com'
    })
  )
}
