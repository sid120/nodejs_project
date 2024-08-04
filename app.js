const express = require('express');
const app = express();
const port = 8080

app.get('/',(req,res)=>{
    res.send("This is a test message ")
})

app.listen(port,()=>{
    console.log(`Application is listning at http://localhost:$(port)`)
})