import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function Checkout() {
  const router = useRouter();

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
    packageName: "Silver", // ✅ default package
  });

  // ✅ Pull package from URL query (if exists)
  useEffect(() => {
    if (router.query.package) {
      setFormData((prev) => ({
        ...prev,
        packageName: router.query.package,
      }));
    }
  }, [router.query.package]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Updated function with required field validation
  const handleProceedToPayment = async () => {
    // ✅ List of fields that must be filled
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "vin",
      "plate",
      "state",
      "city",
      "zip",
      "address",
      "phone",
      "country",
    ];

    // ✅ Check if any are empty
    for (let field of requiredFields) {
      if (!formData[field] || formData[field].trim() === "") {
        alert(`Please fill in your ${field}.`);
        return; // ⛔ stop here until filled
      }
    }

    try {
      // Save form data locally too (optional)
      localStorage.setItem("checkoutForm", JSON.stringify(formData));

      // Call your API
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // ✅ Redirect to Stripe Checkout
      } else {
        alert("Payment session failed. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-24">
        {/* Left: Form */}
        <div className="lg:col-span-2 bg-white shadow rounded-2xl p-8 border border-gray-100">
          {/* Header inside form box */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-green-600">Checkout</h1>
            <p className="text-gray-600 mt-1">
              Complete the form below to purchase your full report
            </p>
          </div>

          <form id="checkoutForm" className="space-y-6">
            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"
                />
              </div>
            </div>

            {/* Email & VIN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  VIN
                </label>
                <input
                  type="text"
                  name="vin"
                  value={formData.vin}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"
                />
              </div>
            </div>

            {/* Plate & Reg State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  License Plate Number
                </label>
                <input
                  type="text"
                  name="plate"
                  value={formData.plate}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Registration State (Optional)
                </label>
                <input
                  type="text"
                  name="regState"
                  value={formData.regState}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company (Optional)
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"
              />
            </div>

            {/* State, City, ZIP */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Postal / ZIP Code
                </label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Billing Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"
              />
            </div>

            {/* Phone & Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"
                >
                  <option value="">Select a country</option>
                  <option>USA</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>New Zealand</option>
                </select>
              </div>
            </div>
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
              <span className="font-medium">
                Vehicle History Report - {formData.packageName}
              </span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Total:</span>
              <span className="font-semibold text-green-600">
                {formData.packageName === "Silver"
                  ? "$49.99"
                  : formData.packageName === "Gold"
                  ? "$89.99"
                  : "$119.99"}
              </span>
            </div>
          </div>

          <div className="mt-6">
            {/* Save form & go to payment */}
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
