import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { formData } = req.body;

      const {
        firstName,
        lastName,
        email,
        vin,
        plate,
        address,
        city,
        state,
        zip,
        country,
        phone,
        packageName,
      } = formData;

      // Package prices in cents
      const packagePrices = {
        Silver: 4999,   // $49.99
        Gold: 8999,     // $89.99
        Platinum: 11999 // $119.99
      };

      const unitAmount = packagePrices[packageName] || 4999;

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: `Vehicle History Report - ${packageName}`,
              },
              unit_amount: unitAmount,
            },
            quantity: 1,
          },
        ],
        customer_email: email,
        metadata: {
          vin,
          plate,
          email,
          name: `${firstName} ${lastName}`,
          address,
          city,
          state,
          zip,
          country,
          phone,
          packageName,
        },
        success_url: `${process.env.NEXT_PUBLIC_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/checkout`,
      });

      res.status(200).json({ url: session.url });
    } catch (err) {
      console.error("Stripe session error:", err);
      res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
