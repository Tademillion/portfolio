// server.js (Node.js with Express)
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors"); // For handling cross-origin requests

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Configure your email service (e.g., Gmail, SendGrid, Mailgun)
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Or your email service
    auth: {
      user: "your-email@gmail.com", // Your email address
      pass: "your-email-password", // Your email password or an app-specific password
    },
  });

  const mailOptions = {
    from: email, // Sender's email
    to: "your-recipient-email@example.com", // Recipient's email address
    subject: `New Contact Form Submission: ${subject}`,
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
