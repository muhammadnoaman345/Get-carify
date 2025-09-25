"use client";

export default function PrivacyPolicy() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* ✅ Hero Section */}
      <section className="bg-black text-center pt-44 pb-16 px-6">
        <h1 className="text-5xl font-extrabold text-green-500 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Your privacy is our top priority. Learn how{" "}
          <span className="text-green-500 font-semibold">The Vehicle Audit</span>{" "}
          collects, uses, and protects your information.
        </p>
      </section>

      {/* ✅ Content Section */}
      <section className="max-w-4xl mx-auto px-6 pb-20 space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <p className="text-gray-300">
            We may collect personal information such as your name, email address,
            payment details, and vehicle identification numbers (VINs) when you
            request a report or interact with our platform.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p className="text-gray-300">
            The information collected is used to generate accurate vehicle history
            reports, process payments securely, improve our services, and provide
            customer support. We do not sell or share your data with third parties
            except as required by law or to process payments.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">3. Data Security</h2>
          <p className="text-gray-300">
            We implement industry-standard security practices to protect your
            personal information against unauthorized access, alteration, or
            disclosure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">4. Cookies</h2>
          <p className="text-gray-300">
            Our website may use cookies to enhance user experience and analyze
            traffic. You may disable cookies in your browser, but some features
            of our site may not function properly.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
          <p className="text-gray-300">
            You have the right to access, update, or delete your personal data. To
            exercise these rights, please contact us at{" "}
            <span className="text-green-500">support@thevehicleaudit.com</span>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">6. Updates to This Policy</h2>
          <p className="text-gray-300">
            We may update this Privacy Policy from time to time. Changes will be
            reflected on this page with an updated "last revised" date.
          </p>
        </div>

        <p className="text-gray-500 text-sm mt-10">
          Last Updated: September 2025
        </p>
      </section>
    </div>
  );
}
