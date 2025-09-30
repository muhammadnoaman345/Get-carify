import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { formData } = req.body; // ✅ only formData needed now (Square flow)

    // ✅ Setup email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your Gmail App Password
      },
    });

    // ✅ Price mapping (so you see it in the email)
    const priceMap = {
      Silver: "£49.99",
      Gold: "£89.99",
      Platinum: "£119.99",
    };

    // ✅ Create email message
    const mailOptions = {
      from: `"The Vehicle Audit" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL, // your personal receiving email
      subject: "✅ New Checkout Submission",
      html: `
        <h2>New Checkout Order</h2>
        <p><b>Name:</b> ${formData?.firstName || ""} ${formData?.lastName || ""}</p>
        <p><b>Email:</b> ${formData?.email || "N/A"}</p>
        <p><b>Phone:</b> ${formData?.phone || "N/A"}</p>
        <p><b>Address:</b> 
          ${formData?.address || ""}, 
          ${formData?.city || ""}, 
          ${formData?.state || ""}, 
          ${formData?.zip || ""}, 
          ${formData?.country || ""}
        </p>
        <p><b>License Plate:</b> ${formData?.plate || "N/A"}</p>
        <p><b>VIN / Reg #:</b> ${formData?.vin || "N/A"}</p>
        <p><b>Package:</b> ${formData?.packageName || "N/A"}</p>
        <p><b>Price:</b> ${priceMap[formData?.packageName] || "N/A"}</p>
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error in /api/payment-success:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
