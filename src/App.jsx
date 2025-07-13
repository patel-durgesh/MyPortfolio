import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Preloader from "./components/Preloader.jsx";
import Welcome from "./components/Welcome.jsx";
import { useEffect, useState } from "react";

function App() {
  const [phase, setPhase] = useState("loading"); // 'loading', 'flipped', 'done'

  useEffect(() => {
    const flipTimer = setTimeout(() => setPhase("flipped"), 2000);
    const doneTimer = setTimeout(() => setPhase("done"), 4000);

    return () => {
      clearTimeout(flipTimer);
      clearTimeout(doneTimer);
    };
  }, []);
  return (
    <>
      {phase !== "done" && <Preloader flipped={phase === "flipped"} />}
      {phase === "done" && (
        <div className="bg-white text-gray-800 ">
          <Navbar />
          <main className="space-y-24 px-6 md:px-16 lg:px-32 py-12">
            <Home />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
