import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FiDownload } from "react-icons/fi";
import profilePic from "../assets/profile.jpg";

const Home = () => (
  <section
    id="home"
    className="flex flex-col-reverse lg:flex-row items-center gap-12 py-24"
  >
    <div className="flex-1 space-y-10">
      <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Durgesh Patel</h1>
      <p className="text-lg text-gray-600">
        Full-stack developer with hands-on experience in building and deploying
        modern web applications,{" "}
        <span className="font-mono text-sm bg-gray-100 px-1 rounded">
          solving 250+ LeetCode problems
        </span>
        , leading teams, and working directly with clients to deliver scalable,
        production-ready solutions.
      </p>
      <a
        href="https://drive.google.com/file/d/1yebu5b8nmMd1owNjiE-JJw0Xk_f_CUa9/view?usp=drive_link"
        download
        className="inline-flex items-center bg-emerald-500 text-white px-5 py-3 rounded-lg hover:bg-emerald-600 transition"
      >
        <FiDownload className="mr-2 text-xl" />
        Download Resume
      </a>
      <p className="text-xl text-gray-700">
        {" "}
        I am
        <Typewriter
          words={[" SDE,", " Full‑Stack Developer,", " Problem Solver."]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </p>
    </div>
    <div className="flex-1">
      <img
        src={profilePic}
        alt="Profile"
        className="w-56 h-56 rounded-full mx-auto object-cover shadow-lg animate-float "
      />
    </div>
  </section>
);

export default Home;
