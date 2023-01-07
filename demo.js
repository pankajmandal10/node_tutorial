// 1.
// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// //Parse the address:
// var q = url.parse(adr, true);

// /*The parse method returns an object containing url properties*/
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// /*The query property returns an object with all the querystring parameters as properties:*/
// var qdata = q.query;
// console.log(qdata.month);

const express = require('express');
const fs = require("fs");
const http = require("http");
const path = require("path");
const app = express()
// console.log(data)
// for(i=0;i<4;i++){
// fs.writeFileSync(`index.txt ${i}`,'this is the index fele text')
// }
// fs.rename('remove.txt')
// http.createServer(function(request,response){
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.write({
//         name:'sunil',
//         email:'sunil@gmail.com',
//         phone:'1234567890'
//     });
//     response.end();
// }).listen(8080)

// const dirName = path.join(__dirname,'crud')
// const fileDrn = `${dirName}/indexxxxxx.txt`
// fs.rename(fileDrn,`${dirName}/indexxxxxx.js`,(err =>{
//     console.warn(err)
// }))

// fs.writeFileSync(fileDrn,'this is text file')
// fs.readFile(fileDrn, 'utf-8',(err,res)=>{
//     console.warn(err)
//     console.warn(res)
// })

// let a = 10;
// let b = 20;

// console.log(a);

// setTimeout(() => {
//    console.log('on Zero time')
// }, 0);

// setTimeout(() => {
//   console.log(b);
// }, 4000);

// console.log(b);

// const data = require('./dataSource');
// const { create } = require("domain");

// console.log(data)
// http.createServer((requ,respos) =>{
//   respos.write(JSON.stringify(data))
//   respos.end();
// }).listen(8080)


app.get("",(req,resp)=>{
  resp.send("<h1>Welcome to Node js Page<h1>")
});
app.listen(5000)