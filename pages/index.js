export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <header className="w-full bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Carify</h1>
        <nav>
          <a href="/" className="px-3">Home</a>
          <a href="/pricing" className="px-3">Pricing</a>
          <a href="/contact" className="px-3">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between mt-10 px-6 md:px-20">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Get the Most Detailed <span className="text-blue-600">Car History Report</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-md">
            Simply enter your VIN number and instantly access accident history, mileage, recalls, and much more.
          </p>

          <form className="mt-6 flex max-w-md mx-auto md:mx-0" action="/report">
            <input
              type="text"
              placeholder="Enter VIN number"
              className="border border-gray-300 rounded-l px-4 py-2 w-full"
              required
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-r hover:bg-blue-700">
              Get Report
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1605559424843-34cb03a648f0?auto=format&fit=crop&w=900&q=80"
            alt="Car"
            className="rounded-lg shadow-lg"
          />
        </div>
      </main>

      {/* Features Section */}
      <section className="mt-20 px-6 md:px-20 py-10 bg-white">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Why Choose <span className="text-blue-600">Carify?</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow rounded-lg hover:shadow-lg transition">
            <div className="text-blue-600 text-4xl mb-4">🚗</div>
            <h4 className="text-xl font-semibold">Accident History</h4>
            <p className="mt-2 text-gray-600">
              Check if the car has been in any accidents, collisions, or damage reports.
            </p>
          </div>

          <div className="p-6 shadow rounded-lg hover:shadow-lg transition">
            <div className="text-blue-600 text-4xl mb-4">📊</div>
            <h4 className="text-xl font-semibold">Mileage Records</h4>
            <p className="mt-2 text-gray-600">
              Get accurate odometer readings to avoid scams and rolled-back mileage.
            </p>
          </div>

          <div className="p-6 shadow rounded-lg hover:shadow-lg transition">
            <div className="text-blue-600 text-4xl mb-4">🛠️</div>
            <h4 className="text-xl font-semibold">Service & Recalls</h4>
            <p className="mt-2 text-gray-600">
              Find out if the car has open recalls or regular maintenance history.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mt-20 px-6 md:px-20 py-16 bg-gray-100">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Choose Your <span className="text-blue-600">Plan</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Basic Plan */}
          <div className="p-8 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">Basic</h4>
            <p className="text-4xl font-bold text-blue-600 mb-4">$9</p>
            <ul className="text-gray-600 mb-6">
              <li>✔ Accident History</li>
              <li>✔ Mileage Records</li>
              <li>❌ Recalls Info</li>
            </ul>
            <a
              href="/success"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Buy Now
            </a>
          </div>

          {/* Standard Plan */}
          <div className="p-8 bg-white shadow-lg rounded-lg border-2 border-blue-600">
            <h4 className="text-xl font-semibold mb-4">Standard</h4>
            <p className="text-4xl font-bold text-blue-600 mb-4">$19</p>
            <ul className="text-gray-600 mb-6">
              <li>✔ Accident History</li>
              <li>✔ Mileage Records</li>
              <li>✔ Recalls Info</li>
            </ul>
            <a
              href="/success"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Buy Now
            </a>
          </div>

          {/* Premium Plan */}
          <div className="p-8 bg-white shadow rounded-lg hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-4">Premium</h4>
            <p className="text-4xl font-bold text-blue-600 mb-4">$29</p>
            <ul className="text-gray-600 mb-6">
              <li>✔ Accident History</li>
              <li>✔ Mileage Records</li>
              <li>✔ Recalls Info</li>
              <li>✔ Full Service History</li>
            </ul>
            <a
              href="/success"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Buy Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-20 py-6 px-6 md:px-20 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Carify. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</a>
            <a href="/terms" className="text-gray-600 hover:text-blue-600">Terms</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
