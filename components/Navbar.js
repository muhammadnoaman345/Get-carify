// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-green-500 font-bold text-xl">
        The Vehicle Audit
      </Link>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/reports">Reports</Link>
        <Link href="/pricing">Pricing</Link>
      </div>
    </nav>
  );
}
