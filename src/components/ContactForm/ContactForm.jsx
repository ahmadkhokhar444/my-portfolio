import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Combine message with sender email
    const fullMessage = `${formData.message}\n\nSender Email: ${formData.from_email}`;

    // Create a FormData object so EmailJS still works
    const updatedForm = new FormData(form.current);
    updatedForm.set("message", fullMessage);

    emailjs
      .send(
        "service_yxhy7jh", // your service ID
        "template_unsiegl", // your template ID
        Object.fromEntries(updatedForm), // convert to plain object
        "jPNUhxkjRUQmUN-ZQ" // your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
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
