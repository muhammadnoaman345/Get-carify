export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="w-full bg-white shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold text-blue-600">Carify</h1>
        <nav>
          <a href="/" className="px-3">Home</a>
          <a href="/pricing" className="px-3">Pricing</a>
          <a href="/contact" className="px-3">Contact</a>
        </nav>
      </header>

      <main className="p-10 max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="bg-white p-6 shadow rounded-lg space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border px-4 py-2 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border px-4 py-2 rounded"
            rows="4"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full">
            Send
          </button>
        </form>
      </main>
    </div>
  );
}
