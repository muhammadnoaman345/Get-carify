import { useRouter } from "next/router";
import Head from "next/head";

export default function SummaryPage() {
  const router = useRouter();
  const { package: pkg, val } = router.query; // package & VIN from URL

  // Pricing setup
  const prices = {
    Silver: 49.99,
    Gold: 89.99,
    Platinum: 119.99,
  };

  // Perks setup
  const perks = {
    Silver: [
      "Vehicle Overview",
      "Market Value",
      "Vehicle Specifications",
      "Sales Listing",
      "Accident Record",
      "Salvage",
      "Theft Record",
    ],
    Gold: [
      "HQ Car Images",
      "Vehicle Overview",
      "Market Value",
      "Vehicle Specifications",
      "Sales Listing",
      "Accident Record",
      "Salvage",
      "Theft Record",
      "Title Record",
      "Impounds",
      "Exports",
      "Open Recalls",
      "Installed Options and Packages",
      "Active/Expire Warranty",
    ],
    Platinum: [
      "2 Buyers Numbers from our Directory",
      "Buy one get another Report Free for Lifetime",
      "HQ Car Images",
      "Vehicle Overview",
      "Market Value",
      "Vehicle Specifications",
      "Sales Listing",
      "Accident Record",
      "Salvage",
      "Theft Record",
      "Title Record",
      "Impounds",
      "Exports",
      "Open Recalls",
      "Installed Options and Packages",
      "Active/Expire Warranty",
    ],
  };

  return (
    <>
      <Head>
        <title>Order Summary - The Vehicle Audit</title>
      </Head>

      <section className="py-12 px-4 max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-green-700 text-center mb-4">
          Get Your Car’s Inspection Report Now
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Your detailed inspection report is ready! Fill out the required details and
          receive your premium report instantly.
        </p>

        {/* VIN Box */}
        <div className="bg-white border-2 border-green-600 rounded-lg p-6 text-center shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">VIN:</h2>
          <p className="text-xl font-bold tracking-wider">{val}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Side Icons */}
          <div className="md:col-span-2 bg-green-600 rounded-lg p-6 grid grid-cols-2 md:grid-cols-3 gap-6 text-white">
            {[
              "Accident",
              "Title Record",
              "Recalls",
              "Problem Checks",
              "Specs",
              "Sales History",
              "Odometer",
              "Salvage Records",
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-green-600 font-bold mb-2">
                  ✔
                </div>
                <p className="text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>

          {/* Right Side Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Order Summary
            </h2>
            <p className="mb-2">
              <span className="font-semibold">Package:</span> {pkg}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Total:</span> $
              {prices[pkg] ? prices[pkg].toFixed(2) : "—"}
            </p>

            <h3 className="text-lg font-semibold text-green-700 mb-3">
              Package Perks:
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-6">
              {perks[pkg]?.map((perk, i) => (
                <li key={i}>{perk}</li>
              ))}
            </ul>

            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition">
              Proceed to checkout
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
