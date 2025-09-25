import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black text-white py-4 px-8 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
      {/* ✅ Logo + Text */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo.png" // Make sure logo.png is inside your /public folder
          alt="The Vehicle Audit Logo"
          width={40}
          height={40}
          className="rounded"
        />
        <span className="text-2xl font-bold text-green-500">The Vehicle Audit</span>
      </Link>

      {/* ✅ Navigation */}
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-green-400">Home</Link>
        <Link href="#about" className="hover:text-green-400">About Us</Link>
        <Link href="#reports" className="hover:text-green-400">Reports</Link>
        <Link href="#pricing" className="hover:text-green-400">Pricing</Link>
      </nav>

      {/* ✅ Button */}
      <Link href="#pricing">
        <button className="bg-green-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600">
          Get Your Report
        </button>
      </Link>
    </header>
  );
}
