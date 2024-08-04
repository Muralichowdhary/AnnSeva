const express = require('express');
const { sendOtp } = require('../contollers/otp.controller');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log("hello");
    const { email } = req.body;
    console.log("hello1")
    const result = await sendOtp({ email });
    console.log("hello2")
    res.status(200).json(result);
    console.log("hello3")
  } catch (error) {
    console.log("hello4")
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
