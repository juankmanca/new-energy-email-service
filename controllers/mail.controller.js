const nodemailer = require("nodemailer");
const fs = require('fs');
const path = require("path");

// async..await is not allowed in global scope, must use a wrapper
const main = async (req, res)  => {
  try {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "POST");
    // res.header("Access-Control-Allow-Headers", "Content-Type");

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();
    const email = req.body.email || null;
    if (!email) throw "Ingrese un correo!"

    guardarCorreoEnArchivo(email)

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_SMTP,
      port: 465,
      // service: "gmail",
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    transporter.verify().then(async () => {
      console.log('Ready for send emails');
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: `"Camilo Ocampo" <${process.env.MAIL_USER}>`, // sender address
        to: process.env.MAIL_USER, // list of receivers
        subject: "Solicitud de información.", // Subject line
        html: "<p>El Cliente con el correo: <b>" + email + "</b> esta solicitando mas información<p>", // plain text body
        // html: "<b>Hello world?</b>", // html body
      }).catch((err) => {
        throw err;
      })

      console.log("Message sent: %s", info.messageId);
      res.status(200).send();

    }).catch((err) => {
      throw err;
    })

  } catch (error) {
    console.log('Error >>:', error);
    res.status(500).send(error);
  }
}

function guardarCorreoEnArchivo(email) {
  try {
    pathFile = path.join(__dirname, '../public/logs/log.txt')
    fs.appendFile(
      pathFile,
      email + '\n',
      (err) => {
        if (err) {
          console.log('err >>:', err);
        }
      }
    )
  } catch (error) {
    console.log('error >>:', error);
  }
}

module.exports = {
  main
}

