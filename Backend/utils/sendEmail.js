const nodemailer = require("nodemailer");
require('dotenv').config()
const { AUTH_EMAIL, AUTH_PASS } = process.env;
let transporter = nodemailer.createTransport({
  host: "gmail",
  port:587,
  secure:false,
  auth: {
    user: "k663385@gmail.com"
    pass: "kagra@143209",
  },
  tls: {
    ciphers: 'SSLv3'
  }
 
});
 console.log("a")
transporter.verify((error, success) => {
  if (error) {
     console.log("b")
    console.log(error);
  }
  else {
    console.log('connection established successfully')
  }
  
});
 console.log("c")
const sendEmail = async (mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
     console.log("d")
  } catch (error) {
    console.log(error)
    throw error;
  }
};

module.exports = sendEmail;
