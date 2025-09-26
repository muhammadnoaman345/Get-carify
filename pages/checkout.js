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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-green-600">Checkout</h1>
          <p className="text-gray-600 mt-1">
            Complete the form below to purchase your full report
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-24">
        
        {/* Left: Form */}
        <div className="lg:col-span-2 bg-white shadow rounded-2xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" name="firstName" onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" name="lastName" onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"/>
              </div>
            </div>

            {/* Email & VIN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">VIN</label>
                <input type="text" name="vin" onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"/>
              </div>
            </div>

            {/* Plate & Reg State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">License Plate Number</label>
                <input type="text" name="plate" onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Registration State (Optional)</label>
                <input type="text" name="regState" onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"/>
              </div>
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Company (Optional)</label>
              <input type="text" name="company" onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"/>
            </div>

            {/* State, City, ZIP */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input type="text" name="state" onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" name="city" onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Postal / ZIP Code</label>
                <input type="text" name="zip" onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"/>
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Billing Address</label>
              <input type="text" name="address" onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"/>
            </div>

            {/* Phone & Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="text" name="phone" onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <select name="country" onChange={handleChange} className="mt-1 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600 p-3">
                  <option value="">Select a country</option>
                  <option>USA</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>New Zealand</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-6">
              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition">
                Purchase Full Report
              </button>
            </div>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="bg-white shadow rounded-2xl p-6 border border-gray-100 h-fit">
          <h2 className="text-lg font-semibold text-gray-800">Order Summary</h2>
          <p className="text-sm text-gray-600 mt-1">Review your report details before payment</p>
          
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
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition">
              Proceed to Payment
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
