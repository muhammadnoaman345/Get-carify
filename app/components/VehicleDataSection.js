"use client";
import React from "react";

export default function VehicleDataSection({ formRef }) {
  return (
    <section ref={formRef} id="vehicle-form" className="py-12">
      <h1 className="text-center text-3xl font-bold">Enter Vehicle Details</h1>
      <div className="mt-6 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Enter VIN or License Plate"
          className="w-full p-3 border rounded"
        />
      </div>
    </section>
  );
}
