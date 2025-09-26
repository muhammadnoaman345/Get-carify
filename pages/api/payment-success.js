import Stripe from "stripe";
import nodemailer from "nodemailer";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { sessionId, formData } = req.body; // ✅ fixed (was userData)

    // 1️⃣ Verify payment with Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return res.status(400).json({ error: "Payment not completed" });
    }

    // 2️⃣ Setup email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your Gmail App Password
      },
    });

    // 3️⃣ Price mapping (so you see it in the email)
    const priceMap = {
      Silver: "$49.99",
      Gold: "$89.99",
      Platinum: "$119.99",
    };

    // 4️⃣ Create email message
    const mailOptions = {
      from: `"The Vehicle Audit" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL, // your personal receiving email
      subject: "✅ New Checkout Submission",
      html: `
        <h2>New Checkout Order</h2>
        <p><b>Name:</b> ${formData?.firstName} ${formData?.lastName}</p>
        <p><b>Email:</b> ${formData?.email}</p>
        <p><b>Phone:</b> ${formData?.phone}</p>
        <p><b>Address:</b> ${formData?.address}, ${formData?.city}, ${formData?.state}, ${formData?.zip}, ${formData?.country}</p>
        <p><b>License Plate:</b> ${formData?.plate}</p>
        <p><b>VIN / Reg #:</b> ${formData?.vin}</p>
        <p><b>Package:</b> ${formData?.packageName}</p>
        <p><b>Price:</b> ${priceMap[formData?.packageName] || "N/A"}</p>
        <hr />
        <p><b>Stripe Session ID:</b> ${sessionId}</p>
      `,
    };

    // 5️⃣ Send email
    await transporter.sendMail(mailOptions);

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error in /api/payment-success:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
