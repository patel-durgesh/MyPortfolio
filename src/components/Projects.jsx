import React from "react";
import L1 from "../assets/L1.jpg";
import L2 from "../assets/L2.jpg";
import L3 from "../assets/L3.jpg";
import L4 from "../assets/L4.jpg";
import L5 from "../assets/L5.jpg";

const projects = [
  {
    image: L5,
    title: "Idevify Solutions PVT LTD",
    description:
      "A responsive web application built using React for dynamic UI, styled with Bootstrap for layout and design, and enhanced with smooth animations using libraries like AOS or Framer Motion for engaging user experiences.",
    tech: ["React", "Bootstrap", "GSAP", "AOS"],
    link: "https://idevifysolutions.com/",
  },
  {
    image: L1,
    title: "SunderJag Holidays",
    description:
      "A full-stack MERN web application with responsive UI built using Tailwind CSS for clean, utility-first styling. Features include user authentication, RESTful API integration, and MongoDB data management.",
    tech: ["Mern Stack", "Redux", "Tailwind"],
    link: "https://sunderjagholidays.com/",
  },
  {
    image: L3,
    title: "Growbean Technologies",
    description:
      "A React application styled with Bootstrap for responsive design, integrated with React Formspree for handling contact forms. Features Google Maps API for interactive location display.",
    tech: ["React", "Bootstrap", "Formspree", "Google Maps API"],
    link: "https://growbean.in/",
  },
  {
    image: L2,
    title: "Biz-Petro",
    description:
      "A responsive React portfolio template with Tailwind CSS, showcasing projects, skills, and smooth gradient animations.",
    tech: ["React", "Framer-Motion", "AOS", "Tailwind CSS"],
    link: "https://bizpetro.com/",
  },
  {
    image: L4,
    title: "Infinity Pench Resort",
    description:
      "A modern React landing page with Tailwind styling, ideal for startups with interactive sections and contact form integration.",
    tech: ["React", "Framer-Motion", "AOS", "Tailwind CSS"],
    link: "https://theinfinityresortpench.com/",
  },
  {
    title: "Skin Tone Detection and Outfit Recommendation",
    description:
      "A web application that uses machine learning to detect skin tone from images and recommends the best-suited outfit colors based on fashion data. Built with React, Tailwind CSS, and a Python-based backend for image analysis and intelligent color matching.",
    tech: [
      "React ",
      "Tailwind ",
      "OpenCV",
      "Python",
      "TensorFlow",
      "Scikit-learn for tone classification",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-18 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-102 hover:shadow-2xl border border-transparent hover:border-emerald-200"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-24 object-contain rounded-md mb-4"
              />

              <h3 className="text-xl font-semibold mb-2">
                <span className="text-black group-hover:bg-gradient-to-tr group-hover:from-emerald-500 group-hover:via-sky-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                  {project.title}
                </span>
              </h3>

              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-emerald-100 text-emerald-700 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
