export default function Success() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
      <h2 className="text-3xl font-bold text-green-700">✅ Payment Successful!</h2>
      <p className="mt-4 text-gray-700">Thank you for your purchase.</p>
      <a
        href="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Go Home
      </a>
    </div>
  );
}
