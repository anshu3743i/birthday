import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import image from "../imagess/WhatsApp Image 2026-09-25 at 01.51.37.jpeg";

const message =
  "ky msg du yad ni ara hai nind ara hai yar me milke deta hu message motki abhi ke liye happy birthday.";

const PageSix = () => {
  const [opened, setOpened] = useState(false);
  const [text, setText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!opened) return;

    let index = 0;

    const typing = setInterval(() => {
      setText(message.slice(0, index + 1));
      index++;

      if (index >= message.length) {
        clearInterval(typing);
      }
    }, 60);

    return () => clearInterval(typing);
  }, [opened]);

  const openGift = () => {
    setOpened(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200 flex items-center justify-center px-5 py-10 overflow-hidden">

      {/* ================= GIFT SCREEN ================= */}
      {!opened ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
          }}
          onClick={openGift}
          className="text-center cursor-pointer"
        >
          <div className="absolute top-10 left-10 text-3xl">
            ✨
          </div>

          <div className="absolute top-20 right-12 text-2xl">
            ⭐
          </div>

          <div className="absolute bottom-20 left-16 text-2xl">
            🌙
          </div>

          <motion.div
            animate={{
              y: [0, -18, 0],
              rotate: [0, -4, 4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <FaGift className="text-purple-600 text-[140px] mx-auto" />
          </motion.div>

          <motion.h2
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-3xl font-bold text-purple-700 mt-8"
          >
            One Last Surprise 🎁
          </motion.h2>

          <p className="text-purple-600 mt-3 text-lg">
            Open kar motki 😴💗
          </p>
        </motion.div>
      ) : (

        /* ================= OPENED SCREEN ================= */
        <div className="w-full max-w-6xl">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-purple-700">
              Okay Motki... 😴💗
            </h1>

            <p className="text-purple-500 mt-2">
              Neend aa rahi hai toh short message hi sahi 😂
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">

            {/* ================= IMAGE ================= */}
            <motion.div
              initial={{
                opacity: 0,
                x: -100,
                rotate: -8,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: 0,
              }}
              transition={{
                duration: 1,
                type: "spring",
              }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-purple-300/40 blur-2xl rounded-full" />

              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="relative bg-white p-3 rounded-3xl shadow-2xl"
              >
                <img
                  src={image}
                  alt="Birthday memory"
                  className="w-72 h-80 md:w-[380px] md:h-[430px] object-cover rounded-2xl"
                />

                <div className="absolute bottom-5 left-0 right-0 text-center">
                  <span className="bg-white/90 px-5 py-2 rounded-full text-purple-600 font-bold shadow">
                    Motki 💗
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -top-7 -right-7 text-5xl"
              >
                🌙
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute -bottom-5 -left-5 text-4xl"
              >
                💤
              </motion.div>
            </motion.div>

            {/* ================= MESSAGE ================= */}
            <motion.div
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
              }}
              className="w-full md:w-1/2"
            >
              <div className="relative bg-white/70 backdrop-blur-lg rounded-[2rem] p-7 md:p-10 shadow-2xl border border-white">

                <div className="absolute top-4 right-6 text-xl">
                  ✨
                </div>

                <div className="absolute bottom-5 left-5 text-xl">
                  💜
                </div>

                <h2 className="text-3xl font-bold text-purple-700 mb-6">
                  Ek Important Message 😂
                </h2>

                <p className="text-lg md:text-xl text-purple-900 leading-relaxed min-h-[150px]">
                  {text}
                  <span className="animate-pulse">|</span>
                </p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                  className="text-center mt-6 text-purple-500 italic"
                >
                  Ab jaa so ja motki 😴😂
                </motion.p>
              </div>

              {/* PAGE 6 → PAGE 7 */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 3.5,
                }}
                className="flex justify-center mt-7"
              >
                <button
                  onClick={() => navigate("/page7")}
                  className="px-8 py-3 bg-purple-600 text-white font-bold rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition duration-300"
                >
                  One Last Surprise 💝
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageSix;