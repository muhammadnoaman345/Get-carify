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
    regState: "",
    company: "",
    state: "",
    city: "",
    zip: "",
    address: "",
    phone: "",
    country: "",
    packageName: "Silver", // default package
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

  // Square hosted checkout
  const handleProceedToPayment = async () => {
    if (!validateForm()) return;

    try {
      // ✅ Map packageName to price
      const priceMap = {
        Silver: "£49.99",
        Gold: "£89.99",
        Platinum: "£119.99",
      };

      const checkoutData = {
        ...formData,
        price: priceMap[formData.packageName] || "N/A",
      };

      // Save with price
      localStorage.setItem("checkoutForm", JSON.stringify(checkoutData));

      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData: checkoutData }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // Redirect to Square hosted page
      } else {
        alert("Payment session failed. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  const getBorderClass = (field) =>
    `mt-1 w-full rounded-lg border ${
      errors[field] ? "border-red-500" : "border-gray-300"
    } focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3`;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

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
            {/* Name */}
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
                  className={getBorderClass("firstName")}
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
                  className={getBorderClass("lastName")}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email & VIN */}
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
                  className={getBorderClass("email")}
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
                  className={getBorderClass("vin")}
                />
                {errors.vin && (
                  <p className="text-red-500 text-sm">{errors.vin}</p>
                )}
              </div>
            </div>

            {/* Registration State */}
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
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={getBorderClass("state")}
                />
                {errors.state && (
                  <p className="text-red-500 text-sm">{errors.state}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={getBorderClass("city")}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Postal / ZIP Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className={getBorderClass("zip")}
                />
                {errors.zip && (
                  <p className="text-red-500 text-sm">{errors.zip}</p>
                )}
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Billing Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={getBorderClass("address")}
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>

            {/* Phone & Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={getBorderClass("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={getBorderClass("country")}
                >
                  <option value="">Select a country</option>
                  <option>USA</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>New Zealand</option>
                </select>
                {errors.country && (
                  <p className="text-red-500 text-sm">{errors.country}</p>
                )}
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
                  ? "£49.99"
                  : formData.packageName === "Gold"
                  ? "£89.99"
                  : "£119.99"}
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
