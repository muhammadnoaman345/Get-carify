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
    packageName: "Silver",
  });

  const [errors, setErrors] = useState({});

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
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validateForm = () => {
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

    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field] || formData[field].trim() === "") {
        newErrors[field] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedToPayment = async () => {
    if (!validateForm()) return;

    try {
      // Save form data locally
      localStorage.setItem("checkoutForm", JSON.stringify(formData));

      // Call your Square API route
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      });

      // Parse JSON safely
      let data = null;
      try {
        data = await res.json();
      } catch (err) {
        console.error("Failed to parse JSON from server:", err);
        alert("Server returned invalid response. Check console.");
        return;
      }

      // Handle errors
      if (!res.ok) {
        console.error("Server error:", data);
        alert(data?.error || "Payment session failed. Please try again.");
        return;
      }

      if (data.url) {
        // Redirect to Square hosted checkout page
        window.location.href = data.url;
      } else {
        alert("Payment session failed. Please try again.");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-24">
        <div className="lg:col-span-2 bg-white shadow rounded-2xl p-8 border border-gray-100">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-green-600">Checkout</h1>
            <p className="text-gray-600 mt-1">
              Complete the form below to purchase your full report
            </p>
          </div>

          <form id="checkoutForm" className="space-y-6">
            {/* All your form inputs remain unchanged */}
            {/* First Name / Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`mt-1 w-full rounded-lg border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`mt-1 w-full rounded-lg border ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email / VIN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 w-full rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  VIN <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="vin"
                  value={formData.vin}
                  onChange={handleChange}
                  className={`mt-1 w-full rounded-lg border ${
                    errors.vin ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3`}
                />
                {errors.vin && (
                  <p className="text-red-500 text-sm">{errors.vin}</p>
                )}
              </div>
            </div>

            {/* The rest of your form remains exactly the same */}
          </form>
        </div>

        {/* Order Summary / Payment Button */}
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
