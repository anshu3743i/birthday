import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import image1 from "../images/WhatsApp Image 2026-09-20 at 22.35.05 (3).jpeg";
import image2 from "../images/WhatsApp Image 2026-09-20 at 22.35.05.jpeg";
import image3 from "../images/WhatsApp Image 2026-09-20 at 22.53.47.jpeg";
import image4 from "../images/WhatsApp Image 2026-09-20 at 22.53.48.jpeg";
import image5 from "../images/WhatsApp Image 2026-09-20 at 22.53.51 (1).jpeg";
import image6 from "../images/WhatsApp Image 2026-09-20 at 22.53.51 (2).jpeg";
import image7 from "../images/WhatsApp Image 2026-09-20 at 22.53.54.jpeg";
import image8 from "../images/WhatsApp Image 2026-09-20 at 22.53.58 (1).jpeg";
import image9 from "../images/WhatsApp Image 2026-09-20 at 22.53.59.jpeg";

const PageTwo = () => {
  const navigate = useNavigate();

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-200 via-rose-100 to-yellow-100 px-4 sm:px-6 md:px-8 py-8 sm:py-10 overflow-x-hidden">

      <motion.h1
        initial={{
          opacity: 0,
          y: -40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-rose-600 mb-4 leading-tight"
      >
        Some Beautiful Memories 💗
      </motion.h1>

      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: [0, 6, 0],
        }}
        transition={{
          opacity: {
            duration: 0.8,
          },
          y: {
            duration: 1.5,
            repeat: Infinity,
          },
        }}
        className="text-right max-w-6xl mx-auto pr-1 sm:pr-2 mb-6 sm:mb-8"
      >
        <p className="text-rose-500 font-semibold text-base sm:text-lg md:text-xl">
          Scroll karo... ↓
        </p>
      </motion.div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 md:gap-7">

        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: index % 2 === 0 ? -8 : 8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
              type: "spring",
              stiffness: 120,
            }}
            className="w-full"
          >
            <motion.img
              src={image}
              alt={`Memory ${index + 1}`}
              whileHover={{
                scale: 1.05,
                rotate: index % 2 === 0 ? 2 : -2,
              }}
              transition={{
                duration: 0.3,
              }}
              className="w-full aspect-square sm:aspect-[4/5] md:aspect-auto h-auto md:h-72 object-cover rounded-xl sm:rounded-2xl shadow-xl border-2 sm:border-4 border-white"
            />
          </motion.div>
        ))}

      </div>

      <motion.button
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 2.8,
        }}
        onClick={() => navigate("/page3")}
        className="block mx-auto mt-10 sm:mt-12 px-6 sm:px-8 py-3 bg-rose-500 text-white font-bold text-base sm:text-lg rounded-full shadow-lg hover:bg-rose-600 hover:scale-105 transition"
      >
        There's More 💝
      </motion.button>

    </div>
  );
};

export default PageTwo;