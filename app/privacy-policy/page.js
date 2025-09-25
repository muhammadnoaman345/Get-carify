"use client";

export default function PrivacyPolicy() {
  return (
    <div className="bg-black text-white min-h-screen pt-56">
      {/* ✅ Increased to pt-56 (14rem) so heading is fully visible below navbar */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-300 mb-4">
          At <span className="text-green-500 font-semibold">The Vehicle Audit</span>, 
          your privacy is our priority. This Privacy Policy explains how we collect, 
          use, and protect your personal information when you use our website and 
          services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
        <p className="text-gray-300 mb-4">
          We may collect personal information such as your name, email address, 
          payment details, and vehicle identification numbers (VINs) when you 
          request a report or interact with our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
        <p className="text-gray-300 mb-4">
          The information collected is used to generate accurate vehicle history 
          reports, process payments securely, improve our services, and provide 
          customer support. We do not sell or share your data with third parties 
          except as required by law or to process payments.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">3. Data Security</h2>
        <p className="text-gray-300 mb-4">
          We implement industry-standard security practices to protect your personal 
          information against unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">4. Cookies</h2>
        <p className="text-gray-300 mb-4">
          Our website may use cookies to enhance user experience and analyze traffic. 
          You may disable cookies in your browser, but some features of our site 
          may not function properly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">5. Your Rights</h2>
        <p className="text-gray-300 mb-4">
          You have the right to access, update, or delete your personal data. To 
          exercise these rights, please contact us at 
          <span className="text-green-500"> support@thevehicleaudit.com</span>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">6. Updates to This Policy</h2>
        <p className="text-gray-300 mb-4">
          We may update this Privacy Policy from time to time. Changes will be 
          reflected on this page with an updated "last revised" date.
        </p>

        <p className="mt-10 text-gray-400 text-sm">
          Last Updated: September 2025
        </p>
      </div>
    </div>
  );
}
