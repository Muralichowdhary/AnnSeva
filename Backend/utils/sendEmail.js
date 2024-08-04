const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'k663385@gmail.com',
    pass: 'kagra@143209'
  }
});

const mailOptions = {
  from: 'k663385@gmail.com',
  to: 'kartheeksk.gurram@gmail.com',
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
