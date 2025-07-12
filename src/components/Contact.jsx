import React, { useState } from "react";
import { useForm } from "@formspree/react";
import swal from "sweetalert2";

const Contact = () => {
  const [form, setForm] = useState({ name: "", subject: "", description: "" });

  const [formSubmit, handleFormSubmit] = useForm("movwoowk");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    handleFormSubmit(e);
    setForm({ name: "", subject: "", description: "" });
    swal.fire({
      title: "Thanks to reaching us!! 👍",
      text: "Got your message!!!",
      icon: "success",
    });
  };

  return (
    <>
      <section id="contact" className="py-24 px-20 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 ">Contact</h2>
        <form onSubmit={handleSubmit} className="max-w-lg space-y-6">
          {["name", "subject"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          ))}
          <textarea
            name="description"
            rows="5"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
          <button
            type="submit"
            className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition"
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
