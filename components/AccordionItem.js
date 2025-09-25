export default function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border border-gray-700 rounded-lg">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-6 py-4 text-left text-white hover:bg-gray-800 focus:outline-none"
      >
        <span className="font-medium">{question}</span>
        <span className="text-green-500">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
}
