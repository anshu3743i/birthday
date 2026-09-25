import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import image from "../imagess/WhatsApp Image 2026-09-25 at 01.51.37.jpeg";

const message =
  "Happy Birthday motki 😂🎂Umar badh rahi hai, par harkatein abhi bhi same hain 🤣❤️Hamesha aise hi pagal rehna! 🫂";

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
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-10 overflow-x-hidden">

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
          <div className="absolute top-6 left-5 sm:top-10 sm:left-10 text-2xl sm:text-3xl">
            ✨
          </div>

          <div className="absolute top-14 right-6 sm:top-20 sm:right-12 text-xl sm:text-2xl">
            ⭐
          </div>

          <div className="absolute bottom-14 left-8 sm:bottom-20 sm:left-16 text-xl sm:text-2xl">
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
            <FaGift className="text-purple-600 text-[100px] sm:text-[140px] mx-auto" />
          </motion.div>

          <motion.h2
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-2xl sm:text-3xl font-bold text-purple-700 mt-6 sm:mt-8"
          >
            One Last Surprise 🎁
          </motion.h2>

          <p className="text-purple-600 mt-2 sm:mt-3 text-base sm:text-lg">
            Open kar motki 😴💗
          </p>
        </motion.div>
      ) : (
        <div className="w-full max-w-6xl pb-8">

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 sm:mb-8"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-purple-700 leading-tight">
              Okay Motki... 😴💗
            </h1>

            <p className="text-sm sm:text-base text-purple-500 mt-2">
              Neend aa rahi hai toh short message hi sahi 😂
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10">

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
              className="relative w-full flex justify-center"
            >
              <div className="absolute -inset-3 sm:-inset-4 bg-purple-300/40 blur-2xl rounded-full" />

              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="relative bg-white p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl shadow-2xl"
              >
                <img
                  src={image}
                  alt="Birthday memory"
                  className="w-[75vw] max-w-[320px] h-[85vw] max-h-[380px] sm:w-72 sm:h-80 md:w-[380px] md:h-[430px] object-cover rounded-xl sm:rounded-2xl"
                />

                <div className="absolute bottom-4 sm:bottom-5 left-0 right-0 text-center px-2">
                  <span className="bg-white/90 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-purple-600 text-sm sm:text-base font-bold shadow">
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
                className="absolute -top-5 sm:-top-7 -right-2 sm:-right-7 text-3xl sm:text-5xl"
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
                className="absolute -bottom-4 sm:-bottom-5 -left-2 sm:-left-5 text-2xl sm:text-4xl"
              >
                💤
              </motion.div>
            </motion.div>

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
              <div className="relative bg-white/70 backdrop-blur-lg rounded-2xl sm:rounded-[2rem] p-5 sm:p-7 md:p-10 shadow-2xl border border-white">

                <div className="absolute top-3 sm:top-4 right-4 sm:right-6 text-lg sm:text-xl">
                  ✨
                </div>

                <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 text-lg sm:text-xl">
                  💜
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-4 sm:mb-6">
                  Ek Important Message 😂
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-purple-900 leading-relaxed min-h-[130px] sm:min-h-[150px]">
                  {text}
                  <span className="animate-pulse">|</span>
                </p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                  className="text-center mt-5 sm:mt-6 text-sm sm:text-base text-purple-500 italic"
                >
                  Ab jaa so ja motki 😴😂
                </motion.p>
              </div>

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
                className="flex justify-center mt-5 sm:mt-7"
              >
                <button
                  onClick={() => navigate("/page7")}
                  className="px-6 sm:px-8 py-3 bg-purple-600 text-white text-sm sm:text-base font-bold rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition duration-300"
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