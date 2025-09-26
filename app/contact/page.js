export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center pt-44 pb-20 px-6">
      {/* Contact Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-green-600">
        
        {/* Left Side - Text */}
        <div className="flex flex-col justify-center text-white p-10 md:p-14">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-green-500">
            Let’s get in touch!
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Have questions? We’ve got answers. Reach out to us for any queries 
            about our reports, pricing, or services. We’ll get back to you quickly 
            so you can make the best decision with confidence.
          </p>
          <div className="mt-8 space-y-4 text-gray-300">
            <p><strong className="text-green-500">📧 Email:</strong> info@thevehicleaudit.com</p>
            <p><strong className="text-green-500">📞 Phone:</strong> +44-7577-303327</p>
            <p><strong className="text-green-500">⏰ Office Hours:</strong> Mon - Fri (9 AM - 5 PM)</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-8 md:p-10 flex flex-col justify-center">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-800">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-800">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-800">Phone No</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-800">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none resize-none transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
