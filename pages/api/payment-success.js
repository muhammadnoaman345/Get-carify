import Stripe from "stripe";
import nodemailer from "nodemailer";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { sessionId, userData } = req.body;

    // 1️⃣ Verify payment with Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return res.status(400).json({ error: "Payment not completed" });
    }

    // 2️⃣ Setup email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    // 3️⃣ Create email message
    const mailOptions = {
      from: `"The Vehicle Audit" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL, // your personal email
      subject: "✅ New Checkout Submission",
      html: `
        <h2>New Checkout Order</h2>
        <p><b>Name:</b> ${userData?.fullName}</p>
        <p><b>Email:</b> ${userData?.email}</p>
        <p><b>Phone:</b> ${userData?.phone}</p>
        <p><b>Address:</b> ${userData?.address}</p>
        <p><b>Country:</b> ${userData?.country}</p>
        <p><b>License Plate:</b> ${userData?.licensePlate}</p>
        <p><b>VIN / Reg #:</b> ${userData?.vin}</p>
        <p><b>Package:</b> ${userData?.packageName}</p>
        <p><b>Price:</b> ${userData?.price}</p>
        <hr />
        <p><b>Stripe Session ID:</b> ${sessionId}</p>
      `,
    };

    // 4️⃣ Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error in /api/payment-success:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
