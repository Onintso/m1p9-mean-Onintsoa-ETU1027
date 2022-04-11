var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'randriamiarinamanana2.0@gmail.com',
    pass: 'Le plaisir de vivre'
  }
});

var mailOptions = {
  from: 'randriamiarinamanana2.0@gmail.com',
  to: 'randriamiarinamanana@gmail.com',
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