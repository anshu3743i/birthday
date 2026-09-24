import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import image from "../imagess/WhatsApp Image 2026-09-22 at 01.06.57.jpeg";
const message =
  "Bindu ❤️ " +
  "Tu meri life ki un special people mein se hai jinke bina sab kuch thoda incomplete sa lagta hai. " +
  "Hamari bonding bilkul Wi-Fi jaisi hai 📶❤️ " +
  "Kabhi signal strong, kabhi weak, " +
  "par connection kabhi disconnect nahi hota 😂. " +
  "Chahe kitni bhi doori ho, connection hamesha bana rahega. " +
  "Happie Birthday Bindu 🎂💗";

const PageFive = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 flex items-center justify-center px-5 py-10 overflow-hidden">

      {!opened ? (
        /* Gift Screen */
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
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
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <FaGift className="text-purple-600 text-[150px] mx-auto" />
          </motion.div>

          <h2 className="text-3xl font-bold text-purple-700 mt-8">
            A Gift For Bindu 🎁
          </h2>

          <p className="text-purple-600 mt-2">
            Click to open 💜
          </p>
        </motion.div>
      ) : (
        /* Opened Screen */
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10">

          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
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
            className="w-full md:w-1/2 flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="relative"
            >
              {/* Circle Image */}
              <div className="rounded-full p-3 bg-white shadow-2xl">

                <img
                  src={image}
                  alt="Birthday memory"
                  className="w-96 h-96 md:w-[500px] md:h-[500px] object-cover rounded-full border-8 border-pink-300"
                />

              </div>

              {/* Top Heart */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute -top-5 -right-5 text-5xl"
              >
                💗
              </motion.div>

              {/* Bottom Heart */}
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="absolute -bottom-5 -left-5 text-5xl"
              >
                💕
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Message */}
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
              delay: 0.5,
            }}
            className="w-full md:w-1/2 bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">
              Bindu 💜
            </h1>

            <p className="text-lg md:text-xl text-purple-900 leading-relaxed">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>

          {/* Next Button */}
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
            onClick={() => navigate("/page6")}
            className="fixed bottom-6 px-8 py-3 bg-purple-500 text-white font-bold rounded-full shadow-lg hover:bg-purple-600 hover:scale-105 transition"
          >
            Next Surprise 💝
          </motion.button>

        </div>
      )}
    </div>
  );
};

export default PageFive;