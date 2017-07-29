const api = require("express").Router();
const jsonParser = require("body-parser").json();
const nodemailer = require("nodemailer");
const ses = require("../src/credentials").ses;

api.use(jsonParser);

api.post("/email", (req, res) => {
  let transporter = nodemailer.createTransport(ses.transporterConfig);

  let mailOptions = {
    from: `${req.body.name} <${ses.mailOptions.from}>`,
    replyTo: req.body.email,
    to: ses.mailOptions.to,
    subject: `Message from ${req.body.name} - ${req.body.email}`,
    text: req.body.message
  };
  transporter.sendMail(mailOptions, (error, info) => {
    res.send({sent: error ? false : true});
  });
});

module.exports = api;
