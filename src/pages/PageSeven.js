import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import image from "../imagess/WhatsApp Image 2026-09-25 at 01.33.24.jpeg";

const message =
  "ky msg du yad ni ara hai nind ara hai yar me milke deta hu message motki abhi ke liye happy birthday.";

const PageSeven = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-200 to-orange-100 flex items-center justify-center px-5 py-10 overflow-hidden">

      {/* ================= GIFT SCREEN ================= */}

      {!opened ? (
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
            duration: 0.8,
            type: "spring",
          }}
          onClick={openGift}
          className="text-center cursor-pointer"
        >

          {/* Floating Hearts */}

          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="text-4xl mb-4"
          >
            💗✨
          </motion.div>


          {/* Gift */}

          <motion.div
            animate={{
              y: [0, -18, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <FaGift className="text-rose-500 text-[140px] mx-auto" />
          </motion.div>


          <h2 className="text-3xl font-bold text-rose-600 mt-8">
            The Final Surprise 🎁
          </h2>

          <p className="text-rose-500 mt-3 text-lg">
            Open it motki 💗
          </p>

        </motion.div>
      ) : (

        /* ================= FINAL SCREEN ================= */

        <div className="w-full max-w-6xl">

          {/* ================= HEADING ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-rose-600">
              Happie Birthday Motki 🎂💗
            </h1>

            <p className="text-rose-500 mt-2">
              Okay... ab sach mein last hai 😂
            </p>
          </motion.div>


          {/* ================= MAIN CONTENT ================= */}

          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10">

            {/* ================= IMAGE ================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 100,
                rotate: 8,
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

              {/* Glow */}

              <div className="absolute -inset-5 bg-pink-300/50 blur-2xl rounded-full" />


              {/* Photo Frame */}

              <motion.div
                animate={{
                  rotate: [0, 1, -1, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="relative bg-white p-4 rounded-[2rem] shadow-2xl"
              >

                <img
                  src={image}
                  alt="Final birthday memory"
                  className="w-72 h-80 md:w-[390px] md:h-[430px] object-cover rounded-[1.5rem]"
                />


                {/* Caption */}

                <div className="absolute bottom-7 left-0 right-0 flex justify-center">
                  <span className="bg-white/95 px-6 py-2 rounded-full text-rose-600 font-bold shadow-md">
                    Alu ki bori💗
                  </span>
                </div>

              </motion.div>


              {/* Floating Heart */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="absolute -top-6 -right-6 text-5xl"
              >
                💕
              </motion.div>


              {/* Sparkle */}

              <motion.div
                animate={{
                  rotate: [0, 20, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute -bottom-5 -left-5 text-4xl"
              >
                ✨
              </motion.div>

            </motion.div>


            {/* ================= MESSAGE ================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -100,
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

              {/* Message Card */}

              <div className="relative bg-white/70 backdrop-blur-lg rounded-[2rem] p-7 md:p-10 shadow-2xl border border-white">

                {/* Decorative Heart */}

                <div className="absolute top-5 right-6 text-2xl">
                  💗
                </div>

                <div className="absolute bottom-5 right-6 text-xl">
                  ✨
                </div>


                <h2 className="text-3xl md:text-4xl font-bold text-rose-600 mb-6">
                  Alu ki bori ke liye 💌
                </h2>


                {/* Typewriter Message */}

                <p className="text-lg md:text-xl text-rose-900 leading-relaxed min-h-[160px]">
                  {text}
                  <span className="animate-pulse">|</span>
                </p>


                {/* Final Birthday Text */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 4,
                    duration: 0.8,
                  }}
                  className="mt-7 text-center"
                >

                  <p className="text-2xl font-bold text-rose-600">
                    Happy Birthday Motki 🎂💗
                  </p>

                </motion.div>

              </div>


              {/* ================= FINAL BUTTON ================= */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 5,
                }}
                className="flex justify-center mt-7"
              >

                <button
                  onClick={() => navigate("/")}
                  className="px-8 py-3 bg-rose-500 text-white font-bold rounded-full shadow-lg hover:bg-rose-600 hover:scale-105 transition duration-300"
                >
                  Start Again 💗
                </button>

              </motion.div>

            </motion.div>

          </div>
        </div>
      )}
    </div>
  );
};

export default PageSeven;