const http = require("http");

// const server = http.createServer((req , res) => {
//     res.end('Welcome home devo!')
// })

//Using Event Emmiter API
const server = http.createServer();
//emits request event
//subscribe to it / listen for it / response to it
server.on('request' , (req , res) => {
    res.end('Welcome to the backend world')
})

server.listen(5000);
