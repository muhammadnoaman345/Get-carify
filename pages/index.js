import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRouter } from "next/router";

// ✅ Custom Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import VehicleDataSection from "../components/VehicleDataSection";
import FAQ from "../components/FAQ";
import LoadingOverlay from "../components/LoadingOverlay"; // ✅ using new overlay

export default function Home() {
  const [searchType, setSearchType] = useState("vin");
  const [inputValue, setInputValue] = useState("");
  const [activeTab, setActiveTab] = useState("cars");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Progress Effect
  useEffect(() => {
    if (loading) {
      let i = 0;
      const interval = setInterval(() => {
        i += 1;
        setProgress(i);
        if (i >= 100) clearInterval(interval);
      }, 100); // 100ms × 100 = 10s
      return () => clearInterval(interval);
    }
  }, [loading]);

  // ✅ Pricing Plans Data (converted to GBP)
  const plans = {
    cars: {
      Silver: {
        old: "£56.99",
        price: "£49.99",
        features: [
          "Vehicle Overview",
          "Market Value",
          "Vehicle Specifications",
          "Sales Listing",
          "Accident Record",
          "Salvage",
          "Theft Record",
        ],
      },
      Gold: {
        old: "£119.99",
        price: "£89.99",
        features: [
          "HQ Car Images",
          "Vehicle Overview",
          "Market Value",
          "Vehicle Specifications",
          "Sales Listing",
          "Accident Record",
          "Salvage",
          "Theft Record",
          "Title Record",
          "Impounds",
          "Exports",
          "Open Recalls",
          "Installed Options and Packages",
          "Active/Expire Warranty",
        ],
      },
      Platinum: {
        old: "£149.99",
        price: "£119.99",
        features: [
          "2 Buyers Numbers from our Directory",
          "Buy one get another Report Free for Lifetime",
          "HQ Car Images",
          "Vehicle Overview",
          "Market Value",
          "Vehicle Specifications",
          "Sales Listing",
          "Accident Record",
          "Salvage",
          "Theft Record",
          "Title Record",
          "Impounds",
          "Exports",
          "Open Recalls",
          "Installed Options and Packages",
          "Active/Expire Warranty",
        ],
      },
    },
    motorbikes: {
      Silver: {
        old: "£56.99",
        price: "£49.99",
        features: [
          "Bike Overview",
          "Market Value",
          "Specifications",
          "Sales Listing",
          "Accident Record",
          "Salvage",
          "Theft Record",
        ],
      },
      Gold: {
        old: "£119.99",
        price: "£89.99",
        features: [
          "HQ Bike Images",
          "Bike Overview",
          "Market Value",
          "Specifications",
          "Sales Listing",
          "Accident Record",
          "Salvage",
          "Theft Record",
          "Title Record",
          "Impounds",
          "Exports",
          "Open Recalls",
          "Installed Options and Packages",
          "Active/Expire Warranty",
        ],
      },
      Platinum: {
        old: "£149.99",
        price: "£119.99",
        features: [
          "2 Buyers Numbers from our Directory",
          "Buy one get another Report Free for Lifetime",
          "HQ Bike Images",
          "Bike Overview",
          "Market Value",
          "Specifications",
          "Sales Listing",
          "Accident Record",
          "Salvage",
          "Theft Record",
          "Title Record",
          "Impounds",
          "Exports",
          "Open Recalls",
          "Installed Options and Packages",
          "Active/Expire Warranty",
        ],
      },
    },
    rv: {
      Silver: {
        old: "£56.99",
        price: "£49.99",
        features: [
          "RV Overview",
          "Market Value",
          "Specifications",
          "Sales Listing",
          "Accident Record",
          "Salvage",
          "Theft Record",
        ],
      },
      Gold: {
        old: "£119.99",
        price: "£89.99",
        features: [
          "HQ RV Images",
          "RV Overview",
          "Market Value",
          "Specifications",
          "Sales Listing",
          "Accident Record",
          "Salvage",
          "Theft Record",
          "Title Record",
          "Impounds",
          "Exports",
          "Open Recalls",
          "Installed Options and Packages",
          "Active/Expire Warranty",
        ],
      },
      Platinum: {
        old: "£149.99",
        price: "£119.99",
        features: [
          "2 Buyers Numbers from our Directory",
          "Buy one get another Report Free for Lifetime",
          "HQ RV Images",
          "RV Overview",
          "Market Value",
          "Specifications",
          "Sales Listing",
          "Accident Record",
          "Salvage",
          "Theft Record",
          "Title Record",
          "Impounds",
          "Exports",
          "Open Recalls",
          "Installed Options and Packages",
          "Active/Expire Warranty",
        ],
      },
    },
  };

  // ✅ Scroll Helper
  const scrollToVin = () => {
    const vinSection = document.getElementById("vin-section");
    if (vinSection) {
      vinSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ Order Now Handler
  const handleOrderNow = (tier) => {
    if (!inputValue) {
      scrollToVin();
      return;
    }
    setLoading(true);

    // redirect after 10s
    setTimeout(() => {
      router.push(`/summary?package=${tier}&val=${inputValue}`);
    }, 10000);
  };

  // ✅ Handle "Get Report"
  const handleGetReport = () => {
    if (searchType === "vin") {
      if (inputValue.length !== 17) {
        setError("VIN must be exactly 17 characters.");
        return;
      }
    } else if (searchType === "plate") {
      if (inputValue.length < 4 || inputValue.length > 7) {
        setError("License Plate must be 4 to 7 characters.");
        return;
      }
    }

    setError("");

    const query =
      searchType === "vin"
        ? `?vin=${inputValue}`
        : `?license=${inputValue}`;
    window.history.pushState({}, "", "/" + query);

    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>The Vehicle Audit - Vehicle History Reports</title>
      </Head>

      {loading && <LoadingOverlay progress={progress} />}

      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      {/* (No changes needed here, left as-is) */}

      {/* ✅ Pricing Section */}
      <section id="pricing" className="py-20 bg-[#0e0e0e] text-white text-center">
        <h2 className="text-4xl font-bold">Recommended Plans</h2>
        <p className="mt-3 mb-6 text-gray-400">
          Get Your Vehicle's Inspection Report!
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {["cars", "motorbikes", "rv"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                activeTab === type
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {type === "cars"
                ? "Car Reports"
                : type === "motorbikes"
                ? "Motorbike Reports"
                : "RV Reports"}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Object.entries(plans[activeTab]).map(([tier, { old, price, features }]) => (
            <div
              key={tier}
              data-aos="fade-up"
              className="relative bg-[#1c1c1c] rounded-2xl shadow-md p-6 flex flex-col hover:scale-105 transition"
            >
              {tier === "Gold" && (
                <span className="absolute top-4 right-[-20px] rotate-45 bg-green-500 text-xs font-bold text-white px-12 py-1 shadow-md">
                  POPULAR
                </span>
              )}

              <h3 className="text-2xl font-bold mb-2">{tier}</h3>
              <div className="mb-4">
                <span className="line-through text-gray-400 mr-2">{old}</span>
                <span className="text-green-500 text-3xl font-bold">{price}</span>
                <span className="text-sm text-gray-400"> / Report</span>
              </div>

              <ul className="text-left space-y-2 flex-1 overflow-y-auto max-h-64 scrollbar-thin">
                {features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>

              <button
                onClick={() => handleOrderNow(tier)}
                className="mt-6 bg-green-500 px-6 py-2 rounded-md font-semibold hover:bg-green-600 w-full"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Services Section */}
      <ServicesSection />

      {/* ✅ Testimonials, FAQ, Footer — unchanged */}
      <section id="testimonials" className="py-16 bg-black text-white text-center">
        {/* left unchanged */}
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section className="relative w-full bg-black h-[600px]">
        {/* left unchanged */}
      </section>

      <Footer />
    </>
  );
}
