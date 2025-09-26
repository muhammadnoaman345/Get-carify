import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SummaryPage() {
  const vin = "HFSJLDKHFK3U8U2I0"; // later make dynamic

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6">
      {/* VIN */}
      <div className="text-center text-2xl md:text-3xl font-bold tracking-widest mb-6">
        {vin}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-6">
          {/* Car Info */}
          <div
            className="grid grid-cols-2 gap-4 rounded-2xl p-6 shadow-xl 
            bg-green-500/20 backdrop-blur-lg border border-green-400/30 
            transform transition duration-300 hover:scale-[1.02] hover:shadow-green-500/40"
          >
            <div>Make</div>
            <div>Model</div>
            <div>Year</div>
            <div>Manufacturer</div>
            <div>Make Id</div>
            <div>Model Id</div>
          </div>

          {/* Key Specs */}
          <Card
            className="bg-neutral-800/40 backdrop-blur-md border border-neutral-700/40 shadow-xl 
            transform transition duration-300 hover:scale-[1.02] hover:shadow-gray-500/30"
          >
            <CardContent>
              <h2 className="text-lg font-semibold mb-4">Key Specifications</h2>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div>Body Style</div>
                <div>Made In</div>
                <div>Fuel Type</div>
              </div>
            </CardContent>
          </Card>

          {/* Report Summary */}
          <Card
            className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700/30 shadow-xl 
            transform transition duration-300 hover:scale-[1.02] hover:shadow-gray-500/40"
          >
            <CardContent>
              <h2 className="text-lg font-semibold mb-4">Report Summary</h2>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div>✔ Accident Reports</div>
                <div>✔ Title History</div>
                <div>✔ Odometer Check</div>
                <div>✔ Service Records</div>
                <div>✔ Market Value</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* Car Image */}
          <Card className="bg-neutral-800/40 backdrop-blur-md border border-neutral-700/40 shadow-lg">
            <CardContent className="p-0 overflow-hidden">
              <img
                src="/car-report"
                alt="Car"
                className="w-full object-cover rounded-lg"
              />
            </CardContent>
          </Card>

          {/* Full Report Box */}
          <Card
            className="bg-neutral-800/60 backdrop-blur-md border border-neutral-700/30 shadow-xl 
            transform transition duration-300 hover:scale-[1.02] hover:shadow-green-500/40"
          >
            <CardContent>
              <h2 className="text-lg font-semibold mb-4">Ready for the Full Story?</h2>
              <p className="text-gray-300 mb-4 text-sm">
                Unlock the complete, detailed history of this vehicle. Our full report includes:
              </p>
              <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
                <li>Detailed Accident History & Damage Reports</li>
                <li>Title History (Salvage, Rebuilt, etc.)</li>
                <li>Odometer Reading Verification</li>
                <li>Full Service & Maintenance Records</li>
                <li>Market Value Analysis</li>
              </ul>
              <Button className="w-full mt-6 bg-green-600 hover:bg-green-500">
                Purchase Full Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
