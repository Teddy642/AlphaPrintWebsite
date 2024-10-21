'use client'
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EmailPage() {

  const router = useRouter()

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
      <div className=" flex justify-center" >
      <Link href="tel:+255756577194" className="px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-md">
       Get In Touch
          </Link>

      </div>
     
      <div className="mt-10 text-3xl text-center text-black/65" >Email us and we will reach you</div>
      <div className="mt-10  p-5 md:p-0">
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white shadow-lg p-8 rounded-lg border-2"
        >
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold mb-2 text-black"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="border border-gray-300 rounded-lg p-3 w-full text-black"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-lg p-3 w-full text-black"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-black">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="border border-gray-300 rounded-lg p-3 w-full text-black"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2 text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="border border-gray-300 rounded-lg p-3 w-full text-black"
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
