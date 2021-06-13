const http = require('http')

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) => {
    console.log(req.headers)
    res.statusCode = 200
    // anytime you send html in the body, should set header like this
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><body><h1>Hello World</h1></body></html>')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})