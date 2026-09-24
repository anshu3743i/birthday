import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import image from "../images/WhatsApp Image 2026-09-20 at 22.32.58.jpeg";

const PageOne = () => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const sparkles = Array.from({ length: 35 });

  const openGift = () => {
    setOpened(true);

    setTimeout(() => {
      navigate("/page2");
    }, 3500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-rose-200 to-yellow-100 overflow-hidden relative px-5">

      {/* Sparkles */}
      {opened &&
        sparkles.map((_, index) => (
          <motion.div
            key={index}
            className="absolute text-yellow-400 text-xl"
            initial={{
              x: "50vw",
              y: "50vh",
              scale: 0,
              opacity: 1,
            }}
            animate={{
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              scale: [0, 1.5, 0],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 0.5,
            }}
          >
            ✨
          </motion.div>
        ))}

      {/* Main Content */}
      <div className="text-center z-10">

        {!opened ? (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
              }}
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                onClick={openGift}
                className="cursor-pointer"
              >
                <FaGift className="text-rose-600 text-[150px] mx-auto drop-shadow-xl" />
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
              }}
              className="mt-8 text-2xl font-bold text-rose-700"
            >
              Tap the gift 🎁
            </motion.p>
          </>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
            }}
            className="flex flex-col items-center"
          >

            {/* Highlighted Image */}
            <motion.div
              initial={{
                scale: 0.5,
                rotate: -8,
              }}
              animate={{
                scale: [0.5, 1.08, 1],
                rotate: 0,
              }}
              transition={{
                duration: 1.2,
                type: "spring",
                stiffness: 100,
              }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-3xl bg-white/60 blur-md" />

              <img
                src={image}
                alt="Birthday memory"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl border-8 border-white shadow-2xl"
              />
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
              }}
              className="mt-8 text-4xl md:text-6xl font-bold text-rose-700"
            >
              Happy Birthday! 🎉
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
              }}
              className="mt-4 text-xl md:text-2xl font-semibold text-rose-600"
            >
              This little surprise is just for you 💗
            </motion.p>

          </motion.div>
        )}

      </div>
    </div>
  );
};

export default PageOne;