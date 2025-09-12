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

    // Combine message with sender email
    const fullMessage = `${formData.message}\n\nSender Email: ${formData.from_email}`;

    // Create a FormData object so EmailJS still works
    const updatedForm = new FormData(form.current);
    updatedForm.set("message", fullMessage);

    emailjs
      .sendForm(
        "service_1hapoys", // service ID
        "template_unsiegl", // template ID
        form.current,
        "LJvpAtmXpRNKNg-7g" // public key
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
    <form ref={form} onSubmit={sendEmail} className="space-y-4">
      <div>
        <label className="block text-sm text-gray-300">Your Name</label>
        <input
          type="text"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          className="w-full rounded-md p-2 text-black"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-gray-300">Your Email</label>
        <input
          type="email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          className="w-full rounded-md p-2 text-black"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-gray-300">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-md p-2 text-black"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
