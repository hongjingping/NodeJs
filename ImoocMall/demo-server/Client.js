let http = require('http')

let util = require('util')

http.get('https://www.baidu.com/', () => {
  let data = ''
  res.on('data', (chunk) => {
    data += chunk
  })
  res.on('end', () => {
    let res = JSON.parse(data)
    console.log(`inspect:${util.inspect(res)}`)
  })
})
