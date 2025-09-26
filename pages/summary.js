import Image from "next/image";
import {
  Car,
  FileText,
  AlertTriangle,
  Wrench,
  Gauge,
  Settings,
  History,
  FileCheck,
} from "lucide-react"; // icons

export default function Summary() {
  return (
    <div className="min-h-screen bg-gray-100 text-black p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="md:col-span-2 space-y-6">
          {/* VIN Header */}
          <div className="text-center bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-green-600 text-lg font-semibold">
              Vehicle Report for VIN:
            </h2>
            <p className="text-2xl font-bold tracking-widest text-gray-800">
              HSDJHFSJDHFI34Y29
            </p>
          </div>

          {/* Top Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex flex-col items-center space-y-2">
              <Car className="w-8 h-8 text-green-600" />
              <p>Accident</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FileText className="w-8 h-8 text-green-600" />
              <p>Title Record</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <AlertTriangle className="w-8 h-8 text-green-600" />
              <p>Recalls</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Wrench className="w-8 h-8 text-green-600" />
              <p>Problem Checks</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Gauge className="w-8 h-8 text-green-600" />
              <p>Odometer</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <History className="w-8 h-8 text-green-600" />
              <p>Sales History</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Settings className="w-8 h-8 text-green-600" />
              <p>Specs</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FileCheck className="w-8 h-8 text-green-600" />
              <p>Salvage Records</p>
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Key Specifications
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600">
              <p><span className="font-semibold text-gray-800">Year:</span> 2020</p>
              <p><span className="font-semibold text-gray-800">Make & Model:</span> Toyota Corolla</p>
              <p><span className="font-semibold text-gray-800">Drive Type:</span> FWD</p>
              <p><span className="font-semibold text-gray-800">Engine:</span> 1.8L</p>
              <p><span className="font-semibold text-gray-800">Body Style:</span> Sedan</p>
              <p><span className="font-semibold text-gray-800">Fuel:</span> Petrol</p>
              <p><span className="font-semibold text-gray-800">Transmission:</span> Automatic</p>
              <p><span className="font-semibold text-gray-800">Manufactured In:</span> Japan</p>
              <p><span className="font-semibold text-gray-800">Warranty:</span> Available</p>
            </div>
          </div>

          {/* Report Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Report Summary</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-600">
              <p className="flex items-center space-x-2">
                <span className="text-green-600">✔</span>
                <span>No Structural Damage</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-green-600">✔</span>
                <span>Clear Title</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-green-600">✔</span>
                <span>No Odometer Rollback</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-green-600">✔</span>
                <span>No Accident Info</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between md:row-span-2">
          <div>
            <Image
              src="/car-report.jpg"
              alt="Car Image"
              width={400}
              height={250}
              className="rounded-xl mx-auto shadow-md"
            />
            <h2 className="text-xl font-bold mt-4 text-gray-800">
              Ready for the Full Story?
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Unlock the complete, detailed history of this vehicle. Our full
              report includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-3 space-y-1 text-sm">
              <li>Detailed Accident History & Damage Reports</li>
              <li>Title History (Salvage, Rebuilt, etc.)</li>
              <li>Odometer Reading Verification</li>
              <li>Full Service & Maintenance Records</li>
              <li>Market Value Analysis</li>
            </ul>
          </div>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-2xl mt-6 shadow-md">
            Purchase Full Report
          </button>
        </div>
      </div>
    </div>
  );
}
