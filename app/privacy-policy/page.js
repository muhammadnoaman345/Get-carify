// app/privacy-policy/page.js
export default function PrivacyPolicy() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-300 mb-12">
          At <span className="text-green-400 font-semibold">The Vehicle Audit</span>, 
          we value your trust. This Privacy Policy explains how we collect, use, and protect your 
          information when you use our website and services.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-semibold text-green-400 mb-4">1. Information We Collect</h2>
        <p className="text-gray-300 mb-8">
          We may collect personal details (such as name, email, and payment information) 
          and vehicle-related data (such as VIN, license plate, and specifications) 
          when you use our services to generate reports.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-semibold text-green-400 mb-4">2. How We Use Your Information</h2>
        <p className="text-gray-300 mb-8">
          The information collected is used to:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
          <li>Generate accurate vehicle reports</li>
          <li>Process payments securely</li>
          <li>Provide customer support</li>
          <li>Improve our website and services</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-2xl font-semibold text-green-400 mb-4">3. Sharing of Information</h2>
        <p className="text-gray-300 mb-8">
          We do not sell or trade your personal information. 
          Data may be shared only with trusted third-party providers (such as payment processors) 
          strictly for service-related purposes.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-semibold text-green-400 mb-4">4. Data Security</h2>
        <p className="text-gray-300 mb-8">
          We implement strict security measures to protect your personal and payment data. 
          However, no system is completely secure, and we cannot guarantee absolute protection.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-semibold text-green-400 mb-4">5. Cookies & Tracking</h2>
        <p className="text-gray-300 mb-8">
          Our site may use cookies and tracking technologies to enhance your browsing experience, 
          analyze traffic, and improve functionality. You can disable cookies in your browser settings.
        </p>

        {/* Section 6 */}
        <h2 className="text-2xl font-semibold text-green-400 mb-4">6. Your Rights</h2>
        <p className="text-gray-300 mb-8">
          You may request access, correction, or deletion of your personal data. 
          Please contact us at{" "}
          <span className="text-green-400">support@thevehicleaudit.com</span> 
          for any privacy-related inquiries.
        </p>

        {/* Section 7 */}
        <h2 className="text-2xl font-semibold text-green-400 mb-4">7. Updates to This Policy</h2>
        <p className="text-gray-300 mb-8">
          We may update this Privacy Policy from time to time. 
          All changes will be posted on this page with an updated "Last Updated" date.
        </p>

        {/* Last Updated */}
        <p className="text-sm text-gray-500 mt-12">
          <strong>Last Updated:</strong> September 26, 2025
        </p>
      </div>
    </div>
  );
}
