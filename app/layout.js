import '../styles/globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "The Vehicle Audit",
  description: "Get reliable vehicle history reports you can trust.",
  icons: {
    icon: "/favicon.ico", // ✅ this will use the favicon in public/
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="pt-40">{children}</main>
        <Footer />  {/* ✅ Footer on every page */}
      </body>
    </html>
  );
}
