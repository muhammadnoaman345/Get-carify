"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen pt-28 px-6 md:px-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-green-500 mb-4"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
        >
          We’re here to bring **trust and transparency** to vehicle history
          reporting worldwide.
        </motion.p>
      </section>

      {/* Core Content */}
      <section className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-400">
            Why Choose Us?
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li className="border border-green-500 rounded-lg p-4 hover:bg-green-500 hover:text-black transition">
              Get up-to-date vehicle information directly from NMVTIS and
              government agencies across the U.S., Canada, Australia, New
              Zealand, and the UK.
            </li>
            <li className="border border-green-500 rounded-lg p-4 hover:bg-green-500 hover:text-black transition">
              Access comprehensive title, salvage, and total loss details.
            </li>
            <li className="border border-green-500 rounded-lg p-4 hover:bg-green-500 hover:text-black transition">
              Exclusive data on thefts, recalls, liens, and vehicle values.
            </li>
            <li className="border border-green-500 rounded-lg p-4 hover:bg-green-500 hover:text-black transition">
              Advanced dealer dashboard with batch reporting and printing.
            </li>
            <li className="border border-green-500 rounded-lg p-4 hover:bg-green-500 hover:text-black transition">
              Competitive pricing with no hidden fees.
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-400">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We believe that buying or selling a vehicle should be simple,
            transparent, and stress-free. That’s why we combine **government
            data, insurance records, and exclusive industry insights** into
            one powerful platform. Whether you’re a car buyer, seller, or
            dealership, our reports help you make informed decisions with
            confidence.
          </p>
          <p className="text-gray-300 leading-relaxed">
            From checking accident history to confirming ownership records, we
            go beyond the basics to give you **a complete picture of any
            vehicle’s past**.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold text-green-500 mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-gray-300 mb-6">
          Run your first report today and discover the peace of mind that comes
          with having all the details at your fingertips.
        </p>
        <Link
          href="/reports"
          className="bg-green-500 text-black font-semibold px-6 py-3 rounded-md hover:bg-green-600 transition"
        >
          Get Your Report
        </Link>
      </section>
    </div>
  );
}

