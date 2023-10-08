import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

export const Contact: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-col mt-1 lg:w-full w-full p-6 rounded-3xl">
        <div className="flex items-center flex-row gap-1 mb-5">
          <p className="lg:text-2xl text-xl font-bold">Contact</p>
          <div className="w-full h-[0.5px] bg-gray-200 dark:bg-gray-800 ml-3 mt-1"></div>
        </div>

        <Card className="flex flex-col w-full h-full cursor-pointer rounded-xl shadow-none">
          <CardHeader className="text-lg font-semibold">
            Get In Touch
          </CardHeader>
          <CardContent>
            My inbox is always open. Whether you have a question or just want to
            say hi, I will try my best to get back to you!
            <div className="flex mt-4 bg-gradient-to-r bg-clip-text text-transparent from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 underline">
              <Link
                href="mailto:janithravindu@gmail.com"
                className="mr-2"
                target="_blank"
              >
                Say Hello
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};
