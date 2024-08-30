// import nodemailer from 'nodemailer';

// const mailChallanPaidNotification = async (vehicle_number, reason, fine, email) => {
//   const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false, // Use true for port 465, false for all other ports
//       auth: {
//           user: "opsadugamer@gmail.com",
//           pass: "sayi hktl djpu fptx",
//       },
//   });

//   const info = await transporter.sendMail({
//     from: '"Challan Authority" <opsadugamer@gmail.com>', // sender address
//     to: email, // list of receivers
//     subject: `Challan Payment Confirmation for Vehicle ${vehicle_number}`,
//     text: `Dear Vehicle Owner,

// Your payment for the challan has been received successfully.

// Details of the Challan:
// - Vehicle Number: ${vehicle_number}
// - Reason: ${reason}
// - Fine Amount: ${fine}

// Thank you for your prompt payment.

// Thank you,
// Challan Authority`,
//     html: `<p>Dear Vehicle Owner,</p>
// <p>Your payment for the challan has been received successfully.</p>
// <p><strong>Details of the Challan:</strong></p>
// <ul>
// <li><strong>Vehicle Number:</strong> ${vehicle_number}</li>
// <li><strong>Reason:</strong> ${reason}</li>
// <li><strong>Fine Amount:</strong> ${fine}</li>
// </ul>
// <p>Thank you for your prompt payment.</p>
// <p>Thank you,<br>Challan Authority</p>`,
// });

// console.log("Message sent: %s", info.messageId);
// };


// export {mailChallanPaidNotification}