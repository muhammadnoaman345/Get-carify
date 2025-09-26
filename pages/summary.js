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
import Header from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function Summary() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow p-6 mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="md:col-span-2 space-y-6">
            {/* VIN Header */}
            <div className="text-center">
              <h2 className="text-green-500 text-lg font-semibold">
                Vehicle Report for VIN:
              </h2>
              <p className="text-2xl font-bold tracking-widest">
                HSDJHFSJDHFI34Y29
              </p>
            </div>

            {/* Top Feature Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-green-600/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
              <div className="flex flex-col items-center space-y-2">
                <Car className="w-8 h-8" />
                <p>Accident</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FileText className="w-8 h-8" />
                <p>Title Record</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <AlertTriangle className="w-8 h-8" />
                <p>Recalls</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Wrench className="w-8 h-8" />
                <p>Problem Checks</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Gauge className="w-8 h-8" />
                <p>Odometer</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <History className="w-8 h-8" />
                <p>Sales History</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Settings className="w-8 h-8" />
                <p>Specs</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <FileCheck className="w-8 h-8" />
                <p>Salvage Records</p>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Key Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
                <p>
                  <span className="font-semibold">Year:</span> ****
                </p>
                <p>
                  <span className="font-semibold">Make & Model:</span> ***********
                </p>
                <p>
                  <span className="font-semibold">Drive Type:</span> ****
                </p>
                <p>
                  <span className="font-semibold">Engine:</span> ****
                </p>
                <p>
                  <span className="font-semibold">Body Style:</span> ****
                </p>
                <p>
                  <span className="font-semibold">Fuel:</span> *****
                </p>
                <p>
                  <span className="font-semibold">Transmission:</span> *****
                </p>
                <p>
                  <span className="font-semibold">Manufactured In:</span> ****
                </p>
                <p>
                  <span className="font-semibold">Warranty:</span> *****
                </p>
              </div>
            </div>

            {/* Report Summary */}
            <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Report Summary</h2>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <p className="flex items-center space-x-2">
                  <span className="text-green-500">✔</span>
                  <span>Structural Damage Info</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-green-500">✔</span>
                  <span>Title Info</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-green-500">✔</span>
                  <span>Odometer Info</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-green-500">✔</span>
                  <span>Accident Info</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-green-500">✔</span>
                  <span>Sales History</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-green-500">✔</span>
                  <span>Specs</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-green-500">✔</span>
                  <span>Problem Check</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-green-500">✔</span>
                  <span>Service Record</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-green-500">✔</span>
                  <span>Theft Record</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-2xl shadow-lg p-6">
              <Image
                src="/car-report.jpg"
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

              {/* Checkout Button */}
              <a
                href="/checkout"
                className="w-full block text-center bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-4 rounded-2xl mt-4 shadow-md"
              >
                Purchase Full Report
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
