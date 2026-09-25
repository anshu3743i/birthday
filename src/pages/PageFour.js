import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import image from "../imagess/WhatsApp Image 2026-09-22 at 01.07.52.jpeg";

const message =
  "Tu motki mai chhutki 💃 let's nacho.... " +
  "Tere saath har moment apne aap special ban jaata hai. " +
  "Teri photos mein bhi kitni khushi hoti hai, especially jab meri company mein tu itni happy hoti hai 😂❤️ " +
  "Aur haan, archu ke samne mujhe kabhi mat bhoolna 😭😂 " +
  "Your chhutki loves both of you ❤️";

const PageFour = () => {
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
    }, 50);

    return () => clearInterval(typing);
  }, [opened]);

  const openGift = () => {
    setOpened(true);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-yellow-100 via-pink-100 to-rose-200 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-10 overflow-x-hidden">

      {!opened ? (
        <motion.div
          initial={{
            scale: 0,
            rotate: -20,
          }}
          animate={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
          }}
          onClick={openGift}
          className="text-center cursor-pointer"
        >
          <motion.div
            animate={{
              rotate: [0, -10, 10, -10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <FaGift className="text-pink-600 text-[100px] sm:text-[150px] mx-auto" />
          </motion.div>

          <h2 className="text-2xl sm:text-3xl font-bold text-pink-700 mt-6 sm:mt-8">
            One More Gift 🎁
          </h2>

          <p className="text-sm sm:text-base text-pink-600 mt-2">
            Open me 💗
          </p>
        </motion.div>
      ) : (
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 pb-20">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              rotate: -180,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1.2,
              type: "spring",
              stiffness: 100,
            }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <motion.div
              animate={{
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative bg-white p-2.5 sm:p-4 pb-10 sm:pb-12 shadow-2xl rounded-lg"
            >
              <img
                src={image}
                alt="Birthday memory"
                className="w-[75vw] max-w-[320px] h-[85vw] max-h-[380px] sm:w-72 sm:h-80 md:w-96 md:h-[430px] object-cover rounded-md"
              />

              <p className="absolute bottom-2 sm:bottom-3 left-0 right-0 text-center text-pink-600 font-bold text-sm sm:text-lg">
                My Motki 💗
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            className="w-full md:w-1/2 bg-white/70 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-10 shadow-xl"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 mb-4 sm:mb-6">
              Tu Motki, Mai Chhutki 💃
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-pink-900 leading-relaxed">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>

          <motion.button
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 3,
            }}
            onClick={() => navigate("/page5")}
            className="fixed bottom-4 sm:bottom-6 px-6 sm:px-8 py-3 bg-pink-500 text-white text-sm sm:text-base font-bold rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transition z-20"
          >
            Next Surprise 💝
          </motion.button>

        </div>
      )}
    </div>
  );
};

export default PageFour;