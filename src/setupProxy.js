const proxy = require('http-proxy-middleware')
// 在开发的过程中可以使用多个地址
module.exports = function (app) {
    /*
    changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
    changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
    changeOrigin默认值为false，但我们一般将changeOrigin值设为true
*/
    app.use(
        proxy('/runner', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
            target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
            changeOrigin: true, //控制服务器接收到的请求头中host字段的值
            pathRewrite: {'^/runner': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
        }),
        // 可以配置多个代理
        proxy('/api', {
            target: 'http://localhost:8081',
            changeOrigin: true,
            // pathRewrite: {'^/api': ''}
        })
    )
}
