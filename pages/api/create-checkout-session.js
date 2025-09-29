import { Client, Environment } from "square";

// Initialize Square client
const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment:
    process.env.NODE_ENV === "production" ? Environment.Production : Environment.Sandbox,
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

      const amount = packagePrices[packageName] || 4999;

      // Create Square Checkout
      const { result } = await client.checkoutApi.createCheckout(
        process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID,
        {
          idempotencyKey: crypto.randomUUID(),
          order: {
            order: {
              locationId: process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID,
              lineItems: [
                {
                  name: `Vehicle History Report - ${packageName}`,
                  quantity: "1",
                  basePriceMoney: {
                    amount: amount,
                    currency: "USD",
                  },
                },
              ],
            },
          },
          redirectUrl: `${process.env.NEXT_PUBLIC_URL}/payment-success`,
          prePopulateBuyerEmail: email && /\S+@\S+\.\S+/.test(email) ? email : undefined,
          additionalRecipients: [],
        }
      );

      // Respond with checkout URL
      res.status(200).json({ url: result.checkout.checkoutPageUrl });
    } catch (err) {
      console.error("Square checkout error:", err);

      // Ensure JSON is always returned even if an error occurs
      res.status(500).json({
        error: err?.message || "An unexpected error occurred while creating checkout.",
      });
    }
  } else {
    // Method not allowed
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
