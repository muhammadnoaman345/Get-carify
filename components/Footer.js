import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Brand */}
        <div>
          <a href="/" className="text-green-500 font-bold text-2xl">
            The Vehicle Audit
          </a>
          <p className="mt-3 text-gray-400 text-sm">
            Trusted vehicle history reports for confident car buying decisions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-green-500">Home</a></li>
            <li><a href="#" className="hover:text-green-500">About Us</a></li>
            <li><a href="#" className="hover:text-green-500">Our Services</a></li>
            <li><a href="#" className="hover:text-green-500">Pricing</a></li>
            <li><a href="#" className="hover:text-green-500">Testimonials</a></li>
            <li><a href="#" className="hover:text-green-500">FAQs</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-lg">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-green-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-500">Terms & Conditions</a></li>
          </ul>
          {/* Payment Icons */}
          <div className="flex space-x-4 mt-6">
            <Image src="/visa.png" alt="Visa" width={50} height={30} />
            <Image src="/mastercard.png" alt="Mastercard" width={50} height={30} />
            <Image src="/paypal.png" alt="PayPal" width={50} height={30} />
          </div>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="font-semibold text-lg">Connect</h4>
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
          <div className="mt-4 text-sm text-gray-400">
            <p>Email: info@thevehicleaudit.com</p>
            <p>Support: support@thevehicleaudit.com</p>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 text-center text-gray-500 text-xs border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} The Vehicle Audit. All rights reserved.
      </div>
    </footer>
  );
}
