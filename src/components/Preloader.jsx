import { motion } from "framer-motion";

export default function Preloader({ flipped }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        className="relative w-full h-32 sm:h-40 md:h-48 flex items-center justify-center perspective"
        initial={false}
        animate={{
          rotateY: flipped ? 180 : 0,
        }}
        transition={{ duration: 1 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute backface-hidden text-4xl sm:text-5xl md:text-6xl text-emerald-500 font-mono font-bold">
          &lt;/&gt;
        </div>

        <div className="absolute backface-hidden text-2xl sm:text-3xl md:text-4xl text-gray-800 font-semibold transform rotate-y-180">
          Welcome to My Portfolio
        </div>
      </motion.div>
    </div>
  );
}
