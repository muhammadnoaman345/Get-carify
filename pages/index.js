import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const [searchType, setSearchType] = useState("vin"); // vin | plate
  const [inputValue, setInputValue] = useState("");
  const [activeTab, setActiveTab] = useState("cars");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const plans = {
    cars: { /* ... your same plans ... */ },
    motorbikes: { /* ... your same plans ... */ },
    rv: { /* ... your same plans ... */ },
  };

  return (
    <>
      <Head>
        <title>The Vehicle Audit - Vehicle History Reports</title>
      </Head>

      {/* Navbar */}
      <header className="bg-black text-white py-4 px-8 flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <a href="/" className="text-2xl font-bold text-green-500">The Vehicle Audit</a>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-green-400">Home</a>
          <a href="#" className="hover:text-green-400">About Us</a>
          <a href="#" className="hover:text-green-400">Reports</a>
          <a href="#" className="hover:text-green-400">Pricing</a>
        </nav>
        <button className="bg-green-500 px-4 py-2 rounded-md font-semibold hover:bg-green-600">
          Get Your Report
        </button>
      </header>

      {/* Hero Section */}
      {/* ... keep your same Hero section with VIN/Plate search ... */}

      {/* Why Choose Section */}
      <section className="py-20 bg-[#121212] text-white text-center">
        <h2 className="text-4xl font-bold">Why Choose The Vehicle Audit?</h2>
        <p className="mt-3 text-gray-400">
          We deliver trustworthy vehicle intelligence to help you buy and sell with confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {[
            { icon: "📦", title: "Comprehensive Data", desc: "Access extensive records from thousands of sources, including DMVs, insurance carriers, and salvage auctions." },
            { icon: "🛡️", title: "Unmatched Accuracy", desc: "Our advanced algorithms cross-reference data to ensure the highest level of accuracy in every report." },
            { icon: "📄", title: "Clear & Simple Reports", desc: "We present complex vehicle history in a clean, easy-to-read format, so you can understand the facts quickly." }
          ].map((item, i) => (
            <div key={i} cl
