import Image from "next/image";

export default function Summary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-8">
          {/* Vehicle Details */}
          <div className="grid grid-cols-3 gap-4 bg-green-600/80 backdrop-blur-md text-black p-6 rounded-2xl font-bold text-lg shadow-lg">
            <div>
              <p className="uppercase text-sm text-gray-800">Make</p>
              <p>Toyota</p>
            </div>
            <div>
              <p className="uppercase text-sm text-gray-800">Model</p>
              <p>Corolla</p>
            </div>
            <div>
              <p className="uppercase text-sm text-gray-800">Year</p>
              <p>2021</p>
            </div>
            <div>
              <p className="uppercase text-sm text-gray-800">Manufacturer</p>
              <p>Toyota Motors</p>
            </div>
            <div>
              <p className="uppercase text-sm text-gray-800">Make ID</p>
              <p>TYT123</p>
            </div>
            <div>
              <p className="uppercase text-sm text-gray-800">Model ID</p>
              <p>CRL2021</p>
            </div>
          </div>

          {/* Key Specifications */}
          <div className="bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Key Specifications</h2>
            <div className="grid grid-cols-3 gap-6 text-gray-300">
              <div>
                <p className="font-semibold text-green-500">Body Style</p>
                <p>Sedan</p>
              </div>
              <div>
                <p className="font-semibold text-green-500">Made In</p>
                <p>Japan</p>
              </div>
              <div>
                <p className="font-semibold text-green-500">Fuel Type</p>
                <p>Petrol</p>
              </div>
            </div>
          </div>

          {/* Report Summary */}
          <div className="bg-gray-900/90 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6">Report Summary</h2>
            <div className="grid grid-cols-2 gap-6">
              {[
                "No Structural Damage",
                "Clear Title",
                "No Odometer Rollback",
                "No Accident Info",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <span className="text-green-500 text-lg">✔</span>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">
          <div className="bg-gray-900/90 rounded-2xl shadow-lg p-6">
            <Image
              src="/car-report.jpg"
              alt="Car Image"
              width={500}
              height={300}
              className="rounded-xl mx-auto"
            />
            <h2 className="text-xl font-bold mt-4">Ready for the Full Story?</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Unlock the complete, detailed history of this vehicle. Our full
              report includes:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1 text-sm">
              <li>Detailed Accident History & Damage Reports</li>
              <li>Title History (Salvage, Rebuilt, etc.)</li>
              <li>Odometer Reading Verification</li>
              <li>Full Service & Maintenance Records</li>
              <li>Market Value Analysis</li>
            </ul>
            <button className="w-full bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-4 rounded-2xl mt-6 transition">
              Purchase Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
