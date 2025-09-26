"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "FAQs", href: "/#faq" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  return (
    <header className="bg-black text-white py-4 px-6 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-md">
      {/* ✅ Logo */}
      <div className="flex-1 flex justify-center md:justify-start">
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="The Vehicle Audit"
            className="h-16 md:h-20 object-contain"
          />
        </Link>
      </div>

      {/* ✅ Desktop Menu */}
      <nav className="hidden md:flex flex-1 justify-center space-x-4 lg:space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`px-3 py-1 rounded-lg text-sm lg:text-base font-semibold transition whitespace-nowrap ${
              pathname === item.href
                ? "bg-green-500 text-black"
                : "border border-green-500 text-white hover:bg-green-500 hover:text-black"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* ✅ CTA Button (desktop only → now links to /contact) */}
      <div className="flex-1 hidden md:flex justify-end">
        <Link href="/contact">
          <button className="bg-green-500 px-6 py-2 rounded-md font-semibold hover:bg-green-600 transition whitespace-nowrap">
            Contact Us
          </button>
        </Link>
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
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)} // ✅ close after click
                className={`px-4 py-2 rounded-lg w-4/5 text-center font-semibold whitespace-nowrap transition ${
                  pathname === item.href
                    ? "bg-green-500 text-black"
                    : "border border-green-500 text-white hover:bg-green-500 hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* ✅ Mobile "Contact Us" Button */}
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="bg-green-500 px-6 py-2 rounded-md font-semibold hover:bg-green-600 w-4/5 transition whitespace-nowrap">
                Contact Us
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

