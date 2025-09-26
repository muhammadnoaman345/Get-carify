export default function TermsAndConditions() {
  return (
    <div className="pt-32 px-6 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Terms and Conditions
      </h1>

      <div className="space-y-10 leading-relaxed">
        {/* Intro */}
        <section>
          <p>
            By accessing and using The Vehicle Audit website, you agree to
            comply with and be bound by the following Terms and Conditions,
            along with our Privacy Policy and NMVTIS Disclaimer. These govern
            your relationship with us regarding this website.
          </p>
          <p>
            If you do not agree with these terms, please discontinue use of this
            website immediately. Continued use constitutes acceptance of the
            Terms and Conditions, including any future updates or changes we may
            make without prior notice.
          </p>
        </section>

        {/* Registration */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Registration and Privacy
          </h2>
          <p>
            To use certain services, you may be required to register and provide
            accurate information. Your Registration Data and other personal
            information are subject to our Privacy Policy, which is incorporated
            into these Terms.
          </p>
        </section>

        {/* Third Party */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Third-Party Websites and Content
          </h2>
          <p>
            Our site may include links to external websites or third-party
            content. We are not responsible for the accuracy, legality, or
            safety of such third-party resources. Inclusion of these links does
            not imply endorsement.
          </p>
        </section>

        {/* Payment */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Payment</h2>
          <p>
            All payments must be made in U.S. dollars using approved processors
            (e.g., Stripe). Payments are non-refundable unless an exception is
            approved by The Vehicle Audit. Sales tax may apply based on your
            location.
          </p>
        </section>

        {/* Refund Policy */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Refund Policy</h2>
          <p>
            VIN reports are generated instantly and contain sensitive,
            proprietary data. For this reason, all sales are final and strictly
            non-refundable once a report is delivered.
          </p>
          <p>
            Customers are responsible for ensuring VINs and other details are
            correct before purchase. Reports generated with incorrect details
            are not eligible for refunds. Technical issues must be reported
            within 24 hours for review.
          </p>
        </section>

        {/* Report Usage */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Use of Vehicle History Reports
          </h2>
          <p>
            Customers receive a limited, non-transferable license to use Vehicle
            History Reports solely for personal purposes. Redistribution,
            resale, or commercial use without written permission is strictly
            prohibited.
          </p>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Intellectual Property</h2>
          <p>
            All content, branding, and materials on this website are owned by
            The Vehicle Audit or its licensors and are protected by copyright,
            trademark, and other laws. Unauthorized use is strictly prohibited.
          </p>
        </section>

        {/* Warranties */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Disclaimer of Warranties
          </h2>
          <p>
            All services and materials are provided “as is” without warranties
            of any kind, including but not limited to merchantability, fitness
            for a particular purpose, or non-infringement.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>No guarantee the services will be uninterrupted or error-free</li>
            <li>
              No guarantee the results will be accurate, reliable, or suitable
              for your intended purpose
            </li>
            <li>
              No guarantee of the quality or reliability of third-party data
            </li>
          </ul>
        </section>

        {/* Security */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Security and Account Responsibility
          </h2>
          <p>
            You are responsible for keeping your login credentials secure and
            must not share them. Unauthorized account sharing or resale will
            result in immediate termination of access.
          </p>
        </section>

        {/* Termination */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Termination of Use</h2>
          <p>
            We may suspend or terminate your access at any time for violations
            of these Terms, suspected fraudulent activity, or other unlawful
            conduct. Termination may include referral to law enforcement if
            necessary.
          </p>
        </section>

        {/* NMVTIS Disclaimer */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            NMVTIS Consumer Access Product Disclaimer
          </h2>
          <p>
            NMVTIS contains title and brand history data but may not include all
            accidents, repairs, or total loss events. Not all states or
            companies report to NMVTIS. A vehicle history report is not a
            substitute for an independent vehicle inspection.
          </p>
        </section>
      </div>
    </div>
  );
}
