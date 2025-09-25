import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4 px-6 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-md">
      {/* ✅ Logo (centered on mobile, left on desktop) */}
      <div className="flex-1 flex justify-center md:justify-start">
        <a href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="The Vehicle Audit"
            className="h-16 md:h-20 object-contain"
          />
        </a>
      </div>

      {/* ✅ Desktop Menu */}
      <nav className="hidden md:flex flex-1 justify-center space-x-4 lg:space-x-6">
        {[
          "Home",
          "About Us",
          "Reports",
          "Pricing",
          "Testimonials",
          "FAQs",
          "Privacy Policy",
          "Terms & Conditions",
        ].map((item) => (
          <a
            key={item}
            href="#"
            className="px-3 py-1 border border-green-500 rounded-lg text-sm lg:text-base font-semibold text-white hover:bg-green-500 hover:text-black transition"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* ✅ CTA Button (desktop only) */}
      <div className="flex-1 hidden md:flex justify-end">
        <button className="bg-green-500 px-6 py-2 rounded-md font-semibold hover:bg-green-600 transition">
          Get Your Report
        </button>
      </div>

      {/* ✅ Mobile Menu Toggle */}
      <div className="absolute left-4 md:hidden">
        <button
          className="text-green-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-20 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-6 border-t border-gray-700 md:hidden"
          >
            {[
              "Home",
              "About Us",
              "Reports",
              "Pricing",
              "Testimonials",
              "FAQs",
              "Privacy Policy",
              "Terms & Conditions",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 border border-green-500 rounded-lg w-4/5 text-center font-semibold text-white hover:bg-green-500 hover:text-black transition"
              >
                {item}
              </a>
            ))}
            <button className="bg-green-500 px-6 py-2 rounded-md font-semibold hover:bg-green-600 w-4/5 transition">
              Get Your Report
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
