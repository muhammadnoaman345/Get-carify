"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black text-white py-4 px-8 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
      {/* ✅ Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="The Vehicle Audit Logo"
          width={120}
          height={120}
          priority
        />
      </Link>

      {/* ✅ Desktop Nav */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        <Link href="/" className="hover:text-green-400">Home</Link>
        <Link href="#about" className="hover:text-green-400">About Us</Link>
        <Link href="#reports" className="hover:text-green-400">Reports</Link>
        <Link href="#pricing" className="hover:text-green-400">Pricing</Link>
        <Link href="#testimonials" className="hover:text-green-400">Testimonials</Link>
        <Link href="#faqs" className="hover:text-green-400">FAQs</Link>
        <Link href="#privacy" className="hover:text-green-400">Privacy Policy</Link>
        <Link href="#terms" className="hover:text-green-400">Terms & Conditions</Link>
      </nav>

      {/* ✅ Desktop Button */}
      <div className="hidden md:block">
        <Link href="#pricing">
          <button className="bg-green-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600">
            Get Your Report
          </button>
        </Link>
      </div>

      {/* ✅ Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
          <span className="font-bold text-lg text-green-500">Menu</span>
          <button onClick={toggleMenu}>
            <X size={28} className="text-white" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col space-y-4 px-6 py-6 text-gray-300">
          <Link href="/" onClick={toggleMenu} className="hover:text-green-400">Home</Link>
          <Link href="#about" onClick={toggleMenu} className="hover:text-green-400">About Us</Link>
          <Link href="#reports" onClick={toggleMenu} className="hover:text-green-400">Reports</Link>
          <Link href="#pricing" onClick={toggleMenu} className="hover:text-green-400">Pricing</Link>
          <Link href="#testimonials" onClick={toggleMenu} className="hover:text-green-400">Testimonials</Link>
          <Link href="#faqs" onClick={toggleMenu} className="hover:text-green-400">FAQs</Link>
          <Link href="#privacy" onClick={toggleMenu} className="hover:text-green-400">Privacy Policy</Link>
          <Link href="#terms" onClick={toggleMenu} className="hover:text-green-400">Terms & Conditions</Link>

          {/* Mobile CTA button */}
          <Link href="#pricing" onClick={toggleMenu}>
            <button className="mt-6 bg-green-500 w-full py-2 rounded-md font-semibold hover:bg-green-600">
              Get Your Report
            </button>
          </Link>
        </nav>
      </div>

      {/* ✅ Dark overlay background when menu open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}
