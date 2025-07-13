import React, { useState } from "react";
import { useForm } from "@formspree/react";
import swal from "sweetalert2";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const [formSubmit, handleFormSubmit] = useForm("movwoowk");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(form.email)) {
      swal.fire({
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        icon: "error",
      });
      return;
    }

    handleFormSubmit(e);
    setForm({ name: "", email: "", subject: "", description: "" });

    swal.fire({
      title: "Thanks for reaching out! 👍",
      text: "Got your message!",
      icon: "success",
    });
  };

  return (
    <>
      <section
        id="contact"
        className="py-14 px-4 sm:px-6 flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg space-y-6 flex flex-col items-center"
        >
          {["name", "subject"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="w-[90%] sm:w-[80%] px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          ))}

          {/* Email Field */}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-[90%] sm:w-[80%] px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />

          {/* Message */}
          <textarea
            name="description"
            rows="5"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-[90%] sm:w-[80%] px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />

          <button
            type="submit"
            className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition w-[90%] sm:w-[80%]"
          >
            Send Message
          </button>
        </form>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-emerald-500 via-sky-400 to-purple-500 rounded-full mx-auto my-6"></div>

      <p className="text-center text-gray-600 font-mono text-sm">
        Crafted by <span className="font-bold">Durgesh Patel</span> • Problem
        solver • Lifelong learner
      </p>
    </>
  );
};

export default Contact;
