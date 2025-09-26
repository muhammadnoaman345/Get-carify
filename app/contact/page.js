export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center pt-32 pb-16 px-6">
      {/* Contact Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-green-600 rounded-2xl shadow-lg overflow-hidden">
        
        {/* Left Side - Text */}
        <div className="flex flex-col justify-center text-white p-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s get in touch!
          </h1>
          <p className="text-lg leading-relaxed">
            Have questions? We’ve got answers. Reach out to us for any queries 
            about our reports, pricing, or services. We’ll get back to you quickly 
            so you can make the best decision with confidence.
          </p>
          <div className="mt-6 space-y-3">
            <p><strong>Email:</strong> info@thevehicleaudit.com</p>
            <p><strong>Phone:</strong> +92-XXX-XXXXXXX</p>
            <p><strong>Office Hours:</strong> Mon - Sat (9 AM - 7 PM)</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-8 rounded-2xl md:rounded-none shadow-md flex flex-col justify-center">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-1">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full border border-green-500 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-green-500 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Phone No</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-green-500 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full border border-green-500 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
