// pages/summary.js
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Summary() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("userData");
    if (stored) {
      setUserData(JSON.parse(stored));
    }
  }, []);

  if (!userData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading summary...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Vehicle Report Summary</title>
      </Head>

      {/* Header Bar */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png" // replace with your logo path
              alt="Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              Vehicle Report Summary
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side - Summary */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6">
            {/* VIN on Top */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              VIN: {userData.vin || "N/A"}
            </h2>

            {/* Vehicle Image */}
            <div className="mb-6">
              <Image
                src="/car-placeholder.jpg" // Replace with real car image
                alt="Vehicle"
                width={600}
                height={350}
                className="rounded-xl object-cover w-full h-60"
              />
            </div>

            {/* Vehicle Information */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-3">
                Vehicle Information
              </h3>
              <p><span className="font-medium">Make:</span> {userData.make || "N/A"}</p>
              <p><span className="font-medium">Model:</span> {userData.model || "N/A"}</p>
              <p><span className="font-medium">Year:</span> {userData.year || "N/A"}</p>
              <p><span className="font-medium">Trim:</span> {userData.trim || "N/A"}</p>
            </div>

            {/* History Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-3">
                History
              </h3>
              <p><span className="font-medium">Accidents:</span> {userData.accidents || "None Reported"}</p>
              <p><span className="font-medium">Ownership:</span> {userData.owners || "N/A"}</p>
              <p><span className="font-medium">Service Records:</span> {userData.service || "N/A"}</p>
            </div>

            {/* Mileage */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-3">
                Mileage
              </h3>
              <p><span className="font-medium">Odometer:</span> {userData.mileage || "N/A"} km</p>
            </div>
          </div>

          {/* Right Side - Customer Info / Package */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-700 border-b pb-2 mb-4">
              Customer & Package Info
            </h3>
            <p><span className="font-medium">Name:</span> {userData.name || "N/A"}</p>
            <p><span className="font-medium">Email:</span> {userData.email || "N/A"}</p>
            <p><span className="font-medium">Phone:</span> {userData.phone || "N/A"}</p>
            <hr className="my-4" />
            <p><span className="font-medium">Package:</span> {userData.packageName || "N/A"}</p>
            <p><span className="font-medium">Price:</span> ${userData.packagePrice || "N/A"}</p>
          </div>
        </div>
      </main>
    </>
  );
}
