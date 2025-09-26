import Image from "next/image";

export default function CarDetails() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left side */}
        <div className="md:col-span-2 space-y-6">
          {/* Vehicle Details */}
          <div className="grid grid-cols-3 gap-4 bg-green-600 text-black p-6 rounded-2xl font-bold text-lg">
            <div>
              <p>Make</p>
              <p>Manufacturer</p>
            </div>
            <div>
              <p>Model</p>
              <p>Make Id</p>
            </div>
            <div>
              <p>Year</p>
              <p>Model Id</p>
            </div>
          </div>

          {/* Key Specifications */}
          <div className="bg-gray-900 rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Key Specifications</h2>
            <div className="grid grid-cols-3 gap-4 text-gray-300">
              <div>
                <p className="font-semibold">Body Style</p>
              </div>
              <div>
                <p className="font-semibold">Made In</p>
              </div>
              <div>
                <p className="font-semibold">Fuel Type</p>
              </div>
            </div>
          </div>

          {/* Report Summary */}
          <div className="bg-gray-900 rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Report Summary</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <p className="text-gray-300">No Structural Damage</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <p className="text-gray-300">Clear Title</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <p className="text-gray-300">No Odometer Rollback</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <p className="text-gray-300">No Accident Info</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="space-y-6">
          <div className="bg-gray-900 rounded-2xl shadow-md p-6">
            <Image
              src="/public/car-report.jpg"
              alt="Car Image"
              width={400}
              height={250}
              className="rounded-xl mx-auto"
            />
            <h2 className="text-xl font-bold mt-4">
              Ready for the Full Story?
            </h2>
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
            <button className="w-full bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-4 rounded-2xl mt-4">
              Purchase Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
