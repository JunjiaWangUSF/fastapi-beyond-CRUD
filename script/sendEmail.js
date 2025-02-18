const dotenv = require("dotenv");
const path = require("path");

// Set the path to the .env file relative to the current script
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const nodemailer = require("nodemailer");

console.log(process.env.EMAIL_USER);
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: "willwang1228@gmail.com",
  subject: "Conventional Commits fails",
  text: "Please follow the Conventional Commits format",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error occurred: ", error.message);
    // Handle errors appropriately in your context, e.g., logging or sending a response
  } else {
    console.log("Email sent: ", info.response);
    // Handle successful send appropriately
  }
});
