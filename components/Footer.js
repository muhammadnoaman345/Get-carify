import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-10 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Brand */}
        <div>
          <a href="/" className="text-green-500 font-bold text-xl">The Vehicle Audit</a>
          <p className="mt-2 text-gray-400 text-sm">
            Your trusted partner in vehicle history reports.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2 text-sm text-gray-400">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold">Legal</h4>
          <ul className="mt-2 space-y-2 text-sm text-gray-400">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="font-semibold">Connect</h4>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-green-500 transition">
              <Facebook size={22} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition">
              <Instagram size={22} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 text-center text-gray-500 text-xs border-t border-gray-800 pt-4">
        © 2025 RedHorseTraders. All rights reserved.
      </div>
    </footer>
  );
}
