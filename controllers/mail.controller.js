const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(req, res) {

  console.log('req.body.email >>:', req.body.email);

  try {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      // service: "gmail",
      secure: true, // true for 465, false for other ports
      auth: {
        user: "desarrollo@drasoluciones.com", // generated ethereal user
        pass: "dzbkkedhywpxycwk", // generated ethereal password
      },
    });

    transporter.verify().then(async () => {
      console.log('Ready for send emails');
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Camilo 👻" <desarrollo@drasolucines.com>', // sender address
        to: req.body.email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);

    }).catch((err) => console.log('err >>:', err))

  } catch (error) {
    console.log('Error >>:', Error);
  } finally {
    res.status(200).send();
  }
}

module.exports = {
  main
}

