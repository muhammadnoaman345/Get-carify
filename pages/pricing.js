export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="w-full bg-white shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold text-blue-600">Carify</h1>
        <nav>
          <a href="/" className="px-3">Home</a>
          <a href="/pricing" className="px-3">Pricing</a>
          <a href="/contact" className="px-3">Contact</a>
        </nav>
      </header>

      <main className="p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["Basic", "Standard", "Premium"].map((plan, i) => (
            <div key={i} className="bg-white p-6 shadow rounded-lg text-center">
              <h3 className="text-xl font-bold">{plan}</h3>
              <p className="mt-2 text-gray-600">$ {i * 10 + 10}</p>
              <a
                href="/success"
                className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
