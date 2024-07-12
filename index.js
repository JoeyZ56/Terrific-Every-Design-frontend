import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = import.meta.process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/submit", async (req, res) => {
  const {
    name,
    email,
    contactNumber,
    address,
    city,
    zipCode,
    state,
    equipment,
    electricalService,
    roofingInfo,
    batteryInfo,
    specialRequest,
    designType,
    priority,
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email service provider
    auth: {
      user: import.meta.process.env.EMAIL, // Your email address
      pass: import.meta.process.env.EMAIL_PASSWORD, // Your email password
    },
  });

  const mailOptions = {
    from: import.meta.process.env.EMAIL,
    to: import.meta.process.env.CONTRACTOR_EMAIL,
    subject: "New Ticket Form Submission",
    text: `
      Client Information:
      Name: ${name}
      Email: ${email}
      Contact Number: ${contactNumber}
      Address: ${address}
      City: ${city}
      Zip Code: ${zipCode}
      State: ${state}

      Equipment Information:
      ${equipment}

      Electrical Service:
      ${electricalService}

      Roofing Information:
      ${roofingInfo}

      Battery Information:
      ${batteryInfo}

      Special Request:
      ${specialRequest}

      Design Type:
      ${designType}

      Priority:
      ${priority}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    res.status(500).send("Error sending email: " + error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
