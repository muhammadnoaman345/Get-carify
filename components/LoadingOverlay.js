"use client";
import { useEffect, useState } from "react";

export default function LoadingOverlay({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : 100));
      }, 100); // 100ms → 10 seconds total
      return () => clearInterval(interval);
    } else {
      // Call parent function when loading is complete
      const timeout = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex flex-col items-center justify-center text-white">
      {/* Loader bar */}
      <div className="w-3/4 max-w-lg">
        <div className="h-2 bg-gray-700 rounded-full">
          <div
            className="h-2 bg-green-500 rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-center text-lg font-semibold">
          Loading {progress}%
        </p>
      </div>

      {/* Icons */}
      <div className="grid grid-cols-3 gap-6 mt-10 text-center">
        {["Accident", "Title", "Problem", "Odometer", "Sales", "Salvage"].map(
          (item, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-green-500 text-3xl">✔</span>
              <p className="text-sm mt-2">{item}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
