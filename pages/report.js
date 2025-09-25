export default function Report() {
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

      <main className="p-10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Vehicle Report</h2>
        <div className="bg-white p-6 shadow rounded-lg space-y-4">
          <p><strong>VIN:</strong> 123456789ABCDEFG</p>
          <p><strong>Make:</strong> Toyota</p>
          <p><strong>Model:</strong> Corolla</p>
          <p><strong>Year:</strong> 2018</p>
          <p><strong>Mileage:</strong> 65,000 km</p>
          <p><strong>Accidents:</strong> None reported</p>
          <p><strong>Service Records:</strong> Regular maintenance</p>
        </div>
      </main>
    </div>
  );
}
