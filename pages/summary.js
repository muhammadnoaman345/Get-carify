"use client";
import { useState } from "react";
import Image from "next/image";

export default function SummaryPage() {
  const [vin] = useState("1HGCM82633A123456"); // Example VIN

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl grid grid-cols-1 md:grid-cols-3 w-full max-w-6xl overflow-hidden">
        
        {/* Left Section */}
        <div className="md:col-span-2 p-8 space-y-6">
          {/* VIN */}
          <div className="text-xl font-bold text-gray-800 mb-6">
            VIN: <span className="text-blue-600">{vin}</span>
          </div>

          {/* Summary Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Box 1 - Blurred */}
            <div className="relative group">
              <div className="backdrop-blur-md bg-white/50 rounded-xl p-6 border shadow-md transition-all duration-300 group-hover:backdrop-blur-sm group-hover:scale-105">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Accident History
                </h3>
                <p className="text-gray-600">
                  This section is blurred — upgrade to unlock full accident history.
                </p>
              </div>
            </div>

            {/* Box 2 - Blurred */}
            <div className="relative group">
              <div className="backdrop-blur-md bg-white/50 rounded-xl p-6 border shadow-md transition-all duration-300 group-hover:backdrop-blur-sm group-hover:scale-105">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Service Records
                </h3>
                <p className="text-gray-600">
                  This section is blurred — upgrade to view complete service details.
                </p>
              </div>
            </div>

            {/* Box 3 - Normal */}
            <div className="rounded-xl p-6 border shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 bg-white">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Ownership History
              </h3>
              <p className="text-gray-600">2 Previous Owners</p>
            </div>

            {/* Box 4 - Normal */}
            <div className="rounded-xl p-6 border shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 bg-white">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Odometer
              </h3>
              <p className="text-gray-600">85,230 km</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white flex flex-col justify-center items-center p-8">
          <Image
            src="/car-summary.png"
            alt="Car Image"
            width={250}
            height={150}
            className="rounded-xl shadow-lg mb-6"
          />
          <h2 className="text-2xl font-bold mb-4">Car Summary</h2>
          <p className="text-center text-blue-100">
            Upgrade to view full accident history, detailed service records, 
            and hidden insights about this vehicle.
          </p>
        </div>
      </div>
    </div>
  );
}
