// pages/summary.js
import { useRouter } from "next/router";

export default function SummaryPage() {
  const router = useRouter();
  const { package: pkg, val: vin } = router.query;

  return (
    <div className="bg-black min-h-screen text-white px-6 py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-green-500 mb-2">
        Get Your Car’s Inspection Report Now
      </h1>
      <p className="text-center text-gray-300 mb-8">
        Your detailed inspection report is ready! Complete your information and get your premium report instantly.
      </p>

      {/* VIN Display */}
      <div className="max-w-3xl mx-auto bg-gray-900 border-2 border-green-600 rounded-xl p-6 text-center mb-10">
        <p className="text-xl font-semibold text-gray-300">VIN:</p>
        <h2 className="text-2xl font-bold text-green-400 mt-2">{vin}</h2>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Left Section (Icons + Vehicle Info) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Features Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-900 p-6 rounded-xl border border-green-700">
            {[
              "Accident",
              "Title Record",
              "Recalls",
              "Problem Checks",
              "Specs",
              "Sales History",
              "Odometer",
              "Salvage Records",
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-green-600 rounded-full flex items-center justify-center text-black font-bold">
                  ✓
                </div>
                <p className="text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>

          {/* Vehicle Details */}
          <div className="grid grid-cols-2 gap-4 bg-gray-900 p-6 rounded-xl border border-green-700">
            {[
              "Year",
              "Make, Model",
              "Base",
              "Drive Type",
              "Brake System",
              "Engine",
              "Manufactured In",
              "Body Style",
              "Tires",
              "Transmission",
              "Warranty",
              "MSRP",
            ].map((field, idx) => (
              <div
                key={idx}
                className="bg-black border border-green-700 rounded-lg p-3"
              >
                <p className="text-xs text-gray-400">{field}</p>
                <p className="text-sm font-semibold text-white">—</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section (Order Summary) */}
        <div className="bg-gray-900 border border-green-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          <p className="mb-2">
            <span className="font-semibold">Package:</span>{" "}
            <span className="text-green-400 capitalize">{pkg}</span>
          </p>
          <p className="mb-6">
            <span className="font-semibold">Total:</span>{" "}
            <span className="text-green-400">$49.99</span>
          </p>

          <h4 className="font-semibold text-green-400 mb-3">Package Perks:</h4>
          <ul className="space-y-2 mb-6 text-sm">
            {[
              "Vehicle Overview",
              "Market Value",
              "Vehicle Specifications",
              "Sales Listing",
              "Accident Record",
              "Salvage",
              "Theft Record",
            ].map((perk, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                {perk}
              </li>
            ))}
          </ul>

          <button className="w-full bg-green-600 text-black font-semibold py-3 rounded-lg hover:bg-green-500 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
