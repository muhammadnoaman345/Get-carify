import Head from "next/head";
import Image from "next/image"; // ✅ Next.js Image Optimization
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>GetCarify - Vehicle History Reports</title>
      </Head>

      {/* Navbar */}
      <header className="bg-black text-white py-4 px-8 flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <h1 className="text-2xl font-bold text-green-500">getCarify</h1>
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
      <section className="relative flex items-center justify-center text-center text-white h-screen">
        <Image
          src="/benjamin-zhao-5DremXTTKE0-unsplash.jpg"
          alt="Hero Car Background"
          layout="fill"
          objectFit="cover"
          priority // ✅ Loads first
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            GetCarify Vehicle History Reports
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300">
            Instant, reliable reports to help you buy and sell cars with confidence.
          </p>

          {/* VIN Input */}
          <div className="mt-10 flex flex-col md:flex-row justify-center">
            <input
              type="text"
              placeholder="Enter Vehicle Identification Number (VIN)"
              className="px-4 py-4 rounded-t-md md:rounded-l-md md:rounded-tr-none w-full md:w-96 text-black focus:outline-none"
            />
            <button className="bg-green-500 px-8 py-4 rounded-b-md md:rounded-r-md md:rounded-bl-none font-semibold hover:bg-green-600 transition-colors">
              Get Report
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Trusted by thousands of car buyers and sellers.
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-[#121212] text-white text-center">
        <h2 className="text-4xl font-bold">Why Choose GetCarify?</h2>
        <p className="mt-3 text-gray-400">
          We deliver trustworthy vehicle intelligence to help you buy and sell with confidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {[
            {
              icon: "📦",
              title: "Comprehensive Data",
              desc: "Access extensive records from thousands of sources, including DMVs, insurance carriers, and salvage auctions."
            },
            {
              icon: "🛡️",
              title: "Unmatched Accuracy",
              desc: "Our advanced algorithms cross-reference data to ensure the highest level of accuracy in every report."
            },
            {
              icon: "📄",
              title: "Clear & Simple Reports",
              desc: "We present complex vehicle history in a clean, easy-to-read format, so you can understand the facts quickly."
            }
          ].map((item, i) => (
            <div key={i} className="bg-[#1c1c1c] p-8 rounded-lg shadow-lg">
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

      {/* Pricing Section */}
      <section className="py-20 bg-[#0e0e0e] text-white text-center">
        <h2 className="text-4xl font-bold">Flexible Pricing for Every Need</h2>
        <p className="mt-3 text-gray-400">
          Choose the plan that’s right for you. Get a single report or save with our multi-report packages.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {[
            { title: "Silver", price: "$40", features: ["Vehicle Overview", "Market Value", "Specs", "Sales Listing", "Accident Record", "Salvage", "Theft Record"] },
            { title: "Gold", price: "$80", features: ["HQ Car Images", "Vehicle Overview", "Market Value", "Sales Listing", "Accident Record", "Salvage", "Theft Record", "Title Record", "Warranty"] },
            { title: "Platinum", price: "$120", features: ["Buyers Directory", "HQ Car Images", "Vehicle Overview", "Accident Record", "Salvage", "Theft Record", "Title Record", "Warranty", "Free Lifetime Report"] },
          ].map((plan, i) => (
            <div key={i} className="bg-[#1c1c1c] p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold">{plan.title}</h3>
              <p className="text-green-500 text-4xl font-bold mt-2">{plan.price}</p>
              <ul className="mt-6 text-gray-300 space-y-2 text-left">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>
              <button className="mt-6 bg-green-500 px-6 py-2 rounded-md font-semibold hover:bg-green-600 w-full">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-16 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-10">Trusted by Thousands</h2>
        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation
            modules={[Autoplay, Pagination, Navigation]}
            className="pb-10"
          >
            {[
              { name: "David P.", review: "The report was detailed with accident history, mileage verification, and service records. Reliable and worth it." },
              { name: "Michael L.", review: "It helped me avoid hidden damage when buying my car. Very accurate and useful." },
              { name: "Sofia R.", review: "Professional, easy-to-read reports. Gave me full confidence to finalize my deal." },
              { name: "Emma K.", review: "Great service! I could compare multiple cars and spot hidden issues." },
              { name: "John D.", review: "Saved me thousands by avoiding a car with a salvage title. Highly recommend." },
              { name: "Lucas M.", review: "Fast, accurate and very affordable compared to others." },
              { name: "Ava W.", review: "Best car history reports online. I use it for every car purchase." },
            ].map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="flex justify-center mb-3">
                    {Array(5).fill().map((_, idx) => (
                      <span key={idx} className="text-green-500 text-xl">★</span>
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

      {/* Car Interior Image */}
      <section className="relative w-full bg-black h-[600px]">
        <Image
          src="/michael-lock-YVmUf2TyIGc-unsplash.jpg"
          alt="Car Interior"
          layout="fill"
          objectFit="cover"
          priority // ✅ Faster load
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience Transparency in Every Report
          </h2>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-green-500 font-bold text-xl">getCarify</h3>
          <p className="mt-2">Your trusted partner in vehicle history reports.</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Legal</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Connect</h4>
          <a href="#" className="mt-2 block">Facebook</a>
        </div>
        <div className="col-span-4 text-center text-gray-400 mt-6">
          © 2025 RedHorseTraders. All rights reserved.
        </div>
      </footer>
    </>
  );
}
