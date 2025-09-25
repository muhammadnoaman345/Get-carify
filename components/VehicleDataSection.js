import { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";

export default function VehicleDataSection() {
  const [startCount, setStartCount] = useState(false);

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto px-6 container flex flex-col md:flex-row items-center justify-between">
        {/* Left: text + counters */}
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          onViewportBoxUpdate={() => setStartCount(true)} // ✅ this triggers count when visible
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            The <span className="text-green-500">Vehicle Data</span> Authority
          </h2>

          <p className="text-gray-600">
            Over the past decade, Epic Vin Check has compiled more than 40 billion
            vehicle records from various sources.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-500">
                {startCount ? <CountUp start={0} end={20} duration={2} suffix="K" /> : "0K"}
              </div>
              <p className="text-gray-600 text-sm mt-1">HAPPY CUSTOMER</p>
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-500">
                {startCount ? <CountUp start={0} end={50} duration={2} suffix="K" /> : "0K"}
              </div>
              <p className="text-gray-600 text-sm mt-1">REPORTS SOLD</p>
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-500">
                {startCount ? <CountUp start={0} end={5} duration={2} suffix="+" /> : "0+"}
              </div>
              <p className="text-gray-600 text-sm mt-1">YEARS EXPERIENCE</p>
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-500">
                {startCount ? <CountUp start={0} end={4} duration={2} suffix="+" /> : "0+"}
              </div>
              <p className="text-gray-600 text-sm mt-1">ACTIVE PARTNERS</p>
            </div>
          </div>
        </motion.div>

        {/* Right: car image slides from right */}
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <Image
              src="/bmw-3-series-phev-lci-modelfinder.png.asset.1716814924098.png"
              alt="Car"
              width={680}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
