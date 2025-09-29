import { Client, Environment } from "square";

const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Production, // Change to Sandbox if testing
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { formData } = req.body;

      if (!formData) {
        return res.status(400).json({ error: "Form data is required" });
      }

      const {
        firstName,
        lastName,
        email,
        vin,
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

      // Build order for Square
      const order = {
        order: {
          locationId: process.env.SQUARE_LOCATION_ID,
          lineItems: [
            {
              name: `Vehicle History Report - ${packageName}`,
              quantity: "1",
              basePriceMoney: {
                amount: amount, // in cents
                currency: "USD",
              },
            },
          ],
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
        },
      };

      // Create hosted checkout
      const response = await client.checkoutApi.createCheckout(
        process.env.SQUARE_LOCATION_ID,
        {
          idempotencyKey: crypto.randomUUID(),
          order,
          redirectUrl: `${process.env.NEXT_PUBLIC_URL}/payment-success`,
        }
      );

      // Return the Square hosted page URL
      res.status(200).json({ url: response.result.checkout.checkoutPageUrl });
    } catch (err) {
      console.error("Square checkout error:", err);
      res.status(500).json({ error: err.message });
    }
  } else {
    // Method not allowed
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
