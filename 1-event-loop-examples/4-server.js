const http = require('http')

const server = http.createServer((req , res) => {
    console.log('request event');
    res.end('Yoo.... check the result!')    
})

server.listen(5000 , () => {
    console.log('Server listening on port : 5000');
})