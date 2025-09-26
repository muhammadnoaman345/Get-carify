"use client";

import { useRef, useState } from "react";
import plans from "@/app/lib/plans";

export default function VehicleFormAndPackages() {
  const vinRef = useRef(null);
  const packagesRef = useRef(null);

  const [vin, setVin] = useState("");
  const [license, setLicense] = useState("");
  const [category, setCategory] = useState("cars"); // ✅ default category

  const handleSubmit = (e) => {
    e.preventDefault();

    if (vin && vin.length !== 17) {
      alert("VIN must be exactly 17 characters.");
      return;
    }
    if (license && (license.length < 4 || license.length > 7)) {
      alert("License plate must be 4 to 7 characters.");
      return;
    }

    packagesRef.current?.scrollIntoView({ behavior: "smooth" });

    const url = new URL(window.location.href);
    if (vin) url.searchParams.set("vin", vin);
    if (license) url.searchParams.set("license", license);
    window.history.pushState({}, "", url);
  };

  const handlePackageClick = () => {
    vinRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* VIN + License Section */}
      <section
        ref={vinRef}
        className="pt-32 pb-16 bg-white shadow-md max-w-3xl mx-auto rounded-xl px-6"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
          Enter Vehicle Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-1">
              VIN Number
            </label>
            <input
              type="text"
              value={vin}
              onChange={(e) => setVin(e.target.value.toUpperCase())}
              placeholder="Enter 17-character VIN"
              className="w-full border border-green-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
              maxLength={17}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">
              License Plate
            </label>
            <input
              type="text"
              value={license}
              onChange={(e) => setLicense(e.target.value.toUpperCase())}
              placeholder="Enter 4-7 character plate"
              className="w-full border border-green-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
              maxLength={7}
            />
          </div>

          {/* ✅ Dropdown for category */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Vehicle Type
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-green-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
            >
              <option value="cars">Cars</option>
              <option value="motorbikes">Motorbikes</option>
              <option value="rv">RV</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Packages Section */}
      <section
        ref={packagesRef}
        className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
      >
        {Object.entries(plans[category]).map(([pkgName, pkgData]) => (
          <div
            key={pkgName}
            onClick={handlePackageClick}
            className="cursor-pointer bg-white shadow-lg rounded-xl p-6 text-center border border-green-500 hover:bg-green-50 transition"
          >
            <h3 className="text-xl font-bold text-green-600">{pkgName} Package</h3>
            <p className="text-gray-600 mt-2 line-through">{pkgData.old}</p>
            <p className="text-2xl font-bold text-green-600">{pkgData.price}</p>

            <ul className="mt-4 text-left text-sm text-gray-700 space-y-2">
              {pkgData.features.map((feature, idx) => (
                <li key={idx}>✅ {feature}</li>
              ))}
            </ul>

            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold">
              Select {pkgName}
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
