// pages/api/create-checkout-session.js
import { Client, Environment } from "square";
import { randomBytes } from "crypto";

// Initialize Square client
const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Production, // Change to Environment.Sandbox if testing
});

// Package prices in GBP pence
const PACKAGE_PRICES_GBP_PENCE = {
  Silver: 4999,   // £49.99
  Gold: 8999,     // £89.99
  Platinum: 11999 // £119.99
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

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

    // Minimal validation for required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "vin",
      "address",
      "city",
      "state",
      "zip",
      "country",
      "phone",
    ];
    for (const field of requiredFields) {
      if (!formData[field] || String(formData[field]).trim() === "") {
        return res.status(400).json({ error: `Missing required field: ${field}` });
      }
    }

    // GBP price (processed)
    const gbpPence = PACKAGE_PRICES_GBP_PENCE[packageName] ?? PACKAGE_PRICES_GBP_PENCE.Silver;

    // Build order with metadata <= 10 fields
    const order = {
      order: {
        locationId: process.env.SQUARE_LOCATION_ID,
        lineItems: [
          {
            name: `Vehicle History Report - ${packageName}`,
            quantity: "1",
            basePriceMoney: {
              amount: gbpPence,
              currency: "GBP",
            },
          },
        ],
        metadata: {
          vin,
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
        idempotencyKey: randomBytes(16).toString("hex"),
        order,
        redirectUrl: `${process.env.NEXT_PUBLIC_URL}/payment-success`,
      }
    );

    const checkoutUrl = response?.result?.checkout?.checkoutPageUrl;
    if (!checkoutUrl) {
      console.error("Square returned no checkout URL:", response);
      return res.status(500).json({ error: "Failed to create checkout" });
    }

    // Return checkout URL to frontend
    return res.status(200).json({ url: checkoutUrl });
  } catch (err) {
    console.error("Square checkout error:", err);
    return res.status(500).json({ error: err?.message || "Internal Server Error" });
  }
}
