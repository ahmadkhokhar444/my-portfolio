"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SendEmailPng from "../../assets/mail.png";
import Image from "next/image";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "", // Corrected to 'name' to match the form state keys
    email: "", // Corrected to 'email' to match the form state keys
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
        "service_2fzcshm", // service ID
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
