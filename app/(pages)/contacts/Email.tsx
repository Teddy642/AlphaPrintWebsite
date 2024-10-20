'use client'
import { useState } from "react";

export default function EmailPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Email sent successfully!");
    } else {
      alert("Failed to send email.");
    }
  };

  return (
    <section className="mx-w-6xl mx-auto mt-20">
      <div className="mt-10 text-3xl text-center" >Email us and we will reach you</div>
      <div className="mt-10">
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white shadow-lg p-8 rounded-lg border-2"
        >
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="border border-gray-300 rounded-lg p-3 w-full"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-lg p-3 w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="border border-gray-300 rounded-lg p-3 w-full"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="border border-gray-300 rounded-lg p-3 w-full"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
