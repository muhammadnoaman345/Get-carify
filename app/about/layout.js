// app/about/layout.js
export const metadata = {
  title: "About Us | Carify",
  description: "Learn more about Carify and our vehicle history solutions",
};

export default function AboutLayout({ children }) {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 p-8">
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
}
