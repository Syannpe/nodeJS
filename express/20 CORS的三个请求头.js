// 跨域请求头
// 1. 响应头：Access-Control-Allow-Origin 此请求头指定了允许访问该资源的外域URL
// 2. 请求头：Access-Control-Request-Method 发起请求的类型
/*
* 默认形况下，CORS仅支持吃客户端发起的GET、POST、HEAD请求，
* 如果需要支持PUT、DELETE等请求，
* 则需要在服务器端响应一个Access-Control-Allow-Methods请求头，
* 并指定允许客户端发送的请求类型
* res.setHeader("Access-Control-Allow-Methods","POST, GET, DELETE, HEAD")
* res.setHeader("Access-Control-Allow-Methods","*")
* */
// 3. 请求头：Access-Control-Request-Headers 预检请求头
/*
* 仅支持9个请求头：Accept, Accept-Language, Content-Language, Content-Type, DPR, Downlink, Save-Data, Viewport-Width, Width
* 其中Content-Type的值仅支持：text/plain, multipart/form-data, application/x-www-form-urlencoded
* 如果客户端向服务器发送了额外的请求头信息，则需要在服务器端响应一个Access-Control-Allow-Headers请求头，并指定允许客户端发送的请求头信息
* res.setHeader("Access-Control-Allow-Headers","Content-Type")
* */