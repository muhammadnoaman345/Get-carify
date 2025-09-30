import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PaymentSuccess() {
  const [status, setStatus] = useState("Processing your order...");

  useEffect(() => {
    const sendData = async () => {
      try {
        // ✅ Get saved form data from localStorage
        const formData = JSON.parse(localStorage.getItem("checkoutForm")) || {};

        // ✅ Send data to backend API
        const res = await fetch("/api/payment-success", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ formData }),
        });

        if (res.ok) {
          setStatus("✅ Payment successful! Your order details have been sent.");
          // Clear saved data so it doesn’t resend on refresh
          localStorage.removeItem("checkoutForm");
        } else {
          setStatus("⚠️ Payment was successful but we couldn’t save your data.");
        }
      } catch (error) {
        console.error("Error sending success data:", error);
        setStatus("❌ Something went wrong while processing your order.");
      }
    };

    sendData();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto px-4 py-16 text-center mt-24">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Payment Success
        </h1>
        <p className="text-lg text-gray-700 mb-6">{status}</p>

        <div className="bg-white shadow rounded-2xl p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">
            Thank you for your purchase!
          </h2>
          <p className="text-gray-600 mt-2">
            We’ve received your order and will send your full report to your
            email in 5-7 hours due to a large amount of orders in queue.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
