module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'localhost:8088',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
