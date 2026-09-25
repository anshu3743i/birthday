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
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-300 via-rose-200 to-yellow-100 overflow-hidden relative px-4 sm:px-6">

      {opened &&
        sparkles.map((_, index) => (
          <motion.div
            key={index}
            className="absolute text-yellow-400 text-base sm:text-xl pointer-events-none"
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

      <div className="text-center z-10 w-full max-w-4xl">

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
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                onClick={openGift}
                className="cursor-pointer inline-block"
              >
                <FaGift
                  className="
                    text-rose-600
                    text-[100px]
                    sm:text-[150px]
                    md:text-[180px]
                    mx-auto
                    drop-shadow-xl
                  "
                />
              </motion.div>
            </motion.div>

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
                delay: 0.5,
              }}
              className="
                mt-6
                sm:mt-8
                text-xl
                sm:text-2xl
                md:text-3xl
                font-bold
                text-rose-700
              "
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
            className="flex flex-col items-center w-full"
          >
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
              className="relative w-full flex justify-center"
            >
              <div className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-white/60 blur-md" />

              <img
                src={image}
                alt="Birthday memory"
                className="
                  relative
                  w-[75vw]
                  h-[75vw]
                  max-w-[320px]
                  max-h-[320px]
                  sm:w-80
                  sm:h-80
                  md:w-96
                  md:h-96
                  object-cover
                  rounded-2xl
                  sm:rounded-3xl
                  border-4
                  sm:border-8
                  border-white
                  shadow-2xl
                "
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
              className="
                mt-6
                sm:mt-8
                text-3xl
                sm:text-4xl
                md:text-6xl
                font-bold
                text-rose-700
                leading-tight
              "
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
              className="
                mt-3
                sm:mt-4
                text-base
                sm:text-xl
                md:text-2xl
                font-semibold
                text-rose-600
                leading-relaxed
                px-2
              "
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