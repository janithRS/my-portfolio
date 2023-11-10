"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="flex flex-col mt-3 lg:items-start lg:flex-row lg:w-full items-center justify-center lg:justify-between lg:text-left text-center w-full pt-4 pb-2 rounded-3xl border-0">
      <div className="flex flex-col gap-1 mb-5">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-3xl text-gray-400 font-medium">👋 ahoy! i am</p>
          <p className="lg:text-7xl text-5xl font-bold">Janith Silva,</p>
          <p className="lg:text-4xl text-2xl font-normal lg:mt-2">
            a frontend engineer
          </p>
          <p className="lg:text-lg md text-sm text-gray-500 font-normal mt-2 ">
            and I make{" "}
            <span className="font-semibold text-white bg-gradient-to-r from-pink-500 to-yellow-500 px-1">
              solid frontend products
            </span>{" "}
            with amazing user experiences.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="absolute cursor-pointer w-60 h-60" />
        <Image
          className="rounded-3xl cursor-pointer"
          src="/header-image.jpg"
          objectFit="cover"
          width={240}
          height={240}
          alt="hero"
        />
      </motion.div>
    </div>
  );
}
