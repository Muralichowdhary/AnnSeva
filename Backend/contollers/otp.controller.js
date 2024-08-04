const Otp = require('../Models/otp.Model');
const nodemailer = require('nodemailer');
const generateOtp = require('../utils/generateOtp');
const sendEmail = require('../utils/sendEmail');
const { hashData, verifyHashedData } = require('../utils/hashData');
const { AUTH_EMAIL,AUTH_PASS } = process.env;
const sendOTP = async({ email }) => {
  try{
    if(!email) {
      throw new Error("Email and OTP are required.");
    }
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smpt.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: AUTH_EMAIL
    })
    const mailOptions = {
      from: AUTH_EMAIL,
      to: email,
      subject: "OTP for login",
      html: `<h1>OTP for login</h1><p>${generatedOtp}</p>
      <p>OTP expires in 10 minutes</p>`
    };
    
  }

const verifyOTP = async ({ email, otp }) => {
  try {
    if (!(email && otp)) {
      throw Error("Provide values for email and otp");
    }

    const matchedOTPRecord = await Otp.findOne({ email });

    if (!matchedOTPRecord) {
      throw Error("No OTP record found");
    }

    const { expiresAt, otp: hashedOtp } = matchedOTPRecord;

    if (expiresAt < Date.now()) {
      throw Error("OTP expired");
    }

    const validOTP = await verifyHashedData(otp, hashedOtp);

    if (!validOTP) {
      throw Error("Invalid OTP");
    }

    return validOTP;
  } catch (error) {
    console.error(error); // Log the error details
    throw new Error("Verification unsuccessful");
  }
};

const deleteOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const otp = await Otp.findOneAndDelete({ email });

    if (!otp) {
      throw new Error("OTP not found");
    }

    res.status(200).json({ message: "OTP deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { sendOtp, verifyOTP };
