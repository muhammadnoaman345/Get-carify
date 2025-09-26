import { FaCarCrash, FaFileAlt, FaTools, FaTachometerAlt, FaHistory, FaCogs, FaRecycle } from "react-icons/fa";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

export default function SummaryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side - Report Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
            <h2 className="text-green-700 font-semibold text-lg text-center">
              Vehicle Report for VIN:
            </h2>
            <p className="text-2xl font-bold text-gray-900 text-center mt-1">
              HSDJHFSJDHFI34Y29
            </p>
          </div>

          {/* Icons Section */}
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center text-green-700">
              <FaCarCrash size={28} />
              <p className="mt-2 text-sm font-medium text-gray-800">Accident</p>
            </div>
            <div className="flex flex-col items-center text-green-700">
              <FaFileAlt size={28} />
              <p className="mt-2 text-sm font-medium text-gray-800">Title Record</p>
            </div>
            <div className="flex flex-col items-center text-green-700">
              <MdOutlineReportGmailerrorred size={28} />
              <p className="mt-2 text-sm font-medium text-gray-800">Recalls</p>
            </div>
            <div className="flex flex-col items-center text-green-700">
              <FaTools size={28} />
              <p className="mt-2 text-sm font-medium text-gray-800">Problem Checks</p>
            </div>
            <div className="flex flex-col items-center text-green-700">
              <FaTachometerAlt size={28} />
              <p className="mt-2 text-sm font-medium text-gray-800">Odometer</p>
            </div>
            <div className="flex flex-col items-center text-green-700">
              <FaHistory size={28} />
              <p className="mt-2 text-sm font-medium text-gray-800">Sales History</p>
            </div>
            <div className="flex flex-col items-center text-green-700">
              <FaCogs size={28} />
              <p className="mt-2 text-sm font-medium text-gray-800">Specs</p>
            </div>
            <div className="flex flex-col items-center text-green-700">
              <FaRecycle size={28} />
              <p className="mt-2 text-sm font-medium text-gray-800">Salvage Records</p>
            </div>
          </div>

          {/* Key Specs */}
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 text-lg mb-4">Key Specifications</h3>
            <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-800">
              <p><span className="font-medium">Year:</span> 2020</p>
              <p><span className="font-medium">Make & Model:</span> Toyota Corolla</p>
              <p><span className="font-medium">Engine:</span> 1.8L</p>
              <p><span className="font-medium">Drive Type:</span> FWD</p>
              <p><span className="font-medium">Transmission:</span> Automatic</p>
              <p><span className="font-medium">Fuel:</span> Petrol</p>
              <p><span className="font-medium">Body Style:</span> Sedan</p>
              <p><span className="font-medium">Warranty:</span> Available</p>
              <p><span className="font-medium">Manufactured In:</span> Japan</p>
            </div>
          </div>

          {/* Report Summary */}
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 text-lg mb-4">Report Summary</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✔ No Structural Damage</li>
              <li>✔ No Odometer Rollback</li>
              <li>✔ Clear Title</li>
              <li>✔ No Accident Info</li>
            </ul>
          </div>
        </div>

        {/* Right Side - Promo Card */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Car"
            className="rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-900">Ready for the Full Story?</h3>
          <p className="text-sm text-gray-700 mt-2">
            Unlock the complete, detailed history of this vehicle. Our full report includes:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
            <li>Detailed Accident History & Damage Reports</li>
            <li>Title History (Salvage, Rebuilt, etc.)</li>
            <li>Odometer Reading Verification</li>
            <li>Full Service & Maintenance Records</li>
            <li>Market Value Analysis</li>
          </ul>
          <button className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold shadow">
            Purchase Full Report
          </button>
        </div>
      </div>
    </div>
  );
}
