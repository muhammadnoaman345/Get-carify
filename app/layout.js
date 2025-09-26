import '../styles/globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "The Vehicle Audit",
  description: "Get reliable vehicle history reports you can trust.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />  {/* ✅ Footer on every page */}
      </body>
    </html>
  );
}
