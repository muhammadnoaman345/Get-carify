import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { formData } = req.body;

      // transporter (Gmail setup)
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // email content with phone + address
      let mailOptions = {
        from: `"Vehicle Audit" <${process.env.EMAIL_USER}>`,
        to: "muhammadnoaman345@gmail.com", // <-- replace with your receiving email
        subject: "✅ New Checkout Form Submission",
        text: `
          📄 New order details:

          Name: ${formData.firstName} ${formData.lastName}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Address: ${formData.address}, ${formData.city}, ${formData.state}, ${formData.zip}, ${formData.country}

          VIN: ${formData.vin}
          License Plate: ${formData.plate}
          Registration State: ${formData.regState}
          Company: ${formData.company}

          Package: ${formData.packageName || "Not specified"}
        `,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Email error:", error);
      res.status(500).json({ success: false, message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

