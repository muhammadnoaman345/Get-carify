import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-32 px-6 max-w-5xl mx-auto text-gray-300">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-10 text-center">
          Effective Date: June 25, 2018
        </p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-2 text-white">Introduction</h2>
            <p>
              Welcome to{" "}
              <span className="text-green-500 font-medium">The Vehicle Audit</span>, 
              provided by InfoPay ("we," "us," or "InfoPay"). InfoPay, together with
              its affiliates and subsidiaries, has created this Policy to apply to
              all users and clients of our website (
              <a
                href="https://thevehicleaudit.com/"
                className="text-green-400 hover:text-green-500 underline"
              >
                https://thevehicleaudit.com
              </a>
              ) and the associated products, services, data, information, and
              materials offered therein (collectively, the "Services").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 text-white">Consent</h2>
            <p>
              PLEASE CAREFULLY READ THIS POLICY. YOUR USE OF THE SERVICES
              CONSTITUTES YOUR CONSENT TO THIS POLICY. DO NOT USE THE SERVICES IF
              YOU ARE UNWILLING OR UNABLE TO CONSENT TO THIS POLICY.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 text-white">
              Changes to the Policy
            </h2>
            <p>
              We may revise this Policy at any time and such revision shall be
              posted here and accessible via this link:{" "}
              <a
                href="https://thevehicleaudit.com/privacy-policy"
                className="text-green-400 hover:text-green-500 underline"
              >
                Privacy Policy
              </a>
              . Any revision and/or addition to this Policy shall become effective
              and binding on you when you continue to use the Services on or after
              the effective date of such revision and/or addition.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 text-white">
              Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li>Individual identifiers (Name, Email, Phone Number, Business Name)</li>
              <li>Payment and transaction information</li>
              <li>Communications with us (Messages, Feedback, Preferences)</li>
              <li>Automatically collected information (IP, Device info, Browser data)</li>
              <li>Publicly available records that match user searches</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 text-white">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or the Services
              provided by The Vehicle Audit, please contact us via email at{" "}
              <a
                href="mailto:info@thevehicleaudit.com"
                className="text-green-400 hover:text-green-500 underline"
              >
                info@thevehicleaudit.com
              </a>{" "}
              or by phone at{"+44 7577 303327"}
              <span className="text-gray-200 font-medium">(800) 764-0104</span>.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
