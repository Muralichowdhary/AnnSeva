const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'k663385@gmail.com',
    pass: 'kagra@143209'
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
