let user = require('./User.js')

console.log(`userName:${user.userName}`)

console.log(`I am ${user.userName}, I say ${user.sayHello()}`)

let http = require('http')
let url = require('url')
let util = require('util')
let server = http.createServer((req, res) => {

  res.statusCode = 200

  res.setHeader('Content-Type', 'text/plain; charset=utf-8')

  console.log(`url:${req.url}`) //Demo.html?a=123
  console.log(`parse:${url.parse(req.url)}`) // [object object]
  console.log(`inspect:${util.inspect(url.parse(req.url))}`)

  res.end(util.inspect(url.parse(req.url)))
}).listen(3000, '127.0.0.1', () => {
  console.log('wikiHong,服务器已经运行，请打开浏览器输入http://127.0.0.1/3000/来进行访问')
})
