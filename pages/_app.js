import "../styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      {/* ✅ Tawk.to Live Chat */}
      <Script
        id="tawk-to"
        src="https://embed.tawk.to/68bde50d67c586192c66aa63/1j4isdfct"
        strategy="afterInteractive"
      />
    </>
  );
}
