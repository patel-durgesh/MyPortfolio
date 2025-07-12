import React from "react";

const About = () => (
  <section
    id="about"
    className="py-16 relative max-w-7xl mx-auto px-4
      before:absolute before:top-0 before:left-0 before:w-24 before:h-[3px]
      before:bg-gradient-to-r before:from-emerald-500 before:to-transparent
      after:absolute after:bottom-0 after:right-0 after:w-24 after:h-[3px]
      after:bg-gradient-to-l after:from-purple-500 after:to-transparent"
  >
    <h2 className="text-3xl font-bold mb-6">About Me</h2>
    <p className="text-lg text-gray-600">
      Passionate about building scalable, efficient web applications using the
      MERN stack (MongoDB, Express.js, React, Node.js). With hands-on experience
      in full-stack development, strong problem-solving abilities, and effective
      client communication, I’m well-prepared to take on real-world challenges.
      As I complete my formal education in July 2024, I’m eager to join a
      dynamic team where I can grow as a software developer. Proficient in C,
      C++, Python, Java Full-Stack, MERN, Angular, SQL — and a dedicated problem
      solver with 250+ LeetCode problems solved.
    </p>
  </section>
);

export default About;
