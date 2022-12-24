var fs = require('fs');
var http=require("http")


const RequestListener=function(req,res){
     res.end({"name":"prakash"})
}
  
  const server = http.createServer(RequestListener);

  server.listen(8080,()=>{
      console.log("server starting")
  });