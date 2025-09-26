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
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="md:col-span-2 space-y-6">
          {/* VIN Header */}
          <div className="text-center bg-white rounded-2xl shadow-md p-6 border border-gray-200">
            <h2 className="text-green-700 text-lg font-semibold">
              Vehicle Report for VIN:
            </h2>
            <p className="text-2xl font-bold tracking-widest text-gray-900">
              HSDJHFSJDHFI34Y29
            </p>
          </div>

          {/* Top Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            {[
              { icon: Car, label: "Accident" },
              { icon: FileText, label: "Title Record" },
              { icon: AlertTriangle, label: "Recalls" },
              { icon: Wrench, label: "Problem Checks" },
              { icon: Gauge, label: "Odometer" },
              { icon: History, label: "Sales History" },
              { icon: Settings, label: "Specs" },
              { icon: FileCheck, label: "Salvage Records" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center space-y-2 hover:scale-105 hover:bg-green-50 transition-all rounded-xl p-3"
              >
                <item.icon className="w-8 h-8 text-green-700" />
                <p className="text-sm font-medium text-gray-800">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Specifications */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Key Specifications
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
              <p>
                <span className="font-semibold text-gray-900">Year:</span> 2020
              </p>
              <p>
                <span className="font-semibold text-gray-900">Make & Model:</span> Toyota Corolla
              </p>
              <p>
                <span className="font-semibold text-gray-900">Drive Type:</span> FWD
              </p>
              <p>
                <span className="font-semibold text-gray-900">Engine:</span> 1.8L
              </p>
              <p>
                <span className="font-semibold text-gray-900">Body Style:</span> Sedan
              </p>
              <p>
                <span className="font-semibold text-gray-900">Fuel:</span> Petrol
              </p>
              <p>
                <span className="font-semibold text-gray-900">Transmission:</span> Automatic
              </p>
              <p>
                <span className="font-semibold text-gray-900">Manufactured In:</span> Japan
              </p>
              <p>
                <span className="font-semibold text-gray-900">Warranty:</span> Available
              </p>
            </div>
          </div>

          {/* Report Summary */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Report Summary</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              {[
                "No Structural Damage",
                "Clear Title",
                "No Odometer Rollback",
                "No Accident Info",
              ].map((text, i) => (
                <p key={i} className="flex items-center space-x-2">
                  <span className="text-green-700">✔</span>
                  <span>{text}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between md:row-span-2 border border-gray-200">
          <div>
            <Image
              src="/car-report.jpg"
              alt="Car Image"
              width={400}
              height={250}
              className="rounded-xl mx-auto shadow-sm"
            />
            <h2 className="text-xl font-bold mt-4 text-gray-900">
              Ready for the Full Story?
            </h2>
            <p className="text-gray-700 mt-2 text-sm">
              Unlock the complete, detailed history of this vehicle. Our full
              report includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1 text-sm">
              <li>Detailed Accident History & Damage Reports</li>
              <li>Title History (Salvage, Rebuilt, etc.)</li>
              <li>Odometer Reading Verification</li>
              <li>Full Service & Maintenance Records</li>
              <li>Market Value Analysis</li>
            </ul>
          </div>
          <button className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-4 rounded-2xl mt-6 shadow-md transition-all">
            Purchase Full Report
          </button>
        </div>
      </div>
    </div>
  );
}
