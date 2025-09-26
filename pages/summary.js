import { useRouter } from "next/router";
import Image from "next/image";

export default function SummaryPage() {
  const router = useRouter();
  const { package: pkg, val: vin } = router.query;

  const packageDetails = {
    Silver: { price: "49.99", features: ["Basic Vehicle Info", "Stolen Check"] },
    Gold: { price: "84.99", features: ["Everything in Silver", "Accident History", "Import/Export Check"] },
    Platinum: {
      price: "109.99",
      features: [
        "Everything in Gold",
        "Service Records",
        "Mileage Verification",
        "Warranty Check",
      ],
    },
  };

  const selected = packageDetails[pkg] || {};

  const handleProceed = () => {
    router.push(`/checkout?package=${pkg}&vin=${vin}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 max-w-5xl w-full overflow-hidden">
        {/* Left Side - Image */}
        <div className="relative h-64 md:h-auto">
          <Image
            src="/car-report.jpg" // replace with your screenshot or image path in public folder
            alt="Vehicle Report"
            layout="fill"
            objectFit="cover"
            className="md:rounded-l-2xl"
          />
        </div>

        {/* Right Side - Summary */}
        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Vehicle Report Summary
          </h1>

          <div className="mb-4">
            <p className="text-gray-600">
              <span className="font-semibold">VIN:</span> {vin || "Not Provided"}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Package:</span> {pkg || "N/A"}
            </p>
            <p className="text-gray-800 font-semibold text-lg">
              Price: ${selected.price || "--"}
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              What’s Included
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {selected.features?.map((f, idx) => (
                <li key={idx}>{f}</li>
              )) || <li>No details available</li>}
            </ul>
          </div>

          <button
            onClick={handleProceed}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
