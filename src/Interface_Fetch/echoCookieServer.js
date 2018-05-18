/* eslint-disable */

const http = require('http')
const url = require('url')

const PORT = process.env.PORT || 8086

const server = http.createServer(function(request, response){
  console.log('### echo Cookie Server ### receive a request' + request.url)

  try {
    let reqPath = url.parse(request.url).pathname
    let cookieStr = request.headers.cookie

    if (reqPath.toLowerCase() === '/echocookie') {
      const ret = JSON.stringify(cookieStr)
      response.writeHead(200, {'Content-Type': 'application/json'})
      response.write(ret)
    }
    else {
      response.writeHead(404, 'Not Found', {'Content-Type': 'text/plain'})
      response.write('hi, guys, it\' 404 httpStatus')
    }

    response.end()
  }
  catch(e) {
    response.writeHead(500, 'Server Internal Error')
    console.log('there are some error occure')
    console.log(e)
  }

})

server.listen(PORT, function(){
  console.log('### fetch test Server ### Server running at port = ' + PORT)
})
