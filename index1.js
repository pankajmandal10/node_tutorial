// const express = require('express')
// const path = require('path')
// const app = express();
// const filePath = path.join(__dirname,'view')

// app.set('view engine','ejs');
// app.get('/profile',(req,resp)=>{
//     data = {
//         name:req.query.name,
//         email:'akash@gmail.com ghfgh',
//         phone:'859894583'
//     }
//     resp.render('profile',{data})
// })
// app.listen(8000)

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pankajmandal10696@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'pankajmandal10696@gmail.com',
  to: 'pankajmandal10696@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
// app.listen(8080)