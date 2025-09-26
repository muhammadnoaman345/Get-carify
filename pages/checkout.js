import { useState } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    vin: "",
    plate: "",
    regState: "",
    company: "",
    state: "",
    city: "",
    zip: "",
    address: "",
    phone: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProceedToPayment = async () => {
    // Save form data to localStorage (match payment-success.js)
    localStorage.setItem("checkoutForm", JSON.stringify(formData));

    // ✅ Optional: Validate important fields before payment
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.vin) {
      alert("Please fill out all required fields before proceeding.");
      return;
    }

    try {
      // Send request to backend to create Stripe checkout session
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        alert("Error starting payment session. Please try again.");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-24">
        {/* Left: Form */}
        <div className="lg:col-span-2 bg-white shadow rounded-2xl p-8 border border-gray-100">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-green-600">Checkout</h1>
            <p className="text-gray-600 mt-1">
              Complete the form below to purchase your full report
            </p>
          </div>

          <form id="checkoutForm" className="space-y-6">
            {/* Same form fields as before (unchanged) */}
            {/* ... keep all your form inputs here ... */}
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-white shadow rounded-2xl p-6 border border-gray-100 h-fit">
          <h2 className="text-lg font-semibold text-gray-800">Order Summary</h2>
          <p className="text-sm text-gray-600 mt-1">
            Review your report details before payment
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex justify-between text-gray-700">
              <span>Report:</span>
              <span className="font-medium">Car Silver Report</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Total:</span>
              <span className="font-semibold text-green-600">$49.99</span>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={handleProceedToPayment}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
