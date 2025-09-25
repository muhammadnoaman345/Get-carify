import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4 px-8 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
      {/* ✅ Logo */}
      <a href="/" className="flex items-center">
        <img
          src="/logo.png"
          alt="The Vehicle Audit"
          className="h-16 md:h-20 object-contain" // bigger logo
        />
      </a>

      {/* ✅ Desktop Menu */}
      <nav className="hidden md:flex space-x-4 lg:space-x-6">
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

      {/* ✅ CTA Button */}
      <button className="hidden md:block bg-green-500 px-6 py-2 rounded-md font-semibold hover:bg-green-600 transition">
        Get Your Report
      </button>

      {/* ✅ Mobile Menu Toggle */}
      <button
        className="md:hidden text-green-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-6 border-t border-gray-700 md:hidden">
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
        </div>
      )}
    </header>
  );
}
