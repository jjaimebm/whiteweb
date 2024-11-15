// components/Modal.tsx
"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [phone, setPhone] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission
            alert("Form submitted!");
            onClose();
          }}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Preferred Contact Method</label>
            <select className="w-full border px-3 py-2 rounded">
              <option>Email</option>
              <option>Phone</option>
              <option>WhatsApp</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={setPhone}
              inputClass="w-full border rounded"
              containerClass="w-full"
              inputProps={{
                name: "phone",
                required: true,
                placeholder: "Enter your phone number",
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              required
              className="w-full border px-3 py-2 rounded"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Available Times for a Call</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              placeholder="e.g., Mon-Fri 9am-5pm"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Additional Notes (Optional)</label>
            <textarea
              className="w-full border px-3 py-2 rounded"
              placeholder="Share any specific needs or details you want to get from Whitepixel..."
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded font-semibold hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
