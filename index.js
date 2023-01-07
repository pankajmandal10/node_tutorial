const { Router } = require("express");
const express = require("express");
const path = require("path");
const requreValidation = require('./middleware')
const app = express();
const publicPath = path.join(__dirname, "public");
 app.set('view engine','ejs')
// app.use(express.static(publicPath));

// const getValidatedData = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("Please provide your age");
//   } else if (req.query.age < 18) {
//     resp.send("Your are under aged");
//   } else {
//     next();
//   }
// };
// app.use(getValidatedData);

app.get("",(req, resp) => {
  // resp.send("<h1>Welcome to Home page guru</h1>");
  resp.sendFile(`${publicPath}/index.html`);
});
app.get('/profile',(__,resp)=>{
  const data = {
    name:'akash',
    email: "jsfdg@gmail.com",
    phone: "934826384",
  }
  resp.render('profile',{data})
})
app.get("/service", (req, resp) => {
  let data = [
    {
      name:req.query.name,
      email: "jsfdg@gmail.com",
      phone: "934826384",
    },
    {
      name: req.query.name,
      email: "jsfdg@gmail.com",
      phone: "934826384",
    },
  ];
  resp.send(data)
  resp.send(`
  <input type="text" placeholder="user name" value="Name:${req.query.name}"  />
  <button>Click</button>
  <a href="/">Go to Home page</a>
  `);
});
app.get("/contact", requreValidation ,(req, resp) => {
  resp.send(`<h1>Welcome to contact Us page</h1>
  <input type="text" placeholder="user Name" value="Name:"  />
  <input type="text" placeholder="Email Id" value="Email:"  />
  <input type="text" placeholder="Phone No" value="Phone:"  />
  <button>Click</button>
  <a href="/">Go to Home page</a>`);
});



// app.get('',(req,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)
// });
// app.get('/service',(req,resp)=>{
//     resp.sendFile(`${publicPath}/service.html`)
// });
// app.get('*',(__,resp)=>{
//     resp.sendFile(`${publicPath}/error.html`)
// })
app.listen(8080);
