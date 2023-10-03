"use client";

import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

const skills: string[] = [
  "React",
  "SignalR",
  "React Query",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "GraphQL",
  "Node.js",
];

export default function Header() {
  return (
    <div className="flex flex-col mt-4">
      <Card className="flex flex-col lg:items-start lg:flex-row lg:w-full items-center justify-center lg:justify-between lg:text-left text-center w-full p-6 rounded-3xl backdrop-blur-sm">
        <div className="flex flex-col gap-1 mb-5">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-3xl text-gray-400 font-medium">👋 ahoy! i am</p>
            <p className="lg:text-7xl text-5xl font-bold">janith silva.</p>
            <p className="lg:text-4xl text-2xl font-normal lg:mt-2">
              Frontend Engineer
            </p>

            <div className="flex lg:justify-start flex-wrap justify-center gap-1 mt-4">
              {skills.map((skill) => (
                <Badge variant="secondary" className="min-w-max">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            className="rounded-3xl"
            src="/header-image.jpg"
            objectFit="cover"
            width={300}
            height={200}
            alt="hero"
          />
        </motion.div>
      </Card>
      <div className="flex flex-col items-center text-center lg:text-left"></div>
    </div>
  );
}
