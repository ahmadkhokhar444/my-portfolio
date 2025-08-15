"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SendEmailPng from "../../assets/mail.png";
import Image from "next/image";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Email is invalid";
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

    // Append sender email to message
    const fullMessage = `${formData.message}\n\nSender Email: ${formData.email}`;
    form.current.message.value = fullMessage;

    emailjs
      .sendForm(
        "service_1hapoys", // your service ID
        "template_unsiegl", // your template ID
        form.current,
        "LJvpAtmXpRNKNg-7g" // your public key
      )
      .then(() => {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      })
      .catch(() => {
        alert("Failed to send email.");
      })
      .finally(() => setSending(false));
  };

  return (
    <section className="bg-black text-white py-24">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Form section */}
        <div className="flex justify-center items-center">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="bg-primary/45 p-8 rounded-xl w-full max-w-lg"
          >
            <h2 className="text-2xl mb-4">Get in touch</h2>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-white/30">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md bg-black text-white ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-white/30">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md bg-black text-white ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block text-white/30">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-4 border rounded-md bg-black text-white ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="btn mt-4 px-8"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Email"}
            </button>
          </form>
        </div>

        {/* Image section */}
        <div className="hidden md:flex justify-center items-center">
          <Image
            src={SendEmailPng}
            alt="send email"
            className="w-[300px] animate-rocket"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
