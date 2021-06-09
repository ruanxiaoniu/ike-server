/*
 * @Author: RYL
 * @Description: 
 * @Date: 2021-06-09 11:04:24
 * @LastEditTime: 2021-06-09 18:24:38
 */
const http = require('http')
const hostname = "127.0.0.1"
const port = 3000
const server = http.createServer((req, res) => {
  console.log(req.url);
  // res.writeHead(200, {'Content-Type': 'application/json'});
  // res.end()
  if(req.url == "/login"){
    console.log('请求');
    let data = {
      code: 0,
      data: [1,2,3]
    }
    // res.write(data)
    res.end(JSON.stringify(data))
  }
})

server.listen(port, hostname, ()=> {
  console.log(`Server runing at http://${hostname}:${port}/`)
})