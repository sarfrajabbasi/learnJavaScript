var http = require('http');
  var request = http.createServer((req,res)=>{
    res.write("hello i'm here");
    res.end()
  });
const port = 8080
request.listen(port)
  console.log("Server runnning on port" + port);