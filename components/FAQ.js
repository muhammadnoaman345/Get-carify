"use client";
import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How Comprehensive Are Your VIN Reports?",
      a: "Our VIN reports provide a complete, detailed history of a vehicle, including brand records, salvage or total loss status, odometer readings, title records, theft history, and more. We offer all the critical information you need to make informed, confident decisions."
    },
    {
      q: "Do You Cover All Vehicle Makes?",
      a: "Yes! Our VIN checker works seamlessly across all vehicle makes and models in the US, Europe, and Canada. Whether you search by VIN or license plate, you’ll get accurate and reliable information for any vehicle."
    },
    {
      q: "What If I Can't Find the Information I Need?",
      a: "If you can’t find the details you need, our dedicated customer service team is available 24/7 to assist you. You can always reach us at info@thevehicleaudit.com. If our experts are unable to retrieve your report, we guarantee a refund."
    },
    {
      q: "How Can I Cancel My Account?",
      a: "Cancelling your account is simple! Just reach out to our friendly customer support team at info@thevehicleaudit.com, and we’ll take care of the rest."
    },
    {
      q: "How Many Reports Can I Generate?",
      a: "With our unlimited search subscription, you can generate as many VIN reports as you need. For extra premium data, we offer additional reports for a small fee. Contact us at info@thevehicleaudit.com for more details."
    },
    {
      q: "Is Your VIN Lookup Service Accurate and Reliable?",
      a: "Absolutely! Our VIN lookup service is trusted for its accuracy and reliability. We source information from top-tier public and private databases and are proudly approved by the American Association of Motor Vehicle Administrators (AAMVA) for access to their NMVTIS database, ensuring the highest standards of data integrity."
    }
  ];

  return (
    <section className="py-20 bg-[#121212] text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Frequently Asked Questions</h2>
        <p className="mt-3 text-gray-400 text-center max-w-2xl mx-auto">
          Got Questions? We've Got Answers! Here are the most common questions we get about our services, designed to help you make the best choices with complete confidence.
        </p>

        <div className="mt-12 space-y-4">
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
