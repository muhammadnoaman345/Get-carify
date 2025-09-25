import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GetCarify - Vehicle History Reports</title>
      </Head>

      {/* Navbar */}
      <header className="bg-black text-white py-4 px-8 flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <h1 className="text-2xl font-bold text-green-500">getCarify</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-green-400">Home</a>
          <a href="#" className="hover:text-green-400">About Us</a>
          <a href="#" className="hover:text-green-400">Reports</a>
          <a href="#" className="hover:text-green-400">Pricing</a>
        </nav>
        <button className="bg-green-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600">
          Get Your Report
        </button>
      </header>

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center text-white h-screen"
        style={{
          backgroundImage: "url('/benjamin-zhao-5DremXTTKE0-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 px-4">
          <h2 className="text-4xl md:text-6xl font-bold">Instant, Reliable Car History Reports</h2>
          <p className="mt-4 text-lg md:text-xl">
            Empower your car buying decisions with GetCarify.
          </p>
          <div className="mt-8 flex justify-center">
            <input
              type="text"
              placeholder="Enter Vehicle Identification Number (VIN)"
              className="px-4 py-3 rounded-l-md w-80 md:w-96 text-black focus:outline-none"
            />
            <button className="bg-green-500 px-6 py-3 rounded-r-md font-semibold hover:bg-green-600">
              Get Report
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose GetCarify?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-green-500 text-xl font-bold">Comprehensive Data</h3>
            <p className="mt-3">Access records from DMVs, insurers, and auctions.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-green-500 text-xl font-bold">Unmatched Accuracy</h3>
            <p className="mt-3">Advanced algorithms ensure the highest accuracy.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-green-500 text-xl font-bold">Clear & Simple Reports</h3>
            <p className="mt-3">Understand vehicle history quickly with clean design.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-10">Flexible Pricing for Every Need</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Silver", price: "$40", features: ["Vehicle Overview", "Market Value", "Specs", "Sales Listing", "Accident Record", "Salvage", "Theft Record"] },
            { title: "Gold", price: "$80", features: ["HQ Car Images", "Vehicle Overview", "Market Value", "Sales Listing", "Accident Record", "Salvage", "Theft Record", "Title Record", "Warranty"] },
            { title: "Platinum", price: "$120", features: ["Buyers Directory", "HQ Car Images", "Vehicle Overview", "Accident Record", "Salvage", "Theft Record", "Title Record", "Warranty", "Free Lifetime Report"] },
          ].map((plan, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">{plan.title}</h3>
              <p className="text-green-500 text-3xl font-bold mt-2">{plan.price}</p>
              <ul className="mt-4 text-left">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="mt-2">✔ {f}</li>
                ))}
              </ul>
              <button className="mt-6 bg-green-500 px-6 py-2 rounded-md font-semibold hover:bg-green-600">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-10">Trusted by Thousands</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "David P.", review: "The report was detailed with accident history, mileage verification, and service records. Reliable and worth it." },
            { name: "Michael L.", review: "It helped me avoid hidden damage when buying my car. Very accurate and useful." },
            { name: "Sofia R.", review: "Professional, easy-to-read reports. Gave me full confidence to finalize my deal." },
          ].map((t, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg">
              <p className="italic">"{t.review}"</p>
              <p className="mt-3 font-semibold">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Car Interior Image Section */}
      <section className="relative w-full bg-black">
        <img
          src="/michael-lock-YVmUf2TyIGc-unsplash.jpg"
          alt="Car Interior"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience Transparency in Every Report
          </h2>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-green-500 font-bold text-xl">getCarify</h3>
          <p className="mt-2">Your trusted partner in vehicle history reports.</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Legal</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Connect</h4>
          <a href="#" className="mt-2 block">Facebook</a>
        </div>
        <div className="col-span-4 text-center text-gray-400 mt-6">
          © 2025 RedHorseTraders. All rights reserved.
        </div>
      </footer>
    </>
  );
}
