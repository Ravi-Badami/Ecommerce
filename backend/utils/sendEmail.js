const nodeMailer = require("nodemailer");
const sendEmail = async (options) => {
  //   console.log(`this is options.email${options.email}`);
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    secure: true,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  console.log(` this is the mail ${process.env.SMPT_MAIL}`);
  console.log(` this is the mail ${process.env.SMPT_PASSWORD}`);

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  console.log(`this is password sending to ${options.email}`);
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
