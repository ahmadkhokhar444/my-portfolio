"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SendEmailPng from "../../assets/mail.png";
import Image from "next/image";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "", // Corrected to match input name
    from_email: "", // Corrected to match input name
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.from_name.trim()) newErrors.from_name = "Name is required";
    if (!formData.from_email.trim()) newErrors.from_email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.from_email))
      newErrors.from_email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSending(true);

    emailjs
      .sendForm(
        "service_2fzcshm", // service ID
        "template_unsiegl", // template ID
        form.current,
        "LJvpAtmXpRNKNg-7g" // public key
      )
      .then(() => {
        alert("Email sent successfully!");
        setFormData({ from_name: "", from_email: "", message: "" });
        setErrors({});
      })
      .catch(() => {
        alert("Failed to send email.");
      })
      .finally(() => setSending(false));
  };

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center py-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Form section */}
        <div className="flex justify-center items-center order-2 md:order-1">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="bg-[#8B0000] p-10 rounded-xl w-full max-w-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">Get in touch</h2>

            {/* Name */}
            <div className="mb-6">
              <label className="block text-sm mb-2 text-gray-300">Name</label>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border border-transparent bg-black/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300 ${
                  errors.from_name ? "border-red-500" : ""
                }`}
              />
              {errors.from_name && (
                <p className="text-red-500 text-sm mt-1">{errors.from_name}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-sm mb-2 text-gray-300">Email</label>
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border border-transparent bg-black/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300 ${
                  errors.from_email ? "border-red-500" : ""
                }`}
              />
              {errors.from_email && (
                <p className="text-red-500 text-sm mt-1">{errors.from_email}</p>
              )}
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm mb-2 text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full p-3 rounded-lg border border-transparent bg-black/20 text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300 ${
                  errors.message ? "border-red-500" : ""
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Email"}
              </button>
            </div>
          </form>
        </div>

        {/* Image section */}
        <div className="flex justify-center items-center order-1 md:order-2">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src={SendEmailPng}
              alt="Sending email"
              layout="fill"
              objectFit="contain"
              className="transform transition-transform duration-300"
              style={{
                animation: "float-diagonal 3s infinite ease-in-out",
              }}
            />
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes float-diagonal {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-20px, -20px) rotate(-5deg);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
