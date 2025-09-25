import Image from "next/image";

export default function ServicesSection() {
  const countries = [
    { name: "USA", flag: "/flags/usa.png" },
    { name: "Canada", flag: "/flags/canada.png" },
    { name: "England", flag: "/flags/england.png" },
    { name: "Scotland", flag: "/flags/scotland.png" },
    { name: "Ireland", flag: "/flags/ireland.png" },
    { name: "Australia", flag: "/flags/australia.png" },
    { name: "New Zealand", flag: "/flags/newzealand.png" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600">
          We Provide Services In
        </h2>
      </div>

      {/* ✅ Scrolling flags */}
      <div className="flags-marquee">
        <div className="flags-marquee-track gap-12">
          {[...countries, ...countries].map((country, i) => (
            <div key={i} className="flex flex-col items-center min-w-[120px]">
              <Image
                src={country.flag}
                alt={country.name}
                width={100}
                height={100}
                className="rounded-full shadow-md"
              />
              <p className="mt-2 text-gray-700">{country.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
