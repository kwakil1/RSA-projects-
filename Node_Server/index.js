//get/import your http model 
const http = require("http")

// create server with http
const server = http.createServer((req, res)=> {
    console.log("server is created")
})

//initiate a port
const PORT = 7500

//listen to server 
server.listen(PORT, ()=> console.log('Server is running on port ${PORT}'))