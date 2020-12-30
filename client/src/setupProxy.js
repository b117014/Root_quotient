const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use('/api',createProxyMiddleware({target:'https://quiet-retreat-15415.herokuapp.com', changeOrigin: true}))
}