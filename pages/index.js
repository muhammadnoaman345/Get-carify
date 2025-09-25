export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Carify</h1>
        <nav className="space-x-4">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
        <a
          href="/report"
          className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Get Report
        </a>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 mt-12 mb-20">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Empower your car buying decisions
          </h2>
          <p className="mt-4 text-gray-700 max-w-lg">
            Get comprehensive, easy-to-understand vehicle history reports in minutes.
          </p>
          <form className="mt-6 flex max-w-md">
            <input
              type="text"
              placeholder="Enter VIN number"
              className="border border-gray-300 px-4 py-2 rounded-l w-full"
              required
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-r hover:bg-blue-700">
              Get Report
            </button>
          </form>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1605559424843-34cb03a648f0?auto=format&fit=crop&w=900&q=80"
            alt="Car"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      </section>

      {/* Why Choose Us / Features */}
      <section className="px-6 md:px-20 py-12 bg-white">
        <h3 className="text-3xl text-center font-bold text-gray-800 mb-10">
          Why Choose Carify?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg text-center">
            <div className="text-4xl text-blue-600 mb-4">🚗</div>
            <h4 className="text-xl font-semibold">Accident History</h4>
            <p className="text-gray-700 mt-2">
              Check if the car has been in any accidents or damage reports.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg text-center">
            <div className="text-4xl text-blue-600 mb-4">📊</div>
            <h4 className="text-xl font-semibold">Mileage Records</h4>
            <p className="text-gray-700 mt-2">
              Get accurate odometer history to avoid scams.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg text-center">
            <div className="text-4xl text-blue-600 mb-4">🛠️</div>
            <h4 className="text-xl font-semibold">Service & Recalls</h4>
            <p className="text-gray-700 mt-2">
              View open recalls or service history data.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing / Plans */}
      <section className="px-6 md:px-20 py-16 bg-gray-100">
        <h3 className="text-3xl text-center font-bold text-gray-800 mb-10">
          Plans & Pricing
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <h4 className="text-xl font-semibold mb-2">Basic</h4>
            <p className="text-4xl font-bold text-blue-600">$9</p>
            <ul className="mt-4 text-gray-700 space-y-2">
              <li>✔ Accident History</li>
              <li>✔ Mileage Records</li>
            </ul>
            <a
              href="/success"
              className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Buy Now
            </a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-600 text-center">
            <h4 className="text-xl font-semibold mb-2">Standard</h4>
            <p className="text-4xl font-bold text-blue-600">$19</p>
            <ul className="mt-4 text-gray-700 space-y-2">
              <li>✔ Accident History</li>
              <li>✔ Mileage Records</li>
              <li>✔ Service & Recalls</li>
            </ul>
            <a
              href="/success"
              className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Buy Now
            </a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <h4 className="text-xl font-semibold mb-2">Premium</h4>
            <p className="text-4xl font-bold text-blue-600">$29</p>
            <ul className="mt-4 text-gray-700 space-y-2">
              <li>✔ Accident History</li>
              <li>✔ Mileage Records</li>
              <li>✔ Service & Recalls</li>
              <li>✔ Full History</li>
            </ul>
            <a
              href="/success"
              className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Buy Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-20 py-6 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Carify. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</a>
            <a href="/terms" className="text-gray-600 hover:text-blue-600">Terms</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
