import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { stopMusic } from "../music/music";

import image from "../imagess/WhatsApp Image 2026-09-25 at 20.31.39.jpeg";

const message =
  "hum sab ek dusre se bate krte rahe aur ek dusre ko samjahte rahe aur chahe zindagi kitni bhi badal jaye apne bonding ko kabbhi mt khone dena aur sayad yahi zindagi ko khubsurat aur jeene layak banati hai so once again with this quote Happy birthday aalu ki bori.";

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
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-100 via-pink-200 to-orange-100 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-10 overflow-x-hidden">
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
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="text-3xl sm:text-4xl mb-4"
          >
            💗✨
          </motion.div>

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
            <FaGift className="text-rose-500 text-[100px] sm:text-[140px] mx-auto" />
          </motion.div>

          <h2 className="text-2xl sm:text-3xl font-bold text-rose-600 mt-6 sm:mt-8">
            The Final Surprise 🎁
          </h2>

          <p className="text-rose-500 mt-2 sm:mt-3 text-base sm:text-lg">
            Open it motki 💗
          </p>
        </motion.div>
      ) : (
        <div className="w-full max-w-6xl">
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
            className="text-center mb-7 sm:mb-10"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-rose-600 leading-tight">
              Happie Birthday Motki 🎂💗
            </h1>

            <p className="text-sm sm:text-base text-rose-500 mt-2">
              Okay... ab sach mein last hai 😂
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 sm:gap-10 pb-8">
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
              className="relative w-full flex justify-center"
            >
              <div className="absolute -inset-4 sm:-inset-5 bg-pink-300/50 blur-2xl rounded-full" />

              <motion.div
                animate={{
                  rotate: [0, 1, -1, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="relative bg-white p-2.5 sm:p-4 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl"
              >
                <img
                  src={image}
                  alt="Final birthday memory"
                  className="w-[75vw] max-w-[320px] h-auto max-h-[55vh] sm:w-72 sm:max-h-[400px] md:w-[390px] md:max-h-[430px] object-contain rounded-[1rem] sm:rounded-[1.5rem]"
                />

                <div className="absolute bottom-5 sm:bottom-7 left-0 right-0 flex justify-center px-2">
                  <span className="bg-white/95 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-rose-600 text-sm sm:text-base font-bold shadow-md">
                    Alu ki bori💗
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="absolute -top-4 sm:-top-6 -right-2 sm:-right-6 text-3xl sm:text-5xl"
              >
                💕
              </motion.div>

              <motion.div
                animate={{
                  rotate: [0, 20, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute -bottom-4 sm:-bottom-5 -left-2 sm:-left-5 text-2xl sm:text-4xl"
              >
                ✨
              </motion.div>
            </motion.div>

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
              <div className="relative bg-white/70 backdrop-blur-lg rounded-2xl sm:rounded-[2rem] p-5 sm:p-7 md:p-10 shadow-2xl border border-white">
                <div className="absolute top-4 sm:top-5 right-4 sm:right-6 text-xl sm:text-2xl">
                  💗
                </div>

                <div className="absolute bottom-4 sm:bottom-5 right-4 sm:right-6 text-lg sm:text-xl">
                  ✨
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-600 mb-4 sm:mb-6">
                  Alu ki bori ke liye 💌
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-rose-900 leading-relaxed min-h-[140px] sm:min-h-[160px]">
                  {text}
                  <span className="animate-pulse">|</span>
                </p>

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
                  className="mt-6 sm:mt-7 text-center"
                >
                  <p className="text-xl sm:text-2xl font-bold text-rose-600">
                    Happy Birthday Motki 🎂💗
                  </p>
                </motion.div>
              </div>

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
                className="flex justify-center mt-5 sm:mt-7"
              >
                <button
onClick={() => {
  stopMusic();
  navigate("/");
}}                  className="px-6 sm:px-8 py-3 bg-rose-500 text-white text-sm sm:text-base font-bold rounded-full shadow-lg hover:bg-rose-600 hover:scale-105 transition duration-300"
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