const nodemailer = require("nodemailer");
require('dotenv').config();

const { AUTH_EMAIL, AUTH_PASS } = process.env;

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: AUTH_EMAIL,
    pass: AUTH_PASS,
  },
});

console.log("a");

transporter.verify((error, success) => {
  if (error) {
    console.log("b");
    console.log(error);
  } else {
    console.log('Connection established successfully');
  }
});

console.log("c");

const sendEmail = async (mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log("d");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = sendEmail;
