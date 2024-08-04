const nodemailer = require("nodemailer");
require('dotenv').config()
const { AUTH_EMAIL, AUTH_PASS } = process.env;
let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port:587,
  secure:false,
  auth: {
    user: AUTH_EMAIL,
    pass: AUTH_PASS,
  },
  tls: {
    ciphers: 'SSLv3'
  }
  
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  }
  else {
    console.log('connection established successfully')
  }
  
});

const sendEmail = async (mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error)
    throw error;
  }
};

module.exports = sendEmail;
