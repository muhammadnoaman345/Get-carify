"use client";
import { useEffect, useState } from "react";
import { Car, Gauge, Wrench, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";

export default function LoadingOverlay({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    // Progress bar animation
    let current = 0;
    const progressInterval = setInterval(() => {
      current += 1;
      setProgress(current);
      if (current >= 100) {
        clearInterval(progressInterval);
        if (onComplete) onComplete();
      }
    }, 100); // 0–100 in 10s

    // Step icons animation (1 sec apart)
    let step = 0;
    const stepInterval = setInterval(() => {
      setActiveStep(step);
      step++;
      if (step >= icons.length) clearInterval(stepInterval);
    }, 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [onComplete]);

  const icons = [
    { Icon: Car, label: "Vehicle Lookup" },
    { Icon: Gauge, label: "Mileage Check" },
    { Icon: Wrench, label: "Service Records" },
    { Icon: ShieldCheck, label: "Accident History" },
    { Icon: FileText, label: "Title & Ownership" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
      {/* Title */}
      <h2 className="text-2xl font-bold text-white mb-8 animate-pulse">
        Generating Your Report...
      </h2>

      {/* Progress bar */}
      <div className="w-3/4 bg-gray-700 rounded-full h-4 mb-6 overflow-hidden">
        <div
          className="bg-green-500 h-4 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-white text-sm mb-6">{progress}%</p>

      {/* Icons appearing step by step */}
      <div className="flex gap-10">
        {icons.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-center transition-all duration-700 ${
              i <= activeStep ? "opacity-100 scale-100" : "opacity-30 scale-90"
            }`}
          >
            <div className="relative">
              <item.Icon
                className={`w-10 h-10 mb-2 ${
                  i <= activeStep ? "text-green-400" : "text-gray-500"
                }`}
              />
              {i <= activeStep && (
                <CheckCircle2 className="absolute -top-3 -right-3 w-5 h-5 text-green-500 animate-bounce" />
              )}
            </div>
            <span className="text-xs text-white text-center">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
