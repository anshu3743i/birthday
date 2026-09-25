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
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-pink-300 via-rose-200 to-yellow-100 px-4 sm:px-6">
      {opened &&
        sparkles.map((_, index) => (
          <motion.div
            key={index}
            className="pointer-events-none absolute text-base text-yellow-400 sm:text-xl"
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

      <div className="z-10 w-full max-w-4xl text-center">
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
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                onClick={openGift}
                className="inline-block cursor-pointer"
              >
                <FaGift className="mx-auto text-[100px] text-rose-600 drop-shadow-xl sm:text-[150px] md:text-[180px]" />
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-xl font-bold text-rose-700 sm:mt-8 sm:text-2xl md:text-3xl"
            >
              Tap the gift 🎁
            </motion.p>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
            }}
            className="flex w-full flex-col items-center"
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -8 }}
              animate={{
                scale: [0.5, 1.08, 1],
                rotate: 0,
              }}
              transition={{
                duration: 1.2,
                type: "spring",
                stiffness: 100,
              }}
              className="relative flex w-full justify-center px-2 sm:px-0"
            >
              <div className="absolute -inset-2 rounded-3xl bg-white/60 blur-md sm:-inset-3" />

              <img
                src={image}
                alt="Birthday memory"
                className="relative h-auto max-h-[55vh] w-auto max-w-[88vw] rounded-2xl border-4 border-white object-contain shadow-2xl sm:max-h-[400px] sm:max-w-[320px] sm:rounded-3xl sm:border-8 md:max-h-[450px] md:max-w-[384px]"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-3xl font-bold leading-tight text-rose-700 sm:mt-8 sm:text-4xl md:text-6xl"
            >
              Happy Birthday! 🎉
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-3 px-2 text-base font-semibold leading-relaxed text-rose-600 sm:mt-4 sm:text-xl md:text-2xl"
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