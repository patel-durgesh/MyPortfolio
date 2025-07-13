import React, { useState } from "react";

const experiences = [
  {
    title: "Mern Stack Developer at Idevify Solutions",
    period: "01/2024 - 07/2024",
    details:
      "Full-stack developer with hands-on experience in the MERN stack (MongoDB, Express.js, React, Node.js). Skilled in solving complex problems, leading development teams, and communicating effectively with clients to deliver tailored solutions. Confident in handling end-to-end deployment processes and building scalable, production-ready applications.",
  },
  {
    title: "Mern Stack Developer at KeyLong System",
    period: "07/2024 - 02/2025",
    details:
      "I specialize in the MERN stack and enjoy working closely with clients to understand their needs. Problem-solving is one of my core strengths, and I thrive on turning challenges into clean, effective solutions.",
  },
  {
    title: "Software Engineer at TCS",
    period: "03/2025 – Present",
    details:
      "Experienced in working with Angular, Java, and PL/SQL, with additional exposure to Java-based stacks involving H2 and Derby databases. Comfortable navigating Unix environments and adapting to different backend technologies as project needs evolve.",
  },
];
let element = experiences[0]["period"];
let date = new Date();

let startDateParts = element.split(" - ")[0].split("/");
let startMonth = parseInt(startDateParts[0], 10);
let startYear = parseInt(startDateParts[1], 10);

let currentMonth = date.getMonth() + 1;
let currentYear = date.getFullYear();

let yearDiff = currentYear - startYear;
let monthDiff = currentMonth - startMonth;

if (monthDiff < 0) {
  yearDiff -= 1;
  monthDiff += 12;
}

let experienceYears = yearDiff + monthDiff / 12;

const Experience = () => (
  <section id="experience" className="py-24">
    <h2 className="text-3xl font-bold mb-6">
      Experience [{experienceYears}]yrs
    </h2>
    <div className="flex space-x-6 overflow-x-auto pb-4 snap-x">
      {experiences.map((exp, i) => (
        <div
          key={i}
          className="min-w-[300px] bg-white border-l-4 border-emerald-500 p-6 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] snap-start hover:scale-105 transition-transform"
        >
          <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
          <p className="text-sm italic text-gray-500 mb-3">{exp.period}</p>
          <p className="text-gray-700">{exp.details}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
