

const http = require('http')
const fs = require('fs')
const url = require('url')

const server =  http.createServer((req,res)=>{
    let path = url.parse(req.url)
    console.log(path);


   if (path.pathname=='/') {
    fs.readFile('./index.html',(error,data)=>{
    if (error) {
        res.writeHead(404,{'content-type':'text/html'})
        return res.end("page not found")
    }
     res.writeHead(200,{'content-type':'text/html'})
     res.write(data)
     res.end()
    })
   }

    

    if (path.pathname=='/index.css') {
    fs.readFile('./index.css',(error,data)=>{
        if (error) {
            res.writeHead(404,{'content-type':'text/css'})
            return res.end("page not found")
            
        }
        res.writeHead(200,{'content-type':'text/css'})
        res.write(data)
        res.end()
    })
   }
})
const PORT = 4000
server.listen(PORT,()=>{
    console.log(`server created at http://localhost:${PORT}`);
    
})