export default function Navbar() {
  return (
    <header className="bg-black text-white py-4 px-8 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <a href="/" className="text-2xl font-bold text-green-500">
        The Vehicle Audit
      </a>
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
  );
}
