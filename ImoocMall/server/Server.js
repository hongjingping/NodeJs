let http = require('http')
let url = require('url')
let util = require('util')
let fs = require('fs')

let server = http.createServer((req, res) => {
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'text/plain; charset=utf-8')

  let pathname = url.parse(req.url).pathname
  console.log(`file:${pathname.substring(1)}`)
  fs.readFile(pathname.substring(1), function (error, data) {
    if (error) {
      res.writeHead(404, {
        'Content-Type': 'text/html'
      })
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.write(data.toString())
    }
    res.end()
  })
})
