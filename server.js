// const { log } = require('console')
// var http = require ('http')
// const PORT = 3000
//  http.createServer(function(req,res){
//     res.write("hello node.js")
//     res.end()
//  }).listen(PORT,()=>{
//     console.log(`server running http://localhost:${PORT}`);
    
//  })


const fs = require('fs')
const http = require('http')
try {
    fs.writeFileSync('demo.txt','hello text from new file')
    console.log('file created');
    
}catch (error) {
    console.log(error);
    
}
const server =http.createServer((req,res)=>{
    fs.readFile('demo.txt',(error,data)=>{
        if(error){
            res.writeHead(500,{'content-type':'text/plain'})
            res.end("error handling file")
            return
        }
        res.writeHead(200,{'content-type':'text-plain'})
        res.end(data)
    })
})
const port = 3000
server.listen(port,()=>{
     console.log(`server running http://localhost:${port}`);
})