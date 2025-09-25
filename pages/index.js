export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="w-full bg-white shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold text-blue-600">Carify</h1>
        <nav>
          <a href="/" className="px-3">Home</a>
          <a href="/pricing" className="px-3">Pricing</a>
          <a href="/contact" className="px-3">Contact</a>
        </nav>
      </header>

      <main className="flex flex-col items-center mt-10 px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 max-w-2xl">
          Get the most detailed Car History Report
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl">
          Just enter your VIN and get a full report instantly.
        </p>

        <form className="mt-6 flex" action="/report">
          <input
            type="text"
            placeholder="Enter VIN number"
            className="border border-gray-300 rounded-l px-4 py-2 w-64"
            required
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-r hover:bg-blue-700">
            Get Report
          </button>
        </form>
      </main>
    </div>
  );
}
