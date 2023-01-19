const express = require('express');

const app = express();


app.get("/",(req,res)=>{
    res.send('Hi there');
})

app.listen(8081,()=>{
    console.log('hello');
    console.log('helloksdkh');
    console.log('listening on port 8081');
});