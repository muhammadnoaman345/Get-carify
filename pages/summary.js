import { useRouter } from "next/router";

export default function Summary() {
  const router = useRouter();
  const { package: pkg, val } = router.query;

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-green-600">
        Order Summary
      </h1>

      <div className="mt-8 max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left */}
        <div className="bg-green-100 rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">VIN: {val}</h2>
          <p className="text-gray-700">Your detailed inspection report is ready!</p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            {["Accident", "Title Record", "Problem Checks", "Odometer", "Sales History", "Salvage Records"].map(
              (item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow text-center"
                >
                  <span className="text-green-600 text-lg">✔</span>
                  <p className="text-sm mt-1">{item}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Right */}
        <div className="bg-gray-100 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <p className="mb-2">Package: <b>{pkg}</b></p>
          <p className="mb-4">Total: <b>$49.99</b></p>
          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-green-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
