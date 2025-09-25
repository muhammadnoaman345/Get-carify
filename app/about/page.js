// app/about/page.js
import { CheckCircle } from "lucide-react"; // for green check icons

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] flex items-center justify-center bg-gray-900">
        <img
          src="/about/hero.jpg" // <- replace with your image
          alt="About Vehicle Audit"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <h1 className="relative text-4xl md:text-5xl font-bold text-green-400">
          About Vehicle Audit
        </h1>
      </section>

      {/* Mission / Intro */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-green-400 mb-6">Our Mission</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Vehicle Audit is the answer to endless questions about car values,
          safety, history, and possible damages. Whether you are buying or
          selling, committing to a long-term loan or lease, or just checking the
          future value of your car, we provide the data you need to make smarter
          decisions.
        </p>
        <p className="text-gray-300 leading-relaxed">
          We bring together reliable records from trusted government and private
          sources worldwide. Our detailed Vehicle History Reports give you
          complete visibility at a fraction of the industry cost—helping you
          safeguard your equity, investment, and finances.
        </p>
      </section>

      {/* What We Offer */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/about/offer.jpg" // <- replace with your image
            alt="Vehicle audit illustration"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-green-400 mb-6">
              What We Offer
            </h2>
            <ul className="space-y-4 text-gray-300 text-lg">
              <li className="flex items-start space-x-2">
                <CheckCircle className="text-green-400 mt-1 w-5 h-5" />
                <span>Comprehensive vehicle history checks</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="text-green-400 mt-1 w-5 h-5" />
                <span>Accident & damage reports</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="text-green-400 mt-1 w-5 h-5" />
                <span>Import & export tracking</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="text-green-400 mt-1 w-5 h-5" />
                <span>Service & maintenance history</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="text-green-400 mt-1 w-5 h-5" />
                <span>Mechanic-style detailed inspections</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Detailed Coverage Checklist */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-green-400 mb-8 text-center">
            Our Reports Cover:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            {[
              "Title Records",
              "Title Brand Records",
              "Junk & Salvage Records",
              'Insurer "Total Loss"',
              "Full Auto Specs",
              "Flood Damage Records",
              "Commercial Use Records",
              "Fire & Hail Records",
              "Recalls & Defects",
              "Insurance Claims",
              "Current & Past Owners",
              "Prior Theft Records",
              "Repair & Rebuilt Records",
              "Current Title Records",
              "Historical Title Records",
              "Cash For Clunkers",
              "Odometer Reading",
              "Sales History",
              "Awards and Accolades",
              "NHTSA Crash Test Ratings",
              "Safety and Security",
              "Manufacturer Information",
              "Residual Values",
              "And More...",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <CheckCircle className="text-green-400 mt-1 w-5 h-5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Unlike generic reports, <span className="font-semibold">Vehicle Audit</span> 
            goes the extra mile. We don’t just give you raw data — we explain what it means, 
            highlighting the key details that truly matter. Whether you’re buying, selling, 
            or simply checking your car’s background, our reports provide the peace of mind you deserve.
          </p>
        </div>
      </section>
    </div>
  );
}
