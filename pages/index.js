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

// ✅ Custom Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import VehicleDataSection from "../components/VehicleDataSection";
import FAQ from "../components/FAQ";

export default function Home() {
  const [searchType, setSearchType] = useState("vin");
  const [inputValue, setInputValue] = useState("");
  const [activeTab, setActiveTab] = useState("cars");
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ✅ Pricing Plans Data
  const plans = {
    cars: {
      Silver: {
        old: "$56.99",
        price: "$49.99",
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
        old: "$119.99",
        price: "$89.99",
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
        old: "$149.99",
        price: "$119.99",
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
        old: "$56.99",
        price: "$49.99",
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
        old: "$119.99",
        price: "$89.99",
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
        old: "$149.99",
        price: "$119.99",
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
        old: "$56.99",
        price: "$49.99",
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
        old: "$119.99",
        price: "$89.99",
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
        old: "$149.99",
        price: "$119.99",
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

  // ✅ Checkout Handler (placeholder for Stripe)
  const handleCheckout = (tier) => {
    console.log(`Proceed to checkout for ${tier}`);
    // 👉 Later you can add Stripe checkout here
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

      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <section
        id="vin-section"
        className="relative flex items-center justify-center text-center text-white h-screen"
      >
        <Image
          src="/istockphoto-1165665234-612x612.jpg"
          alt="Hero Car Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            The Vehicle Audit Vehicle History Reports
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300">
            Instant, reliable reports to help you buy and sell cars with
            confidence.
          </p>

          {/* ✅ VIN / Plate Input */}
          <div className="mt-10 flex flex-col items-center">
            {/* Tabs */}
            <div className="flex bg-gray-800 rounded-full overflow-hidden mb-6 shadow-lg">
              <button
                onClick={() => {
                  setSearchType("vin");
                  setInputValue("");
                  setError("");
                }}
                className={`px-6 py-3 font-semibold transition ${
                  searchType === "vin"
                    ? "bg-green-500 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                VIN
              </button>
              <button
                onClick={() => {
                  setSearchType("plate");
                  setInputValue("");
                  setError("");
                }}
                className={`px-6 py-3 font-semibold transition ${
                  searchType === "plate"
                    ? "bg-green-500 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                License Plate
              </button>
            </div>

            {/* ✅ Rounded Search Bar */}
            <div className="flex flex-col items-center w-full max-w-md">
              <div className="flex items-center w-full">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) =>
                    setInputValue(e.target.value.toUpperCase())
                  }
                  placeholder={
                    searchType === "vin"
                      ? "Enter Vehicle Identification Number"
                      : "Enter License Plate Number"
                  }
                  className="flex-1 px-4 py-3 rounded-full border border-gray-300 text-black shadow focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  onClick={handleGetReport}
                  className="ml-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition"
                >
                  Get Report
                </button>
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-500">{error}</p>
              )}
            </div>

            <p className="mt-4 text-sm text-gray-400">
              Search by {searchType === "vin" ? "VIN" : "License Plate"} to
              get started.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Section */}
      <section className="py-20 bg-[#121212] text-white text-center">
        <h2 className="text-4xl font-bold">Why Choose The Vehicle Audit?</h2>
        <p className="mt-3 text-gray-400">
          We deliver trustworthy vehicle intelligence to help you buy and sell
          with confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {[
            {
              icon: "📦",
              title: "Comprehensive Data",
              desc: "Access extensive records from thousands of sources, including DMVs, insurance carriers, and salvage auctions.",
            },
            {
              icon: "🛡️",
              title: "Unmatched Accuracy",
              desc: "Our advanced algorithms cross-reference data to ensure the highest level of accuracy in every report.",
            },
            {
              icon: "📄",
              title: "Clear & Simple Reports",
              desc: "We present complex vehicle history in a clean, easy-to-read format, so you can understand the facts quickly.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#1c1c1c] p-8 rounded-lg shadow-lg"
            >
              <div className="flex justify-center">
                <div className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">{item.icon}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mt-6">{item.title}</h3>
              <p className="mt-3 text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vehicle Data Section */}
      <VehicleDataSection />

      {/* ✅ Pricing Section (with ID) */}
      <section
        id="pricing"
        className="py-20 bg-[#0e0e0e] text-white text-center"
      >
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
          {Object.entries(plans[activeTab]).map(
            ([tier, { old, price, features }]) => (
              <div
                key={tier}
                data-aos="fade-up"
                className="relative bg-[#1c1c1c] rounded-2xl shadow-md p-6 flex flex-col hover:scale-105 transition"
              >
                {/* Popular Ribbon */}
                {tier === "Gold" && (
                  <span className="absolute top-4 right-[-20px] rotate-45 bg-green-500 text-xs font-bold text-white px-12 py-1 shadow-md">
                    POPULAR
                  </span>
                )}

                <h3 className="text-2xl font-bold mb-2">{tier}</h3>
                <div className="mb-4">
                  <span className="line-through text-gray-400 mr-2">
                    {old}
                  </span>
                  <span className="text-green-500 text-3xl font-bold">
                    {price}
                  </span>
                  <span className="text-sm text-gray-400"> / Report</span>
                </div>

                <ul className="text-left space-y-2 flex-1 overflow-y-auto max-h-64 scrollbar-thin">
                  {features.map((f, idx) => (
                    <li key={idx}>✔ {f}</li>
                  ))}
                </ul>

                {/* ✅ Order Button with Scroll Logic */}
                <button
                  onClick={() => {
                    if (!inputValue) {
                      scrollToVin();
                    } else {
                      handleCheckout(tier);
                    }
                  }}
                  className="mt-6 bg-green-500 px-6 py-2 rounded-md font-semibold hover:bg-green-600 w-full"
                >
                  Order Now
                </button>
              </div>
            )
          )}
        </div>
      </section>

      {/* ✅ Services Section */}
      <ServicesSection />

      {/* ✅ Testimonials */}
      <section
        id="testimonials"
        className="py-16 bg-black text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-10">Trusted by Thousands</h2>
        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation
            modules={[Autoplay, Pagination, Navigation]}
            className="pb-10"
          >
            {[
              {
                name: "David P.",
                review:
                  "The report was detailed with accident history, mileage verification, and service records. Reliable and worth it.",
              },
              {
                name: "Michael L.",
                review:
                  "It helped me avoid hidden damage when buying my car. Very accurate and useful.",
              },
              {
                name: "Sofia R.",
                review:
                  "Professional, easy-to-read reports. Gave me full confidence to finalize my deal.",
              },
              {
                name: "Emma K.",
                review:
                  "Great service! I could compare multiple cars and spot hidden issues.",
              },
              {
                name: "John D.",
                review:
                  "Saved me thousands by avoiding a car with a salvage title. Highly recommend.",
              },
              {
                name: "Lucas M.",
                review: "Fast, accurate and very affordable compared to others.",
              },
              {
                name: "Ava W.",
                review:
                  "Best car history reports online. I use it for every car purchase.",
              },
            ].map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="flex justify-center mb-3">
                    {Array(5)
                      .fill()
                      .map((_, idx) => (
                        <span key={idx} className="text-green-500 text-xl">
                          ★
                        </span>
                      ))}
                  </div>
                  <p className="italic">"{t.review}"</p>
                  <p className="mt-3 font-semibold">- {t.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ✅ FAQ */}
      <section id="faq">
        <FAQ />
      </section>

      {/* ✅ Car Interior Section */}
      <section className="relative w-full bg-black h-[600px]">
        <Image
          src="/michael-lock-YVmUf2TyIGc-unsplash.jpg"
          alt="Car Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience Transparency in Every Report
          </h2>
        </div>
      </section>

      {/* ✅ Footer */}
      <Footer />
    </>
  );
}
