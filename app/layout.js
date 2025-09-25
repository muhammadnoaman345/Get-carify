// app/layout.js
import "../styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "The Vehicle Audit",
  description: "Get comprehensive vehicle history reports",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <main className="pt-24 px-6">{children}</main>
      </body>
    </html>
  );
}
