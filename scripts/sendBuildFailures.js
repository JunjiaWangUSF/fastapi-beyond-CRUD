const nodemailer = require("nodemailer");

console.log(process.env.EMAIL_USER); // Debug: Check the user value

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
  text: "Night Build Failed. ",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error occurred: ", error.message);
  } else {
    console.log("Email sent: ", info.response);
  }
});
