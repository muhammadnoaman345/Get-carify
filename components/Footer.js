import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <a href="/" className="text-green-500 font-bold text-2xl">
            The Vehicle Audit
          </a>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Your trusted partner in vehicle history reports. 
            Get accurate, detailed insights before you buy or sell.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-400">
            <li><a href="/" className="hover:text-green-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-green-500 transition">About Us</a></li>
            <li><a href="/#testimonials" className="hover:text-green-500 transition">Testimonials</a></li>
            <li><a href="/#pricing" className="hover:text-green-500 transition">Pricing</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-lg">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-400">
            <li><a href="/privacy-policy" className="hover:text-green-500 transition">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions" className="hover:text-green-500 transition">Terms of Service</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-semibold text-lg">Connect</h4>
          <div className="flex space-x-4 mt-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          
          {/* Copyright */}
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            © 2025 RedHorseTraders. All rights reserved.
          </p>

          {/* Payment Methods */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-xs mb-2 uppercase tracking-wide">
              Secure Payments
            </p>
            <div className="flex space-x-4 justify-center md:justify-end">
              <Image src="/paypal.png" alt="PayPal" width={50} height={30} />
              <Image src="/visa.png" alt="Visa" width={50} height={30} />
              <Image src="/mastercard.png" alt="Mastercard" width={50} height={30} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
