import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import image from "../imagess/WhatsApp Image 2026-09-22 at 00.50.57.jpeg";

const message =
  "Bro, mere liye tu or tere liye mai hmesha hain... " +
  "Chahe kitni bhi door ho jayein, hamari dosti hamesha dil ke paas rahegi. " +
  "Tu meri life ka ek bahut special part hai. " +
  "Happie birthday my chatar patar 💗🍻💃🫂";

const PageThree = () => {
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
    }, 55);

    return () => clearInterval(typing);
  }, [opened]);

  const openGift = () => {
    setOpened(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-yellow-100 flex items-center justify-center px-5 py-10 overflow-hidden">

      {/* ================= GIFT SCREEN ================= */}
      {!opened ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
          }}
          className="text-center cursor-pointer"
          onClick={openGift}
        >
          {/* Floating Gift */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <FaGift className="text-rose-600 text-[150px] mx-auto" />
          </motion.div>

          <h2 className="text-2xl font-bold text-rose-700 mt-8">
            A Special Surprise 🎁
          </h2>

          <p className="text-rose-600 mt-2">
            Click the gift to open
          </p>
        </motion.div>
      ) : (

        /* ================= OPENED SCREEN ================= */
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-10">

          {/* ================= LEFT SIDE - IMAGE ================= */}
          <motion.div
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 1,
            }}
            className="w-full md:w-1/2 flex flex-col items-center"
          >

            {/* Small Gift */}
            <motion.div
              initial={{
                scale: 1,
              }}
              animate={{
                scale: 0.65,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <FaGift className="text-rose-600 text-[100px] mb-6" />
            </motion.div>

            {/* Image Frame */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                x: -100,
                rotate: -8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                rotate: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                type: "spring",
                stiffness: 90,
              }}
              className="relative"
            >

              {/* Soft Glow */}
              <div className="absolute -inset-3 bg-white/60 rounded-3xl blur-md" />

              {/* Photo Frame */}
              <motion.div
                animate={{
                  rotate: [0, 1.5, -1.5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="relative bg-white p-4 pb-12 rounded-xl shadow-2xl"
              >
                <img
                  src={image}
                  alt="Birthday memory"
                  className="w-80 h-80 md:w-[390px] md:h-[390px] object-cover rounded-lg"
                />

                {/* Caption */}
                <p className="absolute bottom-3 left-0 right-0 text-center text-rose-600 font-bold text-lg">
                  My Chatar Patar 💗
                </p>
              </motion.div>

              {/* Floating Heart */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="absolute -top-6 -right-6 text-4xl"
              >
                💗
              </motion.div>

              {/* Floating Sparkle */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 20, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute -bottom-4 -left-5 text-3xl"
              >
                ✨
              </motion.div>
            </motion.div>
          </motion.div>


          {/* ================= RIGHT SIDE - MESSAGE ================= */}
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
              delay: 0.8,
            }}
            className="w-full md:w-1/2 flex flex-col items-center"
          >

            {/* Message Box */}
            <div className="w-full bg-white/60 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-xl">

              <h1 className="text-3xl md:text-4xl font-bold text-rose-600 mb-6">
                For My Chatar patar 💗
              </h1>

              <p className="text-lg md:text-xl text-rose-800 leading-relaxed">
                {text}
                <span className="animate-pulse">|</span>
              </p>

            </div>


            {/* ================= NEXT BUTTON ================= */}
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
                delay: 2,
              }}
              onClick={() => navigate("/page4")}
              className="mt-8 px-8 py-3 bg-rose-500 text-white font-bold rounded-full shadow-lg hover:bg-rose-600 hover:scale-105 transition"
            >
              Next Surprise 💝
            </motion.button>

          </motion.div>

        </div>
      )}
    </div>
  );
};

export default PageThree;